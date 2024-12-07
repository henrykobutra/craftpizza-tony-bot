"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export function ChatInput({ onSend, isLoading, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !disabled) {
        onSend(input);
        setInput("");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-end gap-2 p-4">
        <Textarea
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          className="resize-none"
          disabled={disabled}
        />
        <Button type="submit" size="icon" disabled={isLoading || disabled}>
          <SendHorizontal className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
      {disabled && (
        <div className="flex justify-between items-center px-4 -mt-2">
          <p className="text-orange-500 text-sm">
            Sorry, message limit reached. Please reset the chat to continue.
          </p>
          <a
            href="/about"
            className="text-sm text-muted-foreground hover:underline">
            Learn more about this bot →
          </a>
        </div>
      )}
    </div>
  );
}
