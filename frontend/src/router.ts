import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./components/pages/home/HomePage";
import CredentialsPage from "./components/pages/credentials/CredentialsPage";
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import ContactPage from "./components/pages/contact/ContactPage";
import AboutPage from "./components/pages/about/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { Component: HomePage, index: true },
      { path: "/home", Component: HomePage },
      { path: "/credentials", Component: CredentialsPage },
      { path: "/projects", Component: ProjectsPage },
      { path: "/about", Component: AboutPage },
      { path: "/contact", Component: ContactPage },
    ]
  }
])

export default router
