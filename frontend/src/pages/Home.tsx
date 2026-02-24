import HomeImage from "../assets/home-cover.png";

const Home = () => {
  return (
    <div className="m-0">
      <section className="" id="hero">
        <div
          className="relative h-screen bg-cover bg-center "
          style={{ backgroundImage: `url(${HomeImage})` }}
        >
          <div className="bg-black/60 inset-0 absolute"></div>

          <div className="relative flex flex-col h-full items-center justify-center">
            <div className="bg-black/60 shadow-2xl rounded-lg px-6 py-8 ring ring-gray-900/5 text-center">
              <h1 className="text-6xl font-header text-primary mt-5  tracking-tight">
                VISUAL FAST
              </h1>
              <p className="text-white mt-4 text-lg w-3/4 mx-auto">
                Track your fasting. Visualize your progress. Stay consistent.
                📊⏳
              </p>
              <a
                href="#"
                className="p-4 block bg-primary shadow-2xl text-white mt-12 text-3xl rounded-xl hover:cursor-pointer"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
