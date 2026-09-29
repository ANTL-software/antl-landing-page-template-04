export type Link = { label: string; href: string };

export type ImageAsset = { src: string; alt: string; position?: string };

export type Vehicle = {
  name: string;
  year: string;
  description: string;
  image: ImageAsset;
  href: string;
};

export type SiteSectionId = "collection" | "story" | "approach" | "contact";

export type VehicleSite = {
  brand: string;
  navigation: readonly Link[];
  headerCta: Link;
  hero: { eyebrow: string; title: string; text: string; cta: Link; image: ImageAsset };
  collection: { eyebrow: string; title: string; text: string; items: readonly Vehicle[] };
  story: { eyebrow: string; title: string; text: string; image: ImageAsset; fact: string };
  approach: { eyebrow: string; title: string; steps: readonly { number: string; title: string; text: string }[] };
  contact: { eyebrow: string; title: string; text: string; cta: Link; note: string };
  footer: { city: string; email: string; copyright: string };
  sections: readonly { id: SiteSectionId; enabled: boolean }[];
};
