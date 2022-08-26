import { useCardContext } from '../../Context/CardsContext'
import '../ModalConfirmaPedido/styles.scss'

export default function ModalConfirmaPedido({item, qtd, mesa, client}:any) {

    const {setModalConfirmacao}:any = useCardContext()

    function handleConfirmacao(){
        alert('Pedido enviado.')
        setModalConfirmacao(false)
    }

    function handleCancelar(){
        setModalConfirmacao(false)
    }

    return (
        <div className="modal-confirmacao">
            <h3 className='titlepedido'>Pedido</h3>
            <div>
                <span className='infoitem'>{qtd} - {item}</span>
                <span className='infomesa'>Mesa: {mesa}</span>
                <span className='infoclient'>Cliente: {client}</span>
            </div>
            <div>
                <button className='btncancelar' onClick={handleCancelar}>Cancelar</button>
                <button className='btnconfirmar' onClick={handleConfirmacao}>Confirmar</button>
            </div>
        </div>
    )
}