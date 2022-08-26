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

export interface CardComponentProps{
    title: string
    src: string
    alt: string
    items:[
        {
            name: string
            src: string
            price: string
        }
    ]
}