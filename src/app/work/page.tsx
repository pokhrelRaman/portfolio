import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";

export async function generateMetadata() {
  const title = `${person.name}'s Portfolio - Game Development Projects`;
  const description = `Explore ${person.name}'s professional game development portfolio featuring multiplayer games, gameplay systems, and indie projects. 4+ years of game engineering experience.`;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords: [
      "game development portfolio",
      "multiplayer games",
      "gameplay systems",
      "indie game projects",
      "game development examples",
      "Raman Pokhrel projects",
      "game programmer portfolio",
    ].join(", "),
    authors: [{ name: person.name, url: `https://${baseURL}` }],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/`,
      siteName: `${person.name} - Portfolio`,
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
      canonical: `https://${baseURL}/work`,
    },
  };
}

export default function Work() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      <Projects />
    </Column>
  );
}
