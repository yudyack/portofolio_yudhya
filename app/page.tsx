import Image from "next/image";
import Link from "next/link";
import { RingMotif } from "@/components/ring-motif";
import { getPosts, formatDate } from "@/lib/posts";
import { links } from "@/lib/site";

const label = "text-s font-bold uppercase tracking-[0.08em]";

export default function Home() {
  const posts = getPosts().slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-6 pt-2 lg:grid-cols-4">
      {/* Hello — sage hero panel */}
      <section className="rise flex flex-col items-start gap-8 rounded-2xl bg-sage p-8 transition-colors duration-200 hover:bg-sage-hover sm:p-12 lg:col-span-3 lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className={`${label} mb-3 text-on-sage`}>Hello</p>
          <h1 className="mb-3 text-l font-bold text-foreground">Hi, welcome! I&apos;m Yudhya.</h1>
          <div className="flex max-w-[52ch] flex-col gap-3 text-foreground">
            <p>
              I&apos;m a backend engineer based in Jakarta. I&apos;ve worn a few hats along the
              way: full-stack development, systems engineering, and software engineering on network
              orchestration (with some machine learning thrown in for my bachelor&apos;s final
              project).
            </p>
            <p>
              I&apos;m genuinely passionate about software engineering, and I have a soft spot for
              languages like Rust, Python, Java, and TypeScript. Lately I&apos;ve been pursuing a
              master&apos;s in business management, and I&apos;m on the lookout for new
              opportunities in the software industry. Thanks for stopping by!
            </p>
          </div>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-foreground/70 transition-colors duration-200 hover:text-accent"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/70 transition-colors duration-200 hover:text-accent"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="relative h-[140px] w-[140px] shrink-0 self-center lg:h-[200px] lg:w-[200px]">
          <RingMotif className="absolute inset-0 h-full w-full" />
          <Image
            src="/cat.jpg"
            alt="A white and orange cat lounging on the grass"
            width={560}
            height={560}
            className="absolute inset-[20%] h-[60%] w-[60%] rounded-full object-cover"
          />
        </div>
      </section>

      {/* Experience — charcoal panel, tall right column; whole box links to the CV */}
      <Link
        href="/cv"
        className="rise flex flex-col items-start rounded-2xl bg-panel-dark p-8 text-on-dark transition-colors duration-200 hover:bg-panel-dark-hover lg:row-span-2"
        style={{ animationDelay: "80ms" }}
      >
        <p className={`${label} mb-3 text-on-dark/80`}>Experience</p>
        <div className="flex flex-col gap-3">
          <p>
            Four years of back-end and infrastructure work in fintech, telecom, and IoT. Mostly
            services, data pipelines, and the observability around them.
          </p>
          <p>
            Right now I&apos;m finishing a Master of Management at Universitas Prasetiya Mulya,
            and I&apos;m open to software engineering roles.
          </p>
        </div>
        <span className="mt-auto pt-5 font-bold">view cv →</span>
      </Link>

      {/* Projects — panel links to /projects; the glider.id title links out to the project */}
      <section className="rise lg:col-span-3" style={{ animationDelay: "160ms" }}>
        <div className="group relative rounded-2xl bg-panel p-8 transition-colors duration-200 hover:bg-accent-soft">
          <Link href="/projects" className="absolute inset-0 rounded-2xl" aria-label="All projects" />
          <p className={`${label} mb-3 text-muted`}>Projects</p>
          <p>
            <a
              href={links.glider}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 font-semibold text-foreground transition-colors duration-200 hover:text-accent"
            >
              glider.id
            </a>
          </p>
          <span className="my-2 inline-block rounded-lg bg-foreground px-3 py-1 leading-none text-background">
            freelance back-end developer
          </span>
          <p className="max-w-[60ch] text-muted">
            You can find here some of our work at Glider, where we build app solutions for our
            clients.
          </p>
          <p className="mt-4 font-bold text-foreground transition-colors duration-200 group-hover:text-accent">
            all projects →
          </p>
        </div>
      </section>

      {/* Writing — full-width row of cream cards */}
      <section className="rise lg:col-span-4" style={{ animationDelay: "240ms" }}>
        <p className={`${label} mb-4 text-muted`}>Writing</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group flex flex-col rounded-2xl bg-card p-8 transition-colors duration-200 hover:bg-accent-soft"
            >
              <span className="font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
                {post.title}
                {post.draft && (
                  <span className="ml-2 align-middle text-xs font-bold uppercase tracking-wider text-accent">
                    draft
                  </span>
                )}
              </span>
              <span className="mt-1 text-muted">{formatDate(post.date)}</span>
              <span className="mt-2 text-muted">{post.summary}</span>
            </Link>
          ))}
        </div>
        <Link
          href="/writing"
          className="mt-4 inline-block font-bold text-foreground transition-colors duration-200 hover:text-accent"
        >
          all writing →
        </Link>
      </section>
    </div>
  );
}
