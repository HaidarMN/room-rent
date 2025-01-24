// Page Items
import HomeHeader from "../components/pages/home/HomeHeader";
import SpaceType from "../components/pages/home/SpaceType";

const Home = () => {
  return (
    <>
      <section>
        <HomeHeader />
      </section>

      <section className="flex flex-col gap-10 py-8 xl:gap-20 xl:pt-20">
        <SpaceType />
      </section>
    </>
  );
};

export default Home;
