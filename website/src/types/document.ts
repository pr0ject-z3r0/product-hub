export interface Document {
  id: string;
  slug: string;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
  order?: number;
}