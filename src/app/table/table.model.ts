export interface TableSection {
    tableSectionID: number;
    tableSectionName: string;
    tables?: Table[];
}

export interface Table {
    tableID?: number;
    tableTypeID?: number;
    tableName?: string;
    posX?: any;
    posY?: any;
    widthRes?: number;
    heightRes?: number;
}