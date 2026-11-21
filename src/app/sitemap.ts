export default function sitemap() {
  const base = "https://abbhotels.in";

  return [
    {
      url: `${base}/`,
      lastModified: new Date("2026-11-20T10:28:22+00:00"),
      changeFrequency: "yearly",
      priority: 1.0,
    },
  ];
}
