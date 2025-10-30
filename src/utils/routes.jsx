import { Children } from "react";
import { App } from "../components/App";
import Group from "../assets/group.svg?react";
import Art from "../assets/art.svg?react";
import Home from "../assets/home.svg?react";

export const routes = [
  {
    path: "/",
    element: <App />,
    name: "홈",
    icon: <Home />,
    children: [
      { path: "/topic", element: <App />, name: "미술 주제", icon: <Art /> },
      { path: "/session", element: <App />, name: "세션", icon: <Group /> },
    ],
  },
];
