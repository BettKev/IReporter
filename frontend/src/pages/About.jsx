export default function About() {
    return (
      <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent">
            About iReporter
          </h1>
          <p className="text-lg md:text-xl text-gray-300 text-center mt-4 leading-relaxed">
            iReporter is a platform designed to empower citizens to report
            incidents, share impactful stories, and drive change in their
            communities. Whether it’s highlighting corruption or sharing positive
            development initiatives, your voice matters.
          </p>
  
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-purple-400">Our Mission</h2>
              <p className="text-gray-300 mt-3">
                We believe in transparency, accountability, and community-driven
                change. Our goal is to provide a reliable platform where people can
                speak up and be heard.
              </p>
            </div>
  
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-pink-400">Our Vision</h2>
              <p className="text-gray-300 mt-3">
                To become the go-to platform for citizen journalism and real-time
                reporting, fostering positive change through collective action.
              </p>
            </div>
          </div>
  
          <div className="text-center mt-12">
            <a
              href="/contacts"
              className="text-lg font-medium text-yellow-300 hover:text-purple-400 transition duration-300"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </section>
    );
  }
  