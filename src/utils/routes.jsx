import { App } from "../components/App";
import { Landing } from "../components/features/landing/Landing";
import { Home } from "../components/features/home/Home";
import { Topic } from "../components/features/topic/Topic";
import { Session } from "../components/features/session/Session";

import Group from "../assets/group.svg?react";
import Art from "../assets/art.svg?react";
import HomeIcon from "../assets/home.svg?react";

export const routes = [
  {
    path: "/",
    element: <App />,
    name: "앱 레이아웃",
    icon: <HomeIcon />,
    children: [
      { path: "/start", element: <Landing />, name: "시작" },
      { path: "/home", element: <Home />, name: "홈", icon: <HomeIcon /> },
      { path: "/topic", element: <Topic />, name: "미술 주제", icon: <Art /> },
      { path: "/session", element: <Session />, name: "세션", icon: <Group /> },
    ],
  },
];
