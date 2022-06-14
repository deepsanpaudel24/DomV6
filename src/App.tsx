import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet, useRoutes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CharacterPage from "./components/pages/CharacterPage";
import CharactersListPage from "./components/pages/CharactersListPage";
import CharacterPageLayout from "./components/layouts/CharacterPageLayout";
import { UsersListPage } from "./components/pages/UsersPageListPage";
import UserPage from "./components/pages/UserPage";

function App() {
  // WITHOUT USING USEROUTES HOOKS

  // return (
  //   <Routes>
  //     <Route path="/" element={<HomePage />} />
  //     {/* With layout  */}
  //     <Route path="characters" element={<CharacterPageLayout />}>
  //       <Route index element={<CharactersListPage />} />
  //       <Route path=":cid" element={<CharacterPage />} />
  //     </Route>
  //     {/* Without  layout  */}
  //     <Route path="users" element={<Outlet />}>
  //       <Route index element={<UsersListPage />} />
  //       <Route path=":user" element={<UserPage />} />
  //     </Route>
  //   </Routes>
  // );

  // WITH USING USEROUTES HOOKS

  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    {
      path: "characters",
      element: <CharacterPageLayout />,
      children: [
        { index: true, element: <CharactersListPage /> },
        { path: ":cid", element: <CharacterPage /> },
      ],
    },
    {
      path: "users",
      element: <Outlet />,
      children: [
        { index: true, element: <UsersListPage /> },
        { path: ":users", element: <UserPage /> },
      ],
    },
  ]);

  return element;
}

export default App;
