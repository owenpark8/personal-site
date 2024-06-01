import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { generateStaticParams } from "./[slug]/page";
import { convertDateToString } from "@/lib/utils";

export default function Blog() {
  const paths = generateStaticParams();

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
        <section id="blog-post-list" className="mt-12">
          <ul className="mx-auto max-w-lg">
            {paths
              .sort((a, b) => b.date.getTime() - a.date.getTime())
              .map(({ slug, title, date }) => (
                <li key={slug}>
                  <p className="text-lg flex items-center">
                    {convertDateToString(date)}
                    <Link
                      href={`/blog/${slug}`}
                      className="ml-auto font-medium text-blue-600 hover:underline hover:text-blue-500"
                    >
                      {title}
                    </Link>
                  </p>
                </li>
              ))}
          </ul>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
