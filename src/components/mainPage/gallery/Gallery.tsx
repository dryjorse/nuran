import { FC, useState } from "react";
import Photo from "../../photo/Photo";
import { galleryData } from "../../../constants/data";
import Accordeon from "../../ui/accordeon/Accordeon";
import arrowIcon from "../../../assets/images/icons/arrow-right.svg";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import useMatchMedia from "../../../hooks/useMatchMedia";

const Gallery: FC = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const isLaptop = useMatchMedia(1200);
  const isSmallLaptop = useMatchMedia(900);
  const isTablet = useMatchMedia(834);

  return (
    <section id="gallery" className="container py-[48px] bmb:py-[28px]">
      <h2>{t("gallery.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("gallery.subtitle")}</h3>
      <Accordeon
        maxHeight={isTablet ? 996 : isSmallLaptop ? 560 : isLaptop ? 386 : 185}
        isOpen={isGalleryOpen}
        className="grid grid-cols-[repeat(4,minmax(0,auto))] gap-[24px] justify-between blt:grid-cols-[repeat(3,minmax(0,auto))] blt:justify-center blt:gap-[16px] slt:grid-cols-[repeat(2,minmax(0,auto))] btb:grid-cols-[repeat(1,minmax(0,auto))]"
      >
        {galleryData.map((image, key) => (
          <Photo
            key={key}
            {...image}
            className="slt:max-w-[393px] slt:h-[272px] btb:max-w-[343px] btb:h-[237px]"
          />
        ))}
      </Accordeon>
      <button
        onClick={() => setIsGalleryOpen((prev) => !prev)}
        className="btn mt-[8px] ml-auto flex gap-[12px] items-center font-medium"
      >
        <span>{t("more")}</span>
        <img
          src={arrowIcon}
          alt="arrow-down"
          className={clsx("animate-def", {
            "rotate-90": !isGalleryOpen,
            "rotate-[-90deg]": isGalleryOpen,
          })}
        />
      </button>
    </section>
  );
};

export default Gallery;
