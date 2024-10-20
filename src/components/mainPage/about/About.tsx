import { FC } from "react";
import ReactPlayer from "react-player";
import { aboutData } from "../../../constants/data";
import Photo from "../../photo/Photo";
import { useTranslation } from "react-i18next";
import useMatchMedia from "../../../hooks/useMatchMedia";
import { useQuery } from "@tanstack/react-query";
import aboutService from "../../../services/aboutService";
import { queryKeys } from "../../../constants/api";
import { langs } from "../../../constants/helpers";
import { LanguagesType } from "../../../types/api.types";
import { LanguageType } from "../../../types/client.types";
import Skeleton from "../../ui/skeleton/Skeleton";

const About: FC = () => {
  const { t } = useTranslation();
  const isLaptop = useMatchMedia(1024);
  const isTablet = useMatchMedia(768);
  const isSmallTablet = useMatchMedia(540);
  const { i18n } = useTranslation();

  const { data } = useQuery({
    queryKey: [queryKeys.About],
    queryFn: () => aboutService.getInfo(),
    select: ({ data }) => data,
  });

  return (
    <section
      id="about"
      className="container pt-80 pb-[57px] bmb:pt-[56px] bmb:pb-[28px]"
    >
      <div className="flex justify-between gap-[24px] items-start lt:flex-col btb:gap-[15px]">
        <div className="flex-[0_1_558px] lt:flex-auto">
          <h2>{t("about.title")}</h2>
          <h3 className="mt-[8px] mb-[16px]">{t("about.subtitle")}</h3>
          {data ? (
            <p className="blt:text-[13px] blt:leading-[17px]">
              {
                data[
                  `aboutCompany_${
                    langs[
                      i18n.resolvedLanguage as LanguageType
                    ] as LanguagesType
                  }`
                ]
              }
            </p>
          ) : (
            <>
              <Skeleton width={450} height={12} />
              <Skeleton width={480} height={12} className="my-[5px]" />
              <Skeleton width={470} height={12} className="my-[5px]" />
              <Skeleton width={440} height={12} />
            </>
          )}
        </div>
        <div className="flex flex-[0_1_558px] gap-[24px] lt:flex-auto lt:justify-between lt:w-full btb:gap-[16px] tb:flex-col ">
          {aboutData.map((image, key) => (
            <Photo
              key={key}
              image={image}
              className="lt:max-w-full lt:w-full tb:h-[237px]"
            />
          ))}
        </div>
      </div>
      <div className="mt-[96px] lt:mt-80 bmb:mt-[56px]">
        <h2>{t("about.project")}</h2>
        <h3 className="mt-[8px] mb-[16px]">{t("about.projectSubtitle")}</h3>
        <p className="max-w-[946px] blt:text-[13px] blt:leading-[17px]">
          {data ? (
            data[
              `aboutProject_${
                langs[i18n.resolvedLanguage as LanguageType] as LanguagesType
              }`
            ]
          ) : (
            <>
              <Skeleton width="100%" height={12} className="max-w-[940px]" />
              <Skeleton
                width="100%"
                height={12}
                className="my-[5px] max-w-[950px]"
              />
              <Skeleton width="100%" height={12} className="max-w-[100px]" />
            </>
          )}
        </p>
        <div className="mt-[8px]">
          {true ? (
            <ReactPlayer
              width="100%"
              height={
                isSmallTablet ? 200 : isTablet ? 400 : isLaptop ? 513 : 641
              }
              url={data?.video_link}
              loading="lazy"
              controls
              className="rounded-[10px] overflow-hidden"
            ></ReactPlayer>
          ) : (
            <Skeleton
              width="100%"
              height={
                isSmallTablet ? 200 : isTablet ? 400 : isLaptop ? 513 : 641
              }
              className="rounded-[10px]"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
