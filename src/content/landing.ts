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

export const products = [
  {
    name: "AI-Risk-Manage",
    tagline: "Analyze interaction patterns with AI and find the risks.",
    body: "We can't verify, reproduce, or standardize the work completed through AI. AI-Risk-Manage turns raw AI usage into task reports, optimization guidance, and alerts for activity that drifts from your project's intent.",
    features: [
      "Task reports based on labor hours saved through AI",
      "Per-person utilization patterns with optimization guidance",
      "Monitors for outcomes inconsistent with project intent",
      "Audit-ready trace of every AI-driven change",
    ],
  },
  {
    name: "AgentQuest",
    tagline: "Extend your intelligence through agents you design.",
    body: "Agents are the most effective way to extend what a team can reason about. AgentQuest is how you build and commission them — shaping agents that make your intelligence more extensible, not more diluted.",
    features: ["Coming soon"],
  },
  {
    name: "AI Skill Checker",
    tagline: "Check your context against your cognitive bias.",
    body: "Every delegation starts from a biased read of the situation. AI Skill Checker uses AI to reflect your context back at you, so you can see the bias before it shapes the task.",
    features: ["Coming soon"],
  },
] as const;

export const navLinks = [
  { href: "#product", label: "Product" },
] as const;
