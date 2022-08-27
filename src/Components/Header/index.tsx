import { useCallback } from "react"
import { useCardContext } from "../../Context/CardsContext"

import '../Header/styles.scss'

export default function Header() {

    const {setClient}:any = useCardContext()

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
        </div>
    )
}