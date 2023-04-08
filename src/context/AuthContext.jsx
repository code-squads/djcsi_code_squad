import React, { createContext, useContext, useState, useEffect } from "react";

import { SERVER_URL } from "../constants/config";
import { ROUTES } from "../constants/routes";
import Loader from "../components/loader";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProcessingLogin, setIsProcessingLogin] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Check if user has a valid JWT token
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token");
      setIsProcessingLogin(false);
      return;
    }

    console.log("Verify token", {
      token,
    });
    // Make an API call to verify the token and get the user profile
    fetch(`${SERVER_URL}/api/auth/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Verified token:", data);
          setIsLoggedIn(true);
          setProfile(data.profile);
        } else {
          console.log("Invalid token:", data);
          localStorage.removeItem("token");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setIsProcessingLogin(false));
  }, []);

  const login = (phone, password) => {
    setIsProcessingLogin(true);
    // Make an API call to login and get a JWT token
    fetch(`${SERVER_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Logged in !");
          localStorage.setItem("token", data.token);
          setIsProcessingLogin(false);
          setIsLoggedIn(true);
          setProfile(data.profile);
        }
      })
      .catch((error) => {
        console.error(error)
        setIsProcessingLogin(false);
      });
  };

  const logout = () => {
    console.log("Logged out !");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isProcessingLogin,
        profile,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


const AuthenticatedRoute = (props) => {
  const { isLoggedIn, isProcessingLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(isProcessingLogin)
      return;
    if(!isLoggedIn)
      router.push(ROUTES.LOGIN);
  }, [isLoggedIn, isProcessingLogin])
  
  if(isProcessingLogin || !isLoggedIn){
    return <Loader />
  }

  return (
    <>
      { props.children }
    </>
  )
}

export function withAuthenticatedRoute(WrappedComponent){
  const HOC = (props) => (
    <AuthenticatedRoute>
      <WrappedComponent {...props} />
    </AuthenticatedRoute>
  )
  return HOC;
}