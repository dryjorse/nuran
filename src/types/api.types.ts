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
export interface IGallery extends ISimpleData {
  desription_ru: string;
  desription_en: string;
  desription_ky: string;
}
export interface IOrderBody {
  name: string;
  number: number;
}
export interface ILinks {
  yt_link: string;
  yt_title: string;
  ig_link: string;
  ig_title: string;
  wt_link: string;
  wt_title: string;
  email_link: string;
}
