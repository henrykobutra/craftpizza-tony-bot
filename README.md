# CraftPizza Bot (Tony)

A Next.js-based chatbot demo that handles pizza-related customer service inquiries. Built as part of the Natural Language Processing course at Houston Community College.

🔗 **[Try the live demo](https://craftpizza-tony-bot.vercel.app)**

## 🍕 Overview

CraftPizza Bot (Tony) is a pattern-matching chatbot that demonstrates basic natural language understanding for common pizza delivery complaints. The bot can handle various scenarios including:

- Late delivery complaints
- Wrong order/toppings issues
- Cold pizza complaints
- Missing items from orders

## 🚀 Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Lucide Icons
- Shadcn/UI Components

## 🛠️ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/henrykobutra/craftpizza-tony-bot.git
cd craftpizza-tony-bot
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤖 Features

- Simple pattern-matching response system
- Context-aware responses to avoid repetition
- Sample prompts for easy testing
- Message limit (7 messages) to demonstrate demo nature
- Responsive design with modern UI
- Markdown link parsing in bot responses

## 🎓 Educational Purpose

This project was developed as part of the Natural Language Processing course at Houston Community College under the guidance of Professor Machuria M. Johnson. It serves as a demonstration of basic chatbot functionality and pattern matching techniques.

## 🔧 Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/lib` - Utility functions and chat logic
- `/public` - Static assets

## 🔍 How It Works

### Core Chat Logic

The bot uses a simple pattern-matching system to identify complaint types and generate appropriate responses. Here's the basic structure:

```typescript
// Define message types
type Message = {
id: string;
content: string;
role: "user" | "assistant";
timestamp: Date;
};
// Track last responses to avoid repetition
type ComplaintCategory = "late delivery" | "wrong order" | "cold pizza" | "missing items";
type LastResponseTracker = {
[K in ComplaintCategory | "default"]: number;
};
// Keywords mapping for complaint detection
const complaintKeywords = {
"late delivery": ["late", "waiting", "delayed", "slow"],
"wrong order": ["wrong", "incorrect", "different", "mixed up"],
"cold pizza": ["cold", "not hot", "lukewarm"],
  "missing items": ["missing", "forgot", "didn't receive"],
};
```

### Response Generation

The bot matches user input against keywords and selects responses from predefined categories:

```typescript
function generateResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  // Check each complaint category
  for (const [category, keywords] of Object.entries(complaintKeywords)) {
    if (keywords.some(keyword => message.includes(keyword))) {
      return getResponseForCategory(category);
    }
  }
  
  return getDefaultResponse();
}
```

### Message Handling

Messages are managed using React state and displayed with context-aware styling:

```typescript
const [messages, setMessages] = useState<Message[]>([
  {
    id: "1",
    content: "🍕 Ciao! I'm Tony from CraftPizza...",
    role: "assistant",
    timestamp: new Date(),
  },
]);

const handleSend = (content: string) => {
  // Add user message
  const userMessage = {
    id: Date.now().toString(),
    content,
    role: "user",
    timestamp: new Date(),
  };
  setMessages(prev => [...prev, userMessage]);
  
  // Generate bot response
  setTimeout(() => {
    const botMessage = {
      id: (Date.now() + 1).toString(),
      content: generateResponse(content),
      role: "assistant",
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, botMessage]);
  }, 500);
};
```

## 🔧 Extending the Bot

### 1. Add New Complaint Categories

To add new types of complaints, extend the complaint keywords and responses:

```typescript
// Add new keywords
const complaintKeywords = {
  existing_categories...,
  "payment issues": ["refund", "charge", "payment", "bill"],
  "delivery area": ["location", "address", "deliver to", "zone"]
};

// Add corresponding responses
const complaints = {
  existing_responses...,
  "payment issues": [
    "I'll help you sort out the payment concern. Could you provide your order number?",
    "Let me look into that payment issue for you right away."
  ],
  "delivery area": [
    "I can check if your location is within our delivery zone. What's your address?",
    "Let me verify our delivery coverage for your area."
  ]
};
```

### 2. Enhance Response Logic

You can make responses more context-aware by tracking conversation history:

```typescript
type ConversationContext = {
  lastComplaintType: ComplaintCategory | null;
  mentionedOrderNumber: boolean;
  previousResponses: string[];
};

function generateResponse(
  message: string, 
  context: ConversationContext
): string {
  // Use context to generate more relevant responses
  if (context.lastComplaintType && !context.mentionedOrderNumber) {
    return "Could you provide your order number so I can help you better?";
  }
  // ... rest of response logic
}
```

### 3. Add Custom Response Formatting

The bot supports markdown-style links in responses. You can extend this to support more formatting:

```typescript
function renderContent(content: string) {
  // Current link parsing
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  
  // Add more formatting options
  const boldRegex = /\*\*([^\*]+)\*\*/g;
  const italicRegex = /\_([^\_]+)\_/g;
  
  // Apply formatting transformations
  return content
    .replace(linkRegex, '<a href="$2">$1</a>')
    .replace(boldRegex, '<strong>$1</strong>')
    .replace(italicRegex, '<em>$1</em>');
}
```

## 🎯 Future Enhancement Ideas

1. **Intent Recognition**: Implement more sophisticated NLP for better understanding
2. **Multi-turn Conversations**: Add proper context tracking for follow-up questions
3. **Order Integration**: Connect to a real order management system
4. **Sentiment Analysis**: Detect customer mood and adjust responses accordingly
5. **Multi-language Support**: Add response templates in different languages

## 👨‍💻 Developer

Created by [Varit (Henry) Kobutra](https://kobutra.com)

### Other Projects

- [Background Craft](https://backgroundcraft.com) - Digital agency
- [Resumo](https://resumo.cc) - AI-powered resume builder
- [Uncodename](https://uncodename.com) - Project codename generator

## 📄 License

MIT License - Feel free to use this code for educational purposes.

## 🔗 Links

- [GitHub Repository](https://github.com/henrykobutra/craftpizza-tony-bot)
- [Developer's Website](https://kobutra.com)
- [LinkedIn](https://linkedin.com/in/henrykobutra)
