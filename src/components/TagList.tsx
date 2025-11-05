"use client";

import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type TagListProps = {
  /** List tag to render */
  as?: "ul" | "ol";
  /** Array of list item contents */
  items: ReactNode[];
  /** Classes on list container */
  className?: string;
  /** Classes applied to each <li> */
  itemClassName?: string;
  /** Milliseconds per item stagger */
  delayStep?: number;
  /** If true, reveal-once for each item */
  once?: boolean;
  /** ARIA label for the list */
  ariaLabel?: string;
};

export default function TagList({
  as = "ul",
  items,
  className = "",
  itemClassName = "",
  delayStep = 0,
  once = false,
  ariaLabel,
}: TagListProps) {
  const ListTag = as;

  return (
    <ListTag
      role="list"
      aria-label={ariaLabel}
      className={className}
    >
      {items.map((content, i) => (
        <Reveal
          key={i}
          as="li"
          className={itemClassName}
          delay={delayStep ? i * delayStep : 0}
          once={once}
        >
          {content}
        </Reveal>
      ))}
    </ListTag>
  );
}
