import { SpeciesCard, SpeciesCollection } from '../types/species';

// Import card images (WebP optimized)
import BarnOwlCard from '@/assets/cards/Barn Owl.webp';
import HedgehogCard from '@/assets/cards/European Hedgehog.webp';
import BadgerCard from '@/assets/cards/Badger.webp';
import PineMartinCard from '@/assets/cards/Pine Martin.webp';
import RedSquirrelCard from '@/assets/cards/Red Squirrel.webp';
import PalmateNewtCard from '@/assets/cards/Palmate Newt.webp';
import PipistrelleBatCard from '@/assets/cards/Pipistrelle Bat.webp';
import LesserSpottedWoodpeckerCard from '@/assets/cards/Lesser Spotted Woodpecker.webp';
import GardenBumblebeeCard from '@/assets/cards/Garden Bumblebee.webp';
import TansyBeetleCard from '@/assets/cards/Tansy Beetle.webp';
import SwallowtailCard from '@/assets/cards/Native British Swallowtail.webp';
import BlackPoplarCard from '@/assets/cards/Black Poplar.webp';
import WildServiceTreeCard from '@/assets/cards/Wild Service Tree.webp';
import HorsehairLichenCard from '@/assets/cards/Horsehair Lichen.webp';
import HarbourPorpoiseCard from '@/assets/cards/Harbour Porpose.webp';
import SeahorseCard from '@/assets/cards/Short-snouted Seahorse.webp';

// All species available (discovered)
const allSpecies: SpeciesCard[] = [
  {
    id: 'lesser-spotted-woodpecker',
    commonName: 'Lesser Spotted Woodpecker',
    scientificName: 'Dryobates minor',
    imageUrl: LesserSpottedWoodpeckerCard,
    conservationStatus: 'Endangered',
    habitat: 'Woodland',
    funFact: 'Britain\'s smallest woodpecker, about the size of a sparrow',
    discoveredDate: '2024-12-05T10:15:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'barn-owl',
    commonName: 'Barn Owl',
    scientificName: 'Tyto alba',
    imageUrl: BarnOwlCard,
    conservationStatus: 'Least Concern',
    habitat: 'Grassland & Farmland',
    funFact: 'Can locate prey in complete darkness using hearing alone',
    discoveredDate: '2025-03-15T10:30:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'european-hedgehog',
    commonName: 'European Hedgehog',
    scientificName: 'Erinaceus europaeus',
    imageUrl: HedgehogCard,
    conservationStatus: 'Vulnerable',
    habitat: 'Woodland & Gardens',
    funFact: 'Has around 5,000 to 7,000 spines on its back',
    discoveredDate: '2025-03-10T14:20:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'badger',
    commonName: 'European Badger',
    scientificName: 'Meles meles',
    imageUrl: BadgerCard,
    conservationStatus: 'Least Concern',
    habitat: 'Woodland',
    funFact: 'Lives in family groups called clans in underground setts',
    discoveredDate: '2025-02-28T09:15:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'pine-martin',
    commonName: 'Pine Marten',
    scientificName: 'Martes martes',
    imageUrl: PineMartinCard,
    conservationStatus: 'Least Concern',
    habitat: 'Woodland',
    funFact: 'Excellent climber and can leap up to 4 meters between trees',
    discoveredDate: '2025-02-15T16:45:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'red-squirrel',
    commonName: 'Red Squirrel',
    scientificName: 'Sciurus vulgaris',
    imageUrl: RedSquirrelCard,
    conservationStatus: 'Endangered',
    habitat: 'Woodland',
    funFact: 'Native to Britain but declining due to grey squirrel competition',
    discoveredDate: '2025-01-20T11:00:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'palmate-newt',
    commonName: 'Palmate Newt',
    scientificName: 'Lissotriton helveticus',
    imageUrl: PalmateNewtCard,
    conservationStatus: 'Least Concern',
    habitat: 'Wetland & Ponds',
    funFact: 'Males develop webbed hind feet during breeding season',
    discoveredDate: '2025-01-10T09:30:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'pipistrelle-bat',
    commonName: 'Common Pipistrelle',
    scientificName: 'Pipistrellus pipistrellus',
    imageUrl: PipistrelleBatCard,
    conservationStatus: 'Least Concern',
    habitat: 'Woodland & Urban',
    funFact: 'Britain\'s smallest and most common bat species',
    discoveredDate: '2024-12-20T18:45:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'garden-bumblebee',
    commonName: 'Garden Bumblebee',
    scientificName: 'Bombus hortorum',
    imageUrl: GardenBumblebeeCard,
    conservationStatus: 'Vulnerable',
    habitat: 'Gardens & Meadows',
    funFact: 'Has one of the longest tongues of any UK bumblebee',
    discoveredDate: '2024-11-15T12:00:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'tansy-beetle',
    commonName: 'Tansy Beetle',
    scientificName: 'Chrysolina graminis',
    imageUrl: TansyBeetleCard,
    conservationStatus: 'Endangered',
    habitat: 'Wetland',
    funFact: 'Metallic green beetle found only along the River Ouse',
    discoveredDate: '2024-11-01T10:30:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'swallowtail',
    commonName: 'Swallowtail Butterfly',
    scientificName: 'Papilio machaon',
    imageUrl: SwallowtailCard,
    conservationStatus: 'Vulnerable',
    habitat: 'Wetland',
    funFact: 'Britain\'s largest butterfly, found only in the Norfolk Broads',
    discoveredDate: '2024-10-20T14:15:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'black-poplar',
    commonName: 'Black Poplar',
    scientificName: 'Populus nigra',
    imageUrl: BlackPoplarCard,
    conservationStatus: 'Critically Endangered',
    habitat: 'Wetland',
    funFact: 'One of Britain\'s rarest native timber trees',
    discoveredDate: '2024-09-15T11:30:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'wild-service-tree',
    commonName: 'Wild Service Tree',
    scientificName: 'Sorbus torminalis',
    imageUrl: WildServiceTreeCard,
    conservationStatus: 'Vulnerable',
    habitat: 'Ancient Woodland',
    funFact: 'Indicator species of ancient woodland',
    discoveredDate: '2024-09-01T13:45:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'horsehair-lichen',
    commonName: 'Horsehair Lichen',
    scientificName: 'Bryoria fuscescens',
    imageUrl: HorsehairLichenCard,
    conservationStatus: 'Vulnerable',
    habitat: 'Ancient Woodland',
    funFact: 'Indicates ancient woodland and clean air',
    discoveredDate: '2024-08-20T10:00:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'harbour-porpoise',
    commonName: 'Harbour Porpoise',
    scientificName: 'Phocoena phocoena',
    imageUrl: HarbourPorpoiseCard,
    conservationStatus: 'Vulnerable',
    habitat: 'Coastal Waters',
    funFact: 'Britain\'s smallest cetacean, often seen close to shore',
    discoveredDate: '2024-08-01T15:30:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  },
  {
    id: 'seahorse',
    commonName: 'Short-snouted Seahorse',
    scientificName: 'Hippocampus hippocampus',
    imageUrl: SeahorseCard,
    conservationStatus: 'Vulnerable',
    habitat: 'Seagrass Beds',
    funFact: 'Males carry and give birth to the young',
    discoveredDate: '2024-07-15T12:00:00Z',
    projectId: 'rewilding-hampshire',
    isUnlocked: true
  }
];

export const mockSpeciesCollection: SpeciesCollection = {
  discovered: allSpecies,
  locked: [],
  totalSpecies: allSpecies.length
};

// Helper function to get conservation status color
export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Least Concern':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'Near Threatened':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'Vulnerable':
      return 'bg-orange-100 text-orange-800 border-orange-300';
    case 'Endangered':
      return 'bg-red-100 text-red-800 border-red-300';
    case 'Critically Endangered':
      return 'bg-red-200 text-red-900 border-red-400';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};
