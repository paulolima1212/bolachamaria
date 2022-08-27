import Footer from "../Footer"
import Header from "../Header"
import ItemCard from "../ItemCard"

import '../TelaPedido/styles.scss'

export default function TelaPedido() {

    const activeClient = JSON.parse(localStorage.getItem('client'))
    const listaItems = JSON.parse(localStorage.getItem('pedido'))

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
                    {listaItems.items.map((item:any) => {
                        return <ItemCard key={Math.random()} src="" alt="item" name={item.title} price={item.price} />
                    })}
                </div>
                <div className="total-payment">
                    <span>Total a pagar:</span>
                    <span>{155.25}€</span>
                    <button>Confirmar pedido</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}