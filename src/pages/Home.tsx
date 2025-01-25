// Helper
import { bestSpace } from "../helpers/data-room";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel } from "swiper/modules";

// Page Items
import ListCard from "../components/room/ListCard";
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

      <section className="bg-light py-8">
        <div className="container flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col justify-center gap-4 lg:w-1/3">
            <h1 className="title text-secondary">Find Your Perfect Space</h1>
            <div className="w-20 border-t-2 border-accent"></div>
            <p>
              Discover our partner at special rates to find your perfect space
            </p>
          </div>

          <Swiper
            spaceBetween={16}
            slidesPerView={"auto"}
            freeMode
            mousewheel
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar, Mousewheel]}
            className="w-full !pb-8 lg:w-2/3"
          >
            {bestSpace.map((item) => (
              <SwiperSlide>
                <ListCard
                  key={item.uid}
                  uid={item.uid}
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  location={item.location}
                  size={item.size}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="container py-8">
        <h1 className="title text-center">halo</h1>
      </section>
    </>
  );
};

export default Home;
