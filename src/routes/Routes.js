import Home from "../pages/Home";
import Galang from "../pages/Galang";
import Riwayat from "../pages/Riwayat";
import Login from "../pages/Login";
import NewProject from "../pages/NewProject";
import NotFound from "../pages/NotFound";
import Donasi from "../pages/Donasi";
import Project from "../pages/Project";
import ThankYou from "../pages/ThankYou";

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
    name: "Riwayat",
    link: "/Riwayat",
    element: Riwayat,
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
    name: "Login",
    link: "Riwayat/Login",
    element: Login,
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
    name: "Project",
    link: "/Project/:id",
    element: Project,
  },
  {
    name: "ThankYou",
    link: "/ThankYou",
    element: ThankYou,
  },
];

export default pagesRoutes;
