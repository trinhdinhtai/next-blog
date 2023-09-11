"use client";

import { PostHeading } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
  chapters: PostHeading[];
}

const TableOfContents = ({ chapters }: TableOfContentsProps) => {
  const [activeSlug, setActiveSlug] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry: any) => {
          if (entry?.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px",
      },
    );

    chapters.forEach((chapter) => {
      const element = document.getElementById(chapter.slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav
      className="flex items-center self-start"
      aria-label="Table of Contents"
    >
      <ol className="list-none space-y-3">
        {chapters.map((heading: PostHeading) => (
          <li
            key={heading.slug}
            className={cn(
              "list-none text-sm font-bold transition-colors duration-200 ease-in-out hover:text-blue-500",
              heading.heading === 3 && "ml-6 font-normal",
              heading.heading === 4 && "ml-8 font-normal",
              heading.heading === 5 && "ml-10 font-normal",
              activeSlug === heading.slug && "text-blue-500",
            )}
          >
            <Link href={`#${heading.slug}`}>{heading.text}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;