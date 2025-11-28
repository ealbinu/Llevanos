import { GoogleGenAI, Type } from "@google/genai";
import { Event } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBlogContent = async (event: Event): Promise<{ title: string; content: string; tags: string[] }> => {
  const model = "gemini-2.5-flash"; // Fast and capable for text generation

  const prompt = `
    Escribe un artículo de blog atractivo y optimizado para SEO sobre el evento "${event.name}" que se llevará a cabo en ${event.city}, ${event.state} el ${event.date}.
    
    El público objetivo son jóvenes y adultos que viajan desde otras ciudades de México.
    
    Puntos clave a cubrir:
    1. Qué hace especial a este evento.
    2. Por qué vale la pena viajar para asistir.
    3. Menciona la importancia de un transporte seguro y cómodo (promociona sutilmente servicios de transporte privado/bus).
    4. Usa un tono emocionante y aventurero (siguiendo el tema de "Fuego, Agua, Aire, Tierra").
    
    Devuelve la respuesta EXCLUSIVAMENTE en formato JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Un título pegadizo para el post" },
            content: { type: Type.STRING, description: "El cuerpo del artículo (formato HTML simple, usar <p>, <h3>, <ul>)" },
            tags: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING }, 
              description: "5 etiquetas SEO relevantes" 
            }
          },
          required: ["title", "content", "tags"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No se generó texto");

    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating blog post:", error);
    throw error;
  }
};