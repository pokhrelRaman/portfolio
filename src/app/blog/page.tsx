import { Column, Flex, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";

export async function generateMetadata() {
  const title = `${person.name}'s Blog - Game Development Insights`;
  const description = `Read articles and insights about game development from ${person.name}, covering multiplayer systems, gameplay design, performance optimization, and indie game development.`;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords: [
      "game development blog",
      "game design articles",
      "multiplayer game development",
      "gameplay systems",
      "game programming",
      "indie game development",
      "game optimization",
    ].join(", "),
    authors: [{ name: person.name, url: `https://${baseURL}` }],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
      siteName: `${person.name} - Blog`,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          alt: title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://${baseURL}/blog`,
    },
  };
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1}>
        <Posts range={[1, 3]} thumbnail />
        <Posts range={[4]} columns="2" />
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
