import {  lazy } from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const HomePage = lazy(() => import("../pages/HomeComponent"));
const TradeEnginePage = lazy(() => import("../pages/TradeEngineComponent"));
const FlowPage = lazy(() => import("../pages/FlowComponent"));
const BotsPage = lazy(() => import("../pages/BotsComponent"));

const PortfolioPage = lazy(
  () => import("../pages/PortfolioComponent")
);
const AnalyticsPage = lazy(
  () => import("../pages/AnalyticsComponent")
);
const SettingsPage = lazy(() => import("../pages/SettingsComponent"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<div>wrong page <Link to={"/"}>go home</Link></div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/trade",
        element: <TradeEnginePage />,
      },
      {
        path: "/flow",
        element: <FlowPage />,
      },
      {
        path: "/bots",
        element: <BotsPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
