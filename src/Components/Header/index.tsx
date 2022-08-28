import { useCallback } from "react"
import { useCardContext } from "../../Context/CardsContext"
import { BsCart3 } from "react-icons/bs";

import '../Header/styles.scss'

export default function Header() {

    const {setClient, setModalTelaPedido, modalTelaPedido, client,setTelaLoginVisible}:any = useCardContext()

    function handleTelaPedido() {
        {client.client ? setModalTelaPedido(!modalTelaPedido): setTelaLoginVisible(true)}
    }

    const activeClient = JSON.parse(localStorage.getItem('client'))


    function setItems(){
        var items: number | string
        if(activeClient){
            items = activeClient.items?.length
        }else {
            items = ''
        }
        return items
    }

    const handleOpenMenu = useCallback(() => {
        const menuleft = document.querySelector('.menu-left')
        const menutoggle = document.querySelector('.menutoggle')
        menuleft?.classList.toggle('active')
        menutoggle?.classList.toggle('active')
        const user:any = localStorage.getItem('client')
        setClient(JSON.parse(user))
    }, [])
    return (
        <div className="header">
            <div className="menutoggle" onClick={handleOpenMenu}></div>
            <img src="" alt="logo" className="logoimage"/>
            <div className="cartorder" data-text={setItems()}>
                <BsCart3 size='2em' onClick={handleTelaPedido} />
            </div>
        </div>
    )
}