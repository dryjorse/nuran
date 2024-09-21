import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const MapComp: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container py-[48px]">
      <h2>{t("geolocation.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("geolocation.subtitle")}</h3>
      <YMaps>
        <Map
          width="100%"
          height={500}
          defaultState={{ center: [42.824903, 74.583004], zoom: 17 }}
        >
          <Placemark geometry={[42.824903, 74.583004]} />
        </Map>
      </YMaps>
    </section>
  );
};

export default MapComp;
