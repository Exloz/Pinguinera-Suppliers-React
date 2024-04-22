export interface ILiteratureCopyId {
  copyId: number;
}

export interface IBudgetOverview {
  literatureCopies: ILiteratureCopyId[];
  budget: number;
}
