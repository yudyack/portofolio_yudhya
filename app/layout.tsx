import type { Metadata } from "next";
import { Nunito_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteNav } from "@/components/site-nav";
import { site, links } from "@/lib/site";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunitoSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>
          {/* Organic corner blobs — decoration only, behind everything */}
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-24 -top-24 h-[165px] w-[190px] rounded-[46%_54%_60%_40%/52%_44%_56%_48%] bg-blob sm:h-[330px] sm:w-[380px]" />
            <div className="absolute -bottom-24 -left-24 h-[150px] w-[170px] rounded-[58%_42%_45%_55%/46%_60%_40%_54%] bg-blob sm:h-[300px] sm:w-[340px]" />
          </div>
          <SiteNav />
          <main className="mx-auto w-full max-w-[1120px] flex-1 px-5 sm:px-10">{children}</main>
          <footer className="mx-auto w-full max-w-[1120px] px-5 pb-8 pt-16 sm:px-10">
            <div className="flex min-h-[56px] flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-line pt-5 text-s text-muted">
              <span>© {new Date().getFullYear()} {site.name}</span>
              <span className="flex gap-5">
                <a href={links.github} target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-accent">
                  github
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-accent">
                  linkedin
                </a>
                <a href={`mailto:${links.email}`} className="transition-colors duration-200 hover:text-accent">
                  email
                </a>
              </span>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
