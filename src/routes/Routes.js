import Home from "../pages/Home";
import Galang from "../pages/Galang";
import Riwayat from "../pages/Riwayat";
import Login from "../pages/Login";
import Form from "../pages/Form";
import NotFound from "../pages/NotFound";
import Donasi from "../pages/Donasi";

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
    name: "Form",
    link: "/Galang/Form",
    element: Form,
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
];

export default pagesRoutes;
