
export const Portfolio = () => {
    return (

        <>
            <head>
                <title>Projects | Web development portfolio | Gen Iabichino</title>
            </head>
            <div className="wrapper ">
            <h1 id="portfolio-title" className="sr-only">Portfolio Projects</h1>

                <div className="flex gap-8 flex-wrap items-center justify-center">
                    <section className="card w-full md:w-2/4 lg:w-1/4">
                        <figure>
                            <img src="quiz-over.png" alt="quiz over game" />
                            <h3 className="m-2">Quiz Over</h3>
                            <p className="m-2">Responsive quiz game built for mobile users, designed to deliver fast and interactive gameplay. (Work in progress)</p>
                        </figure>
                        <div className="flex gap-2 place-content-between">
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/chamitachama/QuizOver"
                                aria-label="See repository for Quiz Over on GitHub" className="see_repo">See repo ➜
                            </a>
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="https://quizover.geniabichino.dev"
                                className="custom_button border"> Play now
                            </a>

                        </div>
                    </section>
                    {/* <section className="card w-full md:w-2/4 lg:w-1/4">
                        <figure>
                            <img src="quiz-over.png" alt="quiz over game" />
                            <h3 className="m-2">Newsletter Analytics</h3>
                            <p className="m-2">A responsive dashboard to visualize newsletter metrics like open rate, clicks, and subscriber growth. Designed and implemented for CheapCharminghouses.com</p>
                        </figure>
                        <div className="flex gap-2 place-content-between">
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="https://quizover.geniabichino.dev"
                                aria-label="See repository for Quiz Over on GitHub" className="see_repo">See repo ➜
                            </a>
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="https://quizover.geniabichino.dev"
                                className="custom_button border">  Play now
                            </a>
                        </div>
                    </section> */}
                </div>
            </div>
        </>
    )
}