export async function submitWaitlistForm(formData) {
  try {
    // Step 1: Crear Applicant con rol de sistema FIJO
    const applicantData = {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      mentor: formData.mentor || false,
      roles: ["APPLICANT"], // ← SIEMPRE rol fijo del sistema
      language: formData.language || 'ES'
    };

    console.log('Creating applicant with data:', applicantData);
    
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
    console.log('Applicant created successfully:', createdApplicant);

    // Step 2: Crear ApplicantProfile con rol deseado del formulario
    const profileData = {
      linkedInProfile: 'https://linkedin.com/in/profile-pendiente',
      rolDeseado: formData.role, // ← AQUÍ va el rol del formulario
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

    console.log('Creating profile for applicant ID:', createdApplicant.id);
    
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
    console.log('Profile created successfully:', createdProfile);

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