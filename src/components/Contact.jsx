function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center w-3/4 mx-auto my-16 h-[90vh]"
    >
      <h1 className="text-sky-400 font-extrabold text-4xl sm:text-5xl mb-8">
        Like what you see?
      </h1>
      <div className="text-white font-bold text-2xl sm:text-3xl">
        If you're interested in working with me or just have a question, feel
        free to drop me an email.
      </div>
      <a href="mailto:zsajid.bese19seecs@seecs.edu.pk" className="mx-auto my-8">
        <button
          type="button"
          className="w-64 text-navy font-bold text-lg uppercase bg-sky-400 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 hover:drop-shadow-lg"
        >
          Get in Touch
        </button>
      </a>
    </section>
  );
}

export default Contact;
