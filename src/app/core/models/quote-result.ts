export interface ILiteratureCopy {
  title: string;
  basePrice: number;
  grossPrice: number;
  finalPrice: number;
  overPricingMultiplier: number;
}

export interface IQuoteDetails {
  literatureCopies: ILiteratureCopy[];
  customerSeniority: number;
  totalPrice: number;
  seniorityDiscount: number;
  wholesaleDiscount: number;
  retailIncrease: number;
}
