import { FC } from "react";
import geoIcon from "../../../assets/images/icons/geo.svg";
import safetyIcon from "../../../assets/images/icons/safety.svg";
import technoIcon from "../../../assets/images/icons/techno.svg";
import styleIcon from "../../../assets/images/icons/style.svg";
import treeIcon from "../../../assets/images/icons/tree.svg";
import { useTranslation } from "react-i18next";

const advantages = [
  { icon: geoIcon, title: "geo" },
  { icon: safetyIcon, title: "safety" },
  { icon: technoIcon, title: "techno" },
  { icon: styleIcon, title: "style" },
  { icon: treeIcon, title: "life" },
];

const Advantages: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="advantages" className="container pt-[57px] pb-[48px]">
      <h2>{t("advantages.title")}</h2>
      <div className="mt-[16px] flex justify-between items-center">
        {advantages.map(({ icon, title }, key) => (
          <div key={key} className="flex-[0_1_180px] text-center">
            <div className="h-[132px] flex justify-center items-center">
              <img src={icon} alt={`advantage-${title}`} className="mx-auto" />
            </div>
            <span className="mt-[24px] block text-[14px] leading-[18px] font-medium">
              {t(`advantages.${title}`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
