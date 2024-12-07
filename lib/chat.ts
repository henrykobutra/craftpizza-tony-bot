export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

// Add this type above the complaints object
type ComplaintCategory = keyof typeof complaints;

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
    "I'm a preview bot built for an NLP class project, and I'm specifically trained to handle common pizza delivery complaints. Your message seems to be about something else. Check out /about to learn more about how I work! 🤖",
    "Thanks for your message! I'm a demo bot focused on pizza delivery issues. I don't seem to recognize your query type. Visit /about to see what kinds of complaints I can help with! 🍕",
    "Beep boop! I'm a class project bot with limited capabilities. I can only handle specific pizza-related complaints right now. Feel free to visit /about to learn more about my purpose and limitations! 🎓",
    "I'm still learning! As a demo bot, I'm currently trained only on pizza delivery complaints. Your message seems to be about something else. Check /about to see what I can do! 🚀",
  ],
};

export function generateResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  // Keywords mapping for better inference
  const complaintKeywords = {
    "late delivery": [
      "late",
      "waiting",
      "delayed",
      "slow",
      "where",
      "taking long",
      "not here",
    ],
    "wrong order": [
      "wrong",
      "incorrect",
      "different",
      "not what",
      "mistake",
      "mixed up",
    ],
    "cold pizza": [
      "cold",
      "not hot",
      "lukewarm",
      "temperature",
      "warm",
      "heated",
    ],
    "missing items": [
      "missing",
      "forgot",
      "didn't receive",
      "not included",
      "left out",
      "where is",
    ],
  };

  // Check each complaint category
  for (const [category, keywords] of Object.entries(complaintKeywords)) {
    if (keywords.some((keyword) => message.includes(keyword))) {
      return complaints[category as ComplaintCategory][
        Math.floor(
          Math.random() * complaints[category as ComplaintCategory].length,
        )
      ];
    }
  }

  // If no specific complaint is detected, return default response
  return complaints.default[
    Math.floor(Math.random() * complaints.default.length)
  ];
}
