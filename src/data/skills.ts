export type SkillSection = {
  id: string;
  title: string;
  description: string;
  activities: string[];
  image: string;
};

const IMG = "/images/internship";

export const skillSections: SkillSection[] = [
  {
    id: "computer-assembly",
    title: "Computer Assembly",
    description:
      "Building desktop systems from components through cable routing, case prep, and power-on checks—including batch work for the team 40-PC deployment.",
    activities: [
      "Installed motherboards, storage, memory, and power connections",
      "Assembled customer desktops and deployment units",
      "Prepared PC cases ahead of large build runs",
      "Verified completed builds before software setup",
    ],
    image: `${IMG}/2026-06-19_pc-assembly-day3-b.jpg`,
  },
  {
    id: "hardware-diagnostics",
    title: "Hardware Diagnostics",
    description:
      "Finding the real fault—motherboard issues, damaged HDDs, undetected SSDs, malware, and storage health—then explaining the next step clearly.",
    activities: [
      "Restored an unresponsive motherboard to working status",
      "Diagnosed malware and poor SSD health on a client unit",
      "Identified damaged HDD storage failures",
      "Resolved SSD-not-detected delays during OS installs",
      "Adjusted BIOS settings when installs would not proceed",
    ],
    image: `${IMG}/2026-07-13_motherboard-fix-day22.jpg`,
  },
  {
    id: "software-os",
    title: "Software & Operating Systems",
    description:
      "Installing operating systems, applying Windows licenses, running updates, and confirming units were ready for customers or deployment.",
    activities: [
      "Installed and configured OS on built and purchased units",
      "Applied Windows licenses for deployment batches and the ADSSU PO",
      "Performed system updates and readiness checks",
      "Configured laptops in multi-unit batches",
    ],
    image: `${IMG}/2026-07-16_windows-license-day25.jpg`,
  },
  {
    id: "printers-networking",
    title: "Printers & Networking",
    description:
      "Printer installs, calibration, customer turnover, product knowledge, and foundational networking work with UTP and RJ45 connectors.",
    activities: [
      "Set up, calibrated, and tested printers for shop and customers",
      "Installed Canon and Epson models including G4770, G2010, and L5290",
      "Prepared UTP cables with RJ45 connectors",
      "Built product knowledge for accurate customer answers",
    ],
    image: `${IMG}/2026-06-23_printer-install-day6.jpg`,
  },
  {
    id: "deployment-operations",
    title: "Deployment & Operations",
    description:
      "Field deliveries, on-site installs, packing checks, warranty trips, and day-to-day operations that keep orders moving.",
    activities: [
      "Supported on-site client installation and user demos",
      "Completed multi-site deliveries (HCA, hotels, schools, partner companies)",
      "Packed and double-checked activated units before delivery",
      "Picked up UPS units and monitors at Los Amigos for Agusan",
      "Handled invoices, Active One receipts, RMA updates, and sales support",
    ],
    image: `${IMG}/2026-07-15_forty-pc-complete-day24.jpg`,
  },
];
