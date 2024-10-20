import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { FC } from "react";
import Input from "../ui/input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { IOrderForm } from "../../types/client.types";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import orderService from "../../services/orderService";
import { useAtom } from "jotai";
import { notificationAtom } from "../../store/store";

const Order: FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IOrderForm>({ mode: "onTouched" });
  const { t } = useTranslation();
  const [_, setNotification] = useAtom(notificationAtom);

  const { mutate: sendOrder, isPending } = useMutation({
    mutationFn: orderService.sendOrder,
    onMutate: () => {
      setNotification({
        message: t("loading"),
        isOpen: true,
        isAutoClose: false,
        type: "loading",
      });
    },
    onSuccess: () => {
      setNotification({
        message: t("order.success"),
        isOpen: true,
        isAutoClose: true,
        type: "success",
      });
      reset();
    },
  });

  const sendOrderFunc: SubmitHandler<IOrderForm> = (data) => {
    sendOrder(data);
  };

  return (
    <section
      id="order"
      className="container py-[48px] flex justify-between gap-[24px] blt:flex-col bmb:py-[28px]"
    >
      <div className="flex-[0_1_558px] blt:order-2 blt:flex-[0_1_477px] tb:flex-[0_1_300px] mb:flex-[0_1_204px]">
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
      <form onSubmit={(e) => e.preventDefault()} className="order-1">
        <h2>{t("order.title")}</h2>
        <span className="block mt-[8px] mb-[24px] text-text-secondary-neutral leading-[20px] tb:mb-20">
          {t("order.subtitle")}
        </span>
        <Input
          title={t("order.name")}
          placeholder={t("order.placeholderName")}
          error={errors.name}
          wrapperClassName="mb-20 tb:mb-[12px]"
          {...register("name", {
            required: "Поле не может быть пустым!",
            minLength: {
              value: 2,
              message: "Значение должно состоять из не менее двух букв",
            },
          })}
        />
        <Input
          type="phone"
          error={errors.number}
          title={t("order.phone")}
          placeholder={t("order.placeholderPhone")}
          {...register("number", {
            required: "Поле не может быть пустым",
            validate: {
              "Некорректный формат номера телефона": (value) =>
                (value + "").length === 9,
            },
          })}
        />
        <div className="mt-20 mb-[8px] flex justify-between gap-[16px] whitespace-nowrap tb:flex-col tb:gap-[8px]">
          <button
            disabled={!isValid || isPending}
            onClick={handleSubmit(sendOrderFunc)}
            className="btn py-[13px] px-70 text-14 font-medium blt:flex-auto"
          >
            {t("order.submit")}
          </button>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=996555500900"
            className="btn-outline rounded-lvl-4 py-[9px] px-50 text-14 font-medium text-center blt:flex-auto"
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
