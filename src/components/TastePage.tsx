import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Movie {
  title: string;
  year: number;
  poster: string;
  note: string;
}

interface MusicEntry {
  artist: string;
  album: string;
  cover: string;
  note: string;
}

interface Book {
  title: string;
  author: string;
  cover: string;
  note: string;
}

interface Interest {
  label: string;
  emoji: string;
  description: string;
}

interface TasteData {
  movies: Movie[];
  music: MusicEntry[];
  books: Book[];
  interests: Interest[];
}

const tabs = ["Movies", "Music", "Books", "Interests"] as const;
type Tab = (typeof tabs)[number];

const contentVariants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function TastePage({ data }: { data: TasteData }) {
  const [activeTab, setActiveTab] = useState<Tab>("Movies");

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-6 border-b border-border pb-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-3 font-mono text-sm transition-colors ${
              activeTab === tab
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: activeTab === "exit" ? 0.15 : 0.2 }}
          >
            {activeTab === "Movies" && <MoviesGrid movies={data.movies} />}
            {activeTab === "Music" && <MusicGrid music={data.music} />}
            {activeTab === "Books" && <BooksGrid books={data.books} />}
            {activeTab === "Interests" && (
              <InterestsPills interests={data.interests} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Movies ─── */

function MoviesGrid({ movies }: { movies: Movie[] }) {
  const [activeMovie, setActiveMovie] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie, i) => {
        const isActive = activeMovie === i;
        return (
          <div
            key={movie.title}
            className="group relative aspect-[2/3] cursor-pointer overflow-hidden rounded-xl border border-border bg-card-bg"
            onClick={() => setActiveMovie(isActive ? null : i)}
          >
            {/* Default: title + year */}
            <div className="flex h-full flex-col items-center justify-center p-2 text-center">
              <span className="font-mono text-xs text-muted">
                {movie.title}
              </span>
              <span className="mt-1 font-mono text-[10px] text-muted/60">
                {movie.year}
              </span>
            </div>

            {/* Hover / active: poster */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                isActive
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className={`h-full w-full object-cover transition-transform duration-500 ${
                  isActive
                    ? "scale-100"
                    : "scale-105 group-hover:scale-100"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 pt-8">
                <p className="font-mono text-xs font-medium text-white">
                  {movie.title}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-white/70">
                  {movie.year}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Music ─── */

function MusicGrid({ music }: { music: MusicEntry[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {music.map((entry) => (
        <div
          key={`${entry.artist}-${entry.album}`}
          className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-border bg-card-bg transition-transform duration-200 hover:scale-[1.03]"
        >
          <img
            src={entry.cover}
            alt={`${entry.artist} - ${entry.album}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          {/* Default overlay: artist + album */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-10">
            <p className="font-mono text-xs font-medium text-white">
              {entry.artist}
            </p>
            <p className="mt-0.5 font-mono text-[10px] text-white/70">
              {entry.album}
            </p>
          </div>
          {/* Hover overlay: note */}
          <div className="absolute inset-0 flex items-end bg-black/70 p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <p className="font-mono text-xs leading-relaxed text-white/90">
              {entry.note}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Books ─── */

function BooksGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {books.map((book) => (
        <div
          key={book.title}
          className="group relative aspect-[2/3] cursor-pointer overflow-hidden rounded-xl border border-border bg-card-bg"
        >
          <img
            src={book.cover}
            alt={`${book.title} by ${book.author}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          {/* Default: author at bottom */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-10">
            <p className="font-mono text-xs font-medium text-white">
              {book.title}
            </p>
            <p className="mt-0.5 font-mono text-[10px] text-white/70">
              {book.author}
            </p>
          </div>
          {/* Hover: note slides up */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 via-black/70 to-black/50 p-3 pt-6 transition-transform duration-300 group-hover:translate-y-0">
            <p className="font-mono text-xs font-medium text-white">
              {book.title}
            </p>
            <p className="mt-1 font-mono text-[10px] leading-relaxed text-white/80">
              {book.note}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Interests ─── */

function InterestsPills({ interests }: { interests: Interest[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-3">
      {interests.map((interest) => {
        const isExpanded = expanded === interest.label;
        return (
          <motion.div
            key={interest.label}
            layout
            className="cursor-pointer overflow-hidden rounded-full border border-border bg-card-bg"
            onClick={() =>
              setExpanded(isExpanded ? null : interest.label)
            }
          >
            <motion.div layout className="flex items-center gap-2 px-4 py-2">
              <span>{interest.emoji}</span>
              <span className="font-mono text-sm text-foreground">
                {interest.label}
              </span>
            </motion.div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-3 font-mono text-xs leading-relaxed text-muted">
                    {interest.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
