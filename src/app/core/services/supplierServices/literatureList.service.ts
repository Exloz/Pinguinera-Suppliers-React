import { urls } from '../../resources/url.resource';
import http from '../general/http.service';
import placeHolder from '../../../../assets/book-placeholder.png';
import { enviroment } from '../../../../environment/environment';

export const literatureListService = async (dispatch) => {
  const url = urls.allLiterature;
  const response = await http.get(url);
  const literatureCopies = await response.json();

  literatureCopies.forEach((copy) => (copy.coverUrl = placeHolder));

  fetchCoverUrls(dispatch, literatureCopies);

  return literatureCopies;
};

const fetchCoverUrls = async (dispatch, literatureCopies) => {
  const updates = literatureCopies.map(async (copy) => {
    const titleForQuery = encodeURIComponent(copy.title.replace(/\s+/g, '+'));
    const searchUrl = `${enviroment.literatureApiId}${titleForQuery}`;
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();
    const coverId = searchData?.docs[0]?.cover_i;
    if (coverId) {
      copy.coverUrl = `${enviroment.literatureApiCover}${coverId}-M.jpg`;
    }
    return copy;
  });

  const updatedCopies = await Promise.all(updates);
  dispatch({ type: 'LITERATURE_GOTTEN', payload: updatedCopies });
};

//Peticiones con reintentos exponenciales

// const fetchCoverUrls = async () => {
//   const updates = literatureCopies.map(async (copy) => {
//     const titleForQuery = encodeURIComponent(copy.title.replace(/\s+/g, '+'));
//     const searchUrl = `${enviroment.literatureApiId}${titleForQuery}`;

//     // Intenta obtener los datos con reintentos
//     const responseData = await retryAsyncOperation(async () => {
//       const searchResponse = await fetch(searchUrl);
//       if (!searchResponse.ok) {
//         throw new Error(`HTTP error! status: ${searchResponse.status}`);
//       }
//       return await searchResponse.json();
//     }, 3);  // Número de reintentos

//     if (responseData && responseData.docs.length > 0) {
//       const coverId = responseData.docs[0]?.cover_i;
//       if (coverId) {
//         copy.coverUrl = `${enviroment.literatureApiCover}${coverId}-M.jpg`;
//       }
//     } else {
//       copy.coverUrl = placeHolder;
//     }

//     return copy;
//   });

//   return Promise.all(updates);
// };

// // Función genérica para reintentar operaciones asíncronas
// async function retryAsyncOperation(operation, maxAttempts) {
//   let attempts = 0;
//   while (attempts < maxAttempts) {
//     try {
//       return await operation();
//     } catch (error) {
//       attempts++;
//       if (attempts === maxAttempts) throw error;
//       const timeout = Math.pow(2, attempts) * 100;  // Exponential back-off
//       await new Promise(resolve => setTimeout(resolve, timeout));
//     }
//   }
// }
