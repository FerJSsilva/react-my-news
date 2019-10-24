import * as actionType from '../actions/news';

const INITIAL_STATE = {
  ids: [],
  content: {},
};

/**
* @description Create a normalized Object from an array
* @param {array} list A simple array which will be normalized
* @returns {Object} Normalized object and a list of ids as reference
* @see {@link https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape}
*/

function normalize(list) {
  const ids = [];
  const content = {};
  list.forEach((item, index) => {
    ids.push(index);
    content[index] = item;
  });

  return {
    ids,
    content,
  };
}

export default function news(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionType.UPDATE_NEWS: {
      return normalize(action.payload);
    }

    default:
      return state;
  }
}
