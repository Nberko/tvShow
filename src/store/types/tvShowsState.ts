import type { TvShowStore } from "../tvShow";

export interface TvShows {
  shows: TvShowStore[];
}

export interface TvShowEpisode {
  show: TvShowStore | null;
}

export interface TvShowsState {
  loading: boolean;
}

export interface TvShowsEmptyList {
  isEmpty: boolean;
}

export interface TvShowError {
  error: boolean;
}

export type TvShowsAction = {
  type: string;
  payload: TvShowStore[];
}

export type TvShowAction = {
  type: string;
  payload: TvShowStore;
}