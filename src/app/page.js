export default function HomePage() {
const projects = [
  {
    slug: "coal-trading-system",
    title: "Coal Trading Business Management System",
    image: "/projects/coal-trading.jpg",
    problem:
      "Managing coal orders, dispatch tracking, CRM activities, and operational reports manually across multiple Excel sheets and calls.",

    solution:
      "Developed a centralized web application for order management, dispatch tracking, reporting, customer coordination, and operational workflows.",

    outcome:
      "Improved operational visibility, reduced manual coordination, and centralized reporting workflows.",

    benefits: [
      "Centralized business visibility",
      "Faster operational decision-making",
      "Reduced Excel dependency",
    ],
  },

  {
    slug: "incentive-reporting-system",
    title: "Incentive Calculation & Booking Reporting System",
    image: "/projects/incentive-system.jpg",

    problem:
      "Manual dealership incentive calculations and booking reports created delays and reporting inconsistencies.",

    solution:
      "Built an operational reporting and incentive calculation system for dealership staff and booking workflow management.",

    outcome:
      "Reduced manual calculations, improved reporting accuracy, and simplified review processes.",

    benefits: [
      "Automated calculations",
      "Improved reporting accuracy",
      "Operational workflow simplification",
    ],
  },

  {
    slug: "form-issue-automation",
    title: "Form Issue & Reporting Automation System",
    image: "/projects/form-automation.jpg",

    problem:
      "Form issuance and reporting processes depended heavily on repetitive manual entries and paperwork.",

    solution:
      "Created a Google Sheets and Apps Script based workflow automation system for tracking, reporting, and PDF generation.",

    outcome:
      "Reduced repetitive data entry and improved reporting efficiency.",

    benefits: [
      "Reduced manual paperwork",
      "Automated PDF generation",
      "Improved workflow tracking",
    ],
  },

  {
    slug: "home-complaint-pwa",
    title: "Home Complaint Management PWA",
    image: "/projects/complaint-pwa.jpg",

    problem:
      "Complaint tracking lacked centralized digital visibility and mobile-friendly status management.",

    solution:
      "Built a lightweight PWA using Google Sheets and Apps Script backend for complaint registration and tracking.",

    outcome:
      "Improved complaint visibility and enabled mobile-friendly complaint handling.",

    benefits: [
      "Centralized complaint tracking",
      "Faster issue handling",
      "Mobile-first workflow",
    ],
  },
];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Praveen Rathi</h1>
            <p className="text-sm text-gray-500">
              SME Automation Solutions
            </p>
          </div>

          <a
            href="https://wa.me/918989171095"
            target="_blank"
            className="bg-black text-white px-5 py-3 rounded-2xl text-sm font-medium"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="inline-flex border border-gray-300 rounded-full px-4 py-2 text-sm mb-6">
              Business Automation Solutions for SMEs
            </div>

            <h2 className="text-5xl font-bold leading-tight">
              Practical Software Solutions That Save Time & Reduce Manual Work
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              I independently build custom business applications focused on
              workflow automation, operational efficiency, reporting systems,
              and practical digital tools for SMEs.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="bg-black text-white px-6 py-3 rounded-2xl"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-gray-300 px-6 py-3 rounded-2xl"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">
              Problems I Help Businesses Solve
            </h3>

            <div className="space-y-4">
              {[
                "Manual reporting & Excel dependency",
                "Operational workflow inefficiencies",
                "Repeated manual data entry",
                "Lack of centralized systems",
                "Slow coordination processes",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">
            <h2 className="text-4xl font-bold">
              Featured Business Projects
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Real-world operational systems built for practical business use.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition"
              >

                <div className="aspect-video overflow-hidden border-b border-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <div className="text-sm text-gray-500 uppercase mb-3">
                    Case Study {index + 1}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">

                    <div>
                      <span className="font-semibold text-black">Problem:</span>{" "}
                      {project.problem}
                    </div>

                    <div>
                      <span className="font-semibold text-black">Solution:</span>{" "}
                      {project.solution}
                    </div>

                    <div>
                      <span className="font-semibold text-black">Business Outcome:</span>{" "}
                      {project.outcome}
                    </div>

                  </div>

                  <a
                    href={`/projects/${project.slug}`}
                    className="inline-block mt-8 border border-black px-5 py-3 rounded-2xl font-medium hover:bg-black hover:text-white transition"
                  >
                    View Case Study
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-3xl border border-gray-200 p-10">

            <h2 className="text-4xl font-bold leading-tight">
              Building Practical Automation Systems for Real Businesses
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              I work independently to build software solutions focused on
              workflow simplification, operational efficiency, reporting, and
              practical business usability.
            </p>

          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Let’s Discuss Your Business Workflow Challenges
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            If your business is dependent on manual processes, disconnected
            systems, or repetitive reporting work — let’s discuss a practical
            automation solution.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/918989171095"
              target="_blank"
              className="bg-black text-white px-8 py-4 rounded-2xl inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-6">

          <div>
            <div className="text-2xl font-bold">
              Praveen Rathi
            </div>

            <div className="text-gray-600 mt-2">
              Independent SME Automation Consultant
            </div>
          </div>

          <div className="text-gray-600">
            <div>Email: rathipra@gmail.com</div>
            <div>WhatsApp: +91 8989171095</div>
          </div>

        </div>
      </footer>

    </div>
  );
}