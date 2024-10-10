import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import useMatchMedia from "../../../hooks/useMatchMedia";

const MapComp: FC = () => {
  const { t } = useTranslation();
  const isTablet = useMatchMedia(768);
  const isMobile = useMatchMedia(375);

  return (
    <section className="container py-[48px] bmb:py-[28px]">
      <h2>{t("geolocation.title")}</h2>
      <h3 className="mt-[8px] mb-[16px]">{t("geolocation.subtitle")}</h3>
      <YMaps>
        <Map
          width="100%"
          height={isMobile ? 214 : isTablet ? 360 : 500}
          defaultState={{ center: [42.824903, 74.583004], zoom: 17 }}
        >
          <Placemark geometry={[42.824903, 74.583004]} />
        </Map>
      </YMaps>
    </section>
  );
};

export default MapComp;
