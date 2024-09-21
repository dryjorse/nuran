import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import planImage from "../../../assets/images/plan.jpg";
import { Navigation, Pagination } from "swiper/modules";
import arrowIcon from "../../../assets/images/icons/arrow-slider.svg";
import "swiper/css";
import "swiper/css/pagination";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";

const plans = [
  {
    title: "title",
    size: "125,12m²",
    block: "block",
    rooms: [
      { title: "hallway", size: "13,93m²" },
      { title: "bathroom", size: "12,65m²" },
      { title: "bedroom", size: "20,14m²" },
      { title: "hall", size: "27,34m²" },
      { title: "bathroom", size: "12,34m²" },
      { title: "bedroom", size: "17,31m²" },
      { title: "balcony", size: "9,67m²" },
      { title: "balcony", size: "9,67m²" },
      { title: "balcony", size: "9,67m²" },
      { title: "balcony", size: "9,67m²" },
      { title: "balcony", size: "9,67m²" },
    ],
    image: planImage,
  },
];

const Plans: FC = () => {
  const { t } = useTranslation();

  const onClickOrder = () => {
    scroller.scrollTo("order", {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -150,
    });
  };

  return (
    <section id="plans" className="container py-[48px]">
      <h2>{t("plans.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("plans.subtitle")}</h3>
      <div className="border border-stroke-neutral rounded-lvl-12 pt-[56px] pb-[8px] px-[12px]  bg-white">
        <div className="flex justify-between items-center gap-[28px]">
          <button className="btn rounded-lvl-1000 flex-[0_0_56px] h-[56px] flex justify-center items-center plan-swiper-prev">
            <img src={arrowIcon} alt="arrow" />
          </button>
          <Swiper
            grabCursor
            slidesPerView={1}
            spaceBetween={20}
            className="flex-auto h-[353px]"
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".plan-swiper-prev",
              nextEl: ".plan-swiper-next",
            }}
            pagination={{ el: ".plan-swiper-pagination", clickable: true }}
          >
            {[
              ...plans,
              ...plans,
              ...plans,
              ...plans,
              ...plans,
              ...plans,
              ...plans,
              ...plans,
            ].map(({ title, size, block, rooms, image }, key) => (
              <SwiperSlide key={key} className="h-full">
                <div className="flex justify-between gap-[12px] h-full">
                  <div className="flex-[0_0_355px]">
                    <h3 className="text-[22px] font-medium">
                      {t(`plans.term.${title}`)}
                    </h3>
                    <div className="my-[12px] flex gap-[12px] text-[14px] !leading-[18px] font-golos-text">
                      <div className="btn rounded-lvl-8 py-[8px] bg-button-secondary-neutral font-medium">
                        {size}
                      </div>
                      <div className="btn-outline">
                        {t(`plans.term.${block}`)}
                      </div>
                    </div>
                    <ul className="font-golos-text *:mb-[4px] text-[13px] 1leading-[17px]">
                      {rooms.slice(0, 11).map(({ title, size }, key) => (
                        <li key={`${title}-${key}`}>
                          {t(`plans.term.${title}`)} - {size}
                        </li>
                      ))}
                      <li>...</li>
                    </ul>
                  </div>
                  <div className="flex-[0_1_503px]">
                    <img
                      src={image}
                      alt="plan"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="btn rounded-lvl-1000 flex-[0_0_56px] h-[56px] flex justify-center items-center plan-swiper-next">
            <img src={arrowIcon} alt="arrow" className="rotate-180" />
          </button>
        </div>
        <div className="plan-swiper-pagination mt-[50px] flex justify-center !gap-[8px] *:!block"></div>
      </div>
      <button
        onClick={onClickOrder}
        className="btn mt-[16px] mx-auto rounded-lvl-4 py-[12px] px-[84px] block"
      >
        {t("leaveRequest")}
      </button>
    </section>
  );
};

export default Plans;
