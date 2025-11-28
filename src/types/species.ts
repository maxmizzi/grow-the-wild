export type ConservationStatus = 
  | 'Least Concern'
  | 'Near Threatened'
  | 'Vulnerable'
  | 'Endangered'
  | 'Critically Endangered';

export interface SpeciesCard {
  id: string;
  commonName: string;
  scientificName: string;
  imageUrl: string;
  conservationStatus: ConservationStatus;
  habitat: string;
  funFact: string;
  discoveredDate: string; // ISO date string
  projectId: string;
  isUnlocked: boolean;
}

export interface SpeciesCollection {
  discovered: SpeciesCard[];
  locked: SpeciesCard[];
  totalSpecies: number;
}
