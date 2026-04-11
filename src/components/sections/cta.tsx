import { LinkButton } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function Cta() {
  return (
    <Section id="contact">
      <div className="flex flex-col items-start gap-6 sm:items-center sm:text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to leverage AI without losing the trace?
        </h2>
        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          Tell us what you&apos;re building. We&apos;ll show you where ThinkTrace
          fits — and where it doesn&apos;t.
        </p>
        <LinkButton href="mailto:hello@thinktrace.ai" size="lg">
          hello@thinktrace.ai
        </LinkButton>
      </div>
    </Section>
  );
}
