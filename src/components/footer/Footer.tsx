import { FC } from "react";
import InstagramIcon from "../ui/instagramIcon/InstagramIcon";
import WhatsappIcon from "../ui/whatsappIcon/WhatsappIcon";
import YoutubeIcon from "../ui/youtubeIcon/YoutubeIcon";
import EmailIcon from "../ui/emailIcon/EmailIcon";
import logoIcon from "../../assets/images/icons/logo.svg";
import clockIcon from "../../assets/images/icons/clock.svg";
import geoIcon from "../../assets/images/icons/geo-small.svg";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../constants/api";
import linksService from "../../services/linksService";
import Skeleton from "../ui/skeleton/Skeleton";

const Footer: FC = () => {
  const { t } = useTranslation();

  const { data } = useQuery({
    queryKey: [queryKeys.Links],
    queryFn: () => linksService.getAll(),
    select: ({ data }) => data,
  });

  return (
    <footer
      id="contacts"
      className="py-[96px] pb-[12px] bg-neutral-background btb:pt-[76px]"
    >
      <div className="container max-w-[926px]">
        <img
          src={logoIcon}
          alt="logo"
          className="mx-auto w-[268px] btb:w-[183px]"
        />
        <div className="mt-[68px] mb-[96px] grid grid-cols-[repeat(4,minmax(0,auto))] justify-between btb:grid-cols-[repeat(2,minmax(0,auto))] btb:gap-[16px] btb:justify-center btb:mt-[48px] btb:mb-[56px] mb:grid-cols-[repeat(1,minmax(0,auto))]">
          {true ? (
            <>
              <a
                href={data?.ig_link}
                target="_blank"
                className="group rounded-lvl-12 py-20 px-[24px] block bg-neutral-secondary-background animate-def duration-200 hover:bg-primary-background btb:w-[164px] btb:h-[125px] btb:px-0 btb:text-center"
              >
                <div className="mx-auto w-[72px] h-[72px] flex justify-center items-center animate-def duration-200 text-text-primary-darkmode group-hover:text-text-primary-lightmode btb:w-[48px] btb:h-[48px]">
                  <InstagramIcon />
                </div>
                <div className="my-[8px] h-[1px] bg-divider-secondary-darkmode btb:max-w-[116px] btb:mx-auto"></div>
                <span className="leading-[20px] underline text-text-primary-darkmode animate-def duration-200 group-hover:text-text-primary-lightmode whitespace-nowrap">
                  nuran_building
                </span>
              </a>
              <a
                href={data?.wt_link}
                target="_blank"
                className="group rounded-lvl-12 py-20 px-[24px] block bg-neutral-secondary-background animate-def duration-200 hover:bg-primary-background btb:w-[164px] btb:h-[125px] btb:px-0 btb:text-center"
              >
                <div className="mx-auto w-[72px] h-[72px] flex justify-center items-center animate-def duration-200 text-text-primary-darkmode group-hover:text-text-primary-lightmode btb:w-[48px] btb:h-[48px]">
                  <WhatsappIcon />
                </div>
                <div className="my-[8px] h-[1px] bg-divider-secondary-darkmode btb:max-w-[116px] btb:mx-auto"></div>
                <span className="leading-[20px] underline text-text-primary-darkmode animate-def duration-200 group-hover:text-text-primary-lightmode whitespace-nowrap">
                  +996 555 500 900
                </span>
              </a>
              <a
                href={data?.yt_link}
                target="_blank"
                className="group rounded-lvl-12 py-20 px-[24px] block bg-neutral-secondary-background animate-def duration-200 hover:bg-primary-background btb:w-[164px] btb:h-[125px] btb:px-0 btb:text-center"
              >
                <div className="mx-auto w-[72px] h-[72px] flex justify-center items-center animate-def duration-200 text-text-primary-darkmode group-hover:text-text-primary-lightmode btb:w-[48px] btb:h-[48px]">
                  <YoutubeIcon />
                </div>
                <div className="my-[8px] h-[1px] bg-divider-secondary-darkmode btb:max-w-[116px] btb:mx-auto"></div>
                <span className="leading-[20px] underline text-text-primary-darkmode animate-def duration-200 group-hover:text-text-primary-lightmode whitespace-nowrap">
                  Nuran Building
                </span>
              </a>
              <a
                target="_blank"
                href={`mailto:${data?.email_link}`}
                className="group rounded-lvl-12 py-20 px-[24px] block bg-neutral-secondary-background animate-def duration-200 hover:bg-primary-background btb:w-[164px] btb:h-[125px] btb:px-0 btb:text-center"
              >
                <div className="mx-auto w-[72px] h-[72px] flex justify-center items-center animate-def duration-200 text-text-primary-darkmode group-hover:text-text-primary-lightmode btb:w-[48px] btb:h-[48px]">
                  <EmailIcon />
                </div>
                <div className="my-[8px] h-[1px] bg-divider-secondary-darkmode btb:max-w-[116px] btb:mx-auto"></div>
                <span className="leading-[20px] underline text-text-primary-darkmode animate-def duration-200 group-hover:text-text-primary-lightmode whitespace-nowrap">
                  nuranstroy@mail.ru
                </span>
              </a>
            </>
          ) : (
            [...new Array(4)].map((_, key) => (
              <Skeleton
                key={key}
                height={153}
                className="rounded-lvl-12 w-[198px] btb:w-[164px] btb:h-[125px]"
              />
            ))
          )}
        </div>
        <div className="flex justify-center gap-[32px] items-center text-text-primary-darkmode whitespace-nowrap stb:flex-col stb:gap-[8px] mb:items-start">
          <div className="flex gap-[10px] items-center">
            <img src={clockIcon} alt="clock" />
            <span className="leading-[18px]">{t("footer.schedule")}</span>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={geoIcon} alt="clock" />
            <span className="leading-[18px] underline">
              {t("footer.address")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
