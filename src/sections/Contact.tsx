function Contact() {
  return (
    <section
      className={'flex flex-col gap-4'}
      id={'contact'}
      aria-label="Contact section"
    >
      <h2 className="text-4xl">Get in touch</h2>
      <div className="grid flex-1 grid-cols-2 gap-4 p-4 text-2xl">
        <article className="flex flex-col gap-4">
          <h3 className="text-3xl">Send me an email</h3>

          <form
            className={'flex flex-col gap-8'}
            action="mailto:patrykbusko@gmail.com"
            method="post"
            encType="text"
          >
            <input
              className="rounded p-2"
              type="text"
              id="name"
              placeholder={'Name'}
              required
            />
            <input
              className="rounded p-2"
              type="text"
              id="surname"
              placeholder={'Surname'}
              required
            />
            <input
              className="rounded p-2"
              type="email"
              id="email"
              placeholder={'Email'}
              required
            />
            <textarea
              className="rounded p-2"
              id="message"
              cols={30}
              rows={10}
              placeholder="Your message"
              required
            />
            <button className="bg-orange-600 p-4">Send</button>
          </form>
        </article>

        <article className={'flex flex-col gap-4'}>
          <h3 className="text-3xl">Socials</h3>
          <address className="flex flex-col gap-4">
            <a href="https://github.com/Predakor">Github</a>
            <a href="http://">Linkedin</a>
            <a href="http://">Facebook</a>
          </address>
        </article>
      </div>
    </section>
  );
}
export default Contact;
