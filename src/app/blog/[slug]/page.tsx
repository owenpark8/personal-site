import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import markdownit from "markdown-it";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { convertDateToString } from "@/lib/utils";
import "@/styles/markdown.css";

export const dynamicParams = false;

const md = markdownit();

export function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), "public/blog-posts");
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        return {
            slug: filename.replace(/\.md$/, ""),
            title: data.title || "No title",
            date: data.date ? new Date(data.date) : new Date(0),
        };
    });
}

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const postsDirectory = path.join(process.cwd(), "public/blog-posts");
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(fileContent);

    const title = data.title || "No title";
    const date = data.date ? new Date(data.date) : new Date(0);
    const result = md.render(content);

    return (
        <>
            <MaxWidthWrapper>
                <div className="mt-6 mx-auto px-2 flex flex-col max-w-2xl">
                    <section id="blog-post-header" className="scroll-m-20">
                        <Link
                            href="/blog"
                            className="text-blue-600 hover:underline hover:text-blue-500 underline-offset-8"
                        >
                            ← Back to blog
                        </Link>
                    </section>
                    <section id="blog-post-content">
                        <div className="my-4">
                            <h1 className="text-4xl font-extrabold">{title}</h1>
                            <h2 className="text-lg font-bold mt-1">
                                {convertDateToString(date)} · owen park
                            </h2>
                        </div>
                        <div
                            className="markdown-body"
                            dangerouslySetInnerHTML={{ __html: result }}
                        />
                    </section>
                    <section
                        id="blog-post-footer"
                        className="my-10 border-t items-center flex flex-col"
                    >
                        <Link
                            href="#blog-post-header"
                            className="mt-4 text-blue-500 hover:text-blue-400 flex flex-row items-center"
                        >
                            back to top
                        </Link>
                        <div className="mt-8 flex flex-row">
                            <Link
                                href="/"
                                className="text-blue-500 hover:underline hover:text-blue-400 mx-2"
                            >
                                site
                            </Link>
                            ·
                            <Link
                                href="https://www.linkedin.com/in/owen-park/"
                                target="_blank"
                                className="text-blue-500 hover:underline hover:text-blue-400 mx-2"
                            >
                                linkedin
                            </Link>
                            ·
                            <Link
                                href="https://github.com/owenpark8/"
                                target="_blank"
                                className="text-blue-500 hover:underline hover:text-blue-400 mx-2"
                            >
                                github
                            </Link>
                        </div>
                    </section>
                </div>
            </MaxWidthWrapper>
        </>
    );
}
