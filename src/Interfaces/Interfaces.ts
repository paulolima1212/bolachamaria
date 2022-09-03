export interface CardProps{
    src: string
    alt: string
    title: string
    content: {
        title: string,
        src: string,
        description: string,
        alt:string,
        price: number
    }
}

export interface items {
    name: string
    src: string
    price: number
    content?: string
    qtd?: number
    id?:string
}

export interface CardComponentProps{
    title: string
    src: string
    alt: string
    subTitle?: string,
    items: items[]
}

export interface ClientProps{
    client: string,
    table: string,
    qtd: number,
    items: items[] 
}