import { AbstractTvShow } from "../abstraction/tv-show-episode";

export interface TvShowStoreArgs {
  id: number;
  title: string;
  summary: string;
  cover: string;
  description: string;
  season: number;
}

export class TvShowStore implements AbstractTvShow {
  constructor(args: TvShowStoreArgs) {
    this.id = args.id;
    this.season = args.season;
    this.title = args.title;
    this.summary = args.summary;
    this.cover = args.cover;
    this.description = args.description;
  }

  readonly id: number;
  readonly season: number;
  readonly title: string;
  readonly summary: string;
  readonly cover: string;
  readonly description: string;
}