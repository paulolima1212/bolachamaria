import { useCallback } from "react"

import '../Header/styles.scss'

export default function Header() {

    const handleOpenMenu = useCallback(() => {
        const menuleft = document.querySelector('.menu-left')
        const menutoggle = document.querySelector('.menutoggle')
        menuleft?.classList.toggle('active')
        menutoggle?.classList.toggle('active')
    }, [])
    return (
        <div className="header">
            <div className="menutoggle" onClick={handleOpenMenu}></div>
            <img src="" alt="logo" className="logoimage"/>
        </div>
    )
}