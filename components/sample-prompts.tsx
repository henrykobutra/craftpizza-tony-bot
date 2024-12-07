"use client";

import { Button } from "@/components/ui/button";

interface SamplePromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

export function SamplePrompts({ onSelectPrompt }: SamplePromptsProps) {
  const prompts = [
    "My pizza arrived 30 minutes late!",
    "The toppings are different from what I ordered",
    "My pizza is cold and the cheese is hard",
    "They forgot my garlic bread",
  ];

  return (
    <div className="space-y-2 p-4">
      <p className="text-sm text-muted-foreground">
        Try these example complaints:
      </p>
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt) => (
          <Button
            key={prompt}
            variant="outline"
            size="sm"
            onClick={() => onSelectPrompt(prompt)}
            className="text-xs">
            {prompt}
          </Button>
        ))}
      </div>
    </div>
  );
}
