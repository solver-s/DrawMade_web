import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { RouteHandler } from "../system/RouteHandler";
import { CheckAuth } from "../system/CheckAuth";

import { App } from "../App";
import { Start } from "../page/Start";
import { Home } from "../page/Home/Home";
import { Topic, CreateTopic, CurrentTopic, ManageTopic } from "../page/Topic";
import { Session } from "../page/Session";

import { HomeIcon, TopicIcon, SessionIcon } from "../../assets/IconList";

export const topicItems = [
  { path: "/topic/create", element: <CreateTopic />, name: "새 주제" },
  {
    path: "/topic/current",
    element: <CurrentTopic />,
    name: "현재 주제",
  },
  {
    path: "/topic/manage",
    element: <ManageTopic />,
    name: "주제 관리",
  },
];

export const services = [
  { path: "/home", element: <Home />, name: "홈", icon: <HomeIcon /> },
  {
    path: "/topic",
    element: <Topic />,
    name: "미술 주제",
    icon: <TopicIcon />,
    children: [{ index: true, element: <Navigate to="create" replace /> }, ...topicItems],
  },
  { path: "/session", element: <Session />, name: "세션", icon: <SessionIcon /> },
];

const routes = [
  {
    path: "/",
    element: <App />,
    name: "앱 레이아웃",
    icon: <HomeIcon />,
    children: [
      { index: true, element: <RouteHandler />, name: "인증" },
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

export const AppRouter = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
