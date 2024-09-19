import { FC, useEffect } from "react";

import ReactPlayer from "react-player";
import { aboutData } from "../../../constants/data";
import Photo from "../../photo/Photo";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

const About: FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    console.log("eded");
  }, [inView]);

  return (
    <section ref={ref} className="container pt-80 pb-[57px]">
      <Element name="about">
        <div className="flex justify-between gap-[24px] items-start">
          <div className="flex-[0_1_558px]">
            <h2>О компании</h2>
            <h3 className="mt-[8px] mb-[16px]">Наша история и ценности</h3>
            <p>
              Nuran Строй — это компания с 37-летним опытом в строительстве,
              зарекомендовавшая себя как надежный и ответственный застройщик в
              Кыргызстане. Мы обладаем лицензией 1-го уровня ответственности,
              что позволяет нам реализовывать проекты любой сложности с высоким
              стандартом качества. Каждое наше здание — это результат
              многолетнего опыта, новейших технологий и глубокого уважения к
              нашим клиентам.
            </p>
          </div>
          <div className="flex flex-wrap flex-[0_1_558px] gap-x-[24px] gap-y-[28px]">
            {aboutData.map((image, key) => (
              <Photo key={key} image={image} description="eded" />
            ))}
          </div>
        </div>
        <div className="mt-[96px]">
          <h2>О проекте</h2>
          <h3 className="mt-[8px] mb-[16px]">
            Уникальные возможности для жизни и инвестиций
          </h3>
          <p className="max-w-[946px]">
            Nuran Park — это не просто жилье, это умная инвестиция в будущее.
            Высокое качество строительства, престижное расположение и уникальные
            условия делают квартиры в нашем комплексе востребованными на рынке
            недвижимости. Ваше решение инвестировать в Nuran Park — это выбор
            надежности, комфорта и стабильности.
          </p>
          <div className="mt-[8px]">
            <ReactPlayer
              width="100%"
              height={641}
              url="https://www.youtube.com/watch?v=JQdYU_5fT7g"
              loading="lazy"
              controls
              className="rounded-[10px] overflow-hidden"
            ></ReactPlayer>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default About;
