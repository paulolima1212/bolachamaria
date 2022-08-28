export interface CardProps{
    src: string
    alt: string
    title: string
    content: {
        title: string,
        src: string,
        description: string,
        alt:string,
        price: string
    }
}

interface items {
    name: string
    src: string
    price: string
    content: string
}

export interface CardComponentProps{
    title: string
    src: string
    alt: string
    subTitle?: string,
    items: items[]
}