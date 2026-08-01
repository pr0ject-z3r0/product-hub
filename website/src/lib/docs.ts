import type { Document } from "../types/document";

const docs: Document[] = [
  {
    id: "prd",
    slug: "product-requirements-document",
    title: "Product Requirements Document",
    description: "Defines the vision, goals and scope of Product Hub.",
    category: "Planning",
    tags: ["PRD", "MVP"],
    order: 1,
  },
];

export function getAllDocs(): Document[] {
  return [...docs].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function getDocBySlug(slug: string): Document | undefined {
  return docs.find((doc) => doc.slug === slug);
}