export type LanguageType = "ru" | "en" | "kg";

export interface IOrderForm {
  name: string;
  number: number;
}
export interface INotification {
  message: string;
  isOpen: boolean;
  isAutoClose: boolean;
  type: "success" | "error" | "loading";
}
