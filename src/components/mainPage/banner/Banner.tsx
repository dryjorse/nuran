import { FC } from "react";
import bannerImage from "../../../assets/images/banner.jpg";
import arrowIcon from "../../../assets/images/icons/arrow-right.svg";
import { scroller } from "react-scroll";

const Banner: FC = () => {
  const onClickOrder = () => {
    scroller.scrollTo("order", {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -150,
    });
  };

  return (
    <section
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="mt-[55px] h-[calc(100vh-55px)] bg-center bg-cover bg-no-repeat before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[linear-gradient(270deg,rgba(0,0,0,0)_50%,rgba(14,14,14,0.6)_100%)] before:z-[-1]"
    >
      <div className="container pt-[11%] text-text-primary-darkmode">
        <h1 className="mb-[8px] max-w-[336px]  text-[32px] font-bold leading-[32px]">
          Добро пожаловать в Nuran Park
        </h1>
        <p className="max-w-[364px] text-[20px] leading-[24px]">
          Живите с комфортом, безопасностью и престижем
        </p>
        <button
          onClick={onClickOrder}
          className="btn mt-[32px] py-[8px] flex gap-[15px] items-center"
        >
          <span>Оставить заявку</span>
          <img src={arrowIcon} alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Banner;
