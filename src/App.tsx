import Carrousel from "./Components/Carrousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import { useCardContext } from "./Context/CardsContext";

import "swiper/css/pagination";
import MenuLeft from "./Components/MenuLeft";
import TelaLogin from "./Components/TelaLogin";
export default function App() {

  const {modalVisible, telaLoginVisible}: any = useCardContext()

  return (
    <div className="main">
      {telaLoginVisible && <TelaLogin />}
      <MenuLeft />
      <Header />
      {modalVisible && <Modal />}
      <Carrousel />
      <Footer />
    </div>
  )
}
