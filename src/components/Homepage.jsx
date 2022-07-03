import background from '../images/background.png';
import avatar from '../images/avatar.png';
import upwork from '../images/upwork.svg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';

function Homepage() {
  return (
    <div className="container mx-auto mt-16 px-8">
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
      <div className="flex items-center mx-auto w-3/4">
        <div className="">
          <div className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Hey there! I'm <span className="text-sky-400 ">Zain Sajid.</span>
            <br />A <span className="text-sky-400 ">full-stack </span>
            developer 💻 based in{' '}
            <span className="text-sky-400 ">Islamabad.</span>
          </div>
          <div className="flex mt-4 gap-x-4">
            <a
              href="https://www.upwork.com/freelancers/~01cb170fe0dbb578ea"
              className="w-8"
            >
              <img
                src={upwork}
                className="hover:drop-shadow-lg"
                alt="Upwork Logo"
              />
            </a>
            <a href="https://www.linkedin.com/in/thezainsajid" className="w-8">
              <img
                src={linkedin}
                className="hover:drop-shadow-lg"
                alt="Linkedin Logo"
              />
            </a>
            <a href="https://github.com/zain-sajid" className="w-8">
              <img
                src={github}
                className="hover:drop-shadow-lg"
                alt="Linkedin Logo"
              />
            </a>
          </div>
        </div>
        <img
          className="z-20 w-2/5 object-contain drop-shadow-lg hidden sm:block"
          src={avatar}
          alt="Avatar"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Homepage;
