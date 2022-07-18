export interface SalesOrder {
    order: Order[]
}

export interface Order {
    menuID: number,
    menuShortName: string,
    price: number,
    qty?: number
}