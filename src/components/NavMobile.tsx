import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

export default function NavMobile({ links, pathname }: { links: NavLink[]; pathname: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="text-foreground"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" />
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed left-0 right-0 top-[57px] border-t border-border bg-background px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`group block py-2 font-mono text-sm transition-colors ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span className={`bracket ${pathname === link.href ? "opacity-100" : "opacity-40 group-hover:opacity-80"}`}>[</span>
              {link.label}
              <span className={`bracket ${pathname === link.href ? "opacity-100" : "opacity-40 group-hover:opacity-80"}`}>]</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
