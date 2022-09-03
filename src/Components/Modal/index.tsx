import { useState } from "react";
import { useCardContext } from "../../Context/CardsContext"
import { ClientProps, items } from "../../Interfaces/Interfaces";
import { v4 as uuid } from "uuid";

import '../Modal/styles.scss'
import TelaLogin from "../TelaLogin";

export default function Modal() {

    const {setModalVisible, modalContent, setTelaLoginVisible,telaLoginVisible}:{modalContent:items} = useCardContext()
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

    

    function handlePedido() {
        const novoPedido = {
            id: uuid(),
            name: modalContent.name,
            src: modalContent.src,
            qtd: pedido,
            price: modalContent.price * pedido
        }
        
        const activeClient = JSON.parse(localStorage.getItem('client'))

        if(activeClient){
            activeClient.items.push(novoPedido)
            localStorage.setItem('client', JSON.stringify(activeClient))
            setModalVisible(false)
        }else{
            setTelaLoginVisible(true)
        }
    }

    return (
        <div className="modal">
            <div className="frame-modal">
                <h3 className="title-modal">{modalContent.name}</h3>
                <div className="close-modal" onClick={() => handleCloseModal()}></div>
                <img src={modalContent.src} alt="drink-pinacolada" />
                <div className="line-separator"></div>
                <p className="desc-modal">{modalContent.content ? modalContent.content : modalContent.name}</p>
                <div className="pedido">
                    <div>
                        <button onClick={handleDiminuirPedido}>-</button>
                        <span>{pedido}</span>
                        <button onClick={handleAumentarPedido}>+</button>
                    </div>
                    <button onClick={handlePedido} className="button-pedido">Pedido</button>
                </div>
            </div>
        </div>
    )
}