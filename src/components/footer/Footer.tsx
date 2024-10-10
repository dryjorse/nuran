import { FC } from "react";
import InstagramIcon from "../ui/instagramIcon/InstagramIcon";
import WhatsappIcon from "../ui/whatsappIcon/WhatsappIcon";
import YoutubeIcon from "../ui/youtubeIcon/YoutubeIcon";
import EmailIcon from "../ui/emailIcon/EmailIcon";
import logoIcon from "../../assets/images/icons/logo.svg";
import clockIcon from "../../assets/images/icons/clock.svg";
import geoIcon from "../../assets/images/icons/geo-small.svg";
import { useTranslation } from "react-i18next";

const contacts = [
  {
    icon: <InstagramIcon />,
    title: "nuran_building",
    link: "https://www.instagram.com/nuran_building/",
  },
  {
    icon: <WhatsappIcon />,
    title: "+996 555 500 900",
    link: "https://api.whatsapp.com/send?phone=996555500900",
  },
  {
    icon: <YoutubeIcon />,
    title: "Nuran Building",
    link: "https://www.youtube.com/",
  },
  {
    icon: <EmailIcon />,
    title: "nuranstroy@mail.ru",
    link: "mailto:nuranstroy@mail.ru",
  },
];

const Footer: FC = () => {
  const { t } = useTranslation();

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
          {contacts.map(({ title, icon, link }) => (
            <a
              href={link}
              key={title}
              target="_blank"
              className="group rounded-lvl-12 py-20 px-[24px] block bg-neutral-secondary-background animate-def duration-200 hover:bg-primary-background btb:w-[164px] btb:h-[125px] btb:px-0 btb:text-center"
            >
              <div className="mx-auto w-[72px] h-[72px] flex justify-center items-center animate-def duration-200 text-text-primary-darkmode group-hover:text-text-primary-lightmode btb:w-[48px] btb:h-[48px]">
                {icon}
              </div>
              <div className="my-[8px] h-[1px] bg-divider-secondary-darkmode btb:max-w-[116px] btb:mx-auto"></div>
              <span className="leading-[20px] underline text-text-primary-darkmode animate-def duration-200 group-hover:text-text-primary-lightmode whitespace-nowrap">
                {title}
              </span>
            </a>
          ))}
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
