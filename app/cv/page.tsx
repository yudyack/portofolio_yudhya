import { links, site } from "@/lib/site";

export const metadata = {
  title: "CV · Yudhya Patria Wicaksono",
  description: "Experience and education of Yudhya Patria Wicaksono.",
};

const label = "text-s font-bold uppercase tracking-[0.08em] text-muted";

type TimelineEntry = {
  period: string;
  type: "experience" | "education";
  title: string;
  org: string;
  points: string[];
};

// Source of truth: CV_Yudhya_Patria_Wicaksono.docx — newest first, the line runs bottom → top.
const timeline: TimelineEntry[] = [
  {
    period: "Jun 2024 – present",
    type: "education",
    title: "Master of Management",
    org: "Universitas Prasetiya Mulya",
    points: ["Currently completing the final thesis."],
  },
  {
    period: "May 2022 – Apr 2024",
    type: "experience",
    title: "Software Engineer",
    org: "Data Ductus",
    points: [
      "Worked on network orchestration projects, delivering user requirements in an agile team.",
      "Contributed to system design and implementation for telecom infrastructure solutions.",
    ],
  },
  {
    period: "Apr 2021 – May 2022",
    type: "experience",
    title: "Research Engineer",
    org: "Delameta Bilano",
    points: [
      "Developed Software Defined Radio (SDR) applications and researched signal processing technologies.",
      "Collaborated with cross-functional teams on embedded and communication system solutions.",
    ],
  },
  {
    period: "Jul 2021 – Oct 2021",
    type: "experience",
    title: "Back End Developer (freelance)",
    org: "Glider",
    points: ["Developed a backend Java application for a client's business development management system."],
  },
  {
    period: "Jul 2020 – Mar 2021",
    type: "experience",
    title: "Associate Software Development Engineer",
    org: "DANA Indonesia",
    points: [
      "Built back-end services integrating banks and third-party APIs for payments, cashout, and top-up.",
      "Handled reconciliation issues in production, ensuring data integrity across systems.",
    ],
  },
  {
    period: "Sep 2016 – Apr 2020",
    type: "education",
    title: "Bachelor of Computer Science",
    org: "Bina Nusantara University, Jakarta",
    points: [
      "GPA 3.79, major in Artificial Intelligence.",
      "Thesis: emotion identification on an Indonesian Twitter dataset using Word2vec and machine learning.",
    ],
  },
];

function TypeChip({ type }: { type: TimelineEntry["type"] }) {
  return type === "education" ? (
    <span className="inline-block rounded-lg bg-sage px-2.5 py-0.5 text-xs font-bold leading-relaxed text-on-sage">
      education
    </span>
  ) : (
    <span className="inline-block rounded-lg bg-foreground px-2.5 py-0.5 text-xs font-bold leading-relaxed text-background">
      experience
    </span>
  );
}

export default function CvPage() {
  return (
    <div className="rise mx-auto flex max-w-[720px] flex-col gap-12 pt-6">
      <header>
        <h1 className="text-l font-bold text-foreground">{site.name}</h1>
        <p className="mt-2 max-w-[60ch] text-muted">
          Software engineer with a Computer Science background from Bina Nusantara University,
          currently completing a Master of Management at Universitas Prasetiya Mulya. Four years of
          back-end and infrastructure systems across fintech, telecom, and IoT, paired with business
          training that helps translate technical problems into commercial terms.
        </p>
      </header>

      <section>
        <p className={`${label} mb-6`}>Timeline</p>
        <ol className="relative">
          {/* The line — runs from the oldest entry at the bottom up to "now" */}
          <span
            aria-hidden
            className="absolute bottom-2 top-1 left-[4.5px] w-[2px] rounded-full bg-gradient-to-t from-sage-deep/25 via-sage-deep/60 to-sage-deep"
          />
          {timeline.map((entry, i) => (
            <li key={`${entry.org}-${entry.period}`} className="relative pb-10 pl-8 last:pb-0">
              <span
                aria-hidden
                className={`absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full ${
                  i === 0 ? "bg-accent" : "border-2 border-accent bg-background"
                }`}
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-muted">{entry.period}</span>
                <TypeChip type={entry.type} />
              </div>
              <p className="mt-1 font-semibold text-foreground">
                {entry.title} <span className="font-normal text-muted">· {entry.org}</span>
              </p>
              <ul className="mt-1 flex max-w-[60ch] list-disc flex-col gap-1 pl-5 text-muted">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <p className={`${label} mb-4`}>Skills</p>
        <div className="flex flex-col gap-2">
          <p className="max-w-[60ch]">
            <span className="font-semibold text-foreground">Technical:</span>{" "}
            <span className="text-muted">
              Java, Python, Rust, Go, TypeScript, agile methodologies, debugging, software
              architecture.
            </span>
          </p>
          <p className="max-w-[60ch]">
            <span className="font-semibold text-foreground">Management &amp; business:</span>{" "}
            <span className="text-muted">
              Strategic thinking, data-driven decision making, project management, business
              analysis.
            </span>
          </p>
        </div>
      </section>

      <section>
        <p className={`${label} mb-4`}>Languages</p>
        <p className="max-w-[60ch] text-muted">
          English: professional working proficiency. German: elementary proficiency.
        </p>
      </section>

      <section>
        <p className={`${label} mb-4`}>Links</p>
        <p className="flex gap-5 text-muted">
          <a href={links.github} target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-accent">
            github
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-accent">
            linkedin
          </a>
          <a href={`mailto:${links.email}`} className="transition-colors duration-200 hover:text-accent">
            email
          </a>
        </p>
      </section>
    </div>
  );
}
