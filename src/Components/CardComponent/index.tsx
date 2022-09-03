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

    function handleChangeContainer(cardFace: string){
        const face2 = document.getElementById(card.alt)
        face2?.classList.add('active')
        const faceAdd = document.getElementById(card.alt)
        document.querySelector('.container')?.appendChild(faceAdd)
    }

    function handleToggleFace(cardFace: string){
        const face2 = document.getElementById(card.alt)
        face2?.classList.remove('active')
        const container = document.querySelector('.container')
        face2?.removeChild
    }

    return (
        <div className="card">
            <div className="face face1" data-text={card.alt} onClick={() => handleChangeContainer(card.alt)} >
                <img src={card.src} alt={card.alt}  />
            </div>
            <div className="face face2" id={card.alt}>
                <div className="toggle-face" onClick={() => handleToggleFace(card.alt)}></div>
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