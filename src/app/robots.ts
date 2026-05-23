import { baseURL } from "@/app/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: `https://${baseURL}/sitemap.xml`,
    host: `https://${baseURL}`,
  };
}
