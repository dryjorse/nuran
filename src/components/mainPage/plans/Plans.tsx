import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/pagination";
import Photo from "../../photo/Photo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import arrowIcon from "../../../assets/images/icons/arrow-slider.svg";
import { planAImagesData, planBImagesData } from "../../../constants/data";

const blocks: ("A" | "B")[] = ["A", "B"];

const Plans: FC = () => {
  const { t } = useTranslation();
  const [block, setBlock] = useState<"A" | "B">("A");

  return (
    <section id="plans" className="container py-[48px] bmb:py-[28px]">
      <h2>{t("plans.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("plans.subtitle")}</h3>
      <div className="my-[12px] flex justify-between gap-[12px]">
        {blocks.map((currBlock) => (
          <button
            key={currBlock}
            onClick={() => setBlock(currBlock)}
            className={clsx("rounded-lvl-4 py-[8px] flex-auto font-normal", {
              btn: currBlock === block,
              "btn-outline": currBlock !== block,
            })}
          >
            {t(`plans.block${currBlock}`)}
          </button>
        ))}
      </div>
      <div className="border border-[#D2D2D2] p-20 rounded-lvl-12 bg-white ">
        <div className="flex justify-between gap-[24px] items-center">
          <button className="btn rounded-lvl-1000 flex-[0_0_64px] h-[64px] flex justify-center items-center plan-swiper-prev slt:hidden">
            <img src={arrowIcon} alt="arrow" />
          </button>
          <Swiper
            slidesPerView={1}
            className="h-full"
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".plan-swiper-prev",
              nextEl: ".plan-swiper-next",
            }}
            pagination={{
              clickable: true,
              el: ".wrapper .plan-swiper-pagination",
            }}
          >
            {(block === "A" ? planAImagesData : planBImagesData).map((img) => (
              <SwiperSlide key={img}>
                <Photo
                  image={img}
                  alt="block-plan"
                  isShadow={false}
                  imgClassName="!object-contain"
                  className="mx-auto h-[465px] max-w-[774px] tb:h-[370px] stb:h-[200px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="btn next rounded-lvl-1000 flex-[0_0_64px] h-[64px] flex justify-center items-center plan-swiper-next slt:hidden">
            <img src={arrowIcon} alt="arrow" className="rotate-180" />
          </button>
        </div>
        <div className="wrapper mt-[12px] flex justify-center gap-[32px] items-center">
          <button className="btn rounded-lvl-1000 flex-[0_0_40px] h-[40px] self-end hidden justify-center items-center plan-swiper-prev slt:flex">
            <img src={arrowIcon} alt="arrow" />
          </button>
          <div className="plan-swiper-pagination flex justify-center w-fit flex-wrap !gap-[8px] *:!block"></div>
          <button className="btn rounded-lvl-1000 flex-[0_0_40px] h-[40px] hidden justify-center items-center plan-swiper-next slt:flex">
            <img src={arrowIcon} alt="arrow" className="rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
