import { useCardContext } from "../../Context/CardsContext"
import { ClientProps, items } from "../../Interfaces/Interfaces"
import Footer from "../Footer"
import Header from "../Header"
import ItemCard from "../ItemCard"
import {api} from '../../services/api'

import '../TelaPedido/styles.scss'

export default function TelaPedido() {

    let toPay = 0
    const activeClient:ClientProps = JSON.parse(localStorage.getItem('client'))
    const total = activeClient.items?.map((item) => {
        toPay = toPay + item.price
    })

    function handleSendOrder() {
        console.log(activeClient);
        api.post('/', activeClient)
        activeClient.items = []
        localStorage.setItem('client', JSON.stringify(activeClient))
        alert('Pedido enviado. Obrigado.')
        location.reload()
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
                        return <ItemCard key={Math.random()} src={item.src} alt="item" name={item.name} price={item.price.toFixed(2)} content='' />
                    })}
                </div>
                <div className="total-payment">
                    <span>Total a pagar:</span>
                    <span>{toPay.toFixed(2)}€</span>
                    <button onClick={handleSendOrder}>Confirmar pedido</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}