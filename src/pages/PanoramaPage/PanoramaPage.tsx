import { FC } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import panoramaImage from "../../assets/images/360.jpg";

const PanoramaPage: FC = () => {
  return (
    <section>
      <ReactPhotoSphereViewer
        src={panoramaImage}
        height={"100vh"}
        width={"100%"}
      ></ReactPhotoSphereViewer>
    </section>
  );
};

export default PanoramaPage;
