import { useEffect, useState, useRef } from "react";

const useMatchMedia = (width = 600): boolean => {
  const [toggleChange, setToggleChange] = useState<boolean>(false);
  const matchMediaRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    matchMediaRef.current = window.matchMedia(`(max-width: ${width}px)`);
    const initialMatch = matchMediaRef.current.matches;

    if (initialMatch) {
      setToggleChange(true);
    } else {
      setToggleChange(false);
    }

    const test = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setToggleChange(true);
      } else {
        setToggleChange(false);
      }
    };

    matchMediaRef.current.addListener(test);

    return () => {
      // @ts-ignore
      matchMediaRef.current.removeListener(test);
    };
  }, [width]);

  return toggleChange;
};

export default useMatchMedia;
