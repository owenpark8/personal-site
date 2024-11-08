import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface PostParams {
    slug: string;
    title: string;
    date: Date;
}

export function getPostsFromDirectory(directory: string): PostParams[] {
    const filenames = fs.readdirSync(directory).filter((filename) => {
        const filePath = path.join(directory, filename);
        return fs.statSync(filePath).isFile();
    });

    return filenames.map((filename) => {
        const filePath = path.join(directory, filename);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        return {
            slug: filename.replace(/\.md$/, ""),
            title: data.title || "No title",
            date: data.date ? new Date(data.date) : new Date(0),
        };
    });
}
