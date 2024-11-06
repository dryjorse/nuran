import { FC } from "react";
import { useTranslation } from "react-i18next";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker, TileLayer } from "react-leaflet";
import markerIcon from "../../../assets/images/icons/map-mark.svg";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComp: FC = () => {
  const { t } = useTranslation();

  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [38, 38],
  });

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
        <Marker icon={customIcon} position={[42.823435, 74.593002]}></Marker>
      </MapContainer>
    </section>
  );
};

export default MapComp;
