"use client";

import { Message } from "@/lib/chat";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import Link from "next/link";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  // Helper function to parse and render content with links
  const renderContent = (content: string) => {
    // Regular expression to match markdown-style links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(content.slice(lastIndex, match.index));
      }
      // Add the link component
      parts.push(
        <Link
          key={match.index}
          href={match[2]}
          className="text-primary hover:underline">
          {match[1]}
        </Link>,
      );
      lastIndex = match.index + match[0].length;
    }
    // Add remaining text after last link
    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }

    return parts.length > 0 ? parts : content;
  };

  return (
    <div
      className={cn(
        "flex w-full items-start gap-4 p-4",
        message.role === "assistant" ? "bg-muted/50" : "bg-background",
      )}>
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow">
        {message.role === "assistant" ? (
          <Bot className="h-4 w-4" />
        ) : (
          <User className="h-4 w-4" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm">{renderContent(message.content)}</p>
        <p className="text-xs text-muted-foreground">
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
