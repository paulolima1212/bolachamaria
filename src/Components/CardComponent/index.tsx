import ItemCard from "../ItemCard"
import { v4 as uuid } from "uuid";

import '../CardComponent/styles.scss'
import { CardComponentProps } from "../../Interfaces/Interfaces";

interface ContextProps{
    setModalVisible: (boolean: boolean) => {};
    setModalContent: (string: string) => string;
    setModalTitle: (string: string) => string;
}

export default function CardComponent({card}: {card:CardComponentProps}) {

    function handleChangeContainer(){
        const face2 = document.querySelector('.face.face2')
        face2?.classList.add('active')
        const faceAdd = document.querySelector('.face.face2.active')
        document.querySelector('.container')?.appendChild(faceAdd)
    }

    function handleToggleFace(){
        const face2 = document.querySelector('.face.face2.active')
        face2?.classList.remove('active')
        const container = document.querySelector('.container')
        container?.removeChild(face2)
    }

    return (
        <div className="card">
            <div className="face face1" data-text={card.alt} onClick={handleChangeContainer} >
                <img src={card.src} alt={card.alt}  />
            </div>
            <div className="face face2">
                <div className="toggle-face" onClick={handleToggleFace}></div>
                <div className="card-title">
                    <h3 >{card.title}</h3>
                </div>
                <div className="itemcard">
                    {card.items?.map((item: any) => {
                        return <ItemCard 
                                    name={item.name}
                                    src={item.src} 
                                    price={item.price} 
                                    alt={item.name} 
                                    content={item.content} 
                                    key={uuid()} 
                                />
                    })}
                </div>
            </div>
        </div>
    )
}