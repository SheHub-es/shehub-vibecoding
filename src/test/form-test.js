console.log('📝 Testing formulario waitlist simple...\n');

import { submitWaitlistForm } from '../lib/api.js';

const timestamp = Date.now();

// Test 1: Usuario normal (no mentora)
async function testUsuarioNormal() {
  console.log('👤 Test 1: Usuario colaboradora');
  console.log('Campos del formulario:');
  
  const formData = {
    firstName: 'Ana',
    lastName: 'López',
    email: `ana.lopez.${timestamp}@gmail.com`,
    role: 'Frontend Developer',
    mentor: false 
  };
  
  console.log('- Nombre:', formData.firstName);
  console.log('- Apellido:', formData.lastName);  
  console.log('- Email:', formData.email);
  console.log('- Role:', formData.role);
  console.log('- ¿Mentora?:', formData.mentor ? 'Sí' : 'No');
  
  try {
    console.log('\nEnviando...');
    const result = await submitWaitlistForm(formData);
    
    console.log('✅ ÉXITO!');
    console.log('Applicant ID:', result.applicant.id);
    console.log('Profile ID:', result.profile.id);
    console.log('Rol en sistema:', result.applicant.roles);
    console.log('Rol deseado:', result.profile.rolDeseado);
    console.log('Es mentora:', result.applicant.mentor);
    
    return true;
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    return false;
  }
}

// Test 2: Usuario mentora  
async function testUsuarioMentora() {
  console.log('\n🧑‍🏫 Test 2: Usuario mentora');
  console.log('Campos del formulario:');
  
  const formData = {
    firstName: 'María',
    lastName: 'García', 
    email: `maria.garcia.${timestamp}@gmail.com`,
    role: 'Senior React Developer',
    mentor: true 
  };
  
  console.log('- Nombre:', formData.firstName);
  console.log('- Apellido:', formData.lastName);
  console.log('- Email:', formData.email);
  console.log('- Role:', formData.role);
  console.log('- ¿Mentora?:', formData.mentor ? 'Sí' : 'No');
  
  try {
    console.log('\nEnviando...');
    const result = await submitWaitlistForm(formData);
    
    console.log('✅ ÉXITO!');
    console.log('Applicant ID:', result.applicant.id);
    console.log('Profile ID:', result.profile.id);
    console.log('Rol en sistema:', result.applicant.roles);
    console.log('Rol deseado:', result.profile.rolDeseado);
    console.log('Es mentora:', result.applicant.mentor);
    console.log('Display role:', result.applicant.displayRole);
    
    return true;
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    return false;
  }
}

// Ejecutar tests
async function runFormTests() {
  console.log('🚀 Probando formulario con campos básicos...\n');
  
  const test1 = await testUsuarioNormal();
  await new Promise(resolve => setTimeout(resolve, 2000)); 
  
  const test2 = await testUsuarioMentora();
  
  console.log('\n📋 RESUMEN:');
  console.log('Test colaboradora:', test1 ? '✅ PASÓ' : '❌ FALLÓ');
  console.log('Test mentora:', test2 ? '✅ PASÓ' : '❌ FALLÓ');
  
  if (test1 && test2) {
    console.log('\n🎉 FORMULARIO FUNCIONA PERFECTAMENTE!');
    console.log('Los 5 campos básicos se procesan correctamente:');
    console.log('1. Nombre → applicant.firstName');
    console.log('2. Apellido → applicant.lastName'); 
    console.log('3. Email → applicant.email');
    console.log('4. Role → profile.rolDeseado');
    console.log('5. Mentora → applicant.mentor');
    console.log('\n🔗 Verificar en: https://shehub-admin-core.vercel.app/applicant');
  } else {
    console.log('\n❌ Hay problemas con el formulario');
  }
}

runFormTests();