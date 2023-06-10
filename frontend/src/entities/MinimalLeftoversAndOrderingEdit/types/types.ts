export interface Product {
  nomenclature: string;
  minimalLeftover: number;
  orderingCount: number;
}

export interface MinimalLeftovers {
  cityName: string;
  products: Array<Product>;
}

export type MinimalLeftoversList = Array<MinimalLeftovers>;
