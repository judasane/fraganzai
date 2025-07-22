
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
    },
    recipe: {
      type: Type.OBJECT,
      description: "A recipe for the perfume based on a total of 20 drops of essential oils.",
      properties: {
        essentialOils: {
          type: Type.OBJECT,
          description: "A dictionary of essential oils and their corresponding drop counts.",
          properties: {
            bergamot: { type: Type.NUMBER },
            lemon: { type: Type.NUMBER },
            neroli: { type: Type.NUMBER },
            rose: { type: Type.NUMBER },
            jasmine: { type: Type.NUMBER },
            ylangYlang: { type: Type.NUMBER },
            sandalwood: { type: Type.NUMBER },
            cedarwood: { type: Type.NUMBER },
            frankincense: { type: Type.NUMBER },
            vetiver: { type: Type.NUMBER },
            patchouli: { type: Type.NUMBER },
            lavender: { type: Type.NUMBER },
            chamomile: { type: Type.NUMBER },
            peppermint: { type: Type.NUMBER },
            eucalyptus: { type: Type.NUMBER },
            teaTree: { type: Type.NUMBER },
            rosemary: { type: Type.NUMBER },
            clarySage: { type: Type.NUMBER },
            geranium: { type: Type.NUMBER },
            ginger: { type: Type.NUMBER },
          }
        },
        totalDrops: {
          type: Type.NUMBER,
          description: "The total number of drops in the recipe, which should be 20."
        }
      },
      required: ["essentialOils", "totalDrops"]
    }
  },
  required: ["fragranceName", "personalityTraits", "topNotes", "middleNotes", "baseNotes", "story", "recipe"]
};

export const generateFragranceProfile = async (userInput: string | Record<string, string>): Promise<FragranceProfile> => {
  try {
    const prompt = typeof userInput === 'string'
      ? `Based on the following user description, create a unique perfume profile. Analyze the text for personality, mood, and preferences to define the fragrance notes and its story. User description: "${userInput}"`
      : `Based on the following quiz answers, create a unique perfume profile. Analyze the answers for personality, mood, and preferences to define the fragrance notes, its story, and a recipe. Quiz answers: ${JSON.stringify(userInput)}`;

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
