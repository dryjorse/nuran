import { FC } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import panoramaImage from "../../assets/images/360.jpg";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import markerImage from "../../assets/images/marker.png";
import "@photo-sphere-viewer/markers-plugin/index.css";

const PanoramaPage: FC = () => {
  const plugins = [
    [
      MarkersPlugin,
      {
        markers: [
          {
            id: "marker-1",
            html: '<strong class="panorama-marker">ЖК Nuran Park</strong>',
            position: { yaw: "0deg", pitch: "-4deg" },
            zIndex: 10,
          },
          {
            id: "marker-2",
            html: '<strong class="panorama-marker">Наш офис</strong>',
            position: { yaw: "24deg", pitch: "-4deg" },
            zIndex: 10,
          },
          {
            id: "marker-3",
            html: '<strong class="panorama-marker">ТЦ Ала-Арча</strong>',
            position: { yaw: "32deg", pitch: "-7deg" },
            zIndex: 10,
          },
          {
            id: "marker-4",
            html: '<strong class="panorama-marker">Парк дружбы</strong>',
            position: { yaw: "-42deg", pitch: "-6deg" },
            zIndex: 10,
          },
          {
            id: "marker-5",
            html: '<strong class="panorama-marker">Парк Ынтымак-1</strong>',
            position: { yaw: "9deg", pitch: "-14deg" },
            zIndex: 10,
          },
          {
            id: "marker-6",
            html: '<strong class="panorama-marker">Парк Ынтымак-2</strong>',
            position: { yaw: "-9deg", pitch: "-14deg" },
            zIndex: 10,
          },
          {
            id: "marker-7",
            html: '<strong class="panorama-marker">Парк Адинай</strong>',
            position: { yaw: "38deg", pitch: "-16deg" },
            zIndex: 10,
          },
          {
            id: "marker-8",
            html: '<strong class="panorama-marker">Парк им К.Ататюрка</strong>',
            position: { yaw: "-120deg", pitch: "-34deg" },
            zIndex: 10,
          },
        ],
      },
    ],
  ];

  return (
    <section>
      <ReactPhotoSphereViewer
        src={panoramaImage}
        height={"100vh"}
        width={"100%"}
        //@ts-ignore
        plugins={plugins}
      ></ReactPhotoSphereViewer>
    </section>
  );
};

export default PanoramaPage;
