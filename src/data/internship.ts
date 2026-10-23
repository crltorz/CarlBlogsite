export const siteConfig = {
  name: "The Build Log",
  tagline: "Learning by Doing. Growing Through Experience.",
  owner: "Carl R. Torion",
  company: "Miles Computer Ventures",
  university: "North Eastern Mindanao State University",
  role: "Student Intern — Technical and Computer Services Activities",
  startDate: "2026-06-15",
  endDate: "2026-08-01",
  startLabel: "June 15, 2026",
  endLabel: "August 1, 2026",
  description:
    "A personal internship journal by Carl R. Torion documenting hands-on computer assembly, troubleshooting, printer setup, and deployments at Miles Computer Ventures.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/journey", label: "My Journey" },
    { href: "/projects", label: "Projects & Skills" },
    { href: "/photos", label: "Photo Journal" },
    { href: "/about", label: "About Me" },
    { href: "/reflections", label: "Reflections" },
  ],
} as const;

export const experienceCategories = [
  {
    title: "PC Assembly",
    description:
      "Installing components, routing cables, and building desktop systems ready for configuration and testing.",
    image: "/images/internship/2026-06-19_pc-assembly-day3-b.jpg",
  },
  {
    title: "Hardware Troubleshooting",
    description:
      "Diagnosing motherboard issues, storage failures, and system faults before recommending the next step.",
    image: "/images/internship/2026-07-13_motherboard-fix-day22.jpg",
  },
  {
    title: "Printer Configuration",
    description:
      "Installing drivers, calibrating print quality, and preparing printers for customer turnover.",
    image: "/images/internship/2026-06-23_printer-install-day6.jpg",
  },
  {
    title: "Software Installation",
    description:
      "Installing operating systems, applying Windows licenses, updating systems, and verifying readiness.",
    image: "/images/internship/2026-07-16_windows-license-day25.jpg",
  },
  {
    title: "Customer Technical Support",
    description:
      "Assisting customers with inquiries, device orientation, and clear explanations of basic use.",
    image: "/images/internship/2026-07-01_device-orientation-day12.jpg",
  },
  {
    title: "Equipment Deployment",
    description:
      "Supporting team-based preparation, packing, delivery, and on-site setup of computer equipment.",
    image: "/images/internship/2026-07-15_forty-pc-complete-day24.jpg",
  },
] as const;

export const homeHighlights = [
  {
    label: "Duration",
    value: "7 weeks",
    detail: "June 15 – August 1, 2026",
  },
  {
    label: "Focus",
    value: "Hands-on tech",
    detail: "Builds, fixes, printers, deployments",
  },
  {
    label: "Host",
    value: "Miles Computer Ventures",
    detail: "Technical and computer services",
  },
] as const;
