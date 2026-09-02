const Experience = () => {
  return (
    <section id="experience" className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw]">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Experience
      </h2>

      <div className="bg-[#0f0c1d] border border-purple-700 rounded-2xl p-6 md:p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Frontend Developer Intern
            </h3>

            <p className="text-[#8245ec] text-lg font-semibold mt-1">
              Simform Solutions
            </p>
          </div>

          <div className="text-gray-400 md:text-right">
            <p>Paid Internship • On-site</p>
            <p>Ahmedabad, Gujarat</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 mt-6 leading-relaxed">
          Worked as a Frontend Developer Intern at Simform Solutions,
          contributing to real-world web application development and
          gaining hands-on experience in modern frontend technologies,
          development workflows, and collaborative software development.
        </p>

        {/* Technologies */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold text-white mb-3">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-3">
            {["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Git", "GitHub"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-[#8245ec]/10
                border border-purple-700 text-gray-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://drive.google.com/file/d/1Dob5zpGqlcmFkZ0TvxeJ6wlWXOlGBF_N/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8245ec] text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105"
          >
            View Internship Certificate
          </a>

          <a
            href="https://github.com/satyamsingh-simform?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#8245ec] text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-[#8245ec] hover:scale-105"
          >
            View Work / Projects
          </a>
        </div>

      </div>
    </section>
  );
};

export default Experience;