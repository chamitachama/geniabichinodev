import { Mail, GithubIcon, LinkedinIcon } from "lucide-react";

export const Home = () => {
    return (
        <main className="wrapper">
            <section
                className="intro flex min-h-screen items-center"
                aria-labelledby="intro-heading"
            >
                <div className="intro__text text-white">
                    <span aria-hidden="true">****</span>
                    <header>
                        <h1
                            id="intro-heading"
                            className="text-2xl sm:text-4xl lg:text-3xl font-semibold"
                        >
                            Hello, I'm{" "}
                            <ruby>
                                Gen.<rt>Golf-Echo-Nov</rt>
                            </ruby>
                            <br />
                            A Front-End developer and UX/UI designer based in Barcelona.
                        </h1>
                    </header>
                    <span aria-hidden="true">****</span>
                    <section
                        aria-labelledby="bio-heading"
                        className="mt-6 leading-relaxed"
                    >
                        <h2 id="bio-heading" className="sr-only">
                            About me
                        </h2>
                        <p className="mb-3">
                            Before getting into engineering, I was obsessed with design and user experiences.
                        </p>
                        <p className="mb-3">
                            Now, I love turning ideas into clean, scalable apps that people actually enjoy using.
                        </p>
                        <p className="mb-3">
                            I build fast, intuitive, and beautifully crafted web apps with{" "}
                            <kbd>
                                <kbd>React</kbd>, <kbd>JavaScript</kbd>, <kbd>Redux</kbd>,{" "}
                                <kbd>Tailwind</kbd>, <kbd>Python</kbd>
                            </kbd>.
                            I blend user-focused thinking with clean, maintainable code.
                        </p>
                    </section>

                    <section
                        aria-labelledby="contact-heading"  className="flex mt-6 font-bold gap-4"
                    >
                        <h2 id="contact-heading" className="sr-only">   Contact links  </h2>

                        <p>Let's talk</p>
                        <ul className="flex gap-4" role="list">
                            <li>
                                <a href="mailto:geniabichino@gmail.com" aria-label="Send me an email"
                                    className="hover:text-[#0a983e]" ><Mail aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/geniabichino" target="_blank"
                                    rel="noopener noreferrer" aria-label="Visit my LinkedIn profile"
                                    className="hover:text-[#0a983e]"> <LinkedinIcon aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/chamitachama" target="_blank" rel="noopener noreferrer"
                                    aria-label="Visit my GitHub profile" className="hover:text-[#0a983e]"> <GithubIcon aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </main>
    );
};
