import React, { Profiler } from "react";

import { DirectoryHOC } from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Profiler
        id="directory"
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration
          });
        }}
      >
        <DirectoryHOC />
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;
