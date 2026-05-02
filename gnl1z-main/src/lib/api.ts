import { DetectedTag } from "@/types/dcs";

const SYSTEM_PROMPT = `Tu es un expert DCS. Extrais TOUS les tags d'instruments visibles.
Retourne UNIQUEMENT un tableau JSON avec: tag, type, description, value, confidence.`;

export async function detectTagsWithCloudflare(
  imageBase64: string
): Promise<DetectedTag[]> {
  // Use Cloudflare Workers AI (free tier)
  const response = await fetch(
    "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/ai/run/@cf/meta/llama-3.2-11b-vision-instruct",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_CLOUDFLARE_API_TOKEN",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: [
              { type: "image", image: { format: "png", base64: imageBase64 } },
              { type: "text", text: SYSTEM_PROMPT }
            ]
          }
        ]
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Erreur Cloudflare AI: ${response.status}`);
  }

  const data = await response.json();
  const content = data.result?.response || "";
  
  const jsonMatch = content.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error("Format de réponse inattendu");
  }

  return JSON.parse(jsonMatch[0]) as DetectedTag[];
}

// Fallback: mock mode when no API key
export async function detectTagsWithClaude(
  imageBase64: string,
  mediaType: string = "image/png"
): Promise<DetectedTag[]> {
  // Check if Cloudflare credentials exist
  const cfToken = import.meta.env.VITE_CLOUDFLARE_API_TOKEN;
  
  if (cfToken) {
    return detectTagsWithCloudflare(imageBase64);
  }
  
  // MOCK MODE: Return demo tags without API call
  return [
    { tag: "PT-100A", type: "PT", description: "Pression suction (MOCK)", value: "4.2 bar", confidence: "high" },
    { tag: "TT-100A", type: "TT", description: "Température suction (MOCK)", value: "35 °C", confidence: "high" },
    { tag: "FCV-100A", type: "FCV", description: "Vanne régulation (MOCK)", value: "62 %", confidence: "medium" },
  ];
}
