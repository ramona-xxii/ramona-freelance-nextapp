export default function Home() {
  return (
    <>
    {/* site container */}
    <div id="site-container" className="bg-blue-300 px-10">

      {/* HOME section */}
      <section id="home" className="py-20">
        {/* hero display */}
        <div id="hero" className="flex-col">
          <h1 className="flex justify-center text-3xl text-center">Build Your Brand with NorthStar Studio</h1>
          <p className="flex justify-center text-2xl text-center">Select your service below</p>
        </div>
        <div id="services-grid" className="">
          {/* services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* card 1 - logo */}
            <div className="bg-purple-300">
              <h1>Logo</h1>
              <p>Make your brand pop with a catchy logo</p>
              <button>Click Me</button>
            </div>
            {/* card 2 - business cards */}
            <div className="bg-purple-300">
              <h1>Business Cards</h1>
              <p>Expand your client base with professional business cards</p>
              <button>Click Me</button>
            </div>
            {/* card 3 - website */}
            <div className="bg-purple-300">
              <h1>Website</h1>
              <p>Create a unique experience with a fuflly customized website</p>
              <button>Click Me</button>
            </div>
          </div>
        </div>
        
        
      </section>

      {/* ABOUT section */}
      <section id="about">
      </section>

      {/* CONTACT section */}
      <section id="contact">
      </section>
    </div>
      

    </>
  );
}
