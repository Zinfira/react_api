import * as c from './ActionTypes';

export const requestNews = () => ({
  type: c.REQUEST_NEWS
});

export const getNewsSuccess = (news) => ({
  type: c.GET_NEWS_SUCCESS,
  news
});

export const getNewsFailure = (error) => ({
  type: c.GET_NEWS_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestNews);
    return fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getNewsSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getNewsFailure(error));
    });
  }
}