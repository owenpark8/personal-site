import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Blog() {
  return (
    <>
      <MaxWidthWrapper>
        <section id="blog-welcome">
        <div className="mt-36 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight border-b pb-2 lg:text-5xl">
              owen park's blog
            </h1>
            <h2 className="scroll-m-20 pt-2 text-3xl font-semibold tracking-tight first:mt-0">
              project info and random thoughts
              </span>
            </h2>
            </div>
        </section>
        </MaxWidthWrapper>
    </>
  );
}
