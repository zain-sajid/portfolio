import './Homepage.css';
import background from '../pictures/background.png';
import avatar from '../pictures/avatar.png';
import upwork from '../pictures/upwork.svg';
import linkedin from '../pictures/linkedin.svg';

function Homepage() {
  return (
    <div className="container mx-auto px-8">
      {/* Background */}
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <img
            src={background}
            alt="Background"
            className="w-[90rem] flex-none max-w-none block"
          />
        </div>
      </div>

      {/* Landing Page */}
      <div className="flex mx-auto w-4/5 mt-16">
        <div className="lg:pt-24 pt-10">
          <h1 className="text-white font-extrabold text-3xl md:text-5xl tracking-tight">
            Hey there! I'm <span className="text-sky-400 ">Zain Sajid.</span>
            <br />A <span className="text-sky-400 ">full-stack </span>
            developer 💻 based in{' '}
            <span className="text-sky-400 ">Islamabad.</span>
          </h1>
          <div className="flex mt-4 gap-x-4">
            <a
              href="https://www.upwork.com/freelancers/~01cb170fe0dbb578ea"
              className="w-3/40"
            >
              <img src={upwork} className="drop-shadow-lg" alt="Upwork Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/thezainsajid/"
              className="w-3/40"
            >
              <img
                src={linkedin}
                className="drop-shadow-lg"
                alt="Linkedin Logo"
              />
            </a>
          </div>
        </div>
        <img
          className="z-20 w-2/5 object-contain drop-shadow-lg"
          src={avatar}
          alt="Avatar"
          loading="lazy"
        />
      </div>

      {/* About */}
      <div className="w-4/5 mx-auto m-40">
        <h1 className="text-white font-extrabold text-5xl">About</h1>
        <p className="text-white text-lg mt-4">
          A student at NUST, Islamabad pursuing a major in Software Engineering
          currently exploring different fields in Computer Science such as Web
          Development and Machine Learning as well as learning creative skills
          such as Video Editing and Graphic Design. I try to find the
          opportunity to learn in every situation and strongly believe that
          learning is a continuous process. I love networking and collaborating
          with people as it allows me learn from them and grow as a person.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
