import { FC } from "react";
import InstagramIcon from "../ui/instagramIcon/InstagramIcon";
import WhatsappIcon from "../ui/whatsappIcon/WhatsappIcon";
import YoutubeIcon from "../ui/youtubeIcon/YoutubeIcon";
import EmailIcon from "../ui/emailIcon/EmailIcon";
import logoIcon from "../../assets/images/icons/logo.svg";
import clockIcon from "../../assets/images/icons/clock.svg";
import geoIcon from "../../assets/images/icons/geo-small.svg";

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
  return (
    <footer className="py-[96px] pb-[12px] bg-neutral-background">
      <div className="container max-w-[926px]">
        <img src={logoIcon} alt="logo" className="mx-auto w-[268px]" />
        <div className="mt-[68px] mb-[96px] flex justify-between">
          {contacts.map(({ title, icon, link }) => (
            <a
              href={link}
              key={title}
              target="_blank"
              className="group rounded-lvl-12 py-20 px-[24px] block bg-neutral-secondary-background animate-def duration-200 hover:bg-primary-background"
            >
              <div className="mx-auto w-[72px] h-[72px] flex justify-center items-center animate-def duration-200 text-text-primary-darkmode group-hover:text-text-primary-lightmode">
                {icon}
              </div>
              <div className="my-[8px] h-[1px] bg-divider-secondary-darkmode"></div>
              <span className="leading-[20px] underline text-text-primary-darkmode animate-def duration-200 group-hover:text-text-primary-lightmode">
                {title}
              </span>
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-[32px] items-center text-text-primary-darkmode">
          <div className="flex gap-[10px] items-center">
            <img src={clockIcon} alt="clock" />
            <span className="leading-[60px]">График работы 9:00 - 18:00</span>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={geoIcon} alt="clock" />
            <span className="leading-[60px] underline">
              Малдыбаева 265 адрес
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
