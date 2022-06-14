import React from "react";
import { Outlet } from "react-router-dom";

const CharacterPageLayout = () => {
  return (
    <>
      <div> Only Charater Page Header</div>
      <div>
        Body
        <Outlet />
      </div>
      <div>Only Charater Page Footer</div>
    </>
  );
};

export default CharacterPageLayout;
