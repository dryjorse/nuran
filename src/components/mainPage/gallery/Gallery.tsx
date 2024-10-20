import { FC, useState } from "react";
import Photo from "../../photo/Photo";
import Accordeon from "../../ui/accordeon/Accordeon";
import arrowIcon from "../../../assets/images/icons/arrow-right.svg";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import useMatchMedia from "../../../hooks/useMatchMedia";
import { useGallery } from "../../../hooks/queries/useGallery";
import Skeleton from "../../ui/skeleton/Skeleton";

const Gallery: FC = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const isLaptop = useMatchMedia(1200);
  const isSmallLaptop = useMatchMedia(900);
  const isSmallTablet = useMatchMedia(540);

  const { data } = useGallery();

  return (
    <section id="gallery" className="container py-[48px] bmb:py-[28px]">
      <h2>{t("gallery.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("gallery.subtitle")}</h3>
      {data ? (
        <>
          <Accordeon
            maxHeight={isSmallTablet ? 788 : isLaptop ? 386 : 185}
            isOpen={isGalleryOpen}
            className="grid grid-cols-[repeat(4,minmax(0,267px))] gap-[24px] justify-between blt:grid-cols-[repeat(3,minmax(0,267px))] blt:justify-center blt:gap-[16px] slt:grid-cols-[repeat(2,minmax(0,393px))] stb:grid-cols-[repeat(1,minmax(0,100%))]"
          >
            {data.map(({ id, image }) => (
              <Photo
                key={id}
                image={image}
                className="mx-auto stb:w-full btb:max-w-none"
              />
            ))}
          </Accordeon>
          {data.length > (isSmallLaptop ? 4 : isLaptop ? 6 : 4) && (
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
          )}
        </>
      ) : (
        <div className="grid grid-cols-[repeat(4,minmax(0,267px))] gap-[24px] justify-between blt:grid-cols-[repeat(3,minmax(0,267px))] blt:justify-center blt:gap-[16px] slt:grid-cols-[repeat(2,minmax(0,393px))] btb:grid-cols-[repeat(1,minmax(0,343px))]">
          {[...new Array(4)].map((_, key) => (
            <Skeleton
              key={key}
              width="100%"
              height={185}
              className="rounded-lvl-4"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
