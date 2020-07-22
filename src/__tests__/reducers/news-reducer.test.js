import newsReducer from '../../reducers/news-reducer';
import * as c from './../../actions/ActionTypes';

describe('newsReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    news: [],
    error: null
  };

  const loadingState = {
    isLoading: false,
    news: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(newsReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        news: [],
        error: null
      }
    );
  });

  test('requesting news should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_NEWS
    };

    expect(newsReducer(defaultState, action)).toEqual({
        isLoading: true,
        news: [],
        error: null
    });
  });

  test('successfully getting news should change isLoading to false and update news', () => {
    const news = "News";
    action = {
      type: c.GET_NEWS_SUCCESS,
      news
    };

    expect(newsReducer(loadingState, action)).toEqual({
        isLoading: false,
        news: "News",
        error: null
    });
  });

  test('failing to get news should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_NEWS_FAILURE,
      error
    };

    expect(newsReducer(loadingState, action)).toEqual({
        isLoading: false,
        news: [],
        error: "An error"
    });
  });
});