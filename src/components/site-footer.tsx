import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <Logo size={20} />
          <span>© {new Date().getFullYear()} ThinkTrace</span>
        </div>
        <span>Services to leverage AI capability, responsibly.</span>
      </div>
    </footer>
  );
}
