import { FC } from "react";
import geoIcon from "../../../assets/images/icons/geo.svg";
import safetyIcon from "../../../assets/images/icons/safety.svg";
import technoIcon from "../../../assets/images/icons/techno.svg";
import styleIcon from "../../../assets/images/icons/style.svg";
import treeIcon from "../../../assets/images/icons/tree.svg";

const advantages = [
  { icon: geoIcon, title: "Расположение на Южной магистрали" },
  { icon: safetyIcon, title: "Высокий уровень безопасности" },
  { icon: technoIcon, title: "Современные технологии и комфорт" },
  { icon: styleIcon, title: "Элегантность и стиль в каждой детали" },
  { icon: treeIcon, title: "Жизнь в окружении земли" },
];

const Advantages: FC = () => {
  return (
    <section className="container pt-[57px] pb-[48px]">
      <h2>5 причин выбрать Нуран Парк</h2>
      <div className="mt-[16px] flex justify-between items-center">
        {advantages.map(({ icon, title }, key) => (
          <div key={key} className="flex-[0_1_180px] text-center">
            <div className="h-[132px] flex justify-center items-center">
              <img src={icon} alt={`advantage-${title}`} className="mx-auto" />
            </div>
            <span className="mt-[24px] block text-[14px] leading-[18px] font-medium">
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
