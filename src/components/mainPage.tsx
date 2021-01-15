import React from "react";
import TvShowList from "./tvShows";
import './style/mainPage.css';

const MainPage: React.FC = () => {
  return (
    <div>
      <header className="pageTitle">
        TV show "Powerpuff Girls" 
      </header>

      <TvShowList />
    </div>
  );
};

export default MainPage;
