import React from "react";
import './style/tvShow.css';

interface TvShowProps {
  title: string;
  description: string;
  cover: string;
  summary: string;
  singleCard?: boolean;
}

export const TvShow: React.FC<TvShowProps> = (props) => {
  const { title, description, cover, summary, singleCard } = props;
  
  return (
    <div className={`${!singleCard && 'showCard'}`}>
      <img src={cover} alt={title}/>
      <h3>{title}</h3>
      {description && <h4>{description}</h4>}
      <div dangerouslySetInnerHTML={ {__html: summary} } />
    </div>
  );
}



export default TvShow;