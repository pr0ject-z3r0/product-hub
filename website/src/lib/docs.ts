
export interface DocPage {
  slug: string;
  title: string;
  description?: string;
}

const docs: DocPage[] = [
  {
    slug: "product-requirements-document",
    title: "Product Requirements Document",
    description: "Defines the vision, scope, goals, and requirements for Product Hub.",
  },
];

export function getAllDocs(): DocPage[] {
  return docs;
}

export function getDocBySlug(slug: string): DocPage | undefined {
  return docs.find((doc) => doc.slug === slug);
}