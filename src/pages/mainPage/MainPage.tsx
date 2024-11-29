import { FC } from "react";
import Banner from "../../components/mainPage/banner/Banner";
import About from "../../components/mainPage/about/About";
import Advantages from "../../components/mainPage/advantages/Advantages";
import Plans from "../../components/mainPage/plans/Plans";
import MapComp from "../../components/mainPage/mapComp/MapComp";
import Gallery from "../../components/mainPage/gallery/Gallery";
import PhotoModal from "../../components/photoModal/PhotoModal";
import Order from "../../components/order/Order";
import Stages from "../../components/mainPage/stages/Stages";
import Footer from "../../components/footer/Footer";
import Trigger from "../../components/trigger/Trigger";

const MainPage: FC = () => {
  return (
    <>
      <Banner />
      <About />
      <Advantages />
      <Plans />
      <MapComp />
      <Gallery />
      <PhotoModal />
      <Order />
      <Stages />
      <Footer />
      <Trigger />
    </>
  );
};

export default MainPage;
