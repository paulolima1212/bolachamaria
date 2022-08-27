import { useState } from "react";
import { useCardContext } from "../../Context/CardsContext"

import '../Modal/styles.scss'

interface PedidoProps{
    pedido:[
        {
            title: string,
            src: string,
            content: {}
            qtd: number
        }
    ]
}

export default function Modal() {

    const {setModalVisible, modalContent}:any = useCardContext()
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
            title: modalContent.title,
            src: modalContent.src,
            qtd: pedido,
            price: modalContent.price * pedido
        }
        const pedidos:any = localStorage.getItem('pedido')
        if(pedidos){
            const listaItems = JSON.parse(pedidos)
            console.log(listaItems);
            listaItems.items.push(novoPedido)
            console.log(listaItems);
            localStorage.setItem('pedido', JSON.stringify(listaItems))
        }else{
            const criarPedido = {
                items:[
                    {
                        title: modalContent.title,
                        src: modalContent.src,
                        qtd: pedido,
                        price: modalContent.price * pedido
                    }
                ]}
                localStorage.setItem('pedido', JSON.stringify(criarPedido))
            }
    }

    return (
        <div className="modal">
            <div className="frame-modal">
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
                    <button onClick={handlePedido} className="button-pedido">Pedido</button>
                </div>
                <input type="button" value="Close" onClick={() => handleCloseModal()} />
            </div>
        </div>
    )
}