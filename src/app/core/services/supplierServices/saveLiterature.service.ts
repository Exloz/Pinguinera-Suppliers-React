import { enviroment } from '../../../../environment/environment';
import { ILiteratureCopy } from '../../models/literature-copy';
import { ICreateCopy } from '../../models/literature-copy-create';
import { urls } from '../../resources/url.resource';
import placeHolder from '../../../../assets/book-placeholder.png';
import http from '../general/http.service';

export const createLiteratureService = async (
  createLiterature: ICreateCopy,
  dispatch
): Promise<ILiteratureCopy> => {
  const url = urls.calculateUnit;
  const body = createLiterature;

  const response = await http.post(url, body);
  const newLiterature = await response.json();
  newLiterature.coverUrl = placeHolder;

  await fetchCoverAndDispatch(newLiterature, dispatch);

  return newLiterature;
};

async function fetchCoverAndDispatch(literature: ILiteratureCopy, dispatch) {
  const titleForQuery = encodeURIComponent(literature.title.replace(/\s+/g, '+'));
  const searchUrl = `${enviroment.literatureApiId}${titleForQuery}`;
  const searchResponse = await fetch(searchUrl);
  const searchData = await searchResponse.json();
  const coverId = searchData?.docs[0]?.cover_i;
  if (coverId) {
    literature.coverUrl = `${enviroment.literatureApiCover}${coverId}-M.jpg`;
  }

  dispatch({ type: 'UPDATE_LITERATURE', payload: literature });
}
