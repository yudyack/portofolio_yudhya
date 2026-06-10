import { links } from "@/lib/site";

export const metadata = {
  title: "Projects · Yudhya Patria Wicaksono",
  description: "Things I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="rise mx-auto max-w-[720px] pt-6">
      <p className="mb-4 text-s font-bold uppercase tracking-[0.08em] text-muted">Projects</p>
      <a
        href={links.glider}
        target="_blank"
        rel="noreferrer"
        className="group block rounded-2xl bg-panel p-8 transition-colors duration-200 hover:bg-accent-soft"
      >
        <p className="font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
          glider.id
        </p>
        <span className="my-2 inline-block rounded-lg bg-foreground px-3 py-1 leading-none text-background">
          freelance back-end developer
        </span>
        <p className="max-w-[60ch] text-muted">
          I built the Java backend for a client&apos;s business development management system.
        </p>
      </a>
      {/* TODO(yudhya): add further projects here as they're written up. */}
    </div>
  );
}
