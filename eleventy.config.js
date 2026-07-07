import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Font passthrough — Fraunces (serif/display), Space Mono (mono)
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/fraunces/files/fraunces-latin-300-normal.woff2": "fonts/fraunces-latin-300-normal.woff2",
    "node_modules/@fontsource/fraunces/files/fraunces-latin-400-normal.woff2": "fonts/fraunces-latin-400-normal.woff2",
    "node_modules/@fontsource/fraunces/files/fraunces-latin-600-normal.woff2": "fonts/fraunces-latin-600-normal.woff2",
    "node_modules/@fontsource/fraunces/files/fraunces-latin-300-italic.woff2": "fonts/fraunces-latin-300-italic.woff2",
    "node_modules/@fontsource/fraunces/files/fraunces-latin-400-italic.woff2": "fonts/fraunces-latin-400-italic.woff2",
    "node_modules/@fontsource/space-mono/files/space-mono-latin-400-normal.woff2": "fonts/space-mono-latin-400-normal.woff2",
    "node_modules/@fontsource/space-mono/files/space-mono-latin-700-normal.woff2": "fonts/space-mono-latin-700-normal.woff2",
  });

  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return 1;
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 230));
  });

  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("dateToRfc3339", (date) => {
    return new Date(date).toISOString();
  });

  eleventyConfig.addFilter("pad2", (n) => String(n).padStart(2, "0"));

  // Relative date for the home page — single unit, floored: today, 2d, 3w, 2mo, 1y
  eleventyConfig.addFilter("timeAgo", (date) => {
    const now = new Date();
    const then = new Date(date);
    const days = Math.floor(
      (Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) -
        Date.UTC(then.getUTCFullYear(), then.getUTCMonth(), then.getUTCDate())) /
        86400000
    );
    if (days < 1) return "today";
    if (days >= 365) return `${Math.floor(days / 365)}y`;
    if (days >= 30) return `${Math.floor(days / 30)}mo`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    return `${days}d`;
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/writing/*.md").reverse();
  });

  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/work/*.md").sort((a, b) => {
      return (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0);
    });
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: { name: "posts", limit: 20 },
    metadata: {
      language: "en",
      title: "Aneesh Simha",
      subtitle: "Field notes on systems, taste, and the material future.",
      base: "https://aneesh.world/",
      author: { name: "Aneesh Simha" },
    },
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
