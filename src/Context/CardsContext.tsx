import { createContext, useContext, useState } from "react";

interface CardContextTypes {
    setModalVisible: () => boolean
    modalVisible: boolean
    setModalContent: () => void
    setModalTitle: () => void
    modalContent: string
    modalTitle: string
}

interface ModalProps{
    'modalContent':{
        title: string,
        content: string,
        src: string
    }
}

const CardContext = createContext<CardContextTypes | {}>({});

export function CardContextProvider({children}: {children: JSX.Element}) {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [telaLoginVisible, setTelaLoginVisible] = useState(false);
    const [modalConfirmacao, setModalConfirmacao] = useState(false);
    const [modalContent, setModalContent] = useState({});

    return(
        <div>
            <CardContext.Provider value={
                    {setModalVisible, 
                        modalVisible, 
                        setModalContent ,
                        modalContent, 
                        telaLoginVisible, 
                        setTelaLoginVisible,
                        setModalConfirmacao,
                        modalConfirmacao}
            }>
                {children}
            </CardContext.Provider>
        </div>
    )
}

export function useCardContext() {
    return useContext(CardContext)
}
