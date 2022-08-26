import { CardComponentProps } from "../Interfaces/Interfaces"
import { cafeteria } from "../temp/cafeteria.json";
import { aperitivos } from "../temp/aperitivos.json";
import { cafe } from "../temp/cafe.json";
import { gelados } from "../temp/gelados.json";

export const card1:CardComponentProps = {
    
    title: 'CAFETERIA',
    src: 'https://ik.imagekit.io/plima1212/Bolacha_Maria/Cards/Cafeteria/cafe_zP8ixWYil.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661522183240',
    alt: 'CAFETERIA',
    items: cafeteria
    
}

export const card2:CardComponentProps = {

    title: 'BEBIDAS',
    src: 'https://ik.imagekit.io/plima1212/Bolacha_Maria/Cards/sucos_1y4cpkimr.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661452526464',
    alt: 'BEBIDAS',
    items: aperitivos
    
}

export const card3:CardComponentProps = {

    title: 'PASTELARIA',
    src: 'https://ik.imagekit.io/plima1212/Bolacha_Maria/Cards/pastelaria_BXELYIJ-J.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661457593709',
    alt: 'PASTELARIA',
    items: cafe
    
}

export const card4:CardComponentProps = {

    title: 'TORRADAS E TOSTAS',
    src: 'https://ik.imagekit.io/plima1212/Bolacha_Maria/Cards/tostamista_P_GWVbOYV.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661453775655&tr=w-1080%2Ch-1920%2Cfo-auto',
    alt: 'TORRADAS E TOSTAS',
    items: gelados
    
}