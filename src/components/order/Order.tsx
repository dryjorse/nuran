import { FC } from "react";
import Input from "../ui/input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { IOrderForm } from "../../types/client.types";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import orderService from "../../services/orderService";
import { useAtom } from "jotai";
import { notificationAtom } from "../../store/store";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import markerIcon from "../../assets/images/icons/map-mark-office.svg";

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

  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [80, 80],
  });

  return (
    <section id="order">
      <script data-b24-form="inline/1/aftkc1" data-skip-moving="true">
        {
          (function (_, d, u) {
            var s = d.createElement("script");
            s.async = true;
            s.src = u + "?" + ((Date.now() / 180000) | 0);
            var h = d.getElementsByTagName("script")[0];
            //@ts-ignore
            h.parentNode.insertBefore(s, h);
          })(
            window,
            document,
            "https://cdn-ru.bitrix24.kz/b31856562/crm/form/loader_1.js"
          ) as unknown as ""
        }
      </script>
    </section>
  );

  return (
    <section
      id="order"
      className="container py-[48px] flex justify-between gap-[24px] blt:flex-col bmb:py-[28px]"
    >
      <div className="flex-[0_1_558px] blt:order-2 blt:flex-[0_1_477px] tb:flex-[0_1_300px] mb:flex-[0_1_204px]">
        <MapContainer
          center={[42.825041, 74.583494]}
          zoom={17}
          scrollWheelZoom={false}
          className="w-full h-full z-[1]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={customIcon} position={[42.8252, 74.583494]}></Marker>
        </MapContainer>
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
            required: t("order.errors.empty"),
            minLength: {
              value: 2,
              message: t("order.errors.min"),
            },
          })}
        />
        <Input
          type="phone"
          error={errors.number}
          title={t("order.phone")}
          placeholder={t("order.placeholderPhone")}
          {...register("number", {
            required: t("order.errors.empty"),
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
