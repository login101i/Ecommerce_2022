import React from "react";

import { DirectoryHOC } from "../../components/directory/directory.component";

import "./homepage.styles.scss";

export const HomePage = () => (
  <div className="homepage">
    <DirectoryHOC />
  </div>
);
