export const valueProps = [
  {
    title: "AI moves faster than we can follow",
    body: "New models, tools, and techniques land every week. Keeping up by willpower alone is a losing game — you need a way to stay oriented.",
  },
  {
    title: "Leveraging to AI is the only way forward",
    body: "Raw human intelligence can't outpace modern models. The teams that win are the ones who hand off the right tasks to AI, at the right time.",
  },
  {
    title: "But cognitive bias gets in the way",
    body: "We over-trust, under-trust, and mis-scope what we delegate. Tracing your thinking is what turns delegation into a skill instead of a gamble.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Trace your thinking",
    body: "Surface the reasoning behind a task before you hand it off — what you actually want, what you already know, and where you're guessing.",
  },
  {
    n: "02",
    title: "Leverage to AI deliberately",
    body: "Decide what to delegate and how. The more clearly you can frame a task, the more of it AI can carry for you.",
  },
  {
    n: "03",
    title: "Extend your capability",
    body: "The result isn't replacement — it's a larger surface of things you can actually get done, with the trace to prove how you got there.",
  },
] as const;

export const products = [
  {
    name: "AI Skill Checker",
    tagline: "Check your AI skill.",
    body: "A practical assessment of how well you can actually leverage AI — across prompt engineering, RAG-based knowledge extension, and fine-tuning.",
    points: [
      "Prompt engineering",
      "Knowledge extension via RAG",
      "Fine tuning",
    ],
  },
  {
    name: "AI-Risk-Manage",
    tagline: "Analyze how you interact with AI, and find the risks.",
    body: "Looks at your interaction patterns with AI and surfaces the risks hiding inside them — so over-delegation and blind trust don't become silent failures.",
    points: [
      "Interaction-pattern analysis",
      "Risk detection in how tasks are delegated",
      "Guidance you can actually act on",
    ],
  },
  {
    name: "AgentQuest",
    tagline: "Build agents that extend your intelligence.",
    body: "Design and run agents that use AI on your behalf — so your own intelligence becomes more extensible, not more crowded.",
    points: [
      "Agent building for real tasks",
      "AI leveraged toward your goals",
      "An extensible layer on top of your thinking",
    ],
  },
] as const;

export const navLinks = [
  { href: "#what", label: "What we do" },
  { href: "#how", label: "How it works" },
  { href: "#product", label: "Product" },
] as const;
