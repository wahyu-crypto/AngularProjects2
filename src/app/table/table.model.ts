export interface DataTable {
    table: Table[];
}

export interface Table {
    tableID?: number;
    tableTypeID?: number;
    tableName?: string;
    posX?: any;
    posY?: any;
    widthRes?: number;
    heightRes?: number;
    stationID?: number;
}