import { combineReducers } from 'redux';
import { showFetchError, tvShowListIsEmpty, tvShowListReducer, tvShowListStateReducer, tvShowReducer } from './tvShowReducers';
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  tv: tvShowListReducer,
  tvListLoader: tvShowListStateReducer,
  noShows: tvShowListIsEmpty,
  episode: tvShowReducer,
  showError: showFetchError,
});

export default createRootReducer;