import { CardComponentProps } from "../../Interfaces/Interfaces";
import CardComponent from "../CardComponent";

import '../Cards/styles.scss'

export default function CardsRender({card}:{card: CardComponentProps}) {    

    return (
        <div className="cards">
            <CardComponent card={card} />
        </div>
    )
}