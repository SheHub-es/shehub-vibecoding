import { submitWaitlistForm } from '../lib/api.js';

// Datos de prueba
const testData = {
  email: "test@shehub.com",
  firstName: "Test",
  lastName: "User",
  mentor: false,
  roles: ["Frontend Developer"],
  language: "ES"
};

// Función de prueba
async function testConnection() {
  try {
    console.log('🧪 Probando conexión al backend...');
    const result = await submitWaitlistForm(testData);
    console.log('✅ ¡Conexión exitosa!', result);
    console.log('🎉 Todo listo para que Jess trabaje en el formulario');
  } catch (error) {
    console.error('❌ Error en la conexión:', error);
  }
}

testConnection();

// verifica con este enlace para comprobar que funciona :https://shehub-admin-core.vercel.app/applicants 