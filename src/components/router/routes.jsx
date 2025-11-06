import { Navigate } from "react-router-dom";

import { App } from "../App";

import { RouteHandler } from "../system/RouteHandler";
import { CheckAuth } from "../system/CheckAuth";

import { Start } from "../page/Start";
import { Home } from "../page/Home";
import { Topic } from "../page/Topic";
import { Session } from "../page/Session";

import Group from "../../assets/group.svg?react";
import Art from "../../assets/art.svg?react";
import HomeIcon from "../../assets/home.svg?react";

export const services = [
  { path: "/home", element: <Home />, name: "홈", icon: <HomeIcon /> },
  { path: "/topic", element: <Topic />, name: "미술 주제", icon: <Art /> },
  { path: "/session", element: <Session />, name: "세션", icon: <Group /> },
];

export const routes = [
  {
    path: "/",
    element: <App />,
    name: "앱 레이아웃",
    icon: <HomeIcon />,
    children: [
      { index: true, element: <RouteHandler />, name: "시작" },
      { path: "/start", element: <Start />, name: "시작" },
      {
        element: <CheckAuth />,
        children: services,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
