import { FC } from "react";
import magnifierIcon from "../../assets/images/icons/magnifier.svg";
import { useAtom } from "jotai";
import { photoModalAtom } from "../../store/store";

interface Props {
  image: string;
  description: string;
}

const Photo: FC<Props> = ({ image, description }) => {
  const [photoModal, setPhotoModal] = useAtom(photoModalAtom);

  return (
    <div className="group relative rounded-lvl-12 p-[16px] flex justify-between items-end gap-[26px] w-[267px] h-[185px] bg-no-repeat bg-cover bg-center cursor-pointer overflow-hidden hover:before:opacity-100 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-10 before:[background:_linear-gradient(180deg,rgba(47,47,47,0)_0%,#2F2F2F_100%)] before:opacity-0 before:animate-def before:duration-[.250s]">
      <img
        src={image}
        alt="gallery"
        className="absolute top-0 bottom-0 left-0 right-0 object-cover animate-def duration-[.250s] z-[5] group-hover:blur-sm"
      />
      <p className="relative z-20 flex-[0_0_170px] text-text-primary-darkmode text-[14px] leading-[18px] text-ellipsis overflow-hidden line-clamp-[10] opacity-0 animate-def duration-[.250s] group-hover:opacity-100">
        {description}
      </p>
      <button
        onClick={() => setPhotoModal({ image, isOpen: true })}
        className="btn relative z-20 rounded-lvl-8 p-[14px] flex-[0_0_44px] animate-def duration-300 ease-in-out translate-x-[139%] translate-y-[40%] scale-125 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0"
      >
        <img src={magnifierIcon} alt="magnifier" />
      </button>
    </div>
  );
};

export default Photo;
