import { FC } from "react";
import { Element } from "react-scroll";

const stages = [
  { title: "Заявка" },
  { title: "Встреча" },
  { title: "Договор" },
  { title: "Оплата" },
  { title: "Завершение объекта" },
  { title: "Вручение ключей" },
];

const Stages: FC = () => {
  return (
    <section className="container pt-[48px] pb-[96px]">
      <Element name="stages">
        <h2>Этапы стройки</h2>
        <h3 className="mt-[8px] mb-[16px]">
          Проектируем, строим, проверяем, завершаем и поддерживаем.
        </h3>
        <div className="flex flex-wrap gap-[24px] justify-between">
          {stages.map(({ title }, key) => (
            <div
              key={title}
              className="group border border-secondary-background rounded-lvl-12 py-40 pr-20 pl-[32px] flex-[0_1_364px] flex gap-[11px] items-center bg-secondary-background animate-def duration-200 hover:bg-button-secondary-darkmode hover:border-stroke-neutral hover:shadow-[0px_0px_40px_0px_rgba(255,174,133,0.71)]"
            >
              <div className="flex-[0_1_258px]">
                <h4 className="mb-[9px] text-[20px] leading-[24px] text-text-secondary-lightmode font-bold animate-def duration-200 group-hover:text-text-primary-lightmode">
                  {title}
                </h4>
                <p className="leading-[20px] text-text-primary-lightmode">
                  Lorem ipsum dolor sit amet consectetur. A ut arcu urna ac ut
                  consectetur tristique.{" "}
                </p>
              </div>
              <strong className="text-[100px] leading-[100px] font-bold text-[rgba(236,236,236,1)] animate-def duration-200 group-hover:text-text-primary-lightmode">
                {key + 1}
              </strong>
            </div>
          ))}
        </div>
      </Element>
    </section>
  );
};

export default Stages;
