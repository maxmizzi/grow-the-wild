// Project Types and Enums

export type ProjectType = 
  | 'ancient_woodland_restoration'
  | 'native_woodland_creation'
  | 'meadow_creation'
  | 'agricultural_rewilding'
  | 'pond_creation'
  | 'species_reintroduction'
  | 'hedge_planting'
  | 'wildlife_garden_creation';

export type HabitatType = 
  | 'meadow'
  | 'woodland'
  | 'ancient_woodland'
  | 'hedgerow'
  | 'pond'
  | 'reedbed'
  | 'wetland'
  | 'grassland'
  | 'heathland'
  | 'coastal'
  | 'garden';

export type LocationPrivacy = 'hidden' | 'region' | 'precise';

export type ProjectStatus = 'draft' | 'pending_review' | 'published' | 'archived';

export type GoalStatus = 'pending' | 'in_progress' | 'completed';

export interface Goal {
  title: string;
  description: string;
  target_metric?: string;
  status?: GoalStatus;
}

export interface Location {
  latitude: number | null;
  longitude: number | null;
  region: string;
  privacy_level: LocationPrivacy;
}

export interface Funding {
  price_per_lot: number; // in pence
  total_lots: number;
  lots_sponsored: number;
  currency: 'GBP';
}

export interface LotDefinition {
  size: number;
  unit: string;
  description: string;
}

export interface Duration {
  months: number;
  start_date: Date | null;
  end_date: Date | null;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  project_type: ProjectType;
  habitat_type: HabitatType;
  location: Location;
  funding: Funding;
  lot_definition: LotDefinition;
  duration: Duration;
  goals: Goal[];
  primary_image: string;
  status: ProjectStatus;
  owner_id: string;
  created_at: Date;
  updated_at: Date;
}

// Utility functions for calculated fields
export const getProjectFundingTarget = (project: Project): number => {
  return project.funding.price_per_lot * project.funding.total_lots;
};

export const getProjectFunded = (project: Project): number => {
  return project.funding.price_per_lot * project.funding.lots_sponsored;
};

export const getProjectFundingPercentage = (project: Project): number => {
  if (project.funding.total_lots === 0) return 0;
  return (project.funding.lots_sponsored / project.funding.total_lots) * 100;
};

export const formatCurrency = (amountInPence: number): string => {
  return `£${(amountInPence / 100).toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

// Display name helpers
export const getProjectTypeLabel = (type: ProjectType): string => {
  const labels: Record<ProjectType, string> = {
    ancient_woodland_restoration: 'Ancient Woodland Restoration',
    native_woodland_creation: 'Native Woodland Creation',
    meadow_creation: 'Meadow Creation',
    agricultural_rewilding: 'Agricultural Rewilding',
    pond_creation: 'Pond Creation',
    species_reintroduction: 'Species Re-introduction',
    hedge_planting: 'Hedge Planting',
    wildlife_garden_creation: 'Wildlife Garden Creation',
  };
  return labels[type];
};

export const getHabitatTypeLabel = (type: HabitatType): string => {
  const labels: Record<HabitatType, string> = {
    meadow: 'Meadow',
    woodland: 'Woodland',
    ancient_woodland: 'Ancient Woodland',
    hedgerow: 'Hedgerow',
    pond: 'Pond',
    reedbed: 'Reedbed',
    wetland: 'Wetland',
    grassland: 'Grassland',
    heathland: 'Heathland',
    coastal: 'Coastal',
    garden: 'Garden',
  };
  return labels[type];
};
