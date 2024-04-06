import { Link, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomeComponent";
import TradeEnginePage from "../pages/TradeEngineComponent";
import FlowPage from "../pages/FlowComponent";
import BotsPage from "../pages/BotsComponent";
import PortfolioPage from "../pages/PortfolioComponent";
import AnalyticsPage from "../pages/AnalyticsComponent";
import SettingsPage from "../pages/SettingsComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>wrong page <Link to={"/"}>go home</Link></div>,
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
