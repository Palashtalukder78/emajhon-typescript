import CoverPhoto from "../../../src/assets/images/cover.jpg";
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container flex md:flex flex-col md:flex-row sm:justify-evenly items-center">
      <section className="h-40 sm:h-56 flex flex-col justify-between items-start border mb-6 sm:mb-0">
        <p className="text-xs">Sale up to 70% off</p>
        <div>
          <h1 className="text-xl sm:text-5xl  ">New Collection For Fall</h1>
          <h6 className="md:text-xl sm:text-base">
            Discover all the new arrivals of ready-to-wear collection.
          </h6>
        </div>
        <button className="rounded-sm p-2">SHOP NOW</button>
      </section>

      <section className="cover-container w-40 sm:w-64">
        <img className=" sm:w-64" src={CoverPhoto} alt="" />
      </section>
    </div>
  );
}

export default Home