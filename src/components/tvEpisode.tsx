import React from "react";
import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import { clearError, fetchShowById } from "../redux/actionCreators";
import { TvShowStore } from "../store/tvShow";
import { TvShowEpisode, TvShowError } from "../store/types/tvShowsState";
import TvShow from "./tvShow";
import './style/episodePage.css';
import { Link } from "react-router-dom";

interface EpisodeProps {
  pathname: string;
  search: string;
  hash: string;
  match: any;
}

interface TvShowEpisodeProps {
  episode: TvShowEpisode;
}

interface TvShowErrorProps {
  showError: TvShowError;
}

const Episode: React.FC<EpisodeProps> = (props) => {
  const dispatch = useDispatch();

  const show: TvShowStore | null = useSelector(
    (state: TvShowEpisodeProps) => state.episode.show,
    shallowEqual,
  );

  const showWithError: boolean = useSelector(
    (state: TvShowErrorProps) => state.showError.error,
    shallowEqual,
  )
  React.useEffect(() => {
    dispatch(fetchShowById(props.match.params.id, props.match.params.season));

    return () => {
      if (showWithError) {
        dispatch(clearError());
      }
    };
  })

  return (
    <React.Fragment>
      <div>
        <Link
          to={`/`}
        >
          <span className={'backButton'} dangerouslySetInnerHTML={{ __html: `<- Go back to list` }}/>
        </Link>
      </div>
      {show && (
        <div className={'episodePage'}>
          <TvShow
            title={show.title}
            cover={show.cover}
            description={show.description}
            summary={show.summary}
            singleCard={true}
          />
        </div>
      )}
      {showWithError ? (
        <div className={'episodeError'}> Such episode doesn't exist ;( </div>
      ) : null}
    </React.Fragment>
  )
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})


export default connect(mapStateToProps)(Episode);