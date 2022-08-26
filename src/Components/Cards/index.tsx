import CardComponent from "../CardComponent";

import '../Cards/styles.scss'

export default function CardsRender({card}: any) {    

    return (
        <div className="cards">
            <CardComponent card={card} />
        </div>
    )
}