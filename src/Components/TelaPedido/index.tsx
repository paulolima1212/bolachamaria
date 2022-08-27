import Footer from "../Footer"
import Header from "../Header"
import ItemCard from "../ItemCard"

import '../TelaPedido/styles.scss'

export default function TelaPedido(props:any) {
    return (
        <div className="tela-pedido">
            <Header />
            <div className="main-pedido">
                <h3 className="title-pedido">Pedido</h3>
                <div className="dados-client">
                    <span className="client">Cliente:</span>
                    <span className="name-client">Paulo</span>
                    <span className="table">Mesa:</span>
                    <span className="table-number">5</span>
                </div>
                <div className="content-items">
                    <ItemCard src="" alt="item" name="TOSTA MISTA" price="5.00" />
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