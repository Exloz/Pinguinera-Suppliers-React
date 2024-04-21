import { ILiteratureCopy } from '../../models/literature-copy';
import { urls } from '../../resources/url.resource';
import http from '../general/http.service';
import placeHolder from '../../../../assets/book-placeholder.png';
import { enviroment } from '../../../../environment/environment';

export const literatureListService = async (): Promise<ILiteratureCopy[]> => {
  const url = urls.allLiterature;

  const literatureResponse = await http.get(url);
  const literatureCopies = await literatureResponse.json();

  const literatureWithCovers = await Promise.all(
    literatureCopies.map(async (copy) => {
      const titleForQuery = encodeURIComponent(copy.title.replace(/\s+/g, '+'));
      const searchUrl = `${enviroment.literatureApiId}${titleForQuery}`;
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();
      const coverId = searchData?.docs[0]?.cover_i;

      if (coverId) {
        copy.coverUrl = `${enviroment.literatureApiCover}${coverId}-M.jpg`;
      } else {
        copy.coverUrl = placeHolder;
      }

      return copy;
    })
  );

  return literatureWithCovers;
};
