import { FC } from "react";
import ReactPlayer from "react-player";
import { aboutData } from "../../../constants/data";
import Photo from "../../photo/Photo";
import { useTranslation } from "react-i18next";
import useMatchMedia from "../../../hooks/useMatchMedia";

const About: FC = () => {
  const { t } = useTranslation();
  const isLaptop = useMatchMedia(1024);
  const isTablet = useMatchMedia(768);
  const isSmallTablet = useMatchMedia(540);

  return (
    <section
      id="about"
      className="container pt-80 pb-[57px] bmb:pt-[56px] bmb:pb-[28px]"
    >
      <div className="flex justify-between gap-[24px] items-start lt:flex-col btb:gap-[15px]">
        <div className="flex-[0_1_558px] lt:flex-auto">
          <h2>{t("about.title")}</h2>
          <h3 className="mt-[8px] mb-[16px]">{t("about.subtitle")}</h3>
          <p className="blt:text-[13px] blt:leading-[17px]">
            {t("about.description")}
          </p>
        </div>
        <div className="flex flex-[0_1_558px] gap-[24px] lt:flex-auto lt:justify-between lt:w-full btb:gap-[16px] tb:flex-col ">
          {aboutData.map((image, key) => (
            <Photo
              key={key}
              image={image}
              description="eded"
              className="lt:w-full tb:h-[237px]"
            />
          ))}
        </div>
      </div>
      <div className="mt-[96px] lt:mt-80 bmb:mt-[56px]">
        <h2>{t("about.project")}</h2>
        <h3 className="mt-[8px] mb-[16px]">{t("about.projectSubtitle")}</h3>
        <p className="max-w-[946px] blt:text-[13px] blt:leading-[17px]">
          {t("about.projectDescription")}
        </p>
        <div className="mt-[8px]">
          <ReactPlayer
            width="100%"
            height={isSmallTablet ? 200 : isTablet ? 400 : isLaptop ? 513 : 641}
            url="https://www.youtube.com/watch?v=zoKJRdb-7x8"
            loading="lazy"
            controls
            className="rounded-[10px] overflow-hidden"
          ></ReactPlayer>
        </div>
      </div>
    </section>
  );
};

export default About;
