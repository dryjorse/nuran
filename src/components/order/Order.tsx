import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { FC } from "react";
import Input from "../ui/input/Input";
import { useForm } from "react-hook-form";
import { IOrderForm } from "../../types/client.types";

const Order: FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IOrderForm>({ mode: "onBlur" });

  return (
    <section className="container py-[48px] flex justify-between gap-[24px]">
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
        <h2>Заказать звонок</h2>
        <span className="block mt-[8px] mb-[24px] text-text-secondary-neutral leading-[20px]">
          Хотите узнать больше? Закажите звонок, и мы свяжемся с вами!
        </span>
        <Input
          title="Как вас зовут?"
          placeholder="Введите свое полное имя"
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
          title="Ваш номер телефона"
          placeholder="Введите свой номер телефона"
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
            Отправить заявку
          </button>
          <a
            href="/"
            className="btn-outline rounded-lvl-4 py-[9px] px-50 text-14 font-medium"
          >
            Перейти на WhatsApp
          </a>
        </div>
        <span className="text-[13px] leading-[17px]">
          Сотрудники колл-центра свяжутся с вами как только освободятся.
        </span>
      </form>
    </section>
  );
};

export default Order;
