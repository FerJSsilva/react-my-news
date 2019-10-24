import * as dataSource from '../../datasource/requests';
import { startLoading, finishLoading } from './communication';
import { SERVICE_HTTP_ADDRESS, APP_NEWS_API_KEY } from '../../utils/constants';

export const UPDATE_NEWS = 'posts/UPDATE_NEWS';
export const UPDATE_SOURCES = 'posts/UPDATE_sOURCES';

export const updateNews = (news) => ({
  type: UPDATE_NEWS,
  payload: news,
});

export function fetchNews() {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await dataSource.get(`${SERVICE_HTTP_ADDRESS}/top-headlines?country=br&apiKey=${APP_NEWS_API_KEY}`);
      dispatch(finishLoading());
      dispatch(updateNews(response.articles));
    } catch (exception) {
      console.error(`actions/fetchNews -> ${exception}`);
      dispatch(finishLoading());
    }
  };
}

export function fetchNewsBySource(sourceId) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await dataSource.get(`${SERVICE_HTTP_ADDRESS}/everything?sources=${sourceId}&language=br&apiKey=${APP_NEWS_API_KEY}`);
      dispatch(finishLoading());
      dispatch(updateNews(response.articles));
    } catch (exception) {
      console.error(`actions/fetchNews -> ${exception}`);
      dispatch(finishLoading());
    }
  };
}
