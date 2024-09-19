import { useAtom } from "jotai";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { photoModalAtom } from "../../store/store";
import { aboutData, galleryData } from "../../constants/data";
import clsx from "clsx";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import arrowIcon from "../../assets/images/icons/arrow-slider.svg";
import maginfierPlusIcon from "../../assets/images/icons/magnifier-plus.svg";
import maginfierMinusIcon from "../../assets/images/icons/magnifier-minus.svg";
import "swiper/css";
import "swiper/css/pagination";

const images = [...aboutData.map((image) => ({ image })), ...galleryData];

const PhotoModal: FC = () => {
  const [{ image, isOpen }, setPhotoModal] = useAtom(photoModalAtom);
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [zoomValue, setZoomValue] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const imageId = images.findIndex((data) => data.image === image);
    setActiveIndex(imageId);
    // @ts-ignore
    swiperRef.current?.slideTo?.(imageId);
  }, [image]);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  const onChangeZoom = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setZoomValue(+value);
  };

  return (
    <div
      onClick={() => setPhotoModal({ image, isOpen: false })}
      className={clsx(
        "fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.50)] flex justify-center items-center z-[100] opacity-0 pointer-events-none animate-def",
        { "opacity-100 pointer-events-auto": isOpen }
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-lvl-24 p-[24px] pb-[12px] max-w-[1172px] w-full bg-[rgba(255,255,255,0.9)] shadow-[0px_4px_11.3px_0px_rgba(0,0,0,0.25)]"
      >
        <div className="flex justify-between gap-[24px]">
          <button className="btn rounded-lvl-1000 flex-[0_0_64px] h-[64px] self-end flex justify-center items-center gallery-swiper-prev">
            <img src={arrowIcon} alt="arrow" />
          </button>
          <Swiper
            grabCursor
            ref={swiperRef}
            className="rounded-lvl-12 w-full"
            slidesPerView={1}
            spaceBetween={20}
            initialSlide={activeIndex}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".gallery-swiper-prev",
              nextEl: ".gallery-swiper-next button",
            }}
            onSlideChange={handleSlideChange}
            // @ts-ignore
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{ el: ".gallery-swiper-pagination", clickable: true }}
          >
            {images.map((img, key) => (
              <SwiperSlide key={key}>
                <img
                  alt="gallery"
                  src={img.image}
                  className="rounded-lvl-12 w-full h-[513px] object-cover object-center bg-no-repeat"
                  style={{
                    scale: `${
                      (activeIndex === key ? (zoomValue * 400) / 100 : 0) + 100
                    }%`,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col justify-between gap-[16px] h-full self-stretch flex-[0_0_64px] max-w-[64px] gallery-swiper-next">
            <div className="btn-outline border-button-secondary-darkmode rounded-lvl-1000 w-[64px] h-[64px]"></div>
            <div className="rounded-[49px] py-[23px] px-20 flex-[0_0_353px] flex flex-col justify-between gap-[12px] items-center bg-secondary-background">
              <button>
                <img src={maginfierPlusIcon} alt="magnifier-plus" />
              </button>
              <div className="rounded-[23px] relative bg-icon-neutral w-[24px] flex-auto overflow-hidden">
                <div className="absolute top-[24px] bottom-0 left-0 right-0">
                  <div
                    style={{ height: `calc(${zoomValue}% + 24px)` }}
                    className="rounded-lvl-16 absolute left-0 right-0 bottom-0 bg-button-secondary-darkmode"
                  ></div>
                  <div
                    style={{ bottom: `${zoomValue}%` }}
                    className="absolute rounded-lvl-1000 border-[5px] border-button-primary-lightmode bg-button-primary-darkmode w-[24px] h-[24px]"
                  ></div>
                </div>
                <input
                  type="range"
                  value={zoomValue}
                  onChange={onChangeZoom}
                  aria-orientation="vertical"
                  className="absolute top-0 left-0 [-webkit-appearance:_slider-vertical] h-full w-full cursor-pointer z-20 opacity-0"
                />
              </div>
              <button>
                <img src={maginfierMinusIcon} alt="magnifier-minus" />
              </button>
            </div>
            <button className="btn rounded-lvl-1000 flex-[0_0_64px] h-[64px] flex justify-center items-center">
              <img src={arrowIcon} alt="arrow" className="rotate-180" />
            </button>
          </div>
        </div>
        <div className="gallery-swiper-pagination mt-[12px] flex justify-center !gap-[8px] *:!block"></div>
      </div>
    </div>
  );
};

export default PhotoModal;
