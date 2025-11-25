import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// System instruction to guide the AI's behavior
const SYSTEM_INSTRUCTION = `
Eres el Asistente de Sueño Virtual de MAyK. Tu objetivo es ayudar a los clientes potenciales a entender los beneficios de la Almohada Ergonómica MAyK.
Información del producto:
- Nombre: Almohada Ergonómica MAyK
- Material: Espuma viscoelástica (Memory Foam) de alta densidad.
- Beneficios clave: Alineación perfecta de columna, caderas y rodillas. Alivio de dolor de ciática y espalda. Transpirable y fresca.
- Ideal para: Embarazadas, atletas, personas con ciática, y quienes duermen de lado.
- Oferta: Oferta de lanzamiento + Envío Rápido.

Tono: Empático, profesional, relajante y servicial.
Instrucciones:
1. Responde preguntas sobre problemas de sueño (dolor de espalda, cadera) sugiriendo cómo la almohada MAyK ayuda.
2. Sé conciso.
3. Si te preguntan el precio, invítalos a hacer clic en el botón "Comprar ahora" para ver la oferta actual.
`;

export const sendMessageToGemini = async (
  message: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!API_KEY) {
    console.warn("API Key not found. Returning mock response.");
    return "Lo siento, mi conexión con el servidor de sueño está interrumpida (Falta API Key). Por favor intenta más tarde o contacta soporte.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // We maintain a stateless chat for this simple implementation or reconstruct context
    // Ideally, utilize ai.chats.create if maintaining a long session object.
    // Here we will use generateContent with system instruction for single-turn logic 
    // tailored to the specific query, but to simulate chat, we should use the Chat API.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history // Pass previous context
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Disculpa, no entendí bien tu pregunta. ¿Podrías reformularla?";

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Hubo un error momentáneo al procesar tu consulta. Por favor intenta de nuevo.";
  }
};
