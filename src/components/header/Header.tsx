import { FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "../ui/dropdown/Dropdown";
import { useTranslation } from "react-i18next";
import logoIcon from "../../assets/images/icons/logo.svg";
import arrowIcon from "../../assets/images/icons/arrow-down.svg";
import checkMarkIcon from "../../assets/images/icons/check-mark.svg";
import { LanguageType } from "../../types/client.types";
import { scroller, Link as ScrollLink } from "react-scroll";
import clsx from "clsx";

const navList = [
  { title: "header.about" },
  { title: "header.advantages" },
  { title: "header.plans" },
  { title: "header.gallery" },
  { title: "header.stages" },
  { title: "header.contacts" },
];

const languages: LanguageType[] = ["ru", "en", "kg"];

const formattedLanguage = {
  en: "English",
  ru: "Русский",
  kg: "Кыргызча",
};

const Header: FC = () => {
  const { t, i18n } = useTranslation();
  const languageController = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onChangeLanguage = (language: LanguageType) => {
    i18n.changeLanguage(language);
    languageController[1](false);
  };

  const scrollFunc = async (link: string) => {
    if (pathname !== "/") {
      await navigate("/");
      scroller.scrollTo(link, { offset: -150 });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 py-[15px] bg-white text-center z-50">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={logoIcon} alt="logo" className="max-w-[71px]" />
        </Link>
        <div className="mx-20 rounded-[1px] w-[16px] h-[1px] bg-divider-neutral blt:hidden"></div>
        <nav className="flex gap-[20px] items-center blt:ml-auto blt:mr-20">
          <ul className="flex gap-[32px] items-center blt:hidden">
            {navList.map(({ title }) => (
              <li key={title}>
                <ScrollLink
                  spy
                  smooth
                  duration={500}
                  to={title.split(".")[1]}
                  onClick={() => scrollFunc(title.split(".")[1])}
                  offset={title.split(".")[1] === "contacts" ? -390 : -150}
                  className={clsx("cursor-pointer text-14 text-clickable ", {
                    "[&.active]:!text-text-secondary-darkmode":
                      pathname === "/",
                  })}
                >
                  {t(title)}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <Link
            to="/360"
            className="btn font-bold text-text-primary-lightmode hover:brightness-75 active:brightness-50"
          >
            360°
          </Link>
        </nav>
        <div className="mx-20 rounded-[1px] w-[16px] h-[1px] bg-divider-neutral blt:hidden"></div>
        <Dropdown
          buttonElem={
            <div className="flex gap-[8px] items-center">
              <span className="font-bold uppercase">
                {formattedLanguage[
                  (i18n.resolvedLanguage as LanguageType) || ""
                ].slice(0, 3)}
              </span>
              <img src={arrowIcon} alt="arrow" />
            </div>
          }
          controller={languageController}
          bodyClassName="mt-10 rounded-lvl-16 w-[115px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] bg-white "
        >
          {languages.map((langauge) => (
            <button
              key={langauge}
              onClick={() => onChangeLanguage(langauge)}
              className="p-[16px] w-full flex justify-between text-[13px] leading-[17px] text-text-primary-lightmode font-bold text-clickable"
            >
              <span>{formattedLanguage[langauge]}</span>
              {i18n.resolvedLanguage === langauge && (
                <img src={checkMarkIcon} alt="check-mark" />
              )}
            </button>
          ))}
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
