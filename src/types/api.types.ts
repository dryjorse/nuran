export interface IAbout {
  aboutCompany_en: string;
  aboutCompany_ky: string;
  aboutCompany_ru: string;
  aboutProject_ru: string;
  aboutProject_ky: string;
  aboutProject_en: string;
  video_link: string;
}
export type LanguagesType = "ru" | "en" | "ky";
export interface ISimpleData {
  id: number;
  image: string;
}
export interface IOrderBody {
  name: string;
  number: number;
}
export interface ILinks {
  yt_link: string;
  ig_link: string;
  wt_link: string;
  email_link: string;
}
