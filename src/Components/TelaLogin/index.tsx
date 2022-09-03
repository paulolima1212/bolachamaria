import { useCallback, useRef } from 'react'
import { IconUser } from '../../assets/icons'
import { useCardContext } from '../../Context/CardsContext'

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
        if(user.client && user.table){
            localStorage.setItem('client', JSON.stringify(user))
            setTelaLoginVisible(false)
            setClient(user)
        }
    }, [])
    
    return (
        <div className="tela-login">
            <form action="" className="frm-login">
                <div className="circle">
                    {IconUser}
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
                <div className='button-login'>
                    <button onClick={handleCloseRegister}>Fechar</button>
                    <button onClick={handleRegistrarMesa}>Confirmar</button>
                </div>
            </form>
        </div>
    )
}