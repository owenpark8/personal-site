import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PostList from "@/components/PostList";
import Link from "next/link";
import path from "path";
import { getPostsFromDirectory } from "@/lib/blogPosts";

export default function Blog() {
    const postsDirectory = path.join(process.cwd(), "public/blog-posts");
    const pinnedDirectory = path.join(
        process.cwd(),
        "public/blog-posts/pinned",
    );

    const regularPosts = getPostsFromDirectory(postsDirectory);
    const pinnedPosts = getPostsFromDirectory(pinnedDirectory);

    return (
        <>
            <MaxWidthWrapper>
                <section id="blog-welcome">
                    <div className="mt-12 mx-auto text-center flex flex-col items-center max-w-3xl">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            owen park&apos;s blog
                        </h1>
                        <h2 className="scroll-m-20 pt-2 text-3xl font-semibold tracking-tight pb-2 border-b">
                            project info and random thoughts
                        </h2>
                        <h3 className="pt-2 text-xl font-medium tracking-tight">
                            for more information about me, go to my{" "}
                            <Link
                                href="/"
                                className="text-blue-600 underline hover:text-blue-500"
                            >
                                site
                            </Link>
                        </h3>
                    </div>
                </section>

                {pinnedPosts.length > 0 && (
                    <section
                        id="pinned-posts"
                        className="mt-12 mx-auto max-w-xl py-4 border-dashed border-2 rounded-lg"
                    >
                        <div className="mx-auto max-w-lg">
                            <h3 className="text-2xl font-semibold pb-2">
                                Pinned
                            </h3>
                            <h4 className="text-lg font-semibold pb-2">
                                <p>Last Updated</p>
                            </h4>
                            <PostList posts={pinnedPosts} />
                        </div>
                    </section>
                )}

                <section id="regular-posts" className="mt-6 mx-auto max-w-xl">
                    <div className="mx-auto max-w-lg">
                        <h4 className="text-lg font-semibold pb-2">
                            <p>Date Posted</p>
                        </h4>
                        <PostList posts={regularPosts} />
                    </div>
                </section>
            </MaxWidthWrapper>
        </>
    );
}
