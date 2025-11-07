"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type SpotlightKey = "creator" | "builder" | "listener";

const spotlights: Record<
  SpotlightKey,
  {
    title: string;
    subtitle: string;
    highlights: { label: string; detail: string }[];
    cta: { label: string; href: string };
  }
> = {
  creator: {
    title: "Let’s dream something new.",
    subtitle:
      "Exploring ideas, shaping stories, and building delightful experiences from the first hello.",
    highlights: [
      {
        label: "Idea sketching",
        detail: "Quickly map concepts into shareable visuals and wireframes.",
      },
      {
        label: "Narrative design",
        detail: "Craft messages that feel like a friendly conversation.",
      },
      {
        label: "Mood boards",
        detail: "Translate keywords and feelings into cohesive creative direction.",
      },
    ],
    cta: {
      label: "Share an idea",
      href: "mailto:hello@example.com?subject=Let's%20create%20something",
    },
  },
  builder: {
    title: "Ready to roll up our sleeves.",
    subtitle:
      "From accessible interfaces to production-ready deployments, momentum starts here.",
    highlights: [
      {
        label: "Design systems",
        detail: "Document reusable components that stay consistent at scale.",
      },
      {
        label: "Rapid prototyping",
        detail: "Iterate in the browser with modern tooling and tight feedback loops.",
      },
      {
        label: "Ship to Vercel",
        detail: "Set up previews, observability, and confident production releases.",
      },
    ],
    cta: {
      label: "Start a build",
      href: "https://cal.com/",
    },
  },
  listener: {
    title: "It all begins with listening.",
    subtitle:
      "Clarify goals, understand constraints, and uncover the story behind the simple word “Hi”.",
    highlights: [
      {
        label: "Discovery sessions",
        detail: "Structured chats that surface what matters most to you.",
      },
      {
        label: "Team alignment",
        detail: "Translate insights into a roadmap everyone can rally behind.",
      },
      {
        label: "Guided next steps",
        detail: "Summaries, timelines, and lightweight documentation—done for you.",
      },
    ],
    cta: {
      label: "Book a chat",
      href: "https://cal.com/",
    },
  },
};

const conversationStarters = [
  {
    heading: "Something playful",
    body: "What's the smallest idea that would still make today feel like a win?",
  },
  {
    heading: "Something ambitious",
    body: "If time wasn't a factor, what would this project grow into?",
  },
  {
    heading: "Something practical",
    body: "What's blocking progress right now—and how can we unblock it fast?",
  },
];

export default function Home() {
  const [active, setActive] = useState<SpotlightKey>("listener");

  const greeting = useMemo(() => {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 5) return "Still awake?";
    if (hours < 12) return "Good morning";
    if (hours < 18) return "Good afternoon";
    if (hours < 22) return "Good evening";
    return "Night owl alert";
  }, []);

  const activeSpotlight = spotlights[active];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.35),_transparent_55%)]" />
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-16 pt-20 sm:px-10 sm:pt-24">
        <header className="flex flex-col gap-6 text-left sm:gap-8">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-medium text-slate-100 shadow-lg shadow-indigo-500/20 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            {greeting}, I’m glad you said hi.
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I’m the friendly teammate who helps ideas feel real.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">
            Whether you need a quick gut-check, a polished prototype, or a launch
            partner, this space is here to welcome the spark that started with a
            simple “Hi”.
          </p>
        </header>

        <main className="mt-14 flex flex-col gap-16">
          <section className="grid gap-6 lg:grid-cols-[240px_1fr]">
            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-indigo-500/10 backdrop-blur">
              <h2 className="text-lg font-medium text-slate-100">
                How can I help today?
              </h2>
              <p className="text-sm text-slate-300">
                Choose a spotlight to see what working together might look like.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                {(Object.keys(spotlights) as SpotlightKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`rounded-xl px-4 py-2 text-left text-sm font-medium transition-all ${
                      active === key
                        ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/40"
                        : "bg-white/5 text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    {spotlights[key].title.split(".")[0]}
                  </button>
                ))}
              </div>
            </div>
            <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-indigo-500/5 to-slate-950/40 p-8 shadow-2xl shadow-indigo-500/20 backdrop-blur">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-indigo-400/20 blur-2xl" />
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  {activeSpotlight.title}
                </h3>
                <p className="text-base text-slate-200">
                  {activeSpotlight.subtitle}
                </p>
                <ul className="grid gap-3 pt-4 sm:grid-cols-3">
                  {activeSpotlight.highlights.map((highlight) => (
                    <li
                      key={highlight.label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-100 shadow shadow-indigo-500/10"
                    >
                      <p className="font-semibold">{highlight.label}</p>
                      <p className="pt-1 text-slate-200/90">{highlight.detail}</p>
                    </li>
                  ))}
                </ul>
                <div className="pt-5">
                  <Link
                    href={activeSpotlight.cta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    {activeSpotlight.cta.label}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          </section>

          <section className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-white">
                Conversation starters
              </h2>
              <p className="mt-3 text-base text-slate-200">
                Bring one of these to our next chat—or send your own vibe. Each
                prompt turns a simple greeting into momentum.
              </p>
            </div>
            <div className="grid gap-4 lg:col-span-3">
              {conversationStarters.map((starter) => (
                <div
                  key={starter.heading}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/10 backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {starter.heading}
                  </h3>
                  <p className="pt-2 text-slate-200">{starter.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-950/80 via-indigo-500/20 to-slate-900/80 p-8 text-center shadow-2xl shadow-indigo-500/20 backdrop-blur">
            <h2 className="text-3xl font-semibold text-white">
              Ready when you are.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-200">
              I’m here to make that first “Hi” feel effortless—whether it turns
              into a quick note, a week-long sprint, or a long-term collaboration.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Send an email
              </Link>
              <Link
                href="https://linkedin.com"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Say hi on LinkedIn
              </Link>
            </div>
          </section>
        </main>

        <footer className="mt-20 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Hi there.</span>
          <span className="flex items-center gap-2 text-slate-500">
            Built with Next.js & Tailwind CSS
          </span>
        </footer>
      </div>
    </div>
  );
}
