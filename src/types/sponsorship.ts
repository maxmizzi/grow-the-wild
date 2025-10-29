export interface Sponsorship {
  id: string;
  user_id: string;
  project_id: string;
  lot_count: number;
  amount_paid: number;
  currency: string;
  timestamp: string;
  status: 'active' | 'completed';
}

export interface ProjectUpdate {
  id: string;
  project_id: string;
  title: string;
  body: string;
  published_at: string;
  visibility: 'public' | 'sponsor_only';
  media_url?: string;
  media_caption?: string;
  highlights?: string[];
}

export interface SponsorshipWithProject {
  sponsorship: Sponsorship;
  project: {
    id: string;
    title: string;
    summary: string;
    image_url: string;
    habitat_type: string;
    location: string;
    funding_target: number;
    total_lots: number;
    lots_sold: number;
    lot_size_sqm: number;
  };
  updates: ProjectUpdate[];
}
