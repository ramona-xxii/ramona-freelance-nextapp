export default function Home() {
  return (
    <>
    {/* site container */}
    <div id="site-container" className="bg-blue-200 px-10 py-10 space-y-10 sm:space-y-15 md:space-y-20">

      {/* HOME section */}
      <section id="home" className="bg-blue-300">
        {/* hero display */}
        <div id="hero" className="flex-col pt-5 space-y-3">
          <h1 className="flex justify-center text-3xl text-center">Build Your Brand with NorthStar Studio</h1>
          <p className="flex justify-center text-lg text-center">Select Your Service To Get Started</p>
        </div>
        <div id="services-grid" className="px-10 py-5">
          {/* services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* card 1 - logo */}
            <div className="bg-purple-300 rounded-lg px-5 py-4">
              <h1 className="text-center text-base sm:text-lg md:text-xl">Logo</h1>
              <p>Make your brand pop with a catchy logo</p>
              <button className="w-full border border-black rounded-lg px-3 py-1.5">More Info</button>
            </div>
            {/* card 2 - business cards */}
            <div className="bg-purple-300 rounded-lg px-5 py-4">
              <h1 className="text-center text-base sm:text-lg md:text-xl">Business Cards</h1>
              <p>Expand your client base with professional business cards</p>
              <button className="w-full border border-black rounded-lg px-3 py-1.5">More Info</button>
            </div>
            {/* card 3 - website */}
            <div className="bg-purple-300 rounded-lg px-5 py-4">
              <h1 className="text-center text-base sm:text-lg md:text-xl">Website</h1>
              <p>Create a unique experience with a fully customized website</p>
              <button className=" w-full border border-black rounded-lg px-3 py-1.5">More Info</button>
            </div>
          </div>
        </div>
        
        
      </section>

      {/* ABOUT section */}
      <section id="about" className="bg-green-200">
        <h1>About</h1>
      </section>

      {/* CONTACT section */}
      <section id="contact">
      </section>
    </div>
      

    </>
  );
}
