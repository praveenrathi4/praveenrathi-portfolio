export default function HomePage() {
  const projects = [
    {
      title: "Coal Trading Business Management System",
      description:
        "A custom web application developed for an import coal trading business to manage orders, dispatch operations, reports, customer activities, and operational workflows.",
    },
    {
      title: "Incentive Calculation & Booking Reporting System",
      description:
        "A custom operational reporting and incentive calculation system developed for a Maruti dealership.",
    },
    {
      title: "Form Issue & Reporting Automation System",
      description:
        "A Google Sheets and Apps Script automation system for form issuance, reporting, and workflow management.",
    },
    {
      title: "Home Complaint Management PWA",
      description:
        "A Progressive Web App built using Google Sheets and Apps Script backend for complaint tracking and status management.",
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

                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">
                    Project Screenshot
                  </span>
                </div>

                <div className="p-8">
                  <div className="text-sm text-gray-500 uppercase mb-3">
                    Case Study {index + 1}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <button className="mt-6 border border-black px-5 py-3 rounded-2xl hover:bg-black hover:text-white transition">
                    View Details
                  </button>
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