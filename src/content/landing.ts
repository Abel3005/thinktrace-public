export const fundamentals = [
  {
    n: "01",
    title: "AI moves faster than we can follow.",
    body: "The pace of model, tool, and capability change has outrun the pace any individual or team can absorb.",
  },
  {
    n: "02",
    title: "Human intelligence is outmatched by AI.",
    body: "On a growing set of tasks, raw model capability already exceeds what any one of us can do unaided.",
  },
  {
    n: "03",
    title: "We have a cognitive bias to over-leverage AI.",
    body: "Because it's faster and often smarter, we quietly hand over more and more of our thinking — usually without noticing.",
  },
  {
    n: "04",
    title: "AI performance depends on how we leverage it.",
    body: "The value AI produces is a direct function of which tasks we hand over, how we frame them, and what we keep for ourselves.",
  },
] as const;

export const valueProps = [
  {
    title: "Move at AI's pace",
    body: "Models, tools, and best practices change weekly. ThinkTrace tracks the shifts so your team can adopt what works without chasing every release.",
  },
  {
    title: "Adopt with guardrails",
    body: "Capability is only useful when it's safe to ship. We translate emerging AI risks into controls that fit how your teams actually build.",
  },
  {
    title: "Prove the value",
    body: "Every workflow we touch comes with a measurable outcome — time saved, errors prevented, decisions accelerated. No vague AI hype.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Map your AI surface",
    body: "We inventory the models, prompts, agents, and data flows already in use across your org — including the shadow ones.",
  },
  {
    n: "02",
    title: "Trace the risk",
    body: "Each surface is scored against the risks that matter to you: privacy, accuracy, cost, compliance, and operational fragility.",
  },
  {
    n: "03",
    title: "Ship the controls",
    body: "You get concrete policies, evaluators, and monitors wired into your stack — not a 60-page PDF nobody reads.",
  },
] as const;

export const productFeatures = [
  "Live inventory of models, prompts, and agents",
  "Risk scoring tuned to your industry and stage",
  "Controls and evaluators wired into your existing stack",
  "Audit-ready trace of every change",
] as const;

export const navLinks = [
  { href: "#fundamentals", label: "Why ThinkTrace" },
  { href: "#what", label: "What we do" },
  { href: "#how", label: "How it works" },
  { href: "#product", label: "Product" },
] as const;
