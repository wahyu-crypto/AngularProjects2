export interface DataVispur {
  visitpurpose: VisitPurpose[],
}

export interface VisitPurpose {
  visitPurposeID?: number,
  visitPurposeName?: string,
  flagDineIn?: number,
  flagQuickService?: number,
  flagShowQueue?: number,
  flagActive?: number;
}