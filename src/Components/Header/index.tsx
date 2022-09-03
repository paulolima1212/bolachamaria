import { useCallback, useEffect, useState } from "react"
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
            <img src="../../assets/user.svg" alt="logo" className="logoimage"/>
            <div className="cartorder" data-text={setItems()} onClick={handleTelaPedido}>
                {IconCarOrder}
            </div>
        </div>
    )
}