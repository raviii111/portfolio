import myphoto from "./assets/mypic.jpeg"

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
        
        <h1 className="text-2xl font-bold">
          Ravi's Portfolio
        </h1>

        <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 px-5 py-2 rounded-lg hover:scale-105 transition"
>
  View Resume
</a>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-10">

        {/* Left Side Photo */}
        <div>

          <img
            src={myphoto}
            alt="profile"
            className="rounded-3xl w-[250px] h-[250px] object-cover border-4 border-blue-500"
          />

        </div>

        {/* Right Side Details */}
        <div className="max-w-2xl">

          <h1 className="text-5xl font-bold mb-4">
            RaviKumar Reddi
          </h1>

          <h2 className="text-blue-400 text-xl mb-6">
            ECE Student | EMBEDDED ENGINEER
          </h2>

          <div className="space-y-2 text-gray-300">

            <p>📞 Phone: 9398470210</p>

            <p>📧 Email: ravikumarreddi777@gmail.com</p>

            <p>📍 Address: mahammadhpuram, jalumuru, srikakulam, andrapradesh</p>

          </div>

          <p className="mt-6 text-gray-400 leading-7">
            Passionate about building electronic projects
            and learning modern technologies.
          </p>

        </div>

      </section>

      {/* Update Box */}
      <section className="px-10 pb-10">

        <div className="bg-[#1e293b] rounded-3xl p-8 border border-gray-700 shadow-lg">

          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Current Updates
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-[#0f172a] p-5 rounded-2xl">

              <h3 className="text-xl font-semibold mb-2">
                Currently Learning
              </h3>

              <p className="text-gray-400">
                embedded systems in robotics
              </p>

            </div>

            <div className="bg-[#0f172a] p-5 rounded-2xl">

              <h3 className="text-xl font-semibold mb-2">
                Working On
              </h3>

              <p className="text-gray-400">
                Building gadgets and jarvis
              </p>

            </div>

            <div className="bg-[#0f172a] p-5 rounded-2xl">

              <h3 className="text-xl font-semibold mb-2">
                Goals
              </h3>

              <p className="text-gray-400">
                To become a robotic engineer
              </p>

            </div>

            <div className="bg-[#0f172a] p-5 rounded-2xl">

              <h3 className="text-xl font-semibold mb-2">
                Future Plans
              </h3>

              <p className="text-gray-400">
                Creating modern robots for assistance
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section className="px-10 py-10">

        <h2 className="text-4xl font-bold mb-10 text-center text-blue-400">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project Card 1 */}
          <div className="bg-[#1e293b] rounded-3xl overflow-hidden border border-gray-700 hover:scale-105 transition duration-300">

            <img
              src="https://via.placeholder.com/400x200"
              alt="project"
              className="w-full"
            />

            <div className="p-5">

              <h3 className="text-2xl font-bold mb-3">
                Room Automation
              </h3>

              <p className="text-gray-400 mb-5">
                Using IoT for smart room automation.
              </p>

              <div className="flex gap-3">

                <button className="bg-blue-600 px-4 py-2 rounded-lg">
                  Live Demo
                </button>

                <button className="border border-gray-500 px-4 py-2 rounded-lg">
                  GitHub
                </button>

              </div>

            </div>

          </div>

          {/* Project Card 2 */}
          <div className="bg-[#1e293b] rounded-3xl overflow-hidden border border-gray-700 hover:scale-105 transition duration-300">

            <img
              src="https://via.placeholder.com/400x200"
              alt="project"
              className="w-full"
            />

            <div className="p-5">

              <h3 className="text-2xl font-bold mb-3">
                Jarvis
              </h3>

              <p className="text-gray-400 mb-5">
                My own AI Assistant.
              </p>

              <div className="flex gap-3">

                <button className="bg-blue-600 px-4 py-2 rounded-lg">
                  Live Demo
                </button>

                <button className="border border-gray-500 px-4 py-2 rounded-lg">
                  GitHub
                </button>

              </div>

            </div>

          </div>

          {/* Project Card 3 */}
          <div className="bg-[#1e293b] rounded-3xl overflow-hidden border border-gray-700 hover:scale-105 transition duration-300">

            <img
              src="https://via.placeholder.com/400x200"
              alt="project"
              className="w-full"
            />

            <div className="p-5">

              <h3 className="text-2xl font-bold mb-3">
                RavisBot
              </h3>

              <p className="text-gray-400 mb-5">
                Mobile-friendly responsive website with modern electronic components.
              </p>

              <div className="flex gap-3">

                <button className="bg-blue-600 px-4 py-2 rounded-lg">
                  Live Demo
                </button>

                <button className="border border-gray-500 px-4 py-2 rounded-lg">
                  GitHub
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section className="px-10 py-16">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-5">

          <div className="bg-[#1e293b] px-6 py-3 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            C/C++
          </div>

          <div className="bg-[#1e293b] px-6 py-3 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            CSS
          </div>

          <div className="bg-[#1e293b] px-6 py-3 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            JavaScript
          </div>

          <div className="bg-[#1e293b] px-6 py-3 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            React
          </div>

          <div className="bg-[#1e293b] px-6 py-3 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            Tailwind CSS
          </div>

          <div className="bg-[#1e293b] px-6 py-3 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            Python
          </div>

          <div className="bg-[#1e293b] px-6 py-3 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            GitHub
          </div>

          <div className="bg-[#1e293b] px-6 py-3 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            Responsive Design
          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section className="px-10 py-16">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700">

            <h3 className="text-2xl font-bold mb-6">
              Contact Details
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>📞 Phone: Your Number</p>

              <p>📧 Email: yourmail@gmail.com</p>

              <p>📍 Address: Andhra Pradesh</p>

              <p>💼 LinkedIn: yourprofile</p>

              <p>💻 GitHub: yourgithub</p>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700">

            <h3 className="text-2xl font-bold mb-6">
              Send Message
            </h3>

            <form 
                  action=" https://formspree.io/f/xojbdqqo"
                  method="POST"
                  className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700 outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700 outline-none"
              ></textarea>

              <button className="bg-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-400">
        Designed & Built by Ravi
      </footer>

    </div>
  )
}

export default App