import { useAtom } from "jotai";
import { FC, useEffect } from "react";
import { notificationAtom } from "../../../store/store";
import clsx from "clsx";
import crossIcon from "../../../assets/images/icons/cross.svg";

const Notification: FC = () => {
  const [notification, setNotification] = useAtom(notificationAtom);
  const { isOpen, message, isAutoClose, type } = notification;

  useEffect(() => {
    let timeout: number;

    if (isOpen && isAutoClose) {
      timeout = setTimeout(() => {
        setNotification({ ...notification, isOpen: false });
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen, isAutoClose]);

  return (
    <div
      className={clsx("fixed top-0 left-0 right-0 z-[200]", {
        "pointer-events-none": !isOpen,
      })}
    >
      <div
        className={clsx(
          "mt-80 mx-auto border-[3px] border-text-neutral rounded-lvl-12 py-10 pl-[43px] pr-20 w-fit bg-secondary-background text-text-primary-lightmode font-medium animate-def ease-in-out duration-500 flex gap-[30px] items-center",
          { "translate-y-[calc(-100%-80px)] opacity-0": !isOpen },
          { "!border-green": type === "success" },
          { "!border-red": type === "error" }
        )}
      >
        <span>{message}</span>
        <button
          onClick={() => setNotification({ ...notification, isOpen: false })}
        >
          <img src={crossIcon} alt="cross" />
        </button>
      </div>
    </div>
  );
};

export default Notification;
