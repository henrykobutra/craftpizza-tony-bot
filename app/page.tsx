"use client";

import { Button } from "@/components/ui/button";
import { ChatHeader } from "@/components/chat-header";
import { ChatInput } from "@/components/chat-input";
import { ChatMessage } from "@/components/chat-message";
import { SamplePrompts } from "@/components/sample-prompts";
import { Message, generateResponse } from "@/lib/chat";
import { RotateCcw } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "🍕 Ciao! I'm Tony from CraftPizza, and I'm here to make sure you have the best pizza experience! How can I help you today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);

  const handleSend = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(content),
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "1",
        content:
          "🍕 Ciao! I'm Tony from CraftPizza, and I'm here to make sure you have the best pizza experience! How can I help you today?",
        role: "assistant",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <ChatHeader />

      <div className="mx-auto w-full max-w-2xl flex-1 bg-white shadow-lg">
        <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
          <h2 className="text-sm font-medium">Chat with Tony</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-muted-foreground hover:text-foreground">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset Chat
          </Button>
        </div>

        <div className="flex h-[calc(100vh-300px)] flex-col">
          <div className="flex-1 overflow-y-auto">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>

          <div className="border-t">
            <SamplePrompts onSelectPrompt={handleSend} />
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      </div>
    </div>
  );
}
