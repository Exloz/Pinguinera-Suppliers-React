export interface ILiteratures {
  [key: number]: number;
}

export interface IBudgetDetails {
  books: ILiteratures;
  novels: ILiteratures;
  initialBudget: number;
  spentBudget: number;
}
