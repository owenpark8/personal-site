"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectDisplay from "@/components/ProjectDisplay";
import { buttonVariants } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    ArrowDownToLine,
    ChevronDown,
    Globe,
    Linkedin,
    LucideGithub,
    Mail,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <MaxWidthWrapper>
                <section id="welcome" className="min-h-[90vh]">
                    <div className="mt-36 mx-auto text-center flex flex-col items-center max-w-3xl">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight border-b pb-2 lg:text-5xl">
                            hi, my name is{" "}
                            <span className="text-orange-500 whitespace-nowrap">
                                owen park
                            </span>
                            .
                        </h1>
                        <h2 className="scroll-m-20 pt-2 text-3xl font-semibold tracking-tight first:mt-0">
                            computer engineering at the{" "}
                            <span className="text-uofmblue underline decoration-maize rounded-md">
                                university of michigan
                            </span>
                        </h2>
                        <ul className="flex items-center mt-2">
                            <li>
                                <Link
                                    href="mailto:owenpark@umich.edu"
                                    target="_blank"
                                    className={buttonVariants({
                                        className: "hover:bg-orange-200 rounded-3xl",
                                        variant: "ghost",
                                    })}
                                >
                                    <Mail />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/owen-park/"
                                    target="_blank"
                                    className={buttonVariants({
                                        className: "hover:bg-orange-200 rounded-3xl",
                                        variant: "ghost",
                                    })}
                                >
                                    <Linkedin />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/owenpark8"
                                    target="_blank"
                                    className={buttonVariants({
                                        className: "hover:bg-orange-200 rounded-3xl",
                                        variant: "ghost",
                                    })}
                                >
                                    <LucideGithub />
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center mt-2">
                            <Link
                                href="#projects"
                                className={buttonVariants({
                                    className:
                                        "mx-1 bg-orange-500 hover:bg-orange-400 hover:text-gray-700",
                                    variant: "outline",
                                })}
                            >
                                Projects
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger
                                    className={buttonVariants({
                                        className:
                                            "mx-1 pr-2.5 bg-orange-500 hover:bg-orange-400 data-[state=open]:bg-orange-400 group hover:text-gray-700 data-[state=open]:text-gray-700",
                                        variant: "outline",
                                    })}
                                >
                                    Resume
                                    <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    onCloseAutoFocus={(e) => {
                                        e?.preventDefault();
                                    }}
                                >
                                    <DropdownMenuGroup>
                                        <Link href="#resume">
                                            <DropdownMenuItem className="flex flex-row items-center justify-between w-36">
                                                View in browser
                                                <Globe className="h-4 w-4 ml-auto" />
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link href="/Owen_Park_Resume.pdf" download>
                                            <DropdownMenuItem className="flex flex-row items-center justify-between w-36">
                                                Download PDF
                                                <ArrowDownToLine className="h-4 w-4" />
                                            </DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            {/*
              <Link
                href="/blog"
                className={buttonVariants({
                  className:
                    "mx-1 bg-orange-500 hover:bg-orange-400 hover:text-gray-700",
                  variant: "outline",
                })}
              >
                Blog
              </Link>
              */}
                        </div>
                    </div>
                </section>
                <section id="projects" className="min-h-[90vh]">
                    <h1 className="pt-12 text-center scroll-m-20 text-4xl font-extrabold tracking-tight border-b pb-2 lg:text-5xl">
                        Projects
                    </h1>
                    <ProjectDisplay
                        imageSrc="/project-previews/470-preview.webp"
                        title="R10K-Style Multithread Out-of-Order RISC-V Processor"
                        summary="A fully synthesizable R10K-style processor based on the RISC-V ISA in SystemVerilog with a 2-way superscalar architecture, simultaneous multithreading, and advanced features such as an 4-way associative cache, tournament branch predictor, and instruction prefetching. Achieved a clock period of 7.85ns and an average CPI of 1.05. Designed and implemented from scratch with a group of 4 other classmates as a part of EECS 470: Computer Architecture at the University of Michigan."
                        tags={["SystemVerilog", "RISC-V", "C", "VCS", "Makefile"]}
                        miscLink="/EECS-470-Final-Project-Report.pdf"
                        miscText="Read the report"
                    />
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
                <section
                    id="resume"
                    className="min-h-screen mt-24 flex flex-col columns-1 items-center"
                >
                    <h1 className="w-full pt-12 text-center scroll-m-20 text-4xl font-extrabold tracking-tight border-b pb-2 lg:text-5xl">
                        Resume
                    </h1>
                    <div className="mt-4 max-w-[90vw] w-[60rem] border border-gray-700 rounded-lg">
                        <div className="my-8 md:mx-12 mx-4">
                            <div id="resume-header">
                                <h2 className="font-bold text-center text-3xl">Owen Park</h2>
                                <p className="mt-1 text-center text-xs">
                                    <Link
                                        href="mailto:owenpark@umich.edu"
                                        className="hover:underline underline-offset-4"
                                    >
                                        owenpark@umich.edu
                                    </Link>{" "}
                                    ∙{" "}
                                    <Link
                                        href="tel:201-390-7063"
                                        className="hover:underline underline-offset-4"
                                    >
                                        (201) 390-7063
                                    </Link>{" "}
                                    ∙{" "}
                                    <Link
                                        href="https://linkedin.com/in/owen-park"
                                        target="_blank"
                                        className="hover:underline underline-offset-4"
                                    >
                                        linkedin.com/in/owen-park
                                    </Link>{" "}
                                    ∙{" "}
                                    <Link href="#" className="hover:underline underline-offset-4">
                                        owenpark.info
                                    </Link>
                                </p>
                            </div>
                            <div id="resume-education" className="mt-2">
                                <h3 className="text-base sm:text-lg font-bold underline">
                                    Education
                                </h3>
                                <div>
                                    <div className="flex flex-row justify-between w-full items-baseline">
                                        <h4 className="text-sm sm:text-base leading-5 font-bold">
                                            University of Michigan
                                        </h4>
                                        <p className="text-xs sm:text-sm font-bold">
                                            Ann Arbor, MI
                                        </p>
                                    </div>
                                    <div className="text-xs sm:text-sm flex flex-row justify-between w-full">
                                        <p className="italic">B.S.E. in Computer Engineering</p>
                                        <p className="italic text-right">April 2025</p>
                                    </div>
                                    <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm">
                                        <li>
                                            <span className="font-bold">GPA:</span> 3.92 / 4.0
                                        </li>
                                        <li>
                                            <span className="font-bold">Coursework:</span> Computer
                                            Architecture, Embedded Systems, Data Structures and
                                            Algorithms, Digital Circuits, Wireless Systems, Signals
                                            and Systems, CS Pragmatics, Discrete Math, Calculus I-IV,
                                            Linear Algebra, Probability
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="mt-2">
                  <div className="flex flex-row justify-between w-full items-baseline">
                    <h4 className="text-sm sm:text-base leading-5 font-bold">
                      CEA CAPA
                    </h4>
                    <p className="text-xs sm:text-sm font-bold">
                      Prague, Czechia
                    </p>
                  </div>
                  <div className="text-xs sm:text-sm flex flex-row justify-between w-full">
                    <p className="italic">
                      International Program in Engineering
                    </p>
                    <p className="text-right">Summer 2023</p>
                  </div>
                  <ul className="text-xs sm:text-sm list-disc ml-4 sm:ml-6">
                    <li>
                      Coursework: Linear Algebra, Art History of Prague: Past
                      and Present
                    </li>
                  </ul>
                </div> */}
                            </div>
                            <div id="resume-experience" className="mt-2">
                                <h3 className="text-base sm:text-lg font-bold underline">
                                    Experience
                                </h3>
                                <div id="resume-michigan-mars-rover">
                                    <div className="flex flex-row justify-between w-full items-baseline">
                                        <h4 className="text-sm sm:text-base leading-5 font-bold">
                                            Michigan Mars Rover
                                        </h4>
                                        <p className="text-xs sm:text-sm font-bold">
                                            Ann Arbor, MI
                                        </p>
                                    </div>
                                    <div className="text-xs sm:text-sm flex flex-row justify-between w-full">
                                        <p className="italic">Embedded Software Member</p>
                                        <p className="text-right">
                                            Fall 2022 - <span className="italic">Present</span>
                                        </p>
                                    </div>
                                    <ul className="text-xs sm:text-sm list-disc ml-4 sm:ml-6">
                                        <li>
                                            Integrated FreeRTOS on STM32 microcontrollers in C to
                                            manage concurrent tasks with various sensors, ensuring
                                            efficient communication and coordination between the
                                            subsystems
                                        </li>
                                        <li>
                                            Designed and implemented a C++ ROS nodelet, interfacing
                                            the NVIDIA MTTCAN driver on our Jetson and integrating
                                            netlink sockets for CAN interface activation
                                        </li>
                                        <li>
                                            Leveraged multithreading to concurrently read from ROS
                                            topics and communicate with the CAN bus, enhancing
                                            real-time data exchange efficiency
                                        </li>
                                        <li>
                                            Accomplished successful CAN communication between various
                                            STM32G4 microcontrollers, allowing for full functionality
                                            on our rover, replacing our existing I2C system
                                        </li>
                                    </ul>
                                </div>
                                <div id="resume-research" className="mt-1">
                                    <div className="flex flex-row justify-between w-full items-baseline">
                                        <h4 className="text-sm sm:text-base leading-5 font-bold">
                                            University of Michigan CSE Department
                                        </h4>
                                        <p className="text-xs sm:text-sm font-bold">
                                            Ann Arbor, MI
                                        </p>
                                    </div>
                                    <div className="text-xs sm:text-sm flex flex-row justify-between w-full">
                                        <p className="italic">Undergraduate Researcher</p>
                                        <p className="text-right">
                                            Fall 2023 - <span className="italic">Present</span>
                                        </p>
                                    </div>
                                    <ul className="text-xs sm:text-sm list-disc ml-4 sm:ml-6">
                                        <li>
                                            Researching how large language models can be used to
                                            generate infrastructure as code configuration files for
                                            Terraform from natural language descriptions to present at
                                            the International Conference on Machine Learning
                                        </li>
                                        <li>
                                            Building a comprehensive dataset of over 1,000 different
                                            prompts, policies, and target configurations of Terraform
                                            AWS resources
                                        </li>
                                        <li>
                                            Leveraging machine learning techniques to achieve a
                                            significant reduction in error rates and up to a 20%
                                            improvement in code synthesis accuracy during preliminary
                                            testing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="resume-projects" className="mt-2">
                                <h3 className="text-base sm:text-lg font-bold underline">
                                    Projects
                                </h3>
                                <div id="resume-mwig">
                                    <div className="flex flex-row justify-between w-full items-baseline">
                                        <h4 className="text-sm sm:text-base leading-5 font-bold">
                                            R10K-Style Out-of-Order RISC-V Processor in SystemVerilog
                                        </h4>
                                        <p className="italic text-xs sm:text-sm text-right">
                                            Spring 2024
                                        </p>
                                    </div>
                                    <ul className="text-xs sm:text-sm list-disc ml-4 sm:ml-6">
                                        <li>
                                            Spearheading the design and implementation of a RISC-V
                                            MIPS R10K-based out-of-order processor from scratch,
                                            employing SystemVerilog for high-level synthesis with a
                                            group of 4 other classmates
                                        </li>
                                        <li>
                                            Integrating simultaneous multithreading (SMT) with a 2-way
                                            superscalar architecture, doubling instruction throughput,
                                            and customizing thread scheduling and resource allocation
                                            mechanisms to maximize parallelism
                                        </li>
                                        <li>
                                            Incorporating advanced features such as an N-way
                                            associative cache, tournament branch predictor, and
                                            instruction/data prefetching
                                        </li>
                                    </ul>
                                </div>
                                <div id="resume-podium-prints">
                                    <div className="flex flex-row justify-between w-full items-baseline">
                                        <h4 className="text-sm sm:text-base leading-5 font-bold">
                                            Podium Prints Ecommerce Website
                                            <span className="italic font-normal">
                                                {" "}
                                                - Full-Stack -{" "}
                                            </span>
                                            <Link
                                                href="https://podium-prints.com"
                                                target="_blank"
                                                className="font-normal text-blue-600 underline hover:text-blue-500"
                                            >
                                                podium-prints.com
                                            </Link>
                                        </h4>
                                        <p className="text-xs sm:text-sm text-right">Fall 2023</p>
                                    </div>
                                    <ul className="text-xs sm:text-sm list-disc ml-4 sm:ml-6">
                                        <li>
                                            Developed a full-stack ecommerce web app in TypeScript
                                            with a Next.js frontend and an Express backend,
                                            integrating Payload CMS to easily access a MongoDB
                                            database and AWS S3 bucket
                                        </li>
                                        <li>
                                            Managed API endpoints using tRPC, ensuring a type-safe
                                            backend that seamlessly integrated with the frontend
                                        </li>
                                        <li>
                                            Leveraged the Stripe API and webhooks to handle secure and
                                            efficient payment processing
                                        </li>
                                        <li>
                                            Used Docker Compose, Terraform, and LocalStack to create
                                            an instant development environment with a mock S3 server
                                            and local MongoDB database
                                        </li>
                                    </ul>
                                </div>
                                {/* <div id="resume-mwig">
                  <div className="flex flex-row justify-between w-full items-baseline">
                    <h4 className="text-sm sm:text-base leading-5 font-bold">
                      Michigan Women Investment Group Website
                      <span className="italic font-normal">
                        {" "}
                        - Front End -{" "}
                      </span>
                      <a
                        href="https://michiganwig.com"
                        target="_blank"
                        className="font-normal text-blue-600 underline hover:text-blue-500"
                      >
                        michiganwig.com
                      </a>
                    </h4>
                    <p className="text-xs sm:text-sm text-right">Sept. 2023</p>
                  </div>
                  <ul className="text-xs sm:text-sm list-disc ml-4 sm:ml-6">
                    <li>
                      Designed and deployed a responsive single-page site for
                      the MWIG organization using vanilla JavaScript, HTML, and
                      CSS, ensuring a seamless user experience across all
                      devices
                    </li>
                  </ul>
                </div> */}
                            </div>
                            <div id="resume-skills" className="mt-2">
                                <h3 className="text-base sm:text-lg font-bold underline">
                                    Skills
                                </h3>
                                <ul className="text-xs sm:text-sm list-disc ml-4 sm:ml-6">
                                    <li>
                                        <span className="font-bold">Languages:</span> C, C++,
                                        &#123;System&#125;Verilog, RISC-V Assembly, Python, Java,
                                        &#123;Java/Type&#125;Script, SQL, Bash, HCL
                                    </li>
                                    <li>
                                        <span className="font-bold">Web Technologies:</span> React,
                                        Next.js, Express, Node.js, MongoDB, HTML, CSS
                                    </li>
                                    <li>
                                        <span className="font-bold">Technical/Tools:</span> Git, AWS
                                        (SDK, S3, and EC2), Docker, Terraform, Makefile, CMake
                                    </li>
                                </ul>
                            </div>
                            <div id="resume-honors-activities" className="mt-2">
                                <h3 className="text-base sm:text-lg font-bold underline">
                                    Honors and Activities
                                </h3>
                                <ul className="text-xs sm:text-sm list-disc ml-4 sm:ml-6">
                                    <li>
                                        <span className="font-bold">Honors:</span> James B. Angell
                                        Scholar, University Honors, Perfect ACT Scorer, AP Scholar
                                        with Distinction x3
                                    </li>
                                    <li>
                                        <span className="font-bold">Affiliations:</span> Traders at
                                        Michigan, Korean-American Scientists and Engineers
                                        Association
                                    </li>
                                    <li>
                                        <span className="font-bold">Hobbies:</span> 7v7 Intramural
                                        Flag Football, 3v3 Intramural Basketball, Poker, Traveling,
                                        Hiking
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link
                        href="/Owen-Park-Resume.pdf"
                        className={buttonVariants({
                            className: "mt-6 mb-20 mr-2 bg-orange-500 hover:bg-orange-400",
                            variant: "outline",
                        })}
                        download
                    >
                        Download PDF <ArrowDownToLine className="h-4 w-4 ml-2" />
                    </Link>
                </section>
            </MaxWidthWrapper>
        </>
    );
}
