import { FC, useState } from "react";
import Photo from "../../photo/Photo";
import { galleryData } from "../../../constants/data";
import Accordeon from "../../ui/accordeon/Accordeon";
import arrowIcon from "../../../assets/images/icons/arrow-right.svg";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Gallery: FC = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section id="gallery" className="container py-[48px]">
      <h2>{t("gallery.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("gallery.subtitle")}</h3>
      <Accordeon
        maxHeight={185}
        isOpen={isGalleryOpen}
        className="grid grid-cols-[repeat(4,minmax(0,auto))] gap-[24px] justify-between"
      >
        {galleryData.map((image, key) => (
          <Photo key={key} {...image} />
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
