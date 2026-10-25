import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./components/pages/home/HomePage";
import CertificatesPage from "./components/pages/certificates/CertificatesPage";
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import MorePage from "./components/pages/more/MorePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { Component: HomePage, index: true },
      { path: "/home", Component: HomePage },
      { path: "/projects", Component: ProjectsPage },
      { path: "/certificates", Component: CertificatesPage },
      { path: "/more", Component: MorePage },

    ]
  }
])

export default router
