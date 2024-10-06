import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const BulletPointList = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <ul className={cn("text-xs sm:text-sm list-disc ml-4 sm:ml-6", className)}>
            {children}
        </ul>
    );
};

export default BulletPointList;
