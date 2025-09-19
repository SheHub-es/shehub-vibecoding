const API_BASE_URL = import.meta.env.PROD 
  ? (import.meta.env.VITE_API_BASE_URL || "https://shehub.freeddns.org")
  : "https://shehub.freeddns.org";

export async function submitWaitlistForm(formData) {
  try {
    const applicantData = {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      mentor: formData.mentor || false,
      roles: ["APPLICANT"], 
      language: formData.language || 'ES'
    };
    
    const applicantResponse = await fetch(`${API_BASE_URL}/api/applicants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicantData),
    });

    if (!applicantResponse.ok) {
      let errorMessage = `HTTP error! status: ${applicantResponse.status}`;
      try {
        const responseText = await applicantResponse.text();
        console.error('Full error response text:', responseText);
        errorMessage += ` - Response: ${responseText}`;
      } catch (e) {
        console.error('Could not read response');
      }
      throw new Error(errorMessage);
    }

    const createdApplicant = await applicantResponse.json();
  
    const profileData = {
      linkedInProfile: 'https://linkedin.com/in/profile-pendiente',
      rolDeseado: formData.role, 
      motivacion: `Registro desde formulario web - ${formData.language || 'ES'}`,
      experiencia: '',
      disponibilidad: 'LT5',
      bootcamp: '',
      additionalData: {
        source: 'waitlist_form',
        utm_source: formData.utmSource,
        submitted_at: new Date().toISOString(),
        language: formData.language || 'ES'
      }
    };
    
    const profileResponse = await fetch(`${API_BASE_URL}/api/applicants/${createdApplicant.id}/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });

    if (!profileResponse.ok) {
      let errorMessage = `Profile creation error! status: ${profileResponse.status}`;
      try {
        const responseText = await profileResponse.text();
        console.error('Profile error response:', responseText);
        errorMessage += ` - Response: ${responseText}`;
      } catch (e) {
        console.error('Could not read profile response');
      }
      throw new Error(errorMessage);
    }

    const createdProfile = await profileResponse.json();

    return {
      applicant: createdApplicant,
      profile: createdProfile,
      success: true
    };

  } catch (error) {
    console.error('Error enviando formulario waitlist:', error);
    throw error;
  }
}

export async function checkEmailExists(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/applicants/exists?email=${encodeURIComponent(email)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error checking email:', error);
    throw error;
  }
}