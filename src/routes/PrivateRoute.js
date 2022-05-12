import { Outlet } from "react-router-dom";
import { Auth } from "../utils/Auth";
import NotFound from "../pages/NotFound";

export default function PrivateRoute() {
  if (Auth.isAuthenticated()) return <Outlet />;
  return <NotFound />;
}
