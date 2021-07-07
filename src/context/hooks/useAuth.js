import { useState, useEffect } from "react";
import api from "../../services/api";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState("NURSE");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("mytoken");
    const role = localStorage.getItem("myrole");

    console.log("aki", token);
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    if (role) setRole(role);

    setLoading(false);
  }, []);

  const login = async (name, password) => {
    let msg = "";
    await api
      .post("/auth/", { name, password })
      .then((response) => {
        setAuthenticated(true);
        const token = response?.data[0];
        const role = response?.data[1];
        console.log(token);
        console.log(role);
        localStorage.setItem("myrole", role);
        localStorage.setItem("mytoken", token);
        api.defaults.headers.Authorization = `Bearer ${token}`;
      })
      .catch((error) => {
        msg = "deu ruim";
      });

    return msg;
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("myrole");
    localStorage.removeItem("mytoken");
    api.defaults.headers.Authorization = undefined;
  };

  return { authenticated, loading, login, logout, role };
};

export default useAuth;
