import { BsPerson } from 'react-icons/Bs'
import { FaRegHandPaper } from 'react-icons/Fa'
import { AiOutlineLogout } from 'react-icons/Ai'
import { GiReceiveMoney, GiRoundTable } from 'react-icons/Gi'
import { useCardContext } from '../../Context/CardsContext'
import { useCallback } from 'react'

import '../MenuLeft/styles.scss'

export default function MenuLeft() {

    const {setTelaLoginVisible}:any = useCardContext()

    const handleLogin = useCallback(() => {
        setTelaLoginVisible(true)
    }, [])

    function handleCallWeiter(){
        alert('O garçon foi chamado.')
    }
    
    return (
        <div className="menu-left">
            <div className="header-menu">
                
                <div className="identifier">
                    <div>
                        <BsPerson size='1em' color='#fff' />
                        <span>Paulo</span>
                    </div>
                    <div className='line-separator-menuheader'></div>
                    <div>
                        <GiRoundTable color='#fff'/>
                        <span>N 05</span>
                    </div>
                </div>
            </div>
            <div className="labels">
                <div className="identifica" onClick={handleLogin}>
                    <BsPerson size='2em' color='#fff' />
                    <a href="#">
                        Identificação
                    </a>
                </div>
                <div className="garcon">
                    <FaRegHandPaper size='2em' color='#fff' />
                    <a href="#">
                        <span onClick={handleCallWeiter}>chamar garçon</span>
                    </a>
                </div>
                <div className="payment">
                    <GiReceiveMoney size='2em' color='#fff' />
                    <a href="#">
                        Pagamento
                    </a>
                </div>
                <div className="logouttable">
                    <AiOutlineLogout size='2em' color='#fff' />
                    <a href="#">
                        Sair
                    </a>
                </div>
            </div>
        </div>
    )
}