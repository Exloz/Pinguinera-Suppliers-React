import { LiteratureType } from './literature-type-enum';

export interface ILiteratureCopy {
  literatureCopyId: number;
  title: string;
  type: LiteratureType;
  basePrice: number;
  grossPrice: number;
}
