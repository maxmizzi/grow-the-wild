import { Project } from '@/types/project';
import ancientWoodlandImage from '@/assets/project-assets/ancientwoodland.jpg';
import meadowImage from '@/assets/project-assets/meadowing.png';
import hedgeImage from '@/assets/project-assets/hedge.jpg';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Restoring Ancient Woodland in the Cotswolds',
    summary: 'Bring back 500 years of biodiversity to a 12-hectare ancient woodland site through native species planting and habitat restoration.',
    description: `This project focuses on restoring a neglected ancient woodland site in the heart of the Cotswolds AONB. Over the past 50 years, invasive species have taken hold and native flora has declined dramatically.

Our restoration plan includes:
• Removal of invasive species like rhododendron and laurel
• Planting of 5,000 native trees and shrubs (oak, hazel, holly, field maple)
• Creation of woodland edge habitat for butterflies and pollinators
• Installation of bird and bat boxes to support wildlife recovery
• Long-term monitoring and management for 10 years

The site connects to existing ancient woodland, creating a vital wildlife corridor. Local schools will be involved in monitoring biodiversity recovery, and the woodland will be opened for community access with new footpaths.`,
    project_type: 'ancient_woodland_restoration',
    habitat_type: 'ancient_woodland',
    location: {
      latitude: 51.8330,
      longitude: -1.8433,
      region: 'Cotswolds, Gloucestershire',
      privacy_level: 'region',
    },
    funding: {
      price_per_lot: 20000, // £200.00
      total_lots: 150,
      lots_sponsored: 52,
      currency: 'GBP',
    },
    lot_definition: {
      size: 25,
      unit: 'sqm',
      description: 'per 25 square metres of woodland',
    },
    duration: {
      months: 24,
      start_date: new Date('2024-03-01'),
      end_date: new Date('2026-03-01'),
    },
    goals: [
      {
        title: 'Remove invasive species',
        description: 'Clear rhododendron and laurel from entire 12-hectare site',
        target_metric: '12 hectares cleared',
        status: 'in_progress',
      },
      {
        title: 'Plant native species',
        description: 'Establish 5,000 native trees and shrubs',
        target_metric: '5,000 plants',
        status: 'pending',
      },
      {
        title: 'Increase biodiversity',
        description: 'Document 50% increase in woodland bird species',
        target_metric: '15 species recorded',
        status: 'pending',
      },
      {
        title: 'Community engagement',
        description: 'Engage 5 local schools in monitoring program',
        target_metric: '5 schools participating',
        status: 'pending',
      },
    ],
    primary_image: ancientWoodlandImage,
    status: 'published',
    owner_id: 'owner_1',
    created_at: new Date('2024-01-15'),
    updated_at: new Date('2024-10-20'),
  },
  {
    id: '2',
    title: 'Creating a Wildflower Meadow Haven in Somerset',
    summary: 'Transform 8 hectares of intensive farmland into species-rich wildflower meadow, providing critical habitat for pollinators and farmland birds.',
    description: `This ambitious meadow creation project will convert arable farmland back to traditional hay meadow, reversing decades of agricultural intensification.

The project includes:
• Soil preparation and reduction of nutrient levels
• Sowing of locally-sourced wildflower and grass seed mixes
• Creation of beetle banks and field margins
• Annual hay cutting to maintain meadow diversity
• Installation of hedgerow nesting sites for birds
• 5-year establishment and monitoring program

Somerset has lost over 97% of its traditional hay meadows since the 1930s. This project will create vital stepping-stone habitat connecting existing nature reserves and support nationally declining species including skylarks, lapwings, and brown hares.

The meadow will be managed using traditional methods, with an annual hay cut in July followed by aftermath grazing. Public access will be provided via a new permissive footpath.`,
    project_type: 'meadow_creation',
    habitat_type: 'meadow',
    location: {
      latitude: 51.0545,
      longitude: -2.7266,
      region: 'Somerset Levels',
      privacy_level: 'region',
    },
    funding: {
      price_per_lot: 15000, // £150.00
      total_lots: 80,
      lots_sponsored: 39,
      currency: 'GBP',
    },
    lot_definition: {
      size: 10,
      unit: 'sqm',
      description: 'per 10 square metres of meadow',
    },
    duration: {
      months: 12,
      start_date: new Date('2024-09-01'),
      end_date: new Date('2025-09-01'),
    },
    goals: [
      {
        title: 'Establish diverse meadow',
        description: 'Achieve 30+ flowering plant species per square metre',
        target_metric: '30+ species/sqm',
        status: 'in_progress',
      },
      {
        title: 'Support pollinators',
        description: 'Record 15+ butterfly species using the meadow',
        target_metric: '15 butterfly species',
        status: 'pending',
      },
      {
        title: 'Restore farmland birds',
        description: 'Establish breeding populations of skylarks and lapwings',
        target_metric: '10 breeding pairs',
        status: 'pending',
      },
      {
        title: 'Seed bank development',
        description: 'Harvest and distribute local provenance seed',
        target_metric: '50kg seed collected',
        status: 'pending',
      },
    ],
    primary_image: meadowImage,
    status: 'published',
    owner_id: 'owner_2',
    created_at: new Date('2024-06-10'),
    updated_at: new Date('2024-10-18'),
  },
  {
    id: '3',
    title: 'Traditional Hedgerow Network Restoration in Devon',
    summary: 'Restore and reconnect 5km of ancient Devon hedgerows, creating wildlife corridors and carbon storage while preserving cultural heritage.',
    description: `Devon's iconic hedgerow networks are critical wildlife corridors, but many have been neglected or removed. This project will restore 5 kilometres of traditional Devon hedgerows across three connected farms.

Key activities:
• Gapping up existing hedgerows with 10,000 native plants
• Laying overgrown hedges using traditional techniques
• Planting new hedgerows to reconnect fragmented sections
• Creating wide field margins for wildflowers and insects
• Training volunteers in traditional hedge management skills
• Long-term rotational management plan

Devon hedgerows are biodiversity hotspots, supporting over 600 plant species, 1,500 insects, 65 birds and 20 mammals. They also store significant carbon - each kilometre locks up around 30 tonnes of CO2.

This project reconnects isolated woodland patches, allowing species like dormice, hedgehogs and song thrushes to move safely across the landscape. The restored hedgerows will be managed on a 10-15 year rotation using traditional laying techniques.`,
    project_type: 'hedge_planting',
    habitat_type: 'hedgerow',
    location: {
      latitude: 50.7184,
      longitude: -3.5339,
      region: 'South Devon',
      privacy_level: 'region',
    },
    funding: {
      price_per_lot: 10000, // £100.00
      total_lots: 100,
      lots_sponsored: 17,
      currency: 'GBP',
    },
    lot_definition: {
      size: 10,
      unit: 'metres',
      description: 'per 10 metres of hedgerow',
    },
    duration: {
      months: 12,
      start_date: new Date('2025-01-01'),
      end_date: new Date('2026-01-01'),
    },
    goals: [
      {
        title: 'Plant hedgerow network',
        description: 'Establish 5km of connected hedgerow habitat',
        target_metric: '5km planted',
        status: 'pending',
      },
      {
        title: 'Dormouse populations',
        description: 'Confirm dormouse presence in restored corridors',
        target_metric: 'Dormice detected',
        status: 'pending',
      },
      {
        title: 'Carbon sequestration',
        description: 'Lock up 150 tonnes of CO2 in hedgerow biomass',
        target_metric: '150 tonnes CO2',
        status: 'pending',
      },
      {
        title: 'Skills training',
        description: 'Train 50 volunteers in hedge laying techniques',
        target_metric: '50 people trained',
        status: 'pending',
      },
    ],
    primary_image: hedgeImage,
    status: 'published',
    owner_id: 'owner_3',
    created_at: new Date('2024-09-01'),
    updated_at: new Date('2024-10-21'),
  },
];
