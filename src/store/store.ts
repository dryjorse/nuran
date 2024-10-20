import { atom } from "jotai";
import { INotification } from "../types/client.types";

export const photoModalAtom = atom({
  image: "",
  isOpen: false,
});
export const notificationAtom = atom<INotification>({
  message: "",
  isOpen: false,
  isAutoClose: true,
  type: "loading",
});
