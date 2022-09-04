import { IconCarOrder } from "../../assets/icons"
import { useCardContext } from "../../Context/CardsContext"

import '../Header/styles.scss'

export default function Header() {

    const {show, 
            setShow,
            setClient, 
            setModalTelaPedido, 
            modalTelaPedido, 
            client,
            setTelaLoginVisible
        }:any = useCardContext()
    
    const activeClient = JSON.parse(localStorage.getItem('client'))

    function handleTelaPedido() {
        {activeClient.client ? setModalTelaPedido(!modalTelaPedido): setTelaLoginVisible(true)}
        setShow(!show)
    }

    function setItems(){
        var items: number | string
        if(activeClient){
            items = activeClient.items?.length
        }else {
            items = ''
        }
        return items
    }

    function handleOpenMenu(){
        const menuleft = document.querySelector('.menu-left')
        const menutoggle = document.querySelector('.menutoggle')
        menuleft?.classList.toggle('active')
        menutoggle?.classList.toggle('active')
        const user:any = localStorage.getItem('client')
        setClient(JSON.parse(user))
        setShow(!show)
    }

    return (
        <div className="header">
            <div className="menutoggle" onClick={handleOpenMenu}></div>
            <img src="https://ik.imagekit.io/plima1212/Bolacha_Maria/Assets/logo_WQCkWmHbJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662286519876" alt="logo" className="logoimage"/>
            <div className="cartorder" data-text={setItems()} onClick={handleTelaPedido}>
                {IconCarOrder}
            </div>
        </div>
    )
}