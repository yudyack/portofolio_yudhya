import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { links, site } from "@/lib/site";

const navLink =
  "rounded-md px-2 py-1 transition-colors duration-200 hover:bg-accent-soft hover:text-accent";

export function SiteNav() {
  return (
    <header className="mx-auto flex min-h-[72px] w-full max-w-[1120px] flex-wrap items-center justify-between gap-y-1 px-5 py-3 sm:px-10">
      <Link href="/" className="-ml-2 rounded-md px-2 py-1 text-s font-extrabold text-foreground transition-colors duration-200 hover:bg-accent-soft hover:text-accent">
        {site.wordmark}
      </Link>
      {/* On mobile the toggle sits beside the wordmark and the links wrap onto their own row */}
      <span className="sm:hidden">
        <ThemeToggle />
      </span>
      <nav className="order-last -mx-2 flex w-full flex-wrap items-center gap-x-1 text-s text-muted sm:order-none sm:w-auto sm:gap-x-3">
        <Link href="/projects" className={navLink}>
          projects
        </Link>
        <Link href="/blog" className={navLink}>
          blog
        </Link>
        <Link href="/cv" className={navLink}>
          cv
        </Link>
        <a href={`mailto:${links.email}`} className={navLink}>
          email
        </a>
        <span className="hidden sm:inline-flex">
          <ThemeToggle />
        </span>
      </nav>
    </header>
  );
}
