import Image from "next/image";
import "../app/globals.css";
import { PiGithubLogoFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { FaLink, FaExternalLinkAlt } from "react-icons/fa";
import { project_data } from "../project_data";

const Projects = () => {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4 "
      id="projects"
    >
      <section className="flex items-center gap-4 pt-2">
        <hr className="h-1 w-12 bg-gray-600 rounded-full" />
        <p className="text-2xl font-medium">&lt;My Projects &nbsp;/&gt;</p>
      </section>

      {/* Projects Section */}
      <section className=" flex justify-center items-center flex-col p-2 max-lg:gap-2">
        {project_data.map((e, index) => (
          <section
            className="card shadow-lg rounded-xl flex lg:flex-row flex-col  gap-4 md:p-4 md:m-4 p-2 m-2 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-fit xl:w-5/6"
            key={index}
          >
            {/* Image Section */}
            <section className="p-1 lg:w-1/2 max-w-fit flex items-center">
              <Image
                className=" rounded-lg shadow-lg"
                src={`/projects/${e.image}`}
                alt={`${e.title} by Amit Kumar Raj`}
                priority={false}
                height={300}
                width={600}
                style={{
                  width: "600px",
                  height: "auto",
                }}
              />
            </section>

            {/* Detail Section */}
            <section className="p-1 lg:p-2 gap-1 flex flex-col lg:w-2/3 max-w-fit">
              <h3 className="text-xl lg:text-2xl font-semibold">{e.title}</h3>
              {/* Badges */}
              <section className="p-2 flex max-w-fit flex-wrap gap-2">
                {e.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded min-w-fit"
                  >
                    {badge}
                  </span>
                ))}
              </section>
              {/* Project Description */}
              <p className=" lg:text-lg text-gray-700 lg:p-2">
                {e.description}
              </p>
              {/* Project Buttons */}
              <section className="lg:p-2 flex justify-end gap-4 max-lg:p-3">
                {/* Github */}
                <a
                  href={e.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View project source code on github"
                  className="flex flex-col items-center"
                >
                  <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-11 h-11 rounded-xl duration-500 text-black  hover:bg-black p-1.5 hover:text-white" />
                  <span className="text-gray-700 text-sm pt-1.5 flex items-center">
                    Source Code <FaLink className="ml-2" />
                  </span>
                </a>
                {/* Github */}
                <a
                  href={e.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="view live project"
                  className="flex flex-col items-center"
                >
                  <CgWebsite className="bg-white transform hover:-translate-y-1.5 w-11 h-11 rounded-xl duration-500 text-green-600  hover:bg-green-700 p-1.5 hover:text-white" />
                  <span className="text-gray-700 text-sm pt-1.5 flex items-center">
                    Live Project <FaExternalLinkAlt className="ml-2" />
                  </span>
                </a>
              </section>
            </section>
          </section>
        ))}
      </section>
    </main>
  );
};
export default Projects;
