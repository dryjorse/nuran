import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowIcon from "../../../assets/images/icons/arrow-slider.svg";
import useMatchMedia from "../../../hooks/useMatchMedia";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../constants/api";
import stagesService from "../../../services/stagesService";
import Skeleton from "../../ui/skeleton/Skeleton";
import clsx from "clsx";

const Stages: FC = () => {
  const { t } = useTranslation();
  const isTablet = useMatchMedia(768);

  const { data } = useQuery({
    queryKey: [queryKeys.Stages],
    queryFn: () => stagesService.getAll(),
    select: ({ data }) => data,
  });

  return (
    <section
      id="stages"
      className="container pt-[48px] pb-[96px] bmb:pt-[28px] bmb:pb-[64px]"
    >
      <h2>{t("stages.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("stages.subtitle")}</h3>
      {data ? (
        <>
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
              {data.map(({ id, image }) => (
                <SwiperSlide key={id}>
                  <img
                    alt="stages"
                    src={image}
                    className="rounded-lvl-4 w-full max-w-[618px] h-[513px] object-cover object-center bg-no-repeat lt:h-[465px] btb:h-[340px] stb:h-[258px]"
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
        </>
      ) : (
        <>
          <div className="my-[16px] px-[12px] flex justify-between items-center gap-[32px] tb:p-0">
            <Skeleton
              width={48}
              height={48}
              className="rounded-lvl-1000 tb:hidden"
            />
            <Skeleton
              height={513}
              className="rounded-lvl-4 mx-auto w-full max-w-[618px] h-[513px] lt:h-[465px] btb:h-[340px] stb:h-[258px]"
            />
            <Skeleton
              width={48}
              height={48}
              className="rounded-lvl-1000 tb:hidden"
            />
          </div>
          <div className="wrapper mt-[12px] flex justify-center items-center gap-[60px] tb:mt-[16px] smb:gap-[30px]">
            <Skeleton
              height={48}
              className="rounded-lvl-1000 flex-[0_0_48px] justify-center items-center hidden tb:flex"
            />
            <div className="flex justify-center w-fit !gap-[8px] *:!block">
              {[...new Array(7)].map((_, key) => (
                <Skeleton
                  height={8}
                  className={clsx("w-[8px] rounded-lvl-12", {
                    "!w-[32px]": key === 0,
                  })}
                />
              ))}
            </div>
            <Skeleton
              height={48}
              className="rounded-lvl-1000 flex-[0_0_48px] justify-center items-center hidden tb:flex"
            />
          </div>
        </>
      )}
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
