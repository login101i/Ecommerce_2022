import React from "react";

import { DirectoryHOC } from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
 
  return (
    <HomePageContainer>
      <DirectoryHOC />
    </HomePageContainer>
  );
};

export default HomePage;
