const API_BASE_URL = import.meta.env.VITE_CORE_API_URL || 'https://shehub.freeddns.org';

export async function submitWaitlistForm(formData) {
  try {
    const applicantData = {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      mentor: formData.mentor || false,
      roles: Array.isArray(formData.roles) ? formData.roles : [formData.roles],
      language: formData.language || 'ES'
    };

    const response = await fetch(`${API_BASE_URL}/api/applicants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    
      },
      body: JSON.stringify(applicantData),
    });

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        
      }
      throw new Error(errorMessage);
    }

    return await response.json();

  } catch (error) {
    console.error('❌ Error enviando formulario waitlist:', error);
    throw error;
  }
}