import { ILiteratureQuantityList } from '../../models/literature-quantity';
import { IQuoteDetails } from '../../models/quote-result';
import { urls } from '../../resources/url.resource';
import httpService from '../general/http.service';

export const quoteService = (
  literatureQuantity: ILiteratureQuantityList
): Promise<IQuoteDetails> => {
  const url = urls.calculateQuote;
  const body = literatureQuantity;

  const response = httpService
    .post(url, body)
    .then((response) => response.json())
    .then((response) => response);

  return response;
};
