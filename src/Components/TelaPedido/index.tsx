import { ClientProps } from "../../Interfaces/Interfaces"
import Footer from "../Footer"
import Header from "../Header"
import ItemCard from "../ItemCard"
import {api} from '../../services/api'

import '../TelaPedido/styles.scss'
import { IconTrash } from "../../assets/icons"

export default function TelaPedido() {

    let toPay = 0
    const activeClient:ClientProps = JSON.parse(localStorage.getItem('client'))
    const total = activeClient.items?.map((item) => {
        toPay = toPay + item.price
    })

    function handleSendOrder() {
        api.post('/', activeClient)
        activeClient.items = []
        localStorage.setItem('client', JSON.stringify(activeClient))
        alert('Pedido enviado. Obrigado.')
        location.reload()
    }

    function handleAumentarPedido(e: Event){
        // console.log(e.target.id);
    }
    
    function handleDiminuirPedido(e: Event){
        // console.log(e.target.id)
    }

    return (
        <div className="tela-pedido">
            <Header />
            <div className="main-pedido">
                <h3 className="title-pedido">Pedido</h3>
                <div className="dados-client">
                    <span className="client">Cliente:</span>
                    <span className="name-client">{activeClient.client}</span>
                    <span className="table">Mesa:</span>
                    <span className="table-number">{activeClient.table}</span>
                </div>
                <div className="content-items">
                    {activeClient.items?.map((item) => {
                        return (
                            <div>
                                <ItemCard  key={item.id} src={item.src} alt="item" name={item.name} price={item.price.toFixed(2)} content='' />
                                <span className="qtd">{item.qtd}</span>
                                <div className="button-trash">
                                    {IconTrash}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="total-payment">
                    <span className="total-to-pay">Total a pagar:</span>
                    <span className="cash-to-pay">{toPay.toFixed(2)}€</span>
                    <button onClick={handleSendOrder}>Confirmar pedido</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}