import { Sponsorship, SponsorshipWithProject } from '@/types/sponsorship';
import ancientWoodlandImage from '@/assets/project-assets/ancientwoodland.webp';
import treePlantingImage from '@/assets/project-assets/tree-project-update.webp';
import badgerImage from '@/assets/project-assets/badger.webp';
import oakImage from '@/assets/project-assets/oak.webp';
import englandWoodImage from '@/assets/project-assets/england-wood.webp';
import fungiImage from '@/assets/project-assets/fungi.webp';

export const mockSponsorship: SponsorshipWithProject = {
  sponsorship: {
    id: 'sp-001',
    user_id: 'user-demo',
    project_id: '1',
    lot_count: 3,
    amount_paid: 60000, // £600 in pence
    currency: 'GBP',
    timestamp: '2025-08-15T10:30:00Z',
    status: 'active',
  },
  project: {
    id: '1',
    title: 'West Sussex Woodland Restoration',
    summary: 'Restore 10 hectares of ancient woodland in West Sussex',
    image_url: englandWoodImage,
    habitat_type: 'Ancient Woodland',
    location: 'West Sussex',
    funding_target: 20000,
    total_lots: 100,
    lots_sold: 58,
    lot_size_sqm: 1000,
  },
  updates: [
    {
      id: 'update-004',
      project_id: '1',
      title: 'Species Spotlight: Badgers Return to the Woodland',
      body: `Wonderful news from our camera traps - we've recorded badger activity on the restoration site! This is a significant indicator of ecosystem health and we wanted to share what makes this discovery so special.

**Badger Basics:**
Badgers (Meles meles) are one of the UK's most iconic mammals. These nocturnal creatures are members of the mustelid family, related to otters, weasels, and pine martens.

**Why Badgers Matter:**
🌱 **Ecosystem Engineers**: Badgers create extensive sett systems that provide homes for other species including rabbits, foxes, and even birds
🐛 **Pest Control**: A single badger can eat hundreds of beetles, grubs, and slugs each night, naturally managing invertebrate populations
🌰 **Seed Dispersal**: By foraging for fruits and nuts, badgers help spread plant seeds throughout the woodland
🦠 **Soil Health**: Their digging aerates soil and distributes nutrients, improving forest floor ecology

**What This Means for Our Project:**
Finding badgers this early in our restoration is exceptional. Their presence indicates:
- Healthy invertebrate populations (their primary food source)
- Suitable underground conditions for sett building
- Connected habitat allowing wildlife movement
- Reduced human disturbance

Badgers are highly territorial and their setts can be used by families for generations - sometimes over 100 years! We've marked their activity zones for protection during ongoing restoration work.

**Did You Know?**
A badger sett can have dozens of entrances and hundreds of metres of tunnels. They're meticulous housekeepers, regularly changing their bedding (grass and leaves) and maintaining separate latrine areas away from their sleeping chambers!

We'll continue monitoring this family group and sharing updates on their activities throughout the seasons.`,
      published_at: '2025-10-20T09:00:00Z',
      visibility: 'sponsor_only',
      media_url: badgerImage,
      media_caption: 'Camera trap image capturing badger emerging from sett at dusk',
      highlights: ['Badger family discovered', 'Ecosystem engineers', 'Pest control service', 'Seed dispersal', 'Soil health'],
    },
    {
      id: 'update-005',
      project_id: '1',
      title: 'Autumn Fungi Survey: A Hidden World Revealed',
      body: `Autumn has arrived at our restoration site, and with it comes the most spectacular fungi season we could have hoped for! Our recent survey has documented over 20 different fungal species fruiting across the woodland - a fantastic indicator of ecosystem health.

**Star Find: Bearded Tooth (Hericium erinaceus)**
Among the many species recorded, we were thrilled to discover the Bearded Tooth fungus growing on a veteran oak. This rare saprotroph is classified as Near Threatened in the UK and is a true indicator of ancient woodland. Finding it here validates the ecological importance of our restoration work.

**Other Notable Species:**
We've also documented Fly Agaric, various Russulas, Honey Fungus, Dead Man's Fingers, and multiple bracket fungi species including Turkey Tail and Artist's Bracket. Each plays a vital role in the woodland ecosystem.

**The Invisible Majority:**
What we see as mushrooms is merely the fruiting body - think of it as the apple on a tree. The real organism is the mycelium, a vast underground network of thread-like structures that can extend for kilometers through the soil and wood. Some mycelia are thought to be among the oldest and largest organisms on Earth, with ages exceeding 1,000 years.

**Woodland Decomposers:**
Fungi are nature's ultimate recyclers. They break down dead wood, leaf litter, and organic matter, releasing nutrients back into the soil that trees and plants need to grow. Without fungi, our forests would be buried under centuries of undecomposed material.

**The Wood Wide Web:**
Many fungi form mycorrhizal partnerships with trees - a symbiotic relationship where the fungus provides the tree with water and nutrients (especially phosphorus and nitrogen) while receiving sugars from photosynthesis in return. These mycorrhizal networks can connect multiple trees, allowing them to share resources and even communicate chemical signals about threats like disease or drought.

**Why This Matters:**
The diversity and abundance of fungi we're seeing - particularly rare species like Bearded Tooth - indicates that our woodland has retained much of its ecological integrity despite decades of neglect. This gives us an excellent foundation for restoration. Healthy fungal communities will accelerate soil development and support the establishment of our newly planted trees.

**Did You Know?**
A single teaspoon of healthy woodland soil can contain several miles of fungal hyphae! This underground network is often called the "Wood Wide Web" for its role in connecting and supporting forest life.

We'll be conducting seasonal fungi surveys to track how the community develops as our restoration progresses.`,
      published_at: '2025-10-02T14:00:00Z',
      visibility: 'public',
      media_url: fungiImage,
      media_caption: 'A cluster of fungi photographed during our autumn survey',
      highlights: ['20+ fungi species', 'Rare Bearded Tooth found', 'Mycorrhizal networks', 'Woodland decomposers', 'Ancient woodland indicator'],
    },
    {
      id: 'update-003',
      project_id: '1',
      title: 'Native Tree Planting Complete',
      body: `We're thrilled to announce the completion of this season's native tree planting phase!

**Planting Summary:**
- 560 native trees planted across 6 hectares
- Species mix: Oak (40%), Hazel (25%), Birch (20%), Field Maple (10%), Wild Cherry (5%)
- All sourced from local provenance to maintain genetic integrity
- 95% survival rate from spring planting (exceptional for first season)

The young trees are establishing beautifully, with many showing over 30cm of new growth. Our volunteer teams worked tirelessly through challenging weather, and local school groups joined us for educational planting days.

Next phase begins in November with understory enrichment - planting native shrubs like hawthorn, blackthorn, and guelder rose to create varied structure for insects and birds.`,
      published_at: '2025-09-15T14:30:00Z',
      visibility: 'public',
      media_url: treePlantingImage,
      media_caption: 'Volunteers planting native oak saplings in cleared restoration area',
      highlights: ['560 trees planted', '95% survival rate', '6 hectares covered', '5 native species'],
    },
    {
      id: 'update-002',
      project_id: '1',
      title: 'Species Spotlight: The Mighty Oak',
      body: `As we begin planting the next generation of trees on this site, we wanted to shine a light on the cornerstone species of British woodlands: the English Oak (Quercus robur).

**The Wildlife Powerhouse:**
Oak trees are often called "keystone species" - and for good reason. A single mature oak can support over 2,300 species of wildlife, more than any other British tree. This extraordinary biodiversity includes:
- 326 species of beetle alone
- 229 species of moth and butterfly
- Countless birds, from blue tits to woodpeckers
- Fungi, lichens, and mosses creating micro-ecosystems
- Mammals including bats, squirrels, and dormice

**Ancient Resilience:**
The 15 veteran oaks we identified during our site survey are likely 200-400 years old. These ancient trees are biodiversity hotspots - their deadwood, crevices, and hollows provide irreplaceable habitat. A single veteran oak can contain more life than an entire plantation of younger trees.

**Carbon Champions:**
Beyond their wildlife value, oaks are exceptional carbon stores. A mature oak can sequester over 150kg of CO₂ annually and lock away tonnes of carbon in its wood over centuries. The acorns also support woodland regeneration - jays alone can cache up to 5,000 acorns each autumn, many of which will germinate into new trees.

**Cultural Heritage:**
Oaks have shaped British history - from medieval ship-building to boundary markers and meeting places. Many of our oldest oaks were saplings when the Magna Carta was signed in 1215.

**Our Oak Legacy:**
We've protected the existing veteran oaks with 10-metre exclusion zones to prevent soil compaction damaging their roots. We'll be planting 224 new oak saplings (40% of our tree mix) to ensure this legacy continues for centuries to come.

**Did You Know?**
Oak leaves flush late in spring compared to other trees. This evolved to avoid late frosts, but it also creates a "spring window" where sunlight reaches the woodland floor, allowing bluebells and other wildflowers to bloom before the canopy closes!

These new oaks we plant today could still be standing in the year 2525, supporting wildlife that hasn't even evolved yet.`,
      published_at: '2025-09-01T11:00:00Z',
      visibility: 'public',
      media_url: oakImage,
      media_caption: 'One of the 15 veteran oaks identified during our site survey',
      highlights: ['2,300+ species supported', '326 beetle species', 'Carbon sequestration', '400-year lifespan', '224 oaks planned'],
    },
    {
      id: 'update-001',
      project_id: '1',
      title: 'Project Launch & Site Preparation',
      body: `Welcome to the West Sussex Woodland Restoration project! We're incredibly grateful for your support in helping us revive this precious habitat.

**August Achievements:**
- Site survey completed, identifying 15 veteran oak trees to protect
- Invasive species removal begun (rhododendron and laurel clearing)
- Water source mapping completed - 3 seasonal streams running through site
- Baseline biodiversity survey: 8 breeding bird species, 22 plant species

The site has lain neglected for 40 years, with invasive species choking out native flora. Our restoration will create a mosaic of woodland structures - from open glades to dense canopy - supporting maximum biodiversity.

Local ecologist Dr. Sarah Mitchell will be monitoring progress quarterly, and we'll be sharing her findings with all sponsors.`,
      published_at: '2025-08-20T10:00:00Z',
      visibility: 'public',
      media_url: ancientWoodlandImage,
      media_caption: 'Site preparation - veteran oak tree protected with exclusion zone',
      highlights: ['15 veteran oaks', 'Invasive species removal', '8 bird species', '22 plant species'],
    },
  ],
};
