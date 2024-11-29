import { FC } from "react";
import WhatsappIcon from "../ui/whatsappIcon/WhatsappIcon";
import { useContacts } from "../../hooks/queries/useContacts";
import { motion } from "framer-motion";
import Skeleton from "../ui/skeleton/Skeleton";

const Trigger: FC = () => {
  const { data } = useContacts();

  return data ? (
    <a
      target="_blank"
      href={data?.wt_link}
      className="rounded-lvl-1000 border-green border-[4px] p-[15px] fixed right-[60px] bottom-[60px] text-green z-[200] tb:bottom-[30px] tb:right-[30px]"
    >
      <WhatsappIcon className="tb:w-[50px] tb:h-[50px] bmb:w-[30px] bmb:h-[30px]" />
      {
        <motion.div
          animate={{ scale: [1, 2], opacity: [1, 0] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="absolute top-[-4px] bottom-[-4px] left-[-4px] right-[-4px] rounded-lvl-1000 border-green border-[4px]"
        ></motion.div>
      }
    </a>
  ) : (
    <Skeleton
      width={99}
      height={99}
      className="rounded-lvl-1000 fixed right-[60px] bottom-[60px] z-[200] tb:bottom-[30px] tb:right-[30px] tb:w-[50px] tb:h-[50px]"
    />
  );
};

export default Trigger;
