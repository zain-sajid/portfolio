import react from '../images/icons/react.svg';
import nodejs from '../images/icons/nodejs.svg';
import express from '../images/icons/express.svg';
import nextjs from '../images/icons/nextjs.svg';
import mongodb from '../images/icons/mongodb.svg';
import graphql from '../images/icons/graphql.svg';
import git from '../images/icons/git.svg';
import javascript from '../images/icons/javascript.svg';
import html from '../images/icons/html.svg';
import css from '../images/icons/css.svg';
import sass from '../images/icons/sass.svg';
import bootstrap from '../images/icons/bootstrap.svg';
import tailwind from '../images/icons/tailwind.svg';

function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center w-3/4 mx-auto my-16 py-16 sm:h-[90vh]"
    >
      <h1 className="text-sky-400 font-extrabold text-4xl sm:text-5xl mb-4">
        About
      </h1>
      <p className="text-white text-lg sm:text-xl">
        I'm a software developer and student at the{' '}
        <span className="font-bold">
          National University of Sciences and Technology (NUST), Islamabad
        </span>{' '}
        pursuing a major in{' '}
        <span className="font-bold">Software Engineering.</span> I love working
        with the lastest tools and technologies for both the frontend and
        backend to solve challenging problems. Currently, I'm focused on
        learning how to design and build great frontend applications that are{' '}
        <span className="font-bold">easy to use and integrate.</span>
      </p>
      <div className="text-white text-xl sm:text-2xl font-bold mt-14">
        A few technologies that I enjoy working with
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <img
          src={react}
          alt="React"
          className="drop-shadow-lg object-contain"
        />
        <img
          src={nodejs}
          alt="Node.js"
          className="drop-shadow-lg object-contain"
        />
        <img
          src={express}
          alt="Express"
          className="drop-shadow-lg object-contain pt-4"
        />
        <img
          src={nextjs}
          alt="nextjs"
          className="drop-shadow-lg object-contain w-20 pt-2"
        />
        <img
          src={mongodb}
          alt="MongoDB"
          className="drop-shadow-lg object-contain w-40"
        />
        <img
          src={graphql}
          alt="graphql"
          className="drop-shadow-lg object-contain w-12"
        />
        <img
          src={git}
          alt="git"
          className="drop-shadow-lg object-contain w-12"
        />
        <img
          src={javascript}
          alt="javascript"
          className="drop-shadow-lg object-contain w-10"
        />
        <img
          src={html}
          alt="html"
          className="drop-shadow-lg object-contain w-12"
        />
        <img
          src={css}
          alt="css"
          className="drop-shadow-lg object-contain w-12 -ml-2"
        />
        <img
          src={sass}
          alt="sass"
          className="drop-shadow-lg object-contain w-20 -ml-4 -mr-4"
        />
        <img
          src={bootstrap}
          alt="bootstrap"
          className="drop-shadow-lg object-contain w-12"
        />
        <img
          src={tailwind}
          alt="tailwind"
          className="drop-shadow-lg object-contain py-4 w-32"
        />
      </div>
    </section>
  );
}

export default About;
