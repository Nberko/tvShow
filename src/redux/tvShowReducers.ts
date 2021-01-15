import type { TvShowsAction, TvShows, TvShowsState, TvShowsEmptyList, TvShowEpisode, TvShowAction, TvShowError } from "../store/types/tvShowsState";
import { FETCH_ERROR_CLEAR, FETCH_SHOWS, FETCH_SHOW_BY_ID, FETCH_SHOW_ERROR, HIDE_LOADER, SHOW_LIST_IS_EMPTY, SHOW_LOADER } from "./actionTypes";

const tvShows: TvShows = {
  shows: [],
};

export const tvShowListReducer = (state = tvShows, action: TvShowsAction): TvShows => {
  switch (action.type) {
    case FETCH_SHOWS:
      return {
        ...state,
        shows: state.shows.concat(action.payload),
      };
    default:
      return state;
  }
}

const tvShow: TvShowEpisode = {
  show: null,
};

export const tvShowReducer = (state = tvShow, action: TvShowAction): TvShowEpisode => {
  switch (action.type) {
    case FETCH_SHOW_BY_ID:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return state;
  }
}

const tvShowsState: TvShowsState = {
  loading: false,
}

export const tvShowListStateReducer = (state = tvShowsState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    default:
      return state;
  }
}

const tvShowListIsEmptyState: TvShowsEmptyList = {
  isEmpty: false,
}

export const tvShowListIsEmpty = (state = tvShowListIsEmptyState, action) => {
  switch (action.type) {
    case SHOW_LIST_IS_EMPTY:
      return {...state, isEmpty: true}
    default:
      return state;
  }
}

const tvShowErrorState: TvShowError = {
  error: false,
}

export const showFetchError = (state = tvShowErrorState, action) => {
  switch (action.type) {
    case FETCH_SHOW_ERROR:
      return { ...state, error: true }
    case FETCH_ERROR_CLEAR:
      return { ...state, error: false }
    default:
      return state;
  }
}