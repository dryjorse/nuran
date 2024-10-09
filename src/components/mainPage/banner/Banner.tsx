import { FC } from "react";
import bannerImage from "../../../assets/images/banner.jpg";
import arrowIcon from "../../../assets/images/icons/arrow-right.svg";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";

const Banner: FC = () => {
  const { t } = useTranslation();

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
      className="relative mt-[55px] h-[calc(100vh-55px)] bg-center bg-cover bg-no-repeat before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[linear-gradient(270deg,rgba(0,0,0,0)_50%,rgba(14,14,14,0.6)_100%)] before:z-[-1] stb:h-[300px]"
    >
      <div className="container pt-[11%] text-text-primary-darkmode stb:pt-40">
        <h1 className="mb-[8px] max-w-[336px] text-[32px] font-bold leading-[32px] btb:text-[25px] btb:leading-[27px] btb:mb-[4px] stb:mb-[12px] stb:text-[20px] stb:leading-[24px] stb:max-w-[223px] stb:font-medium">
          {t("banner.welcome")}
        </h1>
        <p className="max-w-[364px] text-[20px] leading-[24px] btb:text-16 btb:leading-[20px] btb:max-w-[300px] stb:max-w-[223px] stb:text-[13px] stb:leading-[17px]">
          {t("banner.subtitle")}
        </p>
        <button
          onClick={onClickOrder}
          className="btn mt-[32px] py-[8px] flex gap-[15px] items-center font-medium btb:mt-[16px] stb:text-[13px] stb:leading-[17px] stb:mt-[88px]"
        >
          <span>{t("leaveRequest")}</span>
          <img src={arrowIcon} alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Banner;
