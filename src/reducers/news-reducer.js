import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  news: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_NEWS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_NEWS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        news: action.news
      });
    case c.GET_NEWS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};