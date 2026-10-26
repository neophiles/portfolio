import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./components/pages/home/HomePage";
import CertificatesPage from "./components/pages/certificates/CertificatesPage";
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import MorePage from "./components/pages/more/MorePage";
import AwardsPage from "./components/pages/awards/AwardsPage";
import ContactPage from "./components/pages/contact/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { Component: HomePage, index: true },
      { path: "/home", Component: HomePage },
      { path: "/projects", Component: ProjectsPage },
      { path: "/certificates", Component: CertificatesPage },
      { path: "/awards", Component: AwardsPage },
      { path: "/contact", Component: ContactPage },
      { path: "/more", Component: MorePage },

    ]
  }
])

export default router
