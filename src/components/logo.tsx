import Image from "next/image";

/**
 * Brand mark that swaps PNGs with the active theme.
 *
 * - Light mode → `icon-dark.png` (dark navy badge stands out on light bg)
 * - Dark  mode → `icon-light.png` (light badge stands out on dark bg)
 *
 * The swap is CSS-driven via the `.dark` class on <html>, so it stays
 * in sync with `ThemeToggle` and the no-flash init script in `layout.tsx`.
 */
export function Logo({
  size = 32,
  priority = false,
}: {
  size?: number;
  priority?: boolean;
}) {
  return (
    <span
      className="relative inline-flex shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Image
        src="/icon-dark.png"
        alt=""
        width={size}
        height={size}
        priority={priority}
        className="dark:hidden"
      />
      <Image
        src="/icon-light.png"
        alt=""
        width={size}
        height={size}
        className="hidden dark:block"
      />
    </span>
  );
}
