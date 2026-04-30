import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy("src/css");

  // Font passthrough
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff2": "fonts/dm-serif-display-latin-400-normal.woff2",
    "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2": "fonts/inter-latin-400-normal.woff2",
    "node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2": "fonts/inter-latin-500-normal.woff2",
    "node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2": "fonts/inter-latin-600-normal.woff2",
    "node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2": "fonts/jetbrains-mono-latin-400-normal.woff2",
  });

  // Reading time filter
  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return 1;
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 230));
  });

  // Date format filter
  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  });

  // RFC 3339 date filter (for datetime attributes and RSS)
  eleventyConfig.addFilter("dateToRfc3339", (date) => {
    return new Date(date).toISOString();
  });

  // Collections
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/writing/*.md").reverse();
  });

  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/work/*.md").sort((a, b) => {
      return (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0);
    });
  });

  // Images passthrough
  eleventyConfig.addPassthroughCopy("src/images");

  // RSS feed
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: { name: "posts", limit: 20 },
    metadata: {
      language: "en",
      title: "Aneesh Simha",
      subtitle: "Building software. Writing occasionally.",
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
