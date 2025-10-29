import { Children } from "react";
import { App } from "../components/App";

export const routes = [
  {
    path: "/",
    element: <App />,
    name: "홈",
    children: [
      { path: "/topic", element: <App />, name: "미술 주제" },
      { path: "/session", element: <App />, name: "세션" },
    ],
  },
];
