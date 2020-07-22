import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('new reducer actions', () => {
  it('requestnews should create REQUEST_NEWS action', () => {
    expect(actions.requestNews()).toEqual({
      type: c.REQUEST_NEWS
    });
  });

  it('getNewsSuccess should create GET_NEWS_SUCCESS action', () => {
    const news = "News";
    expect(actions.getNewsSuccess(news)).toEqual({
      type: c.GET_NEWS_SUCCESS,
      news
    });
  });

  it('getNewsFailure should create GET_NEWS_FAILURE action', () => {
    const error = "An error";
    expect(actions.getNewsFailure(error)).toEqual({
      type: c.GET_NEWS_FAILURE,
      error
    });
  });
});