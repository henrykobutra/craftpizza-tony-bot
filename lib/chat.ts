export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

// Add this type above the complaints object
type ComplaintCategory = keyof typeof complaints;

// Add this type and variable above the complaints object
type LastResponseTracker = {
  [K in ComplaintCategory | "default"]: number;
};

const lastResponseIndices: LastResponseTracker = {
  "late delivery": -1,
  "wrong order": -1,
  "cold pizza": -1,
  "missing items": -1,
  default: -1,
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
    "I'm a preview bot built for an NLP class project, and I'm specifically trained to handle common pizza delivery complaints. Your message seems to be about something else. Check out the [about](/about) page to learn more about how I work! 🤖",
    "Thanks for your message! I'm a demo bot focused on pizza delivery issues. I don't seem to recognize your query type. Visit the [about](/about) page to see what kinds of complaints I can help with! 🍕",
    "Beep boop! I'm a class project bot with limited capabilities. I can only handle specific pizza-related complaints right now. Feel free to visit the [about](/about) page to learn more about my purpose and limitations! 🎓",
    "I'm still learning! As a demo bot, I'm currently trained only on pizza delivery complaints. Your message seems to be about something else. Check the [about](/about) page to see what I can do! 🚀",
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
      const categoryKey = category as ComplaintCategory;
      const responses = complaints[categoryKey];

      // Get a different random index than the last one used
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * responses.length);
      } while (
        newIndex === lastResponseIndices[categoryKey] &&
        responses.length > 1
      );

      // Update the last response index and return the response
      lastResponseIndices[categoryKey] = newIndex;
      return responses[newIndex];
    }
  }

  // Handle default case with the same logic
  const defaultResponses = complaints.default;
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * defaultResponses.length);
  } while (
    newIndex === lastResponseIndices.default &&
    defaultResponses.length > 1
  );

  lastResponseIndices.default = newIndex;
  return defaultResponses[newIndex];
}
