import clsx from "clsx";
import { FC, PropsWithChildren, useRef } from "react";

interface Props {
  isOpen: boolean;
  maxHeight: number;
  className?: string;
}

const Accordeon: FC<PropsWithChildren<Props>> = ({
  children,
  isOpen,
  maxHeight,
  className = "",
}) => {
  const accordeonRef = useRef<HTMLDivElement>(null);

  const totalHeight = accordeonRef.current?.scrollHeight;

  return (
    <div
      ref={accordeonRef}
      style={{
        maxHeight: isOpen ? totalHeight : maxHeight,
      }}
      className={clsx("animate-def overflow-hidden", className)}
    >
      {children}
    </div>
  );
};

export default Accordeon;
