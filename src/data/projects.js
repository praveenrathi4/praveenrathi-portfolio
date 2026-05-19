export const projects = [
  {
    slug: "coal-trading-system",
    title: "Coal Trading Business Management System",
    industry: "Trading & Logistics",
    image: "/projects/coal-trading.jpg",
    accent: "from-slate-700 to-slate-900",
    problem:
      "Managing coal orders, dispatch tracking, CRM activities, and operational reports manually across multiple Excel sheets and phone calls.",
    solution:
      "Developed a centralized web application for order management, dispatch tracking, reporting, customer coordination, and operational workflows.",
    outcome:
      "Improved operational visibility, reduced manual coordination, and centralized reporting workflows.",
    metrics: ["Centralized ops", "Less Excel dependency", "Faster decisions"],
    tech: ["Web App", "Dashboard", "CRM"],
    gallery: [
      "/projects/coal/1.jpg",
      "/projects/coal/2.jpg",
      "/projects/coal/3.jpg",
      "/projects/coal/4.jpg",
      "/projects/coal/5.jpg",
      "/projects/coal/6.jpg",
      "/projects/coal/7.jpg",
      "/projects/coal/8.jpg",
      "/projects/coal/9.jpg",
      "/projects/coal/10.jpg",
      "/projects/coal/11.jpg",
    ],
    features: [
      "Order Management",
      "Dispatch Tracking",
      "CRM Activities",
      "Business Reporting",
      "Operational Dashboard",
      "Customer Coordination",
    ],
  },
  {
    slug: "incentive-reporting-system",
    title: "Incentive Calculation & Booking Reporting System",
    industry: "Automotive / Dealership",
    image: "/projects/incentive-system.jpg",
    accent: "from-teal-700 to-teal-900",
    problem:
      "Manual dealership incentive calculations and booking reports created delays and reporting inconsistencies.",
    solution:
      "Built an operational reporting and incentive calculation system for dealership staff and booking workflow management.",
    outcome:
      "Reduced manual calculations, improved reporting accuracy, and simplified review processes.",
    metrics: ["Automated calc", "Accurate reports", "Simpler reviews"],
    tech: ["Reporting", "Automation", "Sheets"],
    gallery: [
      "/projects/incentive/1.jpg",
      "/projects/incentive/2.jpg",
      "/projects/incentive/3.jpg",
      "/projects/incentive/4.jpg",
    ],
    features: [
      "Booking Reports",
      "Incentive Automation",
      "Operational Reporting",
      "Staff Performance Tracking",
    ],
  },
  {
    slug: "form-issue-automation",
    title: "Form Issue & Reporting Automation System",
    industry: "Operations",
    image: "/projects/form-automation.jpg",
    accent: "from-indigo-700 to-indigo-900",
    problem:
      "Form issuance and reporting processes depended heavily on repetitive manual entries and paperwork.",
    solution:
      "Created a Google Sheets and Apps Script based workflow automation system for tracking, reporting, and PDF generation.",
    outcome:
      "Reduced repetitive data entry and improved reporting efficiency.",
    metrics: ["Less paperwork", "Auto PDFs", "Better tracking"],
    tech: ["Apps Script", "Sheets", "PDF"],
    gallery: ["/projects/form/1.jpg"],
    features: [
      "Form Tracking",
      "PDF Generation",
      "Google Sheets Automation",
      "Workflow Reporting",
    ],
  },
  {
    slug: "home-complaint-pwa",
    title: "Home Complaint Management PWA",
    industry: "Property / Services",
    image: "/projects/complaint-pwa.jpg",
    accent: "from-violet-700 to-violet-900",
    problem:
      "Complaint tracking lacked centralized digital visibility and mobile-friendly status management.",
    solution:
      "Built a lightweight PWA using Google Sheets and Apps Script backend for complaint registration and tracking.",
    outcome:
      "Improved complaint visibility and enabled mobile-friendly complaint handling.",
    metrics: ["Mobile-first", "Central tracking", "Faster resolution"],
    tech: ["PWA", "Apps Script", "Mobile"],
    gallery: [
      "/projects/complaint/1.jpg",
      "/projects/complaint/2.jpg",
      "/projects/complaint/3.jpg",
      "/projects/complaint/4.jpg",
    ],
    features: [
      "Complaint Tracking",
      "Status Updates",
      "Mobile-Friendly PWA",
      "Google Sheets Backend",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}
