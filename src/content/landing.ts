export const valueProps = [
  {
    title: "Turn AI usage into recovered hours",
    body: "We trace the work your team is already completing through AI and convert it into task reports you can show stakeholders — proving the time saved instead of guessing at it.",
  },
  {
    title: "Extend what your team can take on",
    body: "We help you design and commission agents that absorb whole categories of work — so the same headcount can reach further without diluting the quality of the thinking behind it.",
  },
  {
    title: "See the blind spot before it costs you",
    body: "We reflect your context back at you so you can catch the bias in a delegation before it becomes a failed project, a wrong call, or a number you can't explain.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Trace the thinking",
    body: "We map how your team already reasons about delegating to AI — the prompts, the agents, the shortcuts, and the assumptions behind them.",
  },
  {
    n: "02",
    title: "Surface the risk",
    body: "Each interaction pattern is scored against the risks that matter: reproducibility, accuracy, cost, compliance, and hidden bias.",
  },
  {
    n: "03",
    title: "Leverage with intent",
    body: "You get controls, evaluators, and guidance wired into your stack — so every AI-driven decision has a trace behind it.",
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
  { href: "#what", label: "What we do" },
  { href: "#how", label: "How it works" },
  { href: "#product", label: "Product" },
] as const;
