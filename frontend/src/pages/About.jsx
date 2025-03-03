export default function About() {
  return (
    <section className="bg-gray-800 text-white min-h-screen flex items-center justify-center mt-16 rounded-3xl">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="About-h1 ml-50 text-center text-4xl md:text-5xl">
          About iReporter
        </h1>
        <p className="text-lg md:text-xl text-white text-center mt-4 leading-relaxed">
          iReporter is a platform designed to empower citizens to report
          incidents, share impactful stories, and drive change in their
          communities. Whether it’s highlighting corruption or sharing positive
          development initiatives, your voice matters.
        </p>

        {/* Get in Touch Button */}
        <div className="text-center mt-12">
          <a
            href="mailto:iregisterweb@gmail.com"
            className="get-started-btn border-2 border-white px-4 py-2 rounded text-white hover:bg-white hover:text-gray-900 transition-all"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 sm:grid-cols-1">
          <div className="group bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-200 hover:text-black">
            <h2 className="text-2xl font-semibold text-purple-400">Our Mission</h2>
            <p className="text-white mt-3 group-hover:text-black">
              We believe in transparency, accountability, and community-driven
              change. Our goal is to provide a reliable platform where people can
              speak up and be heard.
            </p>
          </div>

          <div className="group bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-200 hover:text-black">
            <h2 className="text-2xl font-semibold text-pink-400">Our Vision</h2>
            <p className="text-white mt-3 group-hover:text-black">
              To become the go-to platform for citizen journalism and real-time
              reporting, fostering positive change through collective action.
            </p>
          </div>
        </div>

        {/* The Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-yellow-300">
            The Team
          </h2>
          <div className="grid gap-8 mt-8 md:grid-cols-3 sm:grid-cols-1">
            {/* Team Member */}
            <div className="group bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-200 hover:text-gray-900 flex items-center">
              <img
                src="/path/to/profile1.jpg"
                alt="Kevin Bett"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-purple-400">Kevin Bett</h3>
                <p className="text-white mt-2 group-hover:text-black">Founder</p>
              </div>
            </div>

            {/* Another Team Member */}
            <div className="group bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-200 hover:text-gray-900 flex items-center">
              <img
                src="/path/to/profile2.jpg"
                alt="Emmaculate Mwikali"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-pink-400">Emmaculate Mwikali</h3>
                <p className="text-white mt-2 group-hover:text-black">Founder</p>
              </div>
            </div>

            {/* Another Team Member */}
            <div className="group bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-200 hover:text-gray-900 flex items-center">
              <img
                src="/path/to/profile3.jpg"
                alt="David Parsley"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-yellow-300">David Parsley</h3>
                <p className="text-white mt-2 group-hover:text-black">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
