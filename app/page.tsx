export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Amina Sayaraja</h1>
          <p className="text-gray-600 italic">
            Expert in groundwater and groundwater resource development
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Email: aminasayaraja@gmail.com | GitHub: github.com/aminasayaraja |
            Portfolio: aminasayaraja.dev
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">About Me</h2>
          <p>
            Our company develops groundwater systems and water resources. We also provide modern groundwater equipment and consulting services. We have over 10 years of experience in the field.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Underground water exploration',
              'Water system design',
              'Drilling service',
              'Groundwater consulting services',
              'Provide equipment and drilling rigs',
              'Provide water system equipment',
            ].map((skill) => (
              <span key={skill} className="bg-blue-500 text-white px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">Experience</h2>
          <ul className="space-y-4">
            <li>
              <strong>Senior Groundwater and Resource Development Expert</strong> – Tech Solutions Inc. (2025–Present)
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>Built and maintained modern groundwater systems and responded to customer requests.</li>
                <li>Led a team of developers and managed quality assurance.</li>
              </ul>
            </li>
            <li>
              <strong>Community Groundwater Supply Project</strong> – Implemented since 2018
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>Worked in a team divided into four departments: water channel survey, drilling, customer support, and procurement.</li>
                <li>Coordinated closely with all teams and served customers directly.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">Education</h2>
          <p>
            <strong>Business Administration Graduate</strong> – University of Laos (2004–2008)
            <br />
            Completed 5-month specialized training in groundwater systems in China.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">Projects</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Drilling Lao (Facebook Page)</strong> – Showcasing company projects and activities.
            </li>
            <li>
              <strong>Task Manager App</strong> – MERN stack app to manage daily tasks with user authentication.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">Contact</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Facebook Page:</strong> Drilling Lao
            </li>
            <li>
              <strong>Phone/WhatsApp:</strong> 56705111
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
