import HomePage from "./pages/home";

export type RouteType = {
  title: string;
  path: string;
  component: React.ReactNode;
  name?: string;
  isMenuHidden?: boolean;
  isPrivate?: boolean;
};

const router: RouteType[] = [
  { name: "home", path: "/", component: <HomePage />, title: "Home" },
];

export default router;
