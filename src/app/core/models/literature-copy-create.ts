import { LiteratureType } from './literature-type-enum';

export interface ICreateCopy {
  title: string;
  price: number;
  type: LiteratureType;
}
