"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectDisplay from "@/components/ProjectDisplay";
import { buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, Linkedin, LucideGithub, Mail } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <section id="welcome" className="min-h-screen">
          <div className="mt-36 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight border-b pb-2 lg:text-5xl">
              Hi, my name is <span className="text-orange-500">Owen Park</span>
            </h1>
            <h2 className="scroll-m-20 pt-2 text-3xl font-semibold tracking-tight first:mt-0">
              Computer Engineering at the University of Michigan
            </h2>
            <ul className="flex items-center mt-2">
              <li>
                <Link
                  href="mailto:owenpark@umich.edu"
                  className={buttonVariants({
                    className: "hover:bg-orange-100 rounded-full",
                    variant: "ghost",
                  })}
                  target="_blank"
                >
                  <Mail />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/owen-park/"
                  target="_blank"
                >
                  <Linkedin />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/owenpark8"
                  className={buttonVariants({
                    className: "hover:bg-orange-100 rounded-full",
                    variant: "ghost",
                  })}
                  target="_blank"
                >
                  <LucideGithub />
                </Link>
              </li>
            </ul>
            <div className="flex items-center mt-2">
              <Link
                href="#projects"
                className={buttonVariants({
                  className: "mr-2 bg-orange-500 hover:bg-orange-400",
                  variant: "outline",
                })}
              >
                Projects
              </Link>
              <Link
                href="#"
                className={buttonVariants({
                  className: "ml-2 bg-orange-500 hover:bg-orange-400",
                  variant: "outline",
                })}
                onClick={() => {
                  toast.error("No resume available at this moment.");
                }}
              >
                Resume
                <ArrowDownToLine className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>
        <section id="projects" className="min-h-screen">
          <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight border-b pb-2 lg:text-5xl">
            Projects
          </h1>
          <ProjectDisplay
            imageSrc="/project-previews/podium-prints-preview.webp"
            title="Podium Prints Website"
            summary="A Next.js 14 fullstack ecommerce website to sell high-quality automotive artwork. Used Docker Compose, Terraform, and LocalStack to create an instant development environment with a mock S3 server and local MongoDB database. Dockerized and deployed to production on a VPS."
            tags={[
              "TypeScript",
              "Tailwind CSS",
              "Next.js",
              "Node.js",
              "Express",
              "tRPC",
              "MongoDB",
              "AWS S3",
              "Stripe",
            ]}
            github="https://github.com/owenpark8/podium-prints"
            website="https://podium-prints.com"
          />
          <ProjectDisplay
            imageSrc="/project-previews/mwig-preview.webp"
            title="Michigan Woman Investment Group Website"
            summary="A one page static website for the Michigan Woman Investment Group on campus. Deployed on Github Pages."
            tags={["JavaScript", "HTML", "CSS"]}
            github="https://github.com/owenpark8/mwig-site"
            website="https://michiganwig.com"
          />
        </section>
      </MaxWidthWrapper>
    </>
  );
}
