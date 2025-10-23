import Image from "next/image";

export type Project = {
  title: string;
  summary: string;
  image?: string;
  links?: { label: string; href: string }[];
  tags?: string[];
};

export default function ProjectCard({ title, summary, image, links, tags }: Project) {
  return (
    <article className="rounded-2xl border overflow-hidden">
      {image && (
        <div className="relative aspect-[16/9]">
          <Image src={image} alt={title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      )}
      <div className="p-4 grid gap-2">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{summary}</p>
        <div className="flex flex-wrap gap-2">
          {tags?.map(t => <span key={t} className="text-xs rounded-full border px-2 py-0.5">{t}</span>)}
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          {links?.map(l => <a key={l.href} href={l.href} className="underline underline-offset-4">{l.label}</a>)}
        </div>
      </div>
    </article>
  );
}
