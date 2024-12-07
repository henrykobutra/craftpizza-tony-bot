"use client";

import { Pizza } from "lucide-react";

export function ChatHeader() {
  return (
    <div className="relative border-b bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-2">
          <Pizza className="h-8 w-8" />
          <h1 className="text-2xl font-bold">CraftPizza Bot</h1>
        </div>
        <p className="mt-2 text-sm text-orange-100">
          Your virtual pizza concierge, Tony, is here to help!
        </p>
      </div>
      <div className="mt-4 text-center text-xs text-orange-100">
        <p>
          Created by{" "}
          <a
            href="https://kobutra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white">
            Varit Kobutra
          </a>{" "}
          for{" "}
          <a
            href="https://hccs.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white">
            HCCS
          </a>{" "}
          NLP class (Prof. Machuria M. Johnson)
        </p>
      </div>
    </div>
  );
}
