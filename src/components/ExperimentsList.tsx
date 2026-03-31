import { useState, useMemo } from "react";

interface Experiment {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  type: string;
  featured: boolean;
  link: string | null;
  images: string[];
  thumbnail: string | null;
}

function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const content = (
    <article className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-600 hover:bg-zinc-900">
      {experiment.thumbnail && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={experiment.thumbnail}
            alt={experiment.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 font-mono text-xs text-zinc-400">
            {experiment.type}
          </span>
          <time className="font-mono text-xs text-zinc-500">{experiment.date}</time>
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-zinc-200">
          {experiment.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-400">
          {experiment.description}
        </p>
        {experiment.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {experiment.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-zinc-800 px-2 py-0.5 text-xs text-zinc-500">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (experiment.link) {
    return (
      <a href={experiment.link} target="_blank" rel="noopener noreferrer" className="group block">
        {content}
      </a>
    );
  }

  return (
    <a href={`/experiments/${experiment.slug}`} className="group block">
      {content}
    </a>
  );
}

export default function ExperimentsList({ experiments }: { experiments: Experiment[] }) {
  const [active, setActive] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    experiments.forEach((item) => item.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [experiments]);

  const filtered = active
    ? experiments.filter((item) => item.tags.includes(active))
    : experiments;

  if (experiments.length === 0) {
    return <p className="text-zinc-500">Experiments coming soon. Check back later!</p>;
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            active === null
              ? "bg-white text-zinc-950"
              : "border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(active === tag ? null : tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              active === tag
                ? "bg-white text-zinc-950"
                : "border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((exp) => (
          <ExperimentCard key={exp.slug} experiment={exp} />
        ))}
      </div>
    </div>
  );
}
