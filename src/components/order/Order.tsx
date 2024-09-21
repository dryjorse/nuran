import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { FC } from "react";
import Input from "../ui/input/Input";
import { useForm } from "react-hook-form";
import { IOrderForm } from "../../types/client.types";
import { useTranslation } from "react-i18next";

const Order: FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IOrderForm>({ mode: "onBlur" });
  const { t } = useTranslation();

  return (
    <section
      id="order"
      className="container py-[48px] flex justify-between gap-[24px]"
    >
      <div className="flex-[0_1_558px]">
        <YMaps>
          <Map
            width="100%"
            height="100%"
            defaultState={{ center: [42.824903, 74.583004], zoom: 17 }}
          >
            <Placemark geometry={[42.824903, 74.583004]} />
          </Map>
        </YMaps>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>{t("order.title")}</h2>
        <span className="block mt-[8px] mb-[24px] text-text-secondary-neutral leading-[20px]">
          {t("order.subtitle")}
        </span>
        <Input
          title={t("order.name")}
          placeholder={t("order.placeholderName")}
          error={errors.fullname}
          wrapperClassName="mb-20"
          {...register("fullname", {
            required: "Поле не может быть пустым!",
            minLength: {
              value: 2,
              message: "Значение должно состоять из не менее двух букв",
            },
          })}
        />
        <Input
          type="phone"
          error={errors.phone}
          title={t("order.phone")}
          placeholder={t("order.placeholderPhone")}
          {...register("phone", {
            required: "Поле не может быть пустым",
            validate: {
              "Некорректный формат номера телефона": (value) =>
                (value + "").length === 9,
            },
          })}
        />
        <div className="mt-20 mb-[8px] flex justify-between gap-[16px] whitespace-nowrap">
          <button className="btn py-[13px] px-70 text-14 font-medium">
            {t("order.submit")}
          </button>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=996555500900"
            className="btn-outline rounded-lvl-4 py-[9px] px-50 text-14 font-medium"
          >
            {t("order.whatsapp")}
          </a>
        </div>
        <span className="text-[13px] leading-[17px]">
          {t("order.contactWhen")}
        </span>
      </form>
    </section>
  );
};

export default Order;
