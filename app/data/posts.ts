export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "ol"; items: readonly string[] }
  | { type: "pull"; text: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  author: string;
  cover: string;
  blocks: readonly PostBlock[];
  highlights?: readonly string[];
  // Live / coming soon
  live: boolean;
};

export const posts: readonly Post[] = [
  {
    slug: "how-long-does-ceramic-coating-last",
    title: "How Long Does Ceramic Coating Actually Last on a Beach-City Car?",
    category: "Ceramic Coating",
    date: "September 16, 2026",
    read: "6 min read",
    excerpt:
      "A quality ceramic coating lasts 2 to 5 years — but coastal living in Redondo Beach changes the equation. Here's an honest, South Bay-specific timeline.",
    author: "Michael Jordan",
    cover:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80",
    live: true,
    highlights: [
      "Beach-city coatings face salt, marine layer, and heavy UV",
      "Prep + product quality decide most of the lifespan",
      "Watch water-beading to spot a coating that's wearing out",
    ],
    blocks: [
      {
        type: "p",
        text: "“How long is this coating going to last?” is the first question most customers ask. The honest answer: a quality ceramic coating lasts anywhere from 2 to 5 years, with some premium coatings lasting longer. However, living on the coast changes the equation — a Redondo Beach car faces different challenges than one stored inland in Riverside.",
      },
      { type: "h2", text: "Why beach cars are different" },
      {
        type: "p",
        text: "Salt air, the marine layer, and relentless California sun stress paint heavily. Salt adheres to finishes and penetrates gaps. The marine layer deposits damp, mineral-rich moisture most mornings. Unrelenting UV radiation compounds the problem. These factors place extra stress on coatings — which is exactly why maintenance matters so much in coastal areas.",
      },
      { type: "h2", text: "What actually decides how long it lasts" },
      {
        type: "ul",
        items: [
          "Quality of the coating. Professional-grade coatings with multiple layers significantly outlast cheap DIY options.",
          "The prep work. Improper decontamination and correction before coating causes the coating to bond to grime rather than paint, diminishing longevity.",
          "How you look after it. Properly washed and rinsed coatings last years; neglected or brush-washed coatings deteriorate quickly.",
        ],
      },
      { type: "h2", text: "A realistic timeline for the South Bay" },
      {
        type: "ul",
        items: [
          "Entry-level coating: 1 – 2 years",
          "Mid-tier: around 3 years",
          "Top-tier, professionally applied and maintained: 5 years or more",
        ],
      },
      { type: "h2", text: "How to tell it's wearing off" },
      {
        type: "p",
        text: "Monitor water-beading behavior. Healthy coatings produce tight water beads that roll off; a fading coating causes water to sheet flat. Other signs: rougher paint texture under your fingertips, or diminished gloss in direct sunlight.",
      },
      {
        type: "pull",
        text: "A coating that still beads is doing its job. A coating that sheets is asking for a top-up.",
      },
      { type: "h2", text: "Why South Bay drivers trust us" },
      {
        type: "p",
        text: "Integrity Auto Salon has coated hundreds of South Bay vehicles and understands coastal paint challenges. We emphasize proper preparation, use tested professional-grade products, and give honest recommendations without upsells or shortcuts.",
      },
      { type: "h2", text: "Ready for an honest assessment?" },
      {
        type: "p",
        text: "Schedule a consultation at the shop or call for an honest look at your vehicle's coating condition.",
      },
    ],
  },

  {
    slug: "ceramic-coating-vs-wax-vs-ppf",
    title: "Ceramic Coating vs. Wax vs. PPF: Which Is Right for Your Car?",
    category: "Comparison",
    date: "June 16, 2026",
    read: "5 min read",
    excerpt:
      "Wax, ceramic, and PPF solve three different problems. Here's how to pick based on how you actually use the car.",
    author: "Michael Jordan",
    cover:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=80",
    live: true,
    highlights: [
      "Wax is cheap, easy, and gone in six weeks",
      "Ceramic chemically bonds and lasts years",
      "PPF is the heavy-duty option for impact zones",
    ],
    blocks: [
      {
        type: "p",
        text: "There is no single answer to “ceramic vs. wax vs. PPF.” The right pick depends on how much you care about the car, how you drive it, and where it lives. Here's the honest version.",
      },
      { type: "h2", text: "Wax: cheap, easy, gone in six weeks" },
      {
        type: "p",
        text: "Wax is an affordable, do-it-yourself option with an appealing glossy finish. But it deteriorates quickly — six to eight weeks is typical. “One good rain and half of it's gone.” Coastal environments like Redondo and Hermosa Beach are especially hostile to wax: salt air, UV, and humidity all shorten its life. Expect to reapply regularly.",
      },
      { type: "h2", text: "Ceramic coating: the one that actually holds up" },
      {
        type: "p",
        text: "Ceramic coating chemically bonds to the paint rather than sitting on top of it. It resists water, bird droppings, and UV damage for years. Across a multi-year window, ceramic usually wins on cost compared to repeated wax jobs. Professional ceramic packages start around $999, depending on how much paint prep the car needs.",
      },
      { type: "h2", text: "PPF: the heavy-duty option (when you need it)" },
      {
        type: "p",
        text: "Paint protection film is physical armor against rock chips and road debris. Full-vehicle PPF usually runs $2,000 – $7,000+. For a lot of owners the sweet spot is a hybrid: PPF on the front bumper, hood, and mirrors — ceramic coating everywhere else.",
      },
      { type: "h2", text: "So which one?" },
      {
        type: "ul",
        items: [
          "Wax: budget-conscious owners who don't mind frequent reapplication, and who park away from salt air or long highway miles.",
          "Ceramic coating: most South Bay drivers who want real protection from salt air and UV without the monthly maintenance.",
          "PPF: luxury and performance vehicles, highway commuters, or anyone who wants maximum impact protection where rock chips happen.",
        ],
      },
      {
        type: "pull",
        text: "If you're going to keep the car for more than two years, ceramic almost always pays for itself.",
      },
      { type: "h2", text: "Come talk to us at Integrity Auto Salon" },
      {
        type: "p",
        text: "Integrity Auto Salon in Redondo Beach offers ceramic coating consultations without a pressure sale. Every package includes full decontamination and paint correction before any coating goes on. Call us or book an in-person look.",
      },
    ],
  },

  {
    slug: "5-signs-your-car-needs-paint-correction",
    title: "5 Signs Your Car Needs Paint Correction Before It's Too Late",
    category: "Paint Correction",
    date: "June 16, 2026",
    read: "8 min read",
    excerpt:
      "Most owners don't notice paint damage until it's expensive. Five signals that your paint is sending up a distress flare right now.",
    author: "Michael Jordan",
    cover:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1800&q=80",
    live: true,
    highlights: [
      "Catch it early — same job is a fraction of the cost",
      "Correction before coating is non-negotiable",
      "Coastal cars oxidize faster than inland cars",
    ],
    blocks: [
      {
        type: "p",
        text: "Most people don't notice what's happening to their car's paint until the damage is significant — and by then, fixing it costs a lot more time and money than it would have six months earlier. Paint correction is for anyone who wants their car to hold its value and not look ten years older than it actually is. Here are five signs your paint is sending up a distress signal right now.",
      },
      { type: "h2", text: "1. You see swirl marks in direct sunlight" },
      {
        type: "p",
        text: "Park your car in direct sunlight, in a bright garage, or under a parking-lot lamp, and take a good look at the hood or roof. See those circular scratches spinning outward from a center point? Those are swirl marks.",
      },
      {
        type: "p",
        text: "They come from washing your car with a dirty sponge, running it through an automated car wash, or wiping it down with the wrong cloth. Over time they pile up — and what starts as a minor issue turns your paint from glossy to just flat-looking.",
      },
      {
        type: "p",
        text: "The earlier you address them, the less correction the paint needs. Leave it long enough, and you're looking at a much deeper cut to get back to clean.",
      },
      { type: "h2", text: "2. Your paint looks dull no matter how much you wash it" },
      {
        type: "p",
        text: "You wash the car. Comes out looking okay for a day. Then it goes right back to looking dull and lifeless. That's not dirt. That's oxidation — the clear coat breaking down from UV exposure. It happens faster near the coast, where the sun is relentless and salt air speeds up the process.",
      },
      {
        type: "p",
        text: "Once oxidation sets in, no amount of washing brings the gloss back. That's paint-correction territory. Catch it early and a one-step polish usually does it. Let it go, and you're into wet sanding or full-panel work. The difference in cost is significant.",
      },
      { type: "h2", text: "3. Water spots that won't come off" },
      {
        type: "p",
        text: "Not every water spot is a big deal. But if you've got spots that are still there after a proper wash — white, chalky rings that look etched into the surface — that's mineral-deposit damage. Hard water, ocean spray, sprinkler water left to bake in the sun. The minerals in the water literally etch into the clear coat.",
      },
      {
        type: "p",
        text: "A regular wash doesn't touch them. You need a chemical decontamination pass at minimum, and if they've gone deep enough, mechanical polishing to get them out. Left alone, they keep etching. What's fixable now might not be fixable in a year without repainting.",
      },
      { type: "h2", text: "4. Scratches you can feel with your fingernail" },
      {
        type: "p",
        text: "Run your fingernail lightly over a scratch on your car. If your nail catches and falls into the scratch, it's gone through the clear coat. Scratches that live only in the clear coat can be polished out. Once it's into the base coat or primer, you're in respray territory for that panel.",
      },
      {
        type: "p",
        text: "Paint correction can still help surrounding areas and prevent the damage from spreading, but the deeper the scratch, the fewer options you have. Don't ignore scratches because they look small — small can become a rust entry point, especially on a coastal car.",
      },
      { type: "h2", text: "5. You're about to get a ceramic coating" },
      {
        type: "p",
        text: "This one surprises people. If you're planning to get ceramic coating applied, your paint needs to be corrected first — full stop. Ceramic coating locks onto whatever surface it bonds to. Skip the correction step, and you're sealing in every scratch, swirl and imperfection under a protective layer. They'll be even more visible afterward because the gloss of the coating makes everything underneath stand out.",
      },
      {
        type: "pull",
        text: "Any shop that's willing to coat your car without doing at least a basic correction pass first is cutting corners. It's not just lazy — it's bad work.",
      },
      { type: "h2", text: "Get it fixed before it gets worse" },
      {
        type: "p",
        text: "We see cars every week that could've been a quick one-step polish six months ago and are now a two-day correction job. Not because the owner didn't care — just because nobody told them what to look for.",
      },
      {
        type: "p",
        text: "At Integrity Auto Salon, we do a full paint inspection before we recommend anything. If your car needs correction, we tell you what level and why. If it doesn't, we tell you that too.",
      },
      {
        type: "p",
        text: "We do single-stage and multi-stage paint correction for cars across Redondo Beach, Hermosa Beach, Manhattan Beach, Palos Verdes and nearby. Every correction job gets a proper decontamination first, and if you're going straight into a ceramic coating after, we handle that as a package.",
      },
    ],
  },

  // Teaser-only entries (not yet migrated — show as "coming soon" in the listing)
  {
    slug: "how-to-wash-ceramic-coated-car",
    title: "How to Wash a Ceramic-Coated Car Without Ruining the Coating",
    category: "Aftercare",
    date: "August 2026",
    read: "5 min read",
    excerpt:
      "A straightforward wash protocol that keeps your ceramic coating beading for years, not months.",
    author: "Michael Jordan",
    cover:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1800&q=80",
    live: false,
    blocks: [],
  },
  {
    slug: "salt-air-sun-coastal-la-paint-protection",
    title: "Salt Air & Sun: Why Coastal LA Vehicles Need Extra Paint Protection",
    category: "Protection",
    date: "August 2026",
    read: "6 min read",
    excerpt:
      "A field guide to the two forces that take the biggest toll on paint along the LA coast — and what to do about them.",
    author: "Michael Jordan",
    cover:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1800&q=80",
    live: false,
    blocks: [],
  },
  {
    slug: "best-ceramic-coating-in-redondo-beach",
    title: "Best Ceramic Coating in Redondo Beach, CA: What to Look For",
    category: "Ceramic Coating",
    date: "July 2026",
    read: "4 min read",
    excerpt:
      "The specific things worth asking a shop before you hand over the keys for a multi-year coating.",
    author: "Michael Jordan",
    cover:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1800&q=80",
    live: false,
    blocks: [],
  },
];

export const livePosts = posts.filter((p) => p.live);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
