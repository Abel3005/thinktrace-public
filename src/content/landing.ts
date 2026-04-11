export const valueProps = [
  {
    title: "Keep pace without chasing",
    body: "AI evolves faster than any roadmap. ThinkTrace surfaces the shifts that matter so your team adopts what works instead of reacting to every release.",
  },
  {
    title: "See your own bias",
    body: "Every delegation to AI carries a blind spot. We make the reasoning behind each hand-off visible, so you leverage AI deliberately — not by default.",
  },
  {
    title: "Leverage, measured",
    body: "The value of AI scales with how well you delegate. We trace the thinking behind each workflow and turn it into outcomes you can prove.",
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
