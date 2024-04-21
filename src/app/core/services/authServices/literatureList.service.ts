import { ILiteratureCopy } from '../../models/literature-copy';
import { urls } from '../../resources/url.resource';
import http from '../general/http.service';

export const literatureListService = (): Promise<ILiteratureCopy[]> => {
  const url = urls.allLiterature;
  console.log('literature service');

  return http
    .get(url)
    .then((response) => response.json())
    .then((response) => response);
};
