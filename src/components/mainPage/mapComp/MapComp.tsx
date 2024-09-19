import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { FC } from "react";

const MapComp: FC = () => {
  return (
    <section className="container py-[48px]">
      <h2>Расположение ЖК Nuran Park</h2>
      <h3 className="mt-[8px] mb-[16px]">Южная магистраль</h3>
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
