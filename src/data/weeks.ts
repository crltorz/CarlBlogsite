export type WeekEntry = {
  id: string;
  slug: string;
  weekNumber: number;
  title: string;
  startDate: string;
  endDate: string;
  dateLabel: string;
  summary: string;
  story: string[];
  activities: string[];
  technicalSkills: string[];
  challenges: string[];
  lessons: string[];
  coverImage: string;
  galleryImages: string[];
};

const IMG = "/images/internship";

export const weeks: WeekEntry[] = [
  {
    id: "week-1",
    slug: "first-steps-into-the-tech-world",
    weekNumber: 1,
    title: "First Steps into the Tech World",
    startDate: "2026-06-15",
    endDate: "2026-06-20",
    dateLabel: "June 15–20, 2026",
    summary:
      "I spent my first week learning how Miles Computer Ventures works—sales, printers, networking basics, and my first desktop builds.",
    story: [
      "June 15 was day one. I familiarized myself with the workflow and the tasks performed in the workplace. I assisted in sales transactions, helped set up printers, and observed basic computer troubleshooting and debugging procedures. Throughout the day, I learned about the services offered by the company and the proper procedures for handling customer needs.",
      "On June 18, I learned the process of setting up a UTP cable to an RJ45 connector and why that skill matters in network installation. I also assisted in sales-related activities involving printers and laptops, and I was given time to familiarize myself with different printer models and laptop specifications.",
      "June 19 was my first real assembly day. I assembled and built two computer sets by installing the necessary hardware components and ensuring each system was properly configured. I also assisted in setting up two additional computer units and performed the required software and system configurations. Later, I helped calibrate different printers so they would print correctly.",
      "On June 20, I continued the daily routine—entertaining customers, addressing inquiries, setting up printers, and configuring newly built computer units. By the end of the week I had logged 33 hours and 32 minutes, with 290 hours and 28 minutes remaining.",
    ],
    activities: [
      "Workplace familiarization and sales assistance",
      "Printer setup and calibration",
      "UTP cable to RJ45 connector preparation",
      "Assembled 2 desktop PCs and assisted configuring more",
      "Customer support and inquiry handling",
    ],
    technicalSkills: [
      "PC hardware installation",
      "Basic printer configuration",
      "UTP / RJ45 cabling",
      "Customer-facing technical support",
    ],
    challenges: [
      "Absorbing a new workplace workflow while staying useful on the floor",
      "Learning printer models and laptop specs quickly enough to help customers",
    ],
    lessons: [
      "Technical work and customer service run side by side in a retail tech shop",
      "Small skills like cable prep and printer calibration build confidence for bigger builds",
    ],
    coverImage: `${IMG}/2026-06-19_pc-assembly-day3-b.jpg`,
    galleryImages: [
      `${IMG}/2026-06-15_workplace-day1.jpg`,
      `${IMG}/2026-06-15_utp-rj45-cable-prep.jpg`,
      `${IMG}/2026-06-18_sales-floor-day2.jpg`,
      `${IMG}/2026-06-19_pc-assembly-day3-a.jpg`,
      `${IMG}/2026-06-19_pc-assembly-day3-b.jpg`,
      `${IMG}/2026-06-20_desktop-config-day4.jpg`,
      `${IMG}/2026-06-20_printer-setup-day4.jpg`,
    ],
  },
  {
    id: "week-2",
    slug: "getting-comfortable-with-the-tools",
    weekNumber: 2,
    title: "Getting Comfortable with the Tools",
    startDate: "2026-06-22",
    endDate: "2026-06-27",
    dateLabel: "June 22–27, 2026",
    summary:
      "Laptop setups, printer installs, a product-knowledge quiz, display organization, and my first training on the Active One system.",
    story: [
      "On June 22, I assisted in setting up three laptops so they were properly configured and ready for use. I also took a quiz about printers to assess what I had learned about different models, specifications, and functions during training.",
      "June 23 was a steady workday. Alongside routine tasks, we successfully set up three printers—installed, configured, and ready for use. On June 24, I continued assisting customers and helped install two more printers according to each customer's requested specifications, testing them before turnover.",
      "On June 26, I helped set up newly purchased laptops for customers and organized the laptops on display by placing their specifications and prices so people could compare units more easily. June 27 brought training on the company's Active One system—creating receipts, entering customer information, and navigating its features—before I returned to assisting customers on the floor.",
      "That week totaled 42 hours and 38 minutes, leaving 247 hours and 50 minutes remaining.",
    ],
    activities: [
      "Configured 3 laptops for customers",
      "Printer product-knowledge quiz",
      "Installed 3 printers, then 2 more for customer specs",
      "Organized laptop display with specs and prices",
      "Active One receipts and customer-information training",
    ],
    technicalSkills: [
      "Laptop configuration and turnover",
      "Printer installation and testing",
      "POS / Active One basics",
      "Retail product presentation",
    ],
    challenges: [
      "Matching printer installs to exact customer specifications",
      "Absorbing Active One workflows while still covering the floor",
    ],
    lessons: [
      "Product knowledge quizzes make sales conversations clearer",
      "A well-labeled display helps customers choose with less friction",
    ],
    coverImage: `${IMG}/2026-06-23_printer-install-day6.jpg`,
    galleryImages: [
      `${IMG}/2026-06-22_laptop-setup-day5-a.jpg`,
      `${IMG}/2026-06-22_laptop-setup-day5-b.jpg`,
      `${IMG}/2026-06-23_printer-install-day6.jpg`,
      `${IMG}/2026-06-24_printer-customer-day7-a.jpg`,
      `${IMG}/2026-06-24_printer-customer-day7-b.jpg`,
      `${IMG}/2026-06-26_customer-laptop-day8.jpg`,
      `${IMG}/2026-06-26_laptop-display-day8.jpg`,
      `${IMG}/2026-06-27_active-one-training.jpg`,
    ],
  },
  {
    id: "week-3",
    slug: "beyond-the-workshop",
    weekNumber: 3,
    title: "Beyond the Workshop",
    startDate: "2026-06-29",
    endDate: "2026-07-04",
    dateLabel: "June 29–July 4, 2026",
    summary:
      "Printer work continued, but this week also took me to the Acer warranty service center, on-site client installs, and deeper sales support.",
    story: [
      "June 29 started with organizing assigned items so the workspace stayed clear. I also set up and configured printers for customers, testing each one before it left our care.",
      "On June 30, I learned how to bring defective Acer devices to the Acer Service Center while they were still under warranty, and where to have documents notarized. After returning to the office, I helped set up a printer and confirm it was working.",
      "July 1 was about preparing laptops and desktops for customers and orienting them on proper use—explaining do's and don'ts so they could maintain their equipment correctly. The next day we delivered ordered computer units to a client's company. I helped set the devices up on-site, verified they worked, and demonstrated basic functions before returning to more laptop setups at the office.",
      "July 3 reinforced Active One training—receipts, customer information, and navigation—then back to customer support. On July 4, I assisted the sales team with inquiries and configured computer units so they were ready before delivery or handover. The week closed at 50 hours and 29 minutes, with 197 hours and 21 minutes remaining.",
    ],
    activities: [
      "Workspace organization and printer configuration",
      "Acer warranty service center process",
      "Customer device orientation",
      "On-site client installation and demo",
      "Active One practice and sales support",
    ],
    technicalSkills: [
      "Warranty service workflows",
      "On-site installation and user orientation",
      "Laptop and desktop setup",
      "Sales process support",
    ],
    challenges: [
      "Moving between field errands and workshop tasks in the same day",
      "Explaining device care clearly to new owners",
    ],
    lessons: [
      "Service work does not stop at the shop counter",
      "On-site installs require patience, verification, and clear demos",
    ],
    coverImage: `${IMG}/2026-07-02_onsite-install-day13.jpg`,
    galleryImages: [
      `${IMG}/2026-06-29_workspace-org-day10.jpg`,
      `${IMG}/2026-06-29_printer-config-day10-a.jpg`,
      `${IMG}/2026-06-30_service-center-day11.jpg`,
      `${IMG}/2026-06-30_warranty-service-day11.jpg`,
      `${IMG}/2026-06-30_printer-test-day11.jpg`,
      `${IMG}/2026-07-01_device-orientation-day12.jpg`,
      `${IMG}/2026-07-01_laptop-desktop-setup-day12.jpg`,
      `${IMG}/2026-07-02_onsite-install-day13.jpg`,
      `${IMG}/2026-07-03_active-one-day14.jpg`,
      `${IMG}/2026-07-04_sales-support-day15.jpg`,
    ],
  },
  {
    id: "week-4",
    slug: "building-systems-solving-problems",
    weekNumber: 4,
    title: "Building Systems, Solving Problems",
    startDate: "2026-07-06",
    endDate: "2026-07-11",
    dateLabel: "July 6–11, 2026",
    summary:
      "Invoices, diagnostics, RMA updates, deliveries, and the start of a team 40-PC deployment—builds paced by component delivery delays.",
    story: [
      "July 6 mixed office and bench work: invoice processing, database maintenance, and preparing a computer so a customer could take it home ready to use.",
      "On July 7, I updated a client on the RMA status of their laptop, cleaned and diagnosed a malfunctioning system unit, processed a printer for repair at the service center, and completed deliveries to HCA and D'Japanese Tunnel.",
      "July 8 brought a repaired unit pickup and laptop release to its owner. I prepared PC cases for a large deployment project, configured a printer, and assembled two desktop computers. Progress on remaining units slowed because essential PC components arrived late.",
      "July 9 started with delivering ordered computer parts to RMC, then back to assembly. I completed seven desktop units—five for the 40-PC deployment project and two for separate customer orders. This was team work toward the forty; I did not build all forty alone. July 10 added five more fully set-up desktops for the deployment. July 11 included another printer setup and five more desktops to meet the day's production quota, with remaining units deferred again due to delayed components. The week totaled 51 hours and 4 minutes, with 146 hours and 17 minutes remaining.",
    ],
    activities: [
      "Invoice processing and database maintenance",
      "Diagnostics, RMA updates, and service-center printer processing",
      "Deliveries to HCA, D'Japanese Tunnel, and RMC",
      "Prepared PC cases for deployment",
      "Assembled 2 desktops, then 7 (5 for 40-PC + 2 customer), then 5 more, then 5 more",
    ],
    technicalSkills: [
      "Desktop assembly at production pace",
      "Hardware diagnostics and cleaning",
      "RMA and repair logistics",
      "Deployment case preparation",
    ],
    challenges: [
      "Component delivery delays that paused remaining builds",
      "Balancing customer deliveries with deployment quotas",
    ],
    lessons: [
      "Large deployments are team efforts, not solo heroics",
      "Supply delays force careful sequencing of what you can finish today",
    ],
    coverImage: `${IMG}/2026-07-09_deployment-build-day19.jpg`,
    galleryImages: [
      `${IMG}/2026-07-06_invoice-database-day16.jpg`,
      `${IMG}/2026-07-06_customer-pc-day16.jpg`,
      `${IMG}/2026-07-07_diagnostics-day17.jpg`,
      `${IMG}/2026-07-07_delivery-day17.jpg`,
      `${IMG}/2026-07-08_pc-cases-day18.jpg`,
      `${IMG}/2026-07-08_desktop-assembly-day18.jpg`,
      `${IMG}/2026-07-09_deployment-build-day19.jpg`,
      `${IMG}/2026-07-09_desktop-units-day19.jpg`,
      `${IMG}/2026-07-10_deployment-day20.jpg`,
      `${IMG}/2026-07-11_assembly-quota-day21.jpg`,
      `${IMG}/2026-07-11_component-prep.jpg`,
      `${IMG}/2026-07-11_workshop-progress.jpg`,
    ],
  },
  {
    id: "week-5",
    slug: "challenges-behind-every-build",
    weekNumber: 5,
    title: "Challenges Behind Every Build",
    startDate: "2026-07-13",
    endDate: "2026-07-18",
    dateLabel: "July 13–18, 2026",
    summary:
      "Motherboard recovery, malware and SSD health findings, multi-site deliveries, team completion of all 40 units, OS work, a printer sale, and camera QC for bidding.",
    story: [
      "On July 13, we completed the assembly and configuration of four system units and diagnosed a critical issue with an unresponsive, static motherboard—restoring it to full operational status.",
      "July 14 was a client diagnosis day. While cleaning a system unit, I detected malware and found the SSD was in very poor health. I advised replacing the SSD to prevent possible data loss. After that, I finished cleaning and servicing three system units and set up a printer for another client.",
      "July 15 took us into the field: deliveries of ordered PC units and printers to De Leonor Hotel, a TV to Rizal Memorial Colleges, and a replacement keyboard to RDL and LDL Company. Back at the shop, I serviced three more system units. Together as a team, we successfully completed the assembly of all 40 system units.",
      "On July 16, we began setting up those units—installing the operating system, applying Windows licenses, performing updates, and testing each machine. July 17 returned to customer service; I also sold one Canon PIXMA MG2570S printer. July 18 covered quality checks on newly delivered cameras and visits to stores for quotations and business permits needed for bidding. The week totaled 51 hours and 34 minutes, with 94 hours and 43 minutes remaining.",
    ],
    activities: [
      "Motherboard diagnosis and repair; four system units assembled",
      "Malware detection and SSD health assessment",
      "Deliveries to De Leonor Hotel, RMC, and RDL/LDL",
      "Team completion of all 40 deployment units",
      "OS install, Windows licenses, and updates",
      "Sold Canon PIXMA MG2570S; camera QC and bidding quotations",
    ],
    technicalSkills: [
      "Motherboard troubleshooting",
      "Malware and storage health assessment",
      "OS installation and licensing",
      "Multi-site delivery logistics",
    ],
    challenges: [
      "Restoring an unresponsive motherboard under time pressure",
      "Communicating storage failure risk clearly to a client",
    ],
    lessons: [
      "Finishing forty units takes coordinated team effort",
      "Diagnosis is incomplete until the customer understands the next step",
    ],
    coverImage: `${IMG}/2026-07-15_forty-pc-complete-day24.jpg`,
    galleryImages: [
      `${IMG}/2026-07-13_motherboard-fix-day22.jpg`,
      `${IMG}/2026-07-13_system-units-day22.jpg`,
      `${IMG}/2026-07-14_malware-ssd-day23.jpg`,
      `${IMG}/2026-07-15_delivery-hotel-day24.jpg`,
      `${IMG}/2026-07-15_forty-pc-complete-day24.jpg`,
      `${IMG}/2026-07-16_os-install-day25-a.jpg`,
      `${IMG}/2026-07-16_windows-license-day25.jpg`,
      `${IMG}/2026-07-17_customer-service-day26.jpg`,
      `${IMG}/2026-07-18_camera-qc-day27.jpg`,
      `${IMG}/2026-07-18_bidding-prep-day27.jpg`,
    ],
  },
  {
    id: "week-6",
    slug: "learning-through-every-fix",
    weekNumber: 6,
    title: "Learning Through Every Fix",
    startDate: "2026-07-20",
    endDate: "2026-07-25",
    dateLabel: "July 20–25, 2026",
    summary:
      "One system unit and seven of twenty ordered laptops, a Canon G4770 sale and install, product knowledge, HDD failure diagnosis, Epson printers, and a two-hour SSD detection fight.",
    story: [
      "July 20 started with assembling and setting up one system unit. We then began configuring twenty ordered laptops; I completed seven of them. I also sold one Canon G4770 printer and finished its installation and setup for the customer.",
      "On July 21, we focused on product knowledge so we could answer printer questions accurately, then entertained customers through the rest of the day. July 22 brought a system unit with a storage problem—its HDD was already damaged. I diagnosed the unit and explained what happened and what was needed to make it usable again.",
      "July 23: I assembled one system unit and installed two Epson L5290 printers with the necessary drivers and basic setup. July 24 tested patience. A customer's laptop had been purchased without an operating system; during installation the SSD was not detected, delaying the process for about two hours. After troubleshooting, I detected the SSD successfully and completed the OS install so the laptop was ready for use.",
      "July 25 closed the week with a Canon G2010 printer setup—drivers installed and function verified—plus continued customer assistance. The week totaled 51 hours and 12 minutes, with 43 hours and 31 minutes remaining.",
    ],
    activities: [
      "1 system unit + 7 of 20 ordered laptops configured",
      "Sold and installed Canon G4770",
      "Printer product-knowledge session",
      "Diagnosed damaged HDD storage failure",
      "Installed 2 Epson L5290 printers",
      "Resolved SSD-not-detected issue (~2 hours) and finished OS install",
      "Set up Canon G2010",
    ],
    technicalSkills: [
      "Batch laptop configuration",
      "Printer sales and installation",
      "Storage failure diagnosis",
      "SSD detection troubleshooting",
    ],
    challenges: [
      "An undetected SSD that stalled OS installation for about two hours",
      "Explaining HDD damage and repair needs to a customer",
    ],
    lessons: [
      "Stubborn hardware issues reward methodical troubleshooting",
      "Product knowledge turns a sale into a confident install",
    ],
    coverImage: `${IMG}/2026-07-24_ssd-detection-day32.jpg`,
    galleryImages: [
      `${IMG}/2026-07-20_laptop-batch-day28.jpg`,
      `${IMG}/2026-07-20_canon-printer-day28.jpg`,
      `${IMG}/2026-07-21_product-knowledge-day29.jpg`,
      `${IMG}/2026-07-21_customer-floor-day29.jpg`,
      `${IMG}/2026-07-22_hdd-diagnosis-day30.jpg`,
      `${IMG}/2026-07-22_storage-issue-day30.jpg`,
      `${IMG}/2026-07-23_desktop-build-day31.jpg`,
      `${IMG}/2026-07-23_epson-setup-day31.jpg`,
      `${IMG}/2026-07-24_ssd-detection-day32.jpg`,
      `${IMG}/2026-07-25_canon-g2010-day33.jpg`,
    ],
  },
  {
    id: "week-7",
    slug: "the-final-chapter-of-the-build",
    weekNumber: 7,
    title: "The Final Chapter of the Build",
    startDate: "2026-07-27",
    endDate: "2026-08-01",
    dateLabel: "July 27–August 1, 2026",
    summary:
      "BIOS fixes for OS installs, twenty Windows activations for an ADSSU purchase order, Los Amigos pickup for Agusan, final builds, and a VivoBook sale—remaining hours: zero.",
    story: [
      "On July 27, an operating system install stalled until BIOS settings were adjusted. I troubleshot the issue, configured what was needed, and successfully proceeded with the OS installation.",
      "July 28 was activation and readiness day. I activated all 20 Windows licenses for the ADSSU purchase order, packed the units, and double-checked each system so everything was properly set up, fully functional, and ready before delivery.",
      "July 29 took us to Los Amigos, another Miles branch, to pick up 40 UPS units and 40 monitors scheduled for delivery to Agusan. We checked and organized the equipment, prepared it for transport, and secured everything to prevent damage. On July 30, I set up a customer's printer, ran print tests, verified connections, and explained basic operation before turnover.",
      "July 31 was another full PC build—components installed and connected, then powered on for verification. August 1, the final day, I assisted in selling an ASUS VivoBook Gaming laptop: matching the customer to the right unit, covering basic details and specifications, and confirming the laptop was in good condition before handover. Total hours for the week: 46 hours and 50 minutes. Remaining hours: 0 hours and 00 minutes.",
    ],
    activities: [
      "BIOS configuration to enable OS installation",
      "Activated 20 Windows licenses for ADSSU PO; packed and checked units",
      "Los Amigos pickup: 40 UPS + 40 monitors for Agusan",
      "Customer printer setup and orientation",
      "Completed a PC build with verification",
      "Assisted ASUS VivoBook Gaming sale",
    ],
    technicalSkills: [
      "BIOS troubleshooting for OS installs",
      "Windows license activation at volume",
      "Equipment packing and logistics checks",
      "End-to-end PC assembly verification",
    ],
    challenges: [
      "BIOS misconfiguration blocking an OS install",
      "Keeping large equipment counts accurate during branch pickup",
    ],
    lessons: [
      "Readiness means activation, packing, and double-checks—not just assembly",
      "The internship closed with remaining hours at zero after steady weekly work",
    ],
    coverImage: `${IMG}/2026-07-28_packing-units-day35.jpg`,
    galleryImages: [
      `${IMG}/2026-07-27_bios-config-day34.jpg`,
      `${IMG}/2026-07-28_windows-update-day35.jpg`,
      `${IMG}/2026-07-28_system-check-day35.jpg`,
      `${IMG}/2026-07-28_packing-units-day35.jpg`,
      `${IMG}/2026-07-29_ups-monitors-day36.jpg`,
      `${IMG}/2026-07-30_printer-customer-day37.jpg`,
      `${IMG}/2026-07-31_component-install-day38.jpg`,
      `${IMG}/2026-07-31_pc-build-day38.jpg`,
      `${IMG}/2026-08-01_laptop-sales-day39.jpg`,
    ],
  },
];

export function getWeekBySlug(slug: string): WeekEntry | undefined {
  return weeks.find((week) => week.slug === slug);
}

export function getAdjacentWeeks(slug: string): {
  prev: WeekEntry | null;
  next: WeekEntry | null;
  current: WeekEntry | undefined;
} {
  const index = weeks.findIndex((week) => week.slug === slug);
  if (index === -1) {
    return { prev: null, next: null, current: undefined };
  }
  return {
    current: weeks[index],
    prev: index > 0 ? weeks[index - 1] : null,
    next: index < weeks.length - 1 ? weeks[index + 1] : null,
  };
}
