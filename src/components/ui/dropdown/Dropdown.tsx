import clsx from "clsx";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useRef,
  useState,
} from "react";
import useClickOutside from "../../hooks/useClickOutside";

interface Props {
  buttonElem: ReactNode;
  bodyClassName?: string;
  controller?: [boolean, Dispatch<SetStateAction<boolean>>];
}

const Dropdown: FC<PropsWithChildren<Props>> = ({
  buttonElem,
  bodyClassName = "",
  controller,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const toggleIsOpen = () =>
    controller ? controller[1]((prev) => !prev) : setIsOpen((prev) => !prev);

  useClickOutside([bodyRef, buttonRef], () =>
    controller ? controller[1](false) : setIsOpen(false)
  );

  return (
    <div className="relative">
      <button ref={buttonRef} onClick={toggleIsOpen}>
        {buttonElem}
      </button>
      <div
        ref={bodyRef}
        className={clsx(
          "absolute right-0 pointer-events-none opacity-0 animate-def",
          bodyClassName,
          {
            "!pointer-events-auto !opacity-100": controller
              ? controller[0]
              : isOpen,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
