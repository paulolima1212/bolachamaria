import Carrousel from "./Components/Carrousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import MenuLeft from "./Components/MenuLeft";
import TelaLogin from "./Components/TelaLogin";
import TelaPedido from "./Components/TelaPedido";
import { useCardContext } from "./Context/CardsContext";
import { card1, card2, card3, card4, card5, card6, card7, card8 } from '../src/Content/Content';
import CardComponent from '../src/Components/Cards';

import "swiper/css/pagination";
import { useEffect } from "react";
export default function App() {

  const {modalVisible, telaLoginVisible, modalTelaPedido, show}: any = useCardContext()

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'initial'
  }, [show]);
  
  return (


    <div className="main">
      {modalTelaPedido && <TelaPedido />}
      {telaLoginVisible && <TelaLogin />}
      <MenuLeft />
      <Header />
      {modalVisible && <Modal />}
      <div className="container">
        <CardComponent card={card1}/>
        <CardComponent card={card2} />
        <CardComponent card={card3} />
        <CardComponent card={card4} />
        <CardComponent card={card5} />
        <CardComponent card={card6} />
        <CardComponent card={card7} />
        <CardComponent card={card8} />
      </div>
      {/* <Carrousel /> */}
      {/* <NewCard /> */}
      <Footer />
    </div>
  )
}
