import { useCallback, useRef } from 'react'
import { useCardContext } from '../../Context/CardsContext'
import { FaUserCircle } from 'react-icons/Fa'

import '../TelaLogin/styles.scss'

export default function TelaLogin() {

    const {setTelaLoginVisible, client, setClient}:any = useCardContext()

    const inputClient = useRef<any>()
    const inputTable  = useRef<any>()
    
    const handleCloseRegister = useCallback(() => {
        setTelaLoginVisible(false)
    }, []);

    const handleRegistrarMesa = useCallback(() => {
        const user = {
            client: inputClient.current.value,
            table: inputTable.current.value,
            items: []
        }
        localStorage.setItem('client', JSON.stringify(user))
        setTelaLoginVisible(false)
        setClient(user)
    }, [])
    
    return (
        <div className="tela-login">
            <form action="" className="frm-login">
                <div className="circle">
                    <FaUserCircle color='#fff' size='130px' />
                </div>
                <h2>Identificação</h2>
                <div className="inputbox">
                    <input ref={inputClient} id='client-login' type="text" required />
                    <span>client</span>
                </div>
                <div className="inputbox">
                    <input ref={inputTable} id='table-login' type="text" required />
                    <span>mesa</span>
                </div>
                <div>
                    <button onClick={handleCloseRegister}>Fechar</button>
                    <button onClick={handleRegistrarMesa}>Confirmar</button>
                </div>
            </form>
        </div>
    )
}