import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import blockAImage from "../../../assets/images/block-a.jpg";
import blockBImage from "../../../assets/images/block-b.jpg";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/pagination";
import Photo from "../../photo/Photo";

const blocks: { block: "A" | "B"; image: string }[] = [
  { block: "A", image: blockAImage },
  { block: "B", image: blockBImage },
];

const Plans: FC = () => {
  const { t } = useTranslation();
  const [block, setBlock] = useState<"A" | "B">("A");

  const currentBlock = blocks.find((currBlock) => currBlock.block === block);

  return (
    <section id="plans" className="container py-[48px] bmb:py-[28px]">
      <h2>{t("plans.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("plans.subtitle")}</h3>
      <div className="my-[12px] flex justify-between gap-[12px]">
        {blocks.map(({ block: currBlock }) => (
          <button
            key={currBlock}
            onClick={() => setBlock(currBlock)}
            className={clsx("rounded-lvl-4 py-[8px] flex-auto font-normal", {
              btn: currBlock === block,
              "btn-outline": currBlock !== block,
            })}
          >
            {t(`plans.block${currBlock}`)}
          </button>
        ))}
      </div>
      <div className="border border-[#D2D2D2] rounded-lvl-12 h-[465px] bg-white tb:h-[370px] stb:h-[200px]">
        <Photo
          alt="block-plan"
          isShadow={false}
          image={currentBlock!.image}
          className="mx-auto h-full max-w-[774px]"
        />
      </div>
    </section>
  );
};

export default Plans;
