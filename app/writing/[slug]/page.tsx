import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPost, getPosts, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="rise mx-auto max-w-[720px] pt-6">
      <Link
        href="/writing"
        className="text-s text-muted transition-colors duration-200 hover:text-accent"
      >
        ← writing
      </Link>
      <header className="mt-6 flex flex-col gap-2">
        <h1 className="text-l font-bold text-foreground">
          {post.title}
          {post.draft && (
            <span className="ml-3 align-middle text-xs font-bold uppercase tracking-wider text-accent">
              draft
            </span>
          )}
        </h1>
        <p className="text-s text-muted">{formatDate(post.date)}</p>
      </header>
      <div className="prose mt-8">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
