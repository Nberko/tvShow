import React from "react";
import TvShow from "./tvShow";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import type { TvShowStore } from "../store/tvShow";
import type { TvShows, TvShowsEmptyList, TvShowsState } from "../store/types/tvShowsState";
import { fetchTvShows } from "../redux/actionCreators";
import { Link } from 'react-router-dom'
import './style/tvShows.css';

interface TvShowsProps {
  tv: TvShows;
}

interface TvShowsLoadingProps {
  tvListLoader: TvShowsState;
}

interface TvShowsIsEmptyProps {
  noShows: TvShowsEmptyList;
}

const TvShowList: React.FC = () => {
  const shows: readonly TvShowStore[] = useSelector(
    (state: TvShowsProps) => state.tv.shows,
    shallowEqual,
  );

  const loader: boolean = useSelector(
    (state: TvShowsLoadingProps) => state.tvListLoader.loading,
    shallowEqual,
  )

  const isEmpty: boolean = useSelector(
    (state: TvShowsIsEmptyProps) => state.noShows.isEmpty,
    shallowEqual,
  )
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!shows?.length && !loader) {
      dispatch(fetchTvShows());
    }
  })

  const render = (
    loader ? (<div> Loading data... </div>) :
      !loader && isEmpty ? (<div>Sorry, we haven't shows yet ;(</div>) :
      shows?.length && (
      shows.map((item) =>
        <Link
          key={`${item.title}_${item.id}`}
          to={`${item.season}/${item.id}/${item.title}`}
        >
          <TvShow
            title={item.title}
            cover={item.cover}
            description={item.description}
            summary={item.summary}
          />
        </Link>
      )
    )
  );
  
  return (
    <div className={'container'}>
      {render}
    </div>
  );
}

export default TvShowList; 