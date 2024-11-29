import { FC } from "react";
import { useTranslation } from "react-i18next";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker, Polygon, TileLayer } from "react-leaflet";
import markerIcon from "../../../assets/images/icons/map-mark.svg";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComp: FC = () => {
  const { t } = useTranslation();

  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [60, 60],
  });

  const building1 = [
    [42.82302287982562, 74.59119686560271],
    [42.82326682261128, 74.59137925581572],
    [42.82312911309253, 74.59173867182372],
    [42.82363273498501, 74.59212490992186],
    [42.823518633509444, 74.59244677500365],
    [42.822806478161695, 74.59193715529082],
    [42.82278507482235, 74.5919202880652],
    [42.82277586776991, 74.59191276477588],
    [42.82275815625508, 74.59189779035442],
  ];

  const building2 = [
    [42.82261219152551, 74.59257311442937],
    [42.82292695832089, 74.59281987765874],
    [42.82275383678176, 74.59320611575689],
    [42.823997153437936, 74.59415025333013],
    [42.82413092652497, 74.59380693057622],
    [42.824398471830655, 74.59403223613347],
    [42.82413092652497, 74.59471888164128],
    [42.822352507712885, 74.59336704829778],
    [42.82231527768803, 74.59333788863066],
    [42.82229462096183, 74.59332045427206],
  ];

  return (
    <section className="container py-[48px] bmb:py-[28px]">
      <h2>{t("geolocation.title")}</h2>
      <MapContainer
        center={[42.823435, 74.593002]}
        zoom={17}
        scrollWheelZoom={false}
        className="w-full h-[500px] tb:h-[360px] mb:h-[214px] z-[1]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={customIcon} position={[42.8234, 74.5931]}></Marker>

        <Polygon
          //@ts-ignore
          positions={building1}
          color="#E07946"
        />
        <Polygon
          //@ts-ignore
          positions={building2}
          color="#E07946"
        />
      </MapContainer>
    </section>
  );
};

export default MapComp;
