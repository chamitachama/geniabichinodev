export const Contact = () => {
    return(

        <>
         <head>
                <title>Contacts | Find my work online and reach out through these channels | Gen Iabichino</title>
        </head>
        <div className="wrapper flex items-center flex-grow">
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <a
            href="mailto:geniabichino@gmail.com"
            className="border border-[#0a983e] rounded-lg px-5 py-2 hover:bg-[#0a983e] hover:text-black transition"
          >
            Email
          </a>

          <a
            href="https://linkedin.com/in/geniabichino"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#0a983e] rounded-lg px-5 py-2 hover:bg-[#0a983e] hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/chamitachama"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#0a983e] rounded-lg px-5 py-2 hover:bg-[#0a983e] hover:text-black transition"
          >
            GitHub
          </a>
        </div>

        </div>
        </>
    )
}