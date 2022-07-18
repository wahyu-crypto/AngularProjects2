export interface DataMenu {
    menu: Menu[];
}

export interface MenuEditData {
    salesMenu: Menu[];
}

export interface Menu {
    menuID: number;
    menuShortName: string;
    price: number;
}