import * as dataSource from '../../datasource/requests';
import { startLoading, finishLoading } from './communication';
import { SERVICE_HTTP_ADDRESS, APP_NEWS_API_KEY } from '../../utils/constants';

export const UPDATE_SOURCES = 'posts/UPDATE_SOURCES';

const GET_SOURCES_URL = `${SERVICE_HTTP_ADDRESS}/sources?country=br&apiKey=${APP_NEWS_API_KEY}`;

export const updateSources = (sources) => ({
  type: UPDATE_SOURCES,
  payload: sources,
});

export function fetchSources() {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await dataSource.get(GET_SOURCES_URL);
      dispatch(finishLoading());
      dispatch(updateSources(response.sources));
    } catch (exception) {
      console.error(`actions/fetchSources -> ${exception}`);
      dispatch(finishLoading());
    }
  };
}
