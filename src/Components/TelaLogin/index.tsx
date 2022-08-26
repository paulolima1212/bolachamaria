import { useCallback } from 'react'
import { useCardContext } from '../../Context/CardsContext'
import { FaUserCircle } from 'react-icons/Fa'

import '../TelaLogin/styles.scss'

export default function TelaLogin() {
    const {setTelaLoginVisible}:any = useCardContext()

    const handleRegistrarMesa = useCallback(() => {
        setTelaLoginVisible(false)
    }, [])
    
    return (
        <div className="tela-login">
            <form action="" className="frm-login">
                <div className="circle">
                    <FaUserCircle color='#fff' size='130px' />
                </div>
                <h2>Identificação</h2>
                <div className="inputbox">
                    <input type="text" required />
                    <span>client</span>
                </div>
                <div className="inputbox">
                    <input type="text" required />
                    <span>mesa</span>
                </div>
                <div>
                    <button onClick={handleRegistrarMesa}>Confirmar</button>
                </div>
            </form>
        </div>
    )
}