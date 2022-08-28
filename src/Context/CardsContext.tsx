import { createContext, useContext, useState } from "react";
import { items } from "../Interfaces/Interfaces";

interface CardContextTypes {
    setModalVisible: () => boolean
    modalVisible: boolean
    setModalContent: () => void
    setModalTitle: () => void
    modalContent: items
    modalTitle: string
}

const CardContext = createContext<CardContextTypes | {}>({});

export function CardContextProvider({children}: {children: JSX.Element}) {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [telaLoginVisible, setTelaLoginVisible] = useState(false);
    const [modalTelaPedido, setModalTelaPedido] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [client, setClient] = useState({client: '', table: ''});

    return(
        <div>
            <CardContext.Provider value={
                    {setModalVisible, 
                        modalVisible, 
                        setModalContent ,
                        modalContent, 
                        telaLoginVisible, 
                        setTelaLoginVisible,
                        setModalTelaPedido,
                        modalTelaPedido,
                        client,
                        setClient}
            }>
                {children}
            </CardContext.Provider>
        </div>
    )
}

export function useCardContext() {
    return useContext(CardContext)
}
