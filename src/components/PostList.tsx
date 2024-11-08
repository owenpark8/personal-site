import Link from "next/link";
import { convertDateToString } from "@/lib/utils";

interface PostParams {
    slug: string;
    title: string;
    date: Date;
}

interface PostListProps {
    posts: PostParams[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
    <ul className="mx-auto max-w-lg">
        {posts.map(({ slug, title, date }) => (
            <li key={slug} className="text-lg flex items-center">
                {convertDateToString(date)}
                <Link
                    href={`/blog/${slug}`}
                    className="ml-auto font-medium text-blue-600 hover:underline hover:text-blue-500"
                >
                    {title}
                </Link>
            </li>
        ))}
    </ul>
);

export default PostList;
