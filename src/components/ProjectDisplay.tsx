import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Github } from "lucide-react";

interface ProjectDisplayProps {
    imageSrc: string;
    title: string;
    summary: string;
    details?: string;
    tags: string[];
    github?: string;
    website?: string;
    miscLink?: string;
    miscText?: string;
}

const ProjectDisplay = ({
    imageSrc,
    title,
    summary,
    details,
    tags,
    github,
    website,
    miscLink,
    miscText,
}: ProjectDisplayProps) => {
    return (
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:max-w-lg lg:self-end">
                <h2 className="scroll-m-20 pt-2 text-3xl font-semibold tracking-tight first:mt-0">
                    {title}
                </h2>
                <p className="mt-2">{summary}</p>
                <div className="flex flex-row flex-wrap my-2">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="bg-orange-50 mr-4 mb-2 px-2 py-0.5 rounded-md border border-dashed border-gray-800"
                        >
                            <p className="text-sm">{tag}</p>
                        </div>
                    ))}
                </div>
                <div className="flex mt-2">
                    {github ? (
                        <Link
                            href={github}
                            className={buttonVariants({
                                className:
                                    "bg-orange-500 hover:bg-orange-400 mr-2",
                                variant: "outline",
                            })}
                            target="_blank"
                        >
                            View the code <Github className="pl-1" />
                        </Link>
                    ) : null}
                    {website ? (
                        <Link
                            href={website}
                            className={buttonVariants({
                                className:
                                    "bg-orange-500 hover:bg-orange-400 mr-2",
                                variant: "outline",
                            })}
                            target="_blank"
                        >
                            Visit the website &rarr;
                        </Link>
                    ) : null}
                    {miscLink ? (
                        <Link
                            href={miscLink}
                            className={buttonVariants({
                                className:
                                    "bg-orange-500 hover:bg-orange-400 mr-2",
                                variant: "outline",
                            })}
                            target="_blank"
                        >
                            {miscText} &rarr;
                        </Link>
                    ) : null}
                </div>
            </div>
            <div className="mt-6 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                <div className="relative aspect-video w-full">
                    <Image
                        fill={true}
                        className="w-full h-full object-cover rounded-xl border-gray-400 border"
                        src={imageSrc}
                        alt="project preview"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;
