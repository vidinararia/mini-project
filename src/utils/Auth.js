import Cookies from "js-cookie";

export const Auth = {
  setLogin: (data) => {
    Cookies.set("loginId", data.id);
  },
  isAuthenticated: () => {
    const loginId = Cookies.get("loginId");
    if (loginId) {
      return true;
    }
    return false;
  },
  getUserId: () => {
    return Cookies.get("loginId");
  },
  logout: (navigate) => {
    Cookies.remove("loginId");
    navigate("/");
  },
};
