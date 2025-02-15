import { useEffect, useState } from "react";
import useAxios from "../plugins/axios";

// Helper
import { dataRoom, dataReview } from "../helpers/data";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Scrollbar,
  Mousewheel,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

// Components
import { Icon } from "@iconify/react/dist/iconify.js";
import ListCard from "../components/room/ListCard";
import HomeHeader from "../components/pages/home/HomeHeader";
import SpaceType from "../components/pages/home/SpaceType";
import Accordion from "../components/global/accordion";

import { DefaultResponseType } from "../types/api.type";
import { FaqType } from "../types/general.type";

const Home = () => {
  const [dataFaq, setDataFaq] = useState<FaqType[]>([]);

  const getFaq = async () => {
    try {
      const response: DefaultResponseType<FaqType[]> =
        await useAxios.get("/faq");

      setDataFaq(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFaq();
  }, []);
  return (
    <>
      <section>
        <HomeHeader />
      </section>

      <section className="flex flex-col gap-10 py-8 xl:gap-20 xl:pt-20">
        <SpaceType />
      </section>

      <section className="bg-light py-8">
        <div className="container flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col gap-4 lg:w-1/3">
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
            {dataRoom.map((item) => (
              <SwiperSlide key={item.uid}>
                <ListCard
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

      <section className="container flex flex-col items-center justify-between gap-10 py-8 lg:flex-row-reverse lg:justify-between">
        <div className="flex w-full flex-col items-start gap-4 lg:w-1/3 lg:items-end">
          <h1 className="title text-start lg:text-end">
            Good News For Everyone
          </h1>
          <div className="w-20 border-t-2 border-neutral-400"></div>
          <p className="text-start lg:text-end">
            Real feedback from people who found their perfect space
          </p>
        </div>
        <Swiper
          effect={"coverflow"}
          slidesPerView={"auto"}
          centeredSlides
          grabCursor
          loop
          coverflowEffect={{
            rotate: 0,
            stretch: -50,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            disableOnInteraction: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full lg:w-2/3"
        >
          {dataReview.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="flex h-72 w-96 flex-col items-center gap-2 rounded-lg border-x-4 border-primary p-4 shadow-md">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="size-24 rounded-full border-[3px] border-primary shadow-md"
                />
                <span className="text-center text-lg font-medium">
                  {item.name}
                </span>
                <p className="text-center text-sm">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="bg-light py-8">
        <div className="container flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col gap-4 lg:w-1/3">
            <h1 className="title text-secondary">Enjoy Our Privilege</h1>
            <div className="w-20 border-t-2 border-accent"></div>
            <p>What makes us your best friend</p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3">
            <div className="flex flex-col items-center gap-2 text-center">
              <Icon icon="ph:devices-fill" className="text-8xl text-accent" />
              <h2 className="text-xl font-bold text-secondary">Easy Access</h2>
              <p>Easily access our applictaion across all platform</p>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <Icon
                icon="streamline:bug-antivirus-shield-solid"
                className="text-8xl text-primary"
              />
              <h2 className="text-xl font-bold text-secondary">
                Maximum Security
              </h2>
              <p>Enjoy secure transaction with our protected security</p>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <Icon
                icon="fluent:contact-card-ribbon-32-filled"
                className="text-8xl text-primary"
              />
              <h2 className="text-xl font-bold text-secondary">
                Membership Reward
              </h2>
              <p>Earn many rewards by joining our membership</p>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <Icon
                icon="fluent:person-support-32-filled"
                className="text-8xl text-accent"
              />
              <h2 className="text-xl font-bold text-secondary">
                Customer Support
              </h2>
              <p>Ready to help anytime and anywhere</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container flex flex-col items-center gap-10 py-8 lg:flex-row-reverse">
        <div className="flex w-full flex-col items-start gap-4 lg:w-1/3 lg:items-end">
          <h1 className="title text-start lg:text-end">
            Frequently Ask Question
          </h1>
          <div className="w-20 border-t-2 border-neutral-400"></div>
          <p className="text-start lg:text-end">All the answer in one place</p>
        </div>

        <div className="w-full lg:w-2/3">
          <Accordion
            data={dataFaq.map((item) => ({
              id: item.id,
              title: item.question,
              description: item.answer,
            }))}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
