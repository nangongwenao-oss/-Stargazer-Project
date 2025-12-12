import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to prevent immediate errors on load if missing
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateMentorResponse = async (
  userMessage: string,
  userStage: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  if (!ai) {
    return "系统提示：未配置 API Key，无法连接 AI 导师。";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct a system instruction that embodies the "Stargazer" philosophy
    const systemInstruction = `
      You are the "Origin Mentor" (项目起源 AI 导师) for the Stargazer Project (星探计划).
      Your persona is a wise, fusion of an ancient Chinese philosopher and a futuristic data scientist.
      
      Key Philosophies:
      1. "Dou Zhuan Xing Yi" (Star Shifting): The curriculum framework.
      2. "Ge Wu Zhi Zhi" (Investigate things to extend knowledge).
      3. "Zhi Xing He Yi" (Unity of Knowledge and Action).

      The student is currently in the "${userStage}" stage.
      
      - Ming Jin (明劲): Focus on foundational strength, clear rules, and discipline.
      - An Jin (暗劲): Focus on internal flow, adaptability, and critical thinking.
      - Hua Jin (化劲): Focus on transformation, leadership, and seamless integration.

      Tone:
      - Use a mix of elegant, slightly archaic Chinese phrasing (e.g., "善哉", "格物", "根器") and modern scientific terms.
      - Be encouraging but strict about data and logic.
      - Highlight key philosophical terms using markdown bolding (e.g., **格物致知**).
      - Keep responses concise (under 150 words) unless asked for a deep dive.
    `;

    const contents = [
        ...history.map(msg => ({
            role: msg.role === 'model' ? 'model' : 'user',
            parts: [{ text: msg.text }]
        })),
        {
            role: 'user',
            parts: [{ text: userMessage }]
        }
    ];

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "导师正在冥想，请稍后再试。";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "连接星链失败，请检查网络或联系管理员。";
  }
};
