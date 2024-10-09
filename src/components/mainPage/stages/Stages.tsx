import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowIcon from "../../../assets/images/icons/arrow-slider.svg";
import stageImage1 from "../../../assets/images/stage1.jpg";
import stageImage2 from "../../../assets/images/stage2.jpg";
import stageImage3 from "../../../assets/images/stage3.jpg";
import stageImage4 from "../../../assets/images/stage4.jpg";
import stageImage5 from "../../../assets/images/stage5.jpg";
import stageImage7 from "../../../assets/images/stage7.jpg";

const stageImages = [
  stageImage1,
  stageImage2,
  stageImage3,
  stageImage4,
  stageImage5,
  stageImage7,
];

const Stages: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="stages" className="container pt-[48px] pb-[96px]">
      <h2>{t("stages.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("stages.subtitle")}</h3>
      <div className="my-[16px] px-[12px] flex justify-between items-center">
        <button className="btn stages-swiper-prev rounded-lvl-1000 flex-[0_0_48px] h-[48px] flex justify-center items-center">
          <img src={arrowIcon} alt="arrow" />
        </button>
        <Swiper
          grabCursor
          className="rounded-lvl-4 max-w-[618px] w-full"
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".stages-swiper-prev",
            nextEl: ".stages-swiper-next",
          }}
          pagination={{
            el: ".stages-swiper-pagination",
            clickable: true,
          }}
        >
          {stageImages.map((image, key) => (
            <SwiperSlide key={key}>
              <img
                alt="stages"
                src={image}
                className="rounded-lvl-4 w-full h-[513px] object-cover object-center bg-no-repeat"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="btn stages-swiper-next rounded-lvl-1000 flex-[0_0_48px] h-[48px] flex justify-center items-center">
          <img src={arrowIcon} alt="arrow" className="rotate-180" />
        </button>
      </div>
      <div className="stages-swiper-pagination mt-[12px] flex justify-center !gap-[8px] *:!block"></div>
      <a
        href=""
        target="_blank"
        className="btn mt-[16px] mx-auto py-[13px] pl-[66px] pr-[74px] w-fit flex gap-[16px] items-center font-medium"
      >
        <span>{t("stages.report")}</span>
        <img src={arrowIcon} alt="arrow" className="rotate-180" />
      </a>
    </section>
  );
};

export default Stages;
