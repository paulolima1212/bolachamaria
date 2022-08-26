import { useState } from "react";
import { useCardContext } from "../../Context/CardsContext"

import '../Modal/styles.scss'
import ModalConfirmaPedido from "../ModalConfirmaPedido";

export default function Modal() {

    const {setModalVisible, modalContent, modalConfirmacao, setModalConfirmacao}:any = useCardContext()
    const [pedido, setPedido] = useState(0);

    function handleAumentarPedido(){
        setPedido(pedido + 1)
    }
    function handleDiminuirPedido(){
        setPedido(pedido - 1)
    }

    function handleCloseModal() {
        setModalVisible(false)
    }

    function handleOpenModalConfirmacao() {
        setModalConfirmacao(true)
    }

    return (
        <div className="modal">
            <div className="frame-modal">
                {modalConfirmacao && <ModalConfirmaPedido 
                    item={modalContent.title}
                    qtd={pedido}
                    mesa={'5'}
                    client='Paulo'  
                    />}
                <h3 className="title-modal">{modalContent.title}</h3>
                <img src={modalContent.src} alt="drink-pinacolada" />
                <div className="line-separator"></div>
                <p className="desc-modal">{modalContent.content ? modalContent.content : modalContent.title}</p>
                <div className="pedido">
                    <div>
                        <button onClick={handleDiminuirPedido}>-</button>
                        <span>{pedido}</span>
                        <button onClick={handleAumentarPedido}>+</button>
                    </div>
                    <button onClick={handleOpenModalConfirmacao} className="button-pedido">Pedido</button>
                </div>
                <input type="button" value="Close" onClick={() => handleCloseModal()} />
            </div>
        </div>
    )
}