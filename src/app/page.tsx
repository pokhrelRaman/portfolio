import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = `${person.name} - Indie Game Developer | Multiplayer & Gameplay Systems`;
  const description = `${person.name} is an indie and Nepali game developer specializing in multiplayer games, gameplay systems, and mobile game development. 4+ years of professional experience in game engineering.`;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords: [
      "Raman Pokhrel",
      "game developer",
      "indie game developer",
      "Nepali game developer",
      "multiplayer games",
      "gameplay systems",
      "game programmer",
      "mobile games",
      "game engineering",
      "C# developer",
    ].join(", "),
    authors: [{ name: person.name, url: `https://${baseURL}` }],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      siteName: `${person.name} - Game Developer Portfolio`,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          alt: title,
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@ramanpokhrel",
    },
    alternates: {
      canonical: `https://${baseURL}`,
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: `${person.name} - Game Developer Portfolio`,
            description: `Professional portfolio of ${person.name}, an indie game developer specializing in multiplayer experiences and gameplay systems.`,
            url: `https://${baseURL}`,
            mainEntity: {
              "@type": "Person",
              name: person.name,
              givenName: person.firstName,
              familyName: person.lastName,
              url: `https://${baseURL}`,
              image: `https://${baseURL}${person.avatar}`,
              jobTitle: person.role,
              sameAs: [
                "https://www.linkedin.com/in/raman-pokhrel-3810242b6",
              ],
              location: {
                "@type": "Place",
                name: person.location,
              },
              knowsAbout: [
                "Game Development",
                "C# Programming",
                "Multiplayer Games",
                "Gameplay Systems",
                "Mobile Game Development",
                "Game Architecture",
                "Performance Optimization",
                "Indie Game Development",
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `https://${baseURL}`,
              },
            ],
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
