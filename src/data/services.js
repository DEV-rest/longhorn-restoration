// data/services.js
import waterImg from '../assets/services/water.png';
import fireImg from '../assets/services/fire.png';
import moldImg from '../assets/services/mold.png';
import residentialImg from '../assets/services/residential.jpeg';
import commercialImg from '../assets/services/commercial.jpeg';
import emergencyImg from '../assets/services/emergency.png';

export const services = [
  {
    title: 'Emergency Response',
    slug: 'emergency-response',
    desc:
      'On-call 24/7. We arrive fast to stabilize leaks, smoke, and microbial risk.',
    icon: 'bolt',
    hero: emergencyImg,
    steps: [
      'Phone assessment to understand the emergency and any safety concerns.',
      'Dispatch of a certified crew, typically within 60–90 minutes depending on distance and conditions.',
      'On-site containment and source control (shutting off water, isolating fire/odor, securing openings).',
      'Begin extraction, temporary repairs, board-up, or deodorization as required.',
      'Provide a same-day incident summary with photos for you and your insurer.',
    ],
    timeframe:
      '4–8 hours for initial stabilization and documentation. Follow-up visits as needed for drying or monitoring.',
    example:
      'A burst pipe overnight floods the kitchen and hallway. Our team arrives in about 45 minutes, stops the leak, extracts standing water, sets up drying equipment, and sends a photo report the same day to you and your adjuster.',
  },
  {
    title: 'Water Damage Restoration',
    slug: 'water-damage-restoration',
    desc:
      'Rapid extraction, structural drying, and repairs. Moisture readings documented for insurance.',
    icon: 'water',
    hero: waterImg,
    steps: [
      'Inspect all affected areas using moisture meters and, when needed, thermal imaging.',
      'Extract standing water from floors, carpets, and cavities.',
      'Perform controlled demolition of saturated materials (baseboards, drywall, flooring) that cannot be dried safely.',
      'Set up structural drying with dehumidifiers and air movers, adjusting equipment based on daily moisture readings.',
      'Verify moisture levels, check for odors, and prepare the space for repairs or rebuild.',
    ],
    timeframe:
      '2–5 days for drying and stabilization on typical residential losses. Repairs may add several more days depending on scope and material lead times.',
    example:
      'A washing machine supply line fails and affects about 250 sq ft of flooring. Saturated flooring and pad are removed, the structure is dried over 3 days with daily moisture checks, and the area is ready for new flooring installation.',
  },
  {
    title: 'Fire Damage Restoration',
    slug: 'fire-damage-restoration',
    desc:
      'Soot cleanup, odor neutralization, HEPA filtration, and careful contents handling.',
    icon: 'flame',
    hero: fireImg,
    steps: [
      'Secure the property with board-up and roof tarps if needed to prevent weather or unauthorized access.',
      'Separate debris from salvageable contents and document items for insurance.',
      'Perform HEPA vacuuming, dry-sponge cleaning, and targeted chemical cleaning to remove soot from surfaces.',
      'Set up HEPA air filtration and odor treatment (ozone or hydroxyl) to address smoke odor throughout the structure.',
      'Deep clean structural surfaces and coordinate repainting, odor sealing, and rebuild where required.',
    ],
    timeframe:
      '5–15 days for cleanup and deodorization on typical residential fires. Rebuild timelines vary with the extent of structural damage.',
    example:
      'A kitchen fire fills most of the home with smoke. We board up a damaged window, clean soot from walls and ceilings, run HEPA filters for a week, and coordinate repainting and sealing so the home is ready for move-back.',
  },
  {
    title: 'Mold Remediation',
    slug: 'mold-remediation',
    desc:
      'Containment with negative air, safe removal at the source, and post-remediation guidance.',
    icon: 'shield',
    hero: moldImg,
    steps: [
      'Inspect visible growth and surrounding areas, and when requested, coordinate air or surface testing.',
      'Isolate affected areas with plastic containment and negative air pressure to prevent cross-contamination.',
      'Remove and bag contaminated porous materials such as drywall, insulation, and carpet according to industry guidelines.',
      'HEPA-vacuum, clean, and treat remaining structural surfaces with appropriate antimicrobial processes.',
      'Perform a final detailed cleaning and assist with third-party clearance testing if required by your insurer, HOA, or lender.',
    ],
    timeframe:
      '2–7 days depending on the size of the affected area, accessibility, and level of contamination.',
    example:
      'A slow bathroom leak is discovered behind tile, with about 30 sq ft of wall affected. We set containment, remove impacted materials, clean and treat framing, and help coordinate a clearance test, all completed within 3 days.',
  },
  {
    title: 'Commercial Restoration',
    slug: 'commercial-restoration',
    desc:
      'After-hours mitigation and phased repairs to reduce downtime and protect revenue.',
    icon: 'building',
    hero: commercialImg,
    steps: [
      'Perform a rapid impact and safety assessment focused on keeping your business operational.',
      'Create a phased mitigation plan that targets the most critical areas first, often after-hours or during low-traffic periods.',
      'Deploy drying, dehumidification, or air filtration equipment positioned to minimize disruption to staff and customers.',
      'Communicate daily with your facilities team and insurer about progress, changes, and next steps.',
      'Transition from mitigation to repairs with a timeline aligned to your operating hours and business priorities.',
    ],
    timeframe:
      'Same-night stabilization in many cases, followed by multi-day or multi-week phased repairs depending on facility size and complexity.',
    example:
      'A water main break affects a retail store. We extract water after closing, set drying equipment overnight, reopen the store the next morning with safe walkways, and complete repairs over several nights to avoid lost business hours.',
  },
  {
    title: 'Residential Restoration',
    slug: 'residential-restoration',
    desc:
      'From single rooms to whole homes. We manage the work and coordinate with your insurer.',
    icon: 'home',
    hero: residentialImg,
    steps: [
      'Walk the property with you to understand priorities and document all affected areas.',
      'Prepare an estimate and provide documentation for your insurance adjuster.',
      'Perform mitigation work such as drying, cleaning, or controlled demolition to stop further damage.',
      'Complete repairs including drywall, painting, flooring, and finish work as agreed in the scope.',
      'Do a final walkthrough with you to review the work, answer questions, and address any punch-list items.',
    ],
    timeframe:
      '3 days to 3 weeks or more, depending on whether the loss is limited to a small area or involves multiple rooms or the full home.',
    example:
      'Hail damage leads to a roof leak that causes a ceiling to collapse in a living room. We dry the structure, replace insulation and drywall, repaint the ceiling and walls, and reinstall trim and fixtures over about 10 days.',
  },
];

export default services;
