import { combineReducers } from 'redux';

import communication from './communication';
import news from './news';
import sources from './sources';

const appReducer = combineReducers({
  communication,
  news,
  sources,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
