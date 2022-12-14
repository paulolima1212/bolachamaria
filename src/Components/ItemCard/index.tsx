import { useCardContext } from "../../Context/CardsContext"

import '../ItemCard/styles.scss'

interface ItemCardProps {
    src: string
    alt: string
    name: string
    price: string
    content: string
    id?:string
}

export default function ItemCard({src, name, price, alt, content, id}: ItemCardProps) {

    const {setModalVisible, setModalContent}:any = useCardContext()

    function handleChangeModal(){
        window.scrollTo(0,0)
        setModalVisible(true)
        setModalContent({
            name: name,
            content: content,
            src: src,
            price: price
        })
    }
    return (
        <div id={id} className="drink-face2">
            <img src={src} alt={alt} />
            <span className="name-item" onClick={() => handleChangeModal()}>{name}</span>
            <span className="price-item">{price}€</span>
        </div>
    )
}