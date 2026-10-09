export const business = {
  name: "Integrity Auto Salon",
  tagline: "Professional Ceramic Coating & Paint Correction",
  city: "Redondo Beach",
  region: "California",
  state: "CA",
  zip: "90277",
  phone: "323-688-8846",
  phoneHref: "tel:+13236888846",
  hours: "Mon – Sun · 9:00 AM – 6:00 PM",
  reviewsCount: 55,
  reviewsRating: "Excellent",
  established: "Redondo Beach, CA",
  owner: "Mike",
} as const;

export const services = [
  {
    id: "01",
    name: "Ceramic Coatings",
    short: "Ceramic Coating",
    tagline: "A hydrophobic shield engineered for the long game.",
    description:
      "Multi-year ceramic systems that lock in gloss, repel water and contamination, and defend against UV. Prepped, applied, and cured with the discipline of a certified installer.",
    highlights: ["UV defense", "Hydrophobic", "Chemical resistant", "3–7 year systems"],
  },
  {
    id: "02",
    name: "Paint Correction",
    short: "Paint Correction",
    tagline: "Swirls, haze, and etchings — removed, not covered up.",
    description:
      "Measured, multi-stage machine polishing that resets the clear coat and restores depth. We correct the finish you have so the coating goes over paint that deserves it.",
    highlights: ["Multi-stage polish", "Depth & clarity", "Pre-coating prep", "Measured results"],
  },
  {
    id: "03",
    name: "Interior Detailing",
    short: "Interior Detailing",
    tagline: "A cabin returned to the day it was delivered.",
    description:
      "Deep extraction, leather conditioning, and panel-by-panel attention to the surfaces you touch every day. We don't dress what we didn't clean.",
    highlights: ["Steam & extraction", "Leather care", "Carpet shampoo", "Odor neutralization"],
  },
  {
    id: "04",
    name: "Exterior Detailing",
    short: "Exterior Detailing",
    tagline: "A proper wash is not a wash. It's a method.",
    description:
      "Decontamination, foam, two-bucket, dedicated media — the whole protocol. Every exterior service is engineered to protect the paint while it cleans it.",
    highlights: ["Decontamination", "Iron removal", "Two-bucket method", "Trim restoration"],
  },
  {
    id: "05",
    name: "Window Tint",
    short: "Window Tint",
    tagline: "Heat rejection, UV cut, clarity. Installed with intent.",
    description:
      "Precision film installation for daily drivers and the serious collection. Clean lines, measured heat rejection, zero shortcuts around the edges.",
    highlights: ["Heat rejection", "UV protection", "Precise cuts", "Lifetime craft"],
  },
  {
    id: "06",
    name: "Boat Detailing",
    short: "Marine Detail",
    tagline: "Saltwater, oxidation, hard water — handled.",
    description:
      "From the gelcoat up. Oxidation removal, polishing, sealants and protection built for marine environments and the owners who use them.",
    highlights: ["Oxidation cut", "Hull polish", "Metal brightwork", "Marine sealant"],
  },
] as const;

export const serviceAreas = [
  "Redondo Beach",
  "Hermosa Beach",
  "Manhattan Beach",
  "Palos Verdes",
  "Rancho Palos Verdes",
  "Rolling Hills",
  "Torrance",
] as const;

export const testimonials = [
  {
    name: "Jaime C.",
    date: "16 August 2026",
    body: "It was great dealing with Mike. He kept us updated through the process and really made you feel he cared about the car as much as you. He's so passionate about what he does — it shows in the results.",
  },
  {
    name: "Samantha K.",
    date: "5 August 2026",
    body: "Mike's attention to detail is incredible, which is what you want for a detailer. He finds every blemish you probably don't know is there and does what he can to correct it. Prices are good, work is perfect. Highly recommend.",
  },
  {
    name: "Billy R.",
    date: "5 August 2026",
    body: "Mike is the MAN. Got some paint on my car, texted Mike after hours, and I literally had my car looking brand new in under 10 minutes. Couldn't have been kinder — didn't have to stay after hours, but did anyway. 11/10.",
  },
  {
    name: "Casey D.",
    date: "30 June 2026",
    body: "Mike knocked a 2025 black Yukon AT4 out of the park. Very professional and explained everything before and along the way.",
  },
] as const;

export const stats = [
  { k: "55", v: "Verified reviews" },
  { k: "7", v: "Service areas" },
  { k: "6", v: "Specialized services" },
  { k: "100%", v: "In-shop & mobile" },
] as const;

export const process = [
  {
    step: "01",
    label: "Consultation",
    body: "A real conversation about the vehicle, the goals, and the environment it lives in. No upsell theater.",
  },
  {
    step: "02",
    label: "Assessment",
    body: "Paint depth readings, defect mapping, interior triage. We write it down before we touch a thing.",
  },
  {
    step: "03",
    label: "Execution",
    body: "Correction, protection, installation — performed in a controlled environment or at your location.",
  },
  {
    step: "04",
    label: "Hand-off",
    body: "A walk-around, care instructions, and the kind of result that makes the drive home feel longer than it is.",
  },
] as const;
