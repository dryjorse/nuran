import { RefObject, useEffect, useRef } from "react";
import { off, on } from "./mics/util";

const defaultEvents = ["mousedown", "touchstart"];

const useClickOutside = <E extends Event = Event>(
  refs: RefObject<HTMLElement | null>[],
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const handler = (event: any) => {
      let clicks = 0;

      refs.forEach((ref) => {
        const { current: el } = ref;
        el && !el.contains(event.target) && clicks++;
      });

      clicks >= refs.length && savedCallback.current(event);
    };
    for (const eventName of events) {
      on(document, eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, refs]);
};

export default useClickOutside;
