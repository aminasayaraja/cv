import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Amina Sayaraja</h1>
          <p className="text-gray-600 italic">Expert in groundwater and groundwater resource development</p>
          <p className="text-sm text-gray-700 mt-2">
            Email: aminasayaraja@gmail.com | GitHub: github.com/aminasayaraja | Portfolio: aminasayaraja.dev
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">About Me</h2>
          <p>
            The company developsgroundwater systems and water resources,as well as provides modern groundwater equipment and consulting services . The wrok experience is 10 year.
            
          
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
              'Water system design',
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
              <strong>Expertise in groundwater and water resource developmentSenior </strong> – Tech Solutions Inc. (2025–Present)
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  Built and maintained modern, respond to customer requests at all times .
                </li>
                <li>Led a team of developers and reviewed code for quality assurance.</li>
              </ul>
            </li>
            <li>
              <strong>Sign the use of groundwater as a community water supply system</strong> – This system has been implemented since 2018 until now.
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  Our company wroks as ateam. The main tasks will be divided into 4 tasks: waterchannel survey,drilling team,customers, and purchasing department.
                </li>
                <li>
                  I will wrok closely whit all teams and wrok with every customer who uses the service.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">Education</h2>
          <p>
            <strong>I graduatedin business administration but went to China to learn about groundwater and receive trainung in this field for 5 months</strong> – University of laos (2004–2008)
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">Projects</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Portfolio Facebook page</strong> – Personal site showcasing my work and blog
              (Drilling lao)
            </li>
            <li>
              <strong>Task Manager App</strong> – MERN stack app to manage daily tasks with user
              authentication
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">contect</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>facebook page  </strong> – Drilling lao
              
            </li>
            <li>
              <strong>Tell 56705111</strong> – wathsApp 56705111
          
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
