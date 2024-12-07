import Link from "next/link";
import { Pizza, Github, Linkedin, Globe, ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative border-b bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <Pizza className="h-8 w-8" />
            <h1 className="text-2xl font-bold">About CraftPizza Bot</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Back to Chat
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">Project Overview</h2>
          <p className="mb-4">
            CraftPizza Bot (Tony) is a simple pattern-matching chatbot developed
            as part of the Natural Language Processing course at Houston
            Community College, under the guidance of Professor Machuria M.
            Johnson.
          </p>

          <h2 className="mb-4 text-xl font-bold">How It Works</h2>
          <p className="mb-4">
            This is a basic demonstration bot that can respond to common
            pizza-related complaints. Try these types of messages:
          </p>
          <ul className="mb-4 list-disc pl-6">
            <li>Late delivery complaints</li>
            <li>Wrong order or toppings</li>
            <li>Cold pizza complaints</li>
            <li>Missing items from order</li>
          </ul>

          <h2 className="mb-4 text-xl font-bold">Technical Stack</h2>
          <p className="mb-4">Built using:</p>
          <ul className="mb-4 list-disc pl-6">
            <li>Next.js 15</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Simple keyword matching for responses</li>
          </ul>

          <h2 className="mb-4 text-xl font-bold">Features</h2>
          <ul className="mb-4 list-disc pl-6">
            <li>Handles common pizza delivery complaints</li>
            <li>Natural language understanding for customer queries</li>
            <li>Context-aware responses</li>
            <li>Sample prompts for easy testing</li>
          </ul>

          <h2 className="mb-4 text-xl font-bold">About the Developer</h2>
          <p className="mb-4">
            Hi! I&apos;m Varit (Henry) Kobutra, a software developer and
            entrepreneur. I&apos;m passionate about using technology to solve
            real-world problems.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="https://github.com/henrykobutra/craftpizza-tony-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Github className="h-5 w-5" />
              View project on GitHub
            </Link>

            <Link
              href="https://kobutra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Globe className="h-5 w-5" />
              Personal Website
            </Link>

            <Link
              href="https://linkedin.com/in/henrykobutra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </Link>
          </div>

          <div className="mt-8 space-y-4 border-t pt-6">
            <h2 className="text-xl font-bold">Other Projects</h2>

            <div>
              <h3 className="font-bold">Background Craft</h3>
              <p className="text-gray-600">
                My digital agency solving all kinds of digital problems - from
                web development to automation and everything in between.{" "}
                <Link
                  href="https://backgroundcraft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  Learn more →
                </Link>
              </p>
            </div>

            <div>
              <h3 className="font-bold">Resumo</h3>
              <p className="text-gray-600">
                An AI-powered resume builder helping job seekers create
                professional resumes.{" "}
                <Link
                  href="https://resumo.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  Try it out →
                </Link>
              </p>
            </div>

            <div>
              <h3 className="font-bold">Uncodename</h3>
              <p className="text-gray-600">
                Need a cool codename for your secret project? This fun tool
                helps generate the perfect one.{" "}
                <Link
                  href="https://uncodename.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  Generate yours →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
