import { FETCH_ERROR_CLEAR, FETCH_SHOWS, FETCH_SHOW_BY_ID, FETCH_SHOW_ERROR, HIDE_LOADER, SHOW_LIST_IS_EMPTY, SHOW_LOADER } from "./actionTypes"
import axios from 'axios';
import { TvShowStore } from "../store/tvShow";

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  }
}

export const noTvShows = () => {
  return {
    type: SHOW_LIST_IS_EMPTY,
  }
}

export const fetchTvShows = () => {
  return async (dispatch) => {
    dispatch(showLoader());

    try {
      const response = await axios.get('http://api.tvmaze.com/shows/1/episodes');

      if (!response?.data?.length) {
        dispatch(noTvShows());
      }
  
      const showsList: TvShowStore[] = response?.data?.map((item) => new TvShowStore({
        id: item.id,
        title: item.name,
        description: item.description ?? null,
        cover: item.image.medium,
        summary: item.summary,
        season: item.season,
      }));
  
      dispatch({ type: FETCH_SHOWS, payload: showsList });
    } catch (err) {
      dispatch(fetchError());
    } finally {
      dispatch(hideLoader());
    }
  }
};

export const fetchShowById = (id: number, season: number) => {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
    const response = await axios.get(`http://api.tvmaze.com/shows/1/episodebynumber?season=${season}&number=${id}`);

    const show: TvShowStore = response?.data && new TvShowStore({
      id: response?.data.id,
      title: response?.data.name,
      description: response?.data.description ?? null,
      cover: response?.data.image.medium,
      summary: response?.data.summary,
      season: response?.data.season,
    });
  
      dispatch({ type: FETCH_SHOW_BY_ID, payload: show });
    } catch (err) {
      dispatch(fetchError());
    } finally {
      dispatch(hideLoader());
    }
  }
};

export const fetchError = () => {
  return {
    type: FETCH_SHOW_ERROR,
  }
}

export const clearError = () => {
  return {
    type: FETCH_ERROR_CLEAR,
  }
}
