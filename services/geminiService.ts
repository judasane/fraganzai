
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import type { FragranceProfile } from '../types';

// The API key is assumed to be available in the execution environment as per the setup.
// The check for process.env.API_KEY was removed as it causes a ReferenceError in the browser.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const fragranceSchema = {
  type: Type.OBJECT,
  properties: {
    fragranceName: {
      type: Type.STRING,
      description: "A creative and evocative name for the perfume, e.g., 'Starlight Whisper' or 'Urban Nomad'."
    },
    personalityTraits: {
      type: Type.ARRAY,
      description: "A list of 3-5 personality traits the fragrance embodies, based on the user's text.",
      items: { type: Type.STRING }
    },
    topNotes: {
      type: Type.ARRAY,
      description: "A list of 2-3 top notes for the fragrance.",
      items: { type: Type.STRING }
    },
    middleNotes: {
      type: Type.ARRAY,
      description: "A list of 2-3 middle (heart) notes for the fragrance.",
      items: { type: Type.STRING }
    },
    baseNotes: {
      type: Type.ARRAY,
      description: "A list of 2-3 base notes for the fragrance.",
      items: { type: Type.STRING }
    },
    story: {
      type: Type.STRING,
      description: "A short, poetic story or description (2-3 sentences) that captures the essence of the fragrance and connects with the user's input."
    }
  },
  required: ["fragranceName", "personalityTraits", "topNotes", "middleNotes", "baseNotes", "story"]
};

export const generateFragranceProfile = async (userInput: string): Promise<FragranceProfile> => {
  try {
    const prompt = `Based on the following user description, create a unique perfume profile. Analyze the text for personality, mood, and preferences to define the fragrance notes and its story. User description: "${userInput}"`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: fragranceSchema,
        temperature: 0.8,
        topP: 0.9,
      }
    });
    
    const text = response.text;
    if (!text) {
        throw new Error("API returned an empty response.");
    }

    // Sanitize the text by removing markdown backticks if present
    const cleanJsonText = text.replace(/```json\n?|```/g, '').trim();

    const profile = JSON.parse(cleanJsonText) as FragranceProfile;
    return profile;
  } catch (error) {
    console.error("Error generating fragrance profile:", error);
    throw new Error("Failed to generate fragrance profile. Please check your input or API key.");
  }
};
