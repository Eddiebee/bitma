import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // we check if there's a user in localStorage
  useEffect(() => {
    // we redirect to the last sign in
    if (Object.values(localStorage).length !== 0 && location.pathname === "/") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  return <div>Home</div>;
};
