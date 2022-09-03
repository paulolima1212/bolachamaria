import { IconExit, IconMoney, IconUser, IconWaiter } from '../../assets/icons'
import { useCardContext } from '../../Context/CardsContext'

import '../MenuLeft/styles.scss'

export default function MenuLeft() {

    const {setTelaLoginVisible, setClient, client}:any = useCardContext()

    function handleLogin(){
        setTelaLoginVisible(true)
    }

    function handleCallWeiter(){
        alert('O garçon foi chamado.')
    }

    function handleLogOut(){
        localStorage.removeItem('client')
        location.reload()
    }

    return (
        <div className="menu-left">
            <div className="header-menu">
                <div className="identifier">
                    <div>
                        <span id='client-menu'>{client?.client}</span>
                    </div>
                    <div className='line-separator-menuheader'></div>
                    <div>
                        <span id='table-menu'>Nº {client?.table}</span>
                    </div>
                </div>
            </div>
            <div className="labels">
                <ul>
                    <li onClick={handleLogin}>{IconUser}<a href="#">IDENTIFICAÇÃO</a></li>
                    <li onClick={handleCallWeiter}>{IconWaiter}<a href="#">CHAMAR GARÇON</a></li>
                    <li>{IconMoney}<a href="#">PAGAMENTO</a></li>
                    <li onClick={handleLogOut}>{IconExit}<a href="#">SAIR</a></li>
                </ul>
            </div>
        </div>
    )
}