import { useState, useEffect, useRef, useCallback } from "react";

const SCRAMBLE_CHARS = "!@#$%^&*_+-=<>?~";
const SCRAMBLE_INTERVAL = 50;

interface TextScrambleProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function TextScramble({
  text,
  delay = 0,
  duration = 800,
  className,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(() =>
    text
      .split("")
      .map(() => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)])
      .join("")
  );
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const lastScrambleRef = useRef<number>(0);

  const animate = useCallback(
    (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const resolvedCount = Math.floor(progress * text.length);

      // Only update display when we need a new scramble frame (~50ms) or new chars resolved
      if (
        timestamp - lastScrambleRef.current >= SCRAMBLE_INTERVAL ||
        progress >= 1
      ) {
        lastScrambleRef.current = timestamp;

        const chars: string[] = [];
        for (let i = 0; i < text.length; i++) {
          if (i < resolvedCount) {
            chars.push(text[i]);
          } else {
            chars.push(
              SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
            );
          }
        }
        setDisplay(chars.join(""));
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    },
    [text, duration]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animate, delay]);

  return <span className={className}>{display}</span>;
}
