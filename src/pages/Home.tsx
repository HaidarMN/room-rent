// Page Items
import HomeHeader from "../components/pages/home/HomeHeader";
import SpaceType from "../components/pages/home/SpaceType";

const Home = () => {
  return (
    <>
      <section>
        <HomeHeader />
      </section>

      <section className="flex min-h-screen flex-col gap-10 p-4 pt-8 xl:gap-20 xl:pt-24">
        <SpaceType />
      </section>
    </>
  );
};

export default Home;
