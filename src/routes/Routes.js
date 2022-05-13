import Home from "../pages/Home";
import Galang from "../pages/Galang";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NewProject from "../pages/NewProject";
import NotFound from "../pages/NotFound";
import Donasi from "../pages/Donasi";
import ThankYou from "../pages/ThankYou";
import Project from "../pages/Project";

const pagesRoutes = [
  {
    name: "Home",
    link: "/",
    element: Home,
  },
  {
    name: "Galang",
    link: "/Galang",
    element: Galang,
  },
  {
    name: "Login",
    link: "/Login",
    element: Login,
  },
  {
    name: "Login",
    link: "Galang/Login",
    element: Login,
  },
  {
    name: "SignUp",
    link: "/SignUp",
    element: SignUp,
  },
  {
    name: "SignUp",
    link: "Galang/SignUp",
    element: SignUp,
  },
  {
    name: "NewProject",
    link: "/Galang/NewProject",
    element: NewProject,
  },
  {
    name: "NotFound",
    link: "*",
    element: NotFound,
  },
  {
    name: "Donasi",
    link: "/Donasi",
    element: Donasi,
  },
  {
    name: "ThankYou",
    link: "/ThankYou",
    element: ThankYou,
  },
  {
    name: "Project",
    link: "/project/:id",
    element: Project,
  },
];

export default pagesRoutes;
