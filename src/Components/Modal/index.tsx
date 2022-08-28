import { useState } from "react";
import { useCardContext } from "../../Context/CardsContext"
import { ClientProps, items } from "../../Interfaces/Interfaces";

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
            name: modalContent.name,
            src: modalContent.src,
            qtd: pedido,
            price: modalContent.price * pedido
        }
        
        const activeClient = JSON.parse(localStorage.getItem('client'))

        if(activeClient.client){
            activeClient.items.push(novoPedido)
            localStorage.setItem('client', JSON.stringify(activeClient))
        }else{
            setTelaLoginVisible(true)
        }
    }

    return (
        <div className="modal">
            <div className="frame-modal">
                <h3 className="title-modal">{modalContent.name}</h3>
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
                <input type="button" value="Close" onClick={() => handleCloseModal()} />
            </div>
        </div>
    )
}