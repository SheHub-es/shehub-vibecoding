console.log('🔍 Iniciando test de diagnóstico...');

const timestamp = Date.now();

async function testBasicConnection() {
  console.log('🌐 Testing basic connection...');
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://shehub.freeddns.org';
  console.log('API URL:', API_BASE_URL);
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/applicants/health`);
    console.log('Health check status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('Health check data:', data);
    } else {
      console.log('Health check failed with status:', response.status);
    }
  } catch (error) {
    console.error('Health check error:', error.message);
  }
}

// Test manual de creación
async function testManualCreation() {
  console.log('\n📋 Testing manual applicant creation...');
  
  const API_BASE_URL = 'https://shehub.freeddns.org';
  
  // Datos ficticios únicos
  const applicantData = {
    email: `test-${timestamp}@shehub.com`,
    firstName: "Ana",
    lastName: "García",
    mentor: false,
    roles: ['APPLICANT'],
    language: 'ES'
  };
  
  console.log('Sending applicant data:', JSON.stringify(applicantData, null, 2));
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/applicants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicantData),
    });
    
    console.log('Applicant response status:', response.status);
    
    if (response.ok) {
      const createdApplicant = await response.json();
      console.log('✅ Applicant created:', createdApplicant);
      
      // Now test profile creation
      await testProfileCreation(createdApplicant.id);
      
    } else {
      console.log('❌ Applicant creation failed');
      const errorText = await response.text();
      console.log('Error response:', errorText);
    }
    
  } catch (error) {
    console.error('❌ Applicant creation error:', error);
  }
}

async function testProfileCreation(applicantId) {
  console.log(`\n👤 Testing profile creation for applicant ID: ${applicantId}`);
  
  const API_BASE_URL = 'https://shehub.freeddns.org';
  
  // Datos ficticios completos del profile
  const profileData = {
    linkedInProfile: 'https://linkedin.com/in/ana-garcia-dev',
    githubProfile: null,
    rolDeseado: 'Frontend Developer',
    motivacion: 'Quiero crecer profesionalmente en el desarrollo web y contribuir a proyectos que impacten positivamente.',
    experiencia: 'Bootcamp de desarrollo web completado, trabajando en proyectos personales con React y JavaScript.',
    disponibilidad: 'B5_10', 
    bootcamp: 'IronHack Madrid 2024',
    extraField1: null,
    extraField2: null,
    extraField3: null,
    extraField4: null,
    extraField5: null,
    additionalData: {
      source: 'waitlist_form_test',
      timestamp: new Date().toISOString(),
      mentor_flag: false,
      utm_source: 'test_campaign',
      language: 'ES'
    }
  };
  
  console.log('Sending profile data:', JSON.stringify(profileData, null, 2));
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/applicants/${applicantId}/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });
    
    console.log('Profile response status:', response.status);
    console.log('Profile response headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      const createdProfile = await response.json();
      console.log('✅ Profile created successfully:', createdProfile);
      
      console.log('\n🎯 VERIFICACIÓN DE MAPEO:');
      console.log('✓ rolDeseado:', createdProfile.rolDeseado);
      console.log('✓ disponibilidad:', createdProfile.disponibilidad);
      console.log('✓ linkedInProfile:', createdProfile.linkedInProfile);
      console.log('✓ additionalData:', createdProfile.additionalData);
      
    } else {
      console.log('❌ Profile creation failed');
      
      const contentType = response.headers.get('content-type');
      console.log('Error content-type:', contentType);
      
      if (contentType && contentType.includes('application/json')) {
        try {
          const errorData = await response.json();
          console.log('Error JSON data:', JSON.stringify(errorData, null, 2));
          
          // Check for validation errors specifically
          if (errorData.validationErrors) {
            console.log('🔍 Validation errors found:', errorData.validationErrors);
          }
          if (errorData.message) {
            console.log('🔍 Error message:', errorData.message);
          }
          
        } catch (e) {
          console.log('Could not parse error as JSON');
        }
      } else {
        const errorText = await response.text();
        console.log('Error text response:', errorText);
      }
    }
    
  } catch (error) {
    console.error('❌ Profile creation error:', error);
  }
}


async function testMentorCreation() {
  console.log('\n🧑‍🏫 Testing mentor applicant creation...');
  
  const API_BASE_URL = 'https://shehub.freeddns.org';
  
  const mentorData = {
    email: `mentor-${timestamp}@shehub.com`,
    firstName: "María",
    lastName: "Rodríguez",
    mentor: true,
    roles: ['APPLICANT'],
    language: 'ES'
  };
  
  console.log('Sending mentor data:', JSON.stringify(mentorData, null, 2));
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/applicants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mentorData),
    });
    
    if (response.ok) {
      const createdMentor = await response.json();
      console.log('✅ Mentor applicant created:', createdMentor);
      
      const mentorProfileData = {
        linkedInProfile: 'https://linkedin.com/in/maria-rodriguez-senior-dev',
        githubProfile: 'https://github.com/maria-rodriguez',
        rolDeseado: 'Senior Full Stack Developer',
        motivacion: 'Quiero compartir mi experiencia ayudando a otras desarrolladoras a crecer en su carrera tecnológica.',
        experiencia: '8 años de experiencia en desarrollo web, liderando equipos y proyectos de gran escala.',
        disponibilidad: 'B10_15', 
        bootcamp: '',
        extraField1: 'Especialista en React y Node.js',
        extraField2: null,
        extraField3: null,
        extraField4: null,
        extraField5: null,
        additionalData: {
          source: 'waitlist_form_test',
          timestamp: new Date().toISOString(),
          mentor_flag: true,
          utm_source: 'mentor_campaign',
          language: 'ES',
          seniority: 'senior'
        }
      };
      
      const profileResponse = await fetch(`${API_BASE_URL}/api/applicants/${createdMentor.id}/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mentorProfileData),
      });
      
      if (profileResponse.ok) {
        const mentorProfile = await profileResponse.json();
        console.log('✅ Mentor profile created:', mentorProfile);
      } else {
        console.log('❌ Mentor profile creation failed');
        const errorText = await profileResponse.text();
        console.log('Error:', errorText);
      }
      
    } else {
      console.log('❌ Mentor creation failed');
      const errorText = await response.text();
      console.log('Error response:', errorText);
    }
    
  } catch (error) {
    console.error('❌ Mentor creation error:', error);
  }
}

// Test import
async function testImport() {
  console.log('\n📦 Testing imports...');
  
  try {
    
    const paths = [
      '../lib/api.js',
      './lib/api.js', 
      '../src/lib/api.js',
      './src/lib/api.js'
    ];
    
    for (const path of paths) {
      try {
        console.log(`Trying import from: ${path}`);
        const module = await import(path);
        console.log('✅ Import successful from:', path);
        console.log('Available exports:', Object.keys(module));
        return module;
      } catch (err) {
        console.log(`❌ Import failed from ${path}:`, err.message);
      }
    }
  } catch (error) {
    console.error('Import test failed:', error);
  }
}

// Run all tests
async function runDiagnostics() {
  console.log(`🚀 Starting diagnostics with timestamp: ${timestamp}\n`);
  
  await testBasicConnection();
  await testManualCreation();
  
  // Wait a bit before testing mentor
  console.log('\n⏳ Waiting 2 seconds before mentor test...');
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  await testMentorCreation();
  await testImport();
  
  console.log('\n🏁 Diagnostics completed!');
  console.log('🔗 Verificar datos en: https://shehub-admin-core.vercel.app/applicant');
  console.log('📊 Deberías ver 2 nuevos applicants con profiles:');
  console.log(`  - Ana García (test-${timestamp}@shehub.com) - Colaboradora`);
  console.log(`  - María Rodríguez (mentor-${timestamp}@shehub.com) - Mentora`);
}

runDiagnostics().catch(console.error);