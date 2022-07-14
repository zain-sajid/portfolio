import cineview from '../images/projects/cineview.png';
import obewan from '../images/projects/obe-wan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const projectsArr = [
  {
    image: cineview,
    alt: 'Cineview',
    link: 'https://thecineview.netlify.app',
  },
  {
    image: obewan,
    alt: 'OBE-WAN',
    link: 'https://obe-wan.netlify.app',
  },
];

function Project({ image, alt, link }) {
  return (
    <div className="relative w-full md:w-[49%] group">
      <img
        src={image}
        alt={alt}
        className="rounded-xl object-contain shadow-lg"
      />
      <a href={link} target="_blank" rel="noreferrer">
        <button className="absolute opacity-0 group-hover:opacity-100 m-auto top-0 right-0 bottom-0 left-0 hover:backdrop-blur-md transition rounded-xl">
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="4x"
            className="text-white"
          />
        </button>
      </a>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center w-3/4 mx-auto my-16 h-[90vh]"
    >
      <h1 className="text-sky-400 font-extrabold text-4xl sm:text-5xl mb-8">
        Projects
      </h1>
      <div className="flex flex-wrap justify-between gap-y-5">
        {projectsArr.map((project) => {
          return (
            <Project
              image={project.image}
              alt={project.alt}
              link={project.link}
              key={project.alt}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
