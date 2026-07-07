import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Font passthrough — Syne (display), Newsreader (serif), Space Mono (mono)
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/syne/files/syne-latin-600-normal.woff2": "fonts/syne-latin-600-normal.woff2",
    "node_modules/@fontsource/syne/files/syne-latin-700-normal.woff2": "fonts/syne-latin-700-normal.woff2",
    "node_modules/@fontsource/syne/files/syne-latin-800-normal.woff2": "fonts/syne-latin-800-normal.woff2",
    "node_modules/@fontsource/newsreader/files/newsreader-latin-300-normal.woff2": "fonts/newsreader-latin-300-normal.woff2",
    "node_modules/@fontsource/newsreader/files/newsreader-latin-400-normal.woff2": "fonts/newsreader-latin-400-normal.woff2",
    "node_modules/@fontsource/newsreader/files/newsreader-latin-400-italic.woff2": "fonts/newsreader-latin-400-italic.woff2",
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
    });
  });

  eleventyConfig.addFilter("dateToRfc3339", (date) => {
    return new Date(date).toISOString();
  });

  eleventyConfig.addFilter("pad2", (n) => String(n).padStart(2, "0"));

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
      title: "FALSE COLOR",
      subtitle: "A personal magazine by Aneesh Simha — software, taste, ambition, and the material future.",
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
