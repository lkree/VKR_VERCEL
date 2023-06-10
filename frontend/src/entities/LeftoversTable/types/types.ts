export interface LeftoverFilling {
  nomenclature: string;
  unit: string;
  orderedCount: number;
  haveToOrder: number;
  leftoverAtEnd: number;
  vendorCode?: string;
  incoming?: number;
  consumption?: number;
  leftoverAtStart?: number;
}

export interface Leftover {
  cityName: string;
  leftovers: Array<LeftoverFilling>;
}

export type LeftoversList = Array<Leftover>;
