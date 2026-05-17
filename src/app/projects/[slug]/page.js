const projects = {
  "coal-trading-system": {
    title: "Coal Trading Business Management System",
    image: "/projects/coal-trading.jpg",
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

    problem:
      "Managing orders, dispatches, CRM activities, and operational reports manually created delays and reduced operational visibility.",

    solution:
      "Developed a centralized web application for operational workflow management, dispatch tracking, reporting, and customer coordination.",

    features: [
      "Order Management",
      "Dispatch Tracking",
      "CRM Activities",
      "Business Reporting",
      "Operational Dashboard",
      "Customer Coordination",
    ],

    outcome:
      "Improved workflow visibility, reduced manual dependency, and centralized operational management.",
  },

  "incentive-reporting-system": {
    title: "Incentive Calculation & Booking Reporting System",
    image: "/projects/incentive-system.jpg",
    gallery: [
    "/projects/incentive/1.jpg",
    "/projects/incentive/2.jpg",
    "/projects/incentive/3.jpg",
    "/projects/incentive/4.jpg",
    ],

    problem:
      "Manual incentive calculations and booking reports caused reporting delays and inconsistencies.",

    solution:
      "Built a reporting and incentive automation system for dealership operations.",

    features: [
      "Booking Reports",
      "Incentive Automation",
      "Operational Reporting",
      "Staff Performance Tracking",
    ],

    outcome:
      "Reduced calculation errors and simplified operational reporting workflows.",
  },

  "form-issue-automation": {
    title: "Form Issue & Reporting Automation System",
    image: "/projects/form-automation.jpg",
    gallery: [
    "/projects/form/1.jpg",
    ],

    problem:
      "Form issuance and reporting workflows were repetitive and manually intensive.",

    solution:
      "Created a Google Apps Script automation workflow for tracking, PDF generation, and reporting.",

    features: [
      "Form Tracking",
      "PDF Generation",
      "Google Sheets Automation",
      "Workflow Reporting",
    ],

    outcome:
      "Reduced repetitive manual tasks and improved reporting efficiency.",
  },

  "home-complaint-pwa": {
    title: "Home Complaint Management PWA",
    image: "/projects/complaint-pwa.jpg",
    gallery: [
    "/projects/complaint/1.jpg",
    "/projects/complaint/2.jpg",
    "/projects/complaint/3.jpg",
    "/projects/complaint/4.jpg",
    ],

    problem:
      "Complaint tracking lacked centralized visibility and mobile-friendly management.",

    solution:
      "Built a lightweight Progressive Web App for complaint registration and tracking.",

    features: [
      "Complaint Tracking",
      "Status Updates",
      "Mobile-Friendly PWA",
      "Google Sheets Backend",
    ],

    outcome:
      "Improved complaint handling visibility and simplified issue management.",
  },
};

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return <div className="p-10">Project not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <a
            href="/"
            className="text-sm text-gray-500 hover:text-black"
          >
            ← Back to Home
          </a>

          <h1 className="text-5xl font-bold mt-6 leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-4xl leading-relaxed">
            {project.solution}
          </p>

        </div>
      </section>

        <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">

            <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
                Project Screenshots
            </h2>

            <div className="text-sm text-gray-500">
                Scroll →
            </div>
            </div>

            <div className="flex gap-5 overflow-x-auto pb-2">

            {project.gallery.map((image, index) => (
                <div
                key={index}
                className="min-w-[320px] h-[220px] rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition flex-shrink-0"
                >
                <img
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-contain bg-gray-50 p-2 hover:scale-[1.02] transition duration-500"
                />
                </div>
            ))}

            </div>

        </div>
        </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-10">

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Business Problem
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                {project.problem}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Solution Developed
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Business Outcome
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                {project.outcome}
              </p>
            </div>

          </div>

          <div>
            <div className="border border-gray-200 rounded-3xl p-8 sticky top-24">

              <h3 className="text-xl font-bold mb-6">
                Features
              </h3>

              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl px-4 py-3"
                  >
                    {feature}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}