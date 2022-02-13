class Product {
    
    public id: number
    public title: string
    public price: number

    constructor(id: number, title: string, price: number) {
        this.id = id
        this.title = title
        this.price = price
    }
}

export {Product}