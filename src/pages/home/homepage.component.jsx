import React from "react";

import { DirectoryHOC } from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

export const HomePage = () => (
  <HomePageContainer>
    <DirectoryHOC />
  </HomePageContainer>
);
