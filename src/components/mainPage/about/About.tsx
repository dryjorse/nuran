import { FC, useEffect } from "react";
import ReactPlayer from "react-player";
import { aboutData } from "../../../constants/data";
import Photo from "../../photo/Photo";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const About: FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    console.log("eded");
  }, [inView]);

  return (
    <section id="about" ref={ref} className="container pt-80 pb-[57px]">
      <div className="flex justify-between gap-[24px] items-start">
        <div className="flex-[0_1_558px]">
          <h2>{t("about.title")}</h2>
          <h3 className="mt-[8px] mb-[16px]">{t("about.subtitle")}</h3>
          <p>{t("about.description")}</p>
        </div>
        <div className="flex flex-wrap flex-[0_1_558px] gap-x-[24px] gap-y-[28px]">
          {aboutData.map((image, key) => (
            <Photo key={key} image={image} description="eded" />
          ))}
        </div>
      </div>
      <div className="mt-[96px]">
        <h2>{t("about.project")}</h2>
        <h3 className="mt-[8px] mb-[16px]">{t("about.projectSubtitle")}</h3>
        <p className="max-w-[946px]">{t("about.projectDescription")}</p>
        <div className="mt-[8px]">
          <ReactPlayer
            width="100%"
            height={641}
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
