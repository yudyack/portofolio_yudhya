import Link from "next/link";
import { getPosts, formatDate } from "@/lib/posts";

export const metadata = {
  title: "Blog · Yudhya Patria Wicaksono",
  description: "Notes on making systems legible and efficient.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="rise mx-auto max-w-[720px] pt-6">
      <p className="mb-4 text-s font-bold uppercase tracking-[0.08em] text-muted">Blog</p>
      <ul className="flex flex-col">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-baseline justify-between gap-4 border-b border-line py-4 first:border-t"
            >
              <span className="flex-1">
                <span className="font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
                  {post.title}
                  {post.draft && (
                    <span className="ml-2 align-middle text-xs font-bold uppercase tracking-wider text-accent">
                      draft
                    </span>
                  )}
                </span>
                <span className="block text-muted">{post.summary}</span>
              </span>
              <span className="shrink-0 whitespace-nowrap text-muted">{formatDate(post.date)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
