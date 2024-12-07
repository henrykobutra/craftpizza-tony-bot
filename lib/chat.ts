export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

const complaints = {
  "late delivery": [
    "Hey there! Tony from CraftPizza here. I'm really sorry about the delay with your order. Could you share your order number? I'll personally look into what happened and make it right for you! 🕒",
    "I totally understand how frustrating waiting for your pizza can be. Let me check what's going on with your delivery right away. What's your order number? 🚚",
  ],
  "wrong order": [
    "Oh no! I'm really sorry about the mix-up with your order. Could you tell me what items were incorrect? I want to make sure you get exactly what you ordered! 🍕",
    "That's definitely not what you ordered! I apologize for the confusion. Can you confirm your order number and let me know what's different? I'll sort this out ASAP! 📝",
  ],
  "cold pizza": [
    "A cold pizza is absolutely not the CraftPizza experience we pride ourselves on. I'm so sorry about this! Let me arrange a fresh, hot replacement for you right away. 🔥",
    "I apologize that your pizza wasn't at the perfect temperature. That's totally on us! Would you like a fresh replacement or perhaps a refund? Your satisfaction is my top priority! ♨️",
  ],
  "missing items": [
    "I see we missed some items from your order - that's completely our fault! Could you let me know what's missing? I'll make sure to get those items to you ASAP! 📦",
    "Oh no! Sorry about the missing items! Can you provide your order number? I'll personally ensure the missing items are delivered to you right away! 🚗",
  ],
  default: [
    "Tony here! I'm all ears and ready to help make your CraftPizza experience amazing. What seems to be the issue? 👋",
    "Thanks for reaching out! I'm Tony, your dedicated pizza problem-solver. Could you tell me more about what's happening? 🤝",
  ],
};

export function generateResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  for (const [key, responses] of Object.entries(complaints)) {
    if (message.includes(key)) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }

  return complaints.default[
    Math.floor(Math.random() * complaints.default.length)
  ];
}
