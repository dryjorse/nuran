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
import useMatchMedia from "../../../hooks/useMatchMedia";

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
  const isTablet = useMatchMedia(768);

  return (
    <section
      id="stages"
      className="container pt-[48px] pb-[96px] bmb:pt-[28px] bmb:pb-[64px]"
    >
      <h2>{t("stages.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("stages.subtitle")}</h3>
      <div className="my-[16px] px-[12px] flex justify-between items-center gap-[32px] tb:p-0">
        <button className="btn stages-swiper-prev rounded-lvl-1000 flex-[0_0_48px] h-[48px] flex justify-center items-center tb:hidden">
          <img src={arrowIcon} alt="arrow" />
        </button>
        <Swiper
          grabCursor
          className="rounded-lvl-4 max-w-[618px] w-full tb:max-w-none"
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: isTablet
              ? ".wrapper .stages-swiper-prev"
              : ".stages-swiper-prev",
            nextEl: isTablet
              ? ".wrapper .stages-swiper-next"
              : ".stages-swiper-next",
          }}
          pagination={{
            el: ".wrapper .stages-swiper-pagination",
            clickable: true,
          }}
        >
          {stageImages.map((image, key) => (
            <SwiperSlide key={key}>
              <img
                alt="stages"
                src={image}
                className="rounded-lvl-4 w-full h-[513px] object-cover object-center bg-no-repeat lt:h-[465px] btb:h-[340px] stb:h-[258px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="btn stages-swiper-next rounded-lvl-1000 flex-[0_0_48px] h-[48px] flex justify-center items-center tb:hidden">
          <img src={arrowIcon} alt="arrow" className="rotate-180" />
        </button>
      </div>
      <div className="wrapper mt-[12px] flex justify-center items-center gap-[60px] tb:mt-[16px] smb:gap-[30px]">
        <button className="btn stages-swiper-prev rounded-lvl-1000 flex-[0_0_48px] h-[48px] justify-center items-center hidden tb:flex">
          <img src={arrowIcon} alt="arrow" />
        </button>
        <div className="stages-swiper-pagination flex justify-center w-fit !gap-[8px] *:!block"></div>
        <button className="btn stages-swiper-next rounded-lvl-1000 flex-[0_0_48px] h-[48px]  justify-center items-center hidden tb:flex">
          <img src={arrowIcon} alt="arrow" className="rotate-180" />
        </button>
      </div>
      <a
        href=""
        target="_blank"
        className="btn mt-[16px] mx-auto py-[13px] pl-[66px] pr-[74px] w-fit flex gap-[16px] items-center font-medium whitespace-nowrap mb:pl-20 mb:pr-[34px]"
      >
        <span>{t("stages.report")}</span>
        <img src={arrowIcon} alt="arrow" className="rotate-180" />
      </a>
    </section>
  );
};

export default Stages;
