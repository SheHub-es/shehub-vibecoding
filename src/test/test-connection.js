import { submitWaitlistForm } from "@/lib/api.js";

const testData = {
  email: "test-jess@shehub.com",
  firstName: "Test",
  lastName: "User",
  mentor: false,
  roles: ["Frontend Developer"],
  language: "ES",
};

async function testConnection() {
  try {
    console.log("🧪 Probando conexión al backend...");
    const result = await submitWaitlistForm(testData);
    console.log("✅ ¡Conexión exitosa!", result);
    console.log("🎉 Todo listo para que Jess trabaje en el formulario");
  } catch (error) {
    console.error("❌ Error en la conexión:", error);
  }
}

testConnection();
