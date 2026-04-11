export const heroOutcomes = [
  {
    title: "Recovered hours",
    body: "Turn work already completed through AI into reports you can show stakeholders.",
  },
  {
    title: "Extended reach",
    body: "Commission agents that absorb whole categories of work without diluting the thinking behind them.",
  },
  {
    title: "Clearer judgment",
    body: "Catch the bias in a delegation before it shapes a task you can't undo.",
  },
] as const;

export type Product = {
  name: string;
  status: "available" | "in-development";
  coreValue: string;
  functions: readonly string[];
  image: {
    src: string;
    alt: string;
  };
};

export const products: readonly Product[] = [
  {
    name: "AI-Risk-Manage",
    status: "available",
    coreValue:
      "Analysis interaction pattern with AI and find risks.",
    functions: [
      "Generate task reports based on the labor hours saved through AI-completed work.",
      "Analyze individual utilization patterns and guide people toward further AI-driven optimization.",
      "Monitor activities and outcomes that drift from the project's intended progress.",
    ],
    image: {
      src: "/placeholder-wide.png",
      alt: "Preview of the AI-Risk-Manage dashboard showing interaction patterns and risk scores.",
    },
  },
  {
    name: "AgentQuest",
    status: "in-development",
    coreValue:
      "Extend your intelligence through agents you design.",
    functions: [],
    image: {
      src: "/placeholder-card.png",
      alt: "Preview of AgentQuest — a workspace for designing and commissioning AI agents.",
    },
  },
  {
    name: "AI Skill Checker",
    status: "in-development",
    coreValue:
      "Check your context against your cognitive bias.",
    functions: [],
    image: {
      src: "/placeholder-square.png",
      alt: "Preview of AI Skill Checker — a context reflection view that surfaces cognitive bias.",
    },
  },
];

export const navLinks = [
  { href: "#product", label: "Product" },
] as const;
