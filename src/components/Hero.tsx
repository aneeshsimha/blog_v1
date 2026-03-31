import { motion } from "framer-motion";

interface Social {
  platform: string;
  url: string;
  icon: string;
}

interface SiteConfig {
  name: string;
  tagline: string;
  resumeUrl: string;
  socials: Social[];
}

const iconPaths: Record<string, string> = {
  github: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  substack: "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l9.56-5.26L20.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z",
};

function Orb() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-48 w-48 sm:h-64 sm:w-64"
      >
        <div className="absolute inset-0 animate-[spin_12s_linear_infinite] rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 360] }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-600/20 to-fuchsia-500/10 blur-2xl"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-12 rounded-full bg-gradient-to-br from-indigo-400/40 via-violet-500/30 to-purple-600/20 blur-xl"
        />
      </motion.div>
    </div>
  );
}

export default function Hero({ site }: { site: SiteConfig }) {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
      <Orb />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
      >
        {site.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 max-w-lg text-lg text-zinc-400 sm:text-xl"
      >
        {site.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8"
      >
        <div className="flex items-center gap-5">
          {site.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label={social.platform}
            >
              {iconPaths[social.icon] ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d={iconPaths[social.icon]} />
                </svg>
              ) : (
                <span className="text-sm">{social.platform}</span>
              )}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a
          href="/experiments"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
        >
          View Experiments
        </a>
        <a
          href="/writings"
          className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
        >
          Read Writings
        </a>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
        >
          Resume
        </a>
      </motion.div>
    </section>
  );
}
