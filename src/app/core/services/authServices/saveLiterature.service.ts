import { ILiteratureCopy } from '../../models/literature-copy';
import { ICreateCopy } from '../../models/literature-copy-create';
import { urls } from '../../resources/url.resource';
import http from '../general/http.service';

export const createBookService = (createLiterature: ICreateCopy): Promise<ILiteratureCopy> => {
  const url = urls.calculateUnit;
  const body = createLiterature;

  return http
    .post(url, body)
    .then((response) => response.json())
    .then((response) => response);
};
