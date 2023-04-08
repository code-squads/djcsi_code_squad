import React, { createContext, useContext, useState, useEffect } from "react";

import { SERVER_URL } from "../constants/config";
import { ROUTES } from "../constants/routes";
import Loader from "../components/loader";
import { useRouter } from "next/router";
import { resolve } from "styled-jsx/css";
import { toast } from "react-toastify";
import { ScaleLoader } from "react-spinners";

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
    return new Promise((resolve, reject) => {
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
          console.log(data);
          if (data.success) {
            console.log("Logged in !");
            localStorage.setItem("token", data.token);
            toast.success("Logged in !");
            setIsProcessingLogin(false);
            setIsLoggedIn(true);
            setProfile(data.profile);
            resolve(data.profile);
          } else {
            toast.error("Invalid credentials !");
            setIsProcessingLogin(false);
            setIsLoggedIn(false);
            reject(false);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error("Some error logging you in !");
          setIsProcessingLogin(false);
          reject(error);
        });
    });
  };

  const signup = (
    restaurant_name,
    address,
    phone,
    gstin,
    password,
  ) => {
    setIsProcessingLogin(true);
    return new Promise((resolve, reject) => {
      // Make an API call to login and get a JWT token
      fetch(`${SERVER_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ restaurant_name, address, phone, gstin, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            console.log("Signed up !");
            localStorage.setItem("token", data.token);
            toast.success("Signed up !");
            setIsProcessingLogin(false);
            setIsLoggedIn(true);
            setProfile(data.profile);
            resolve(data.profile);
          } else {
            toast.error("Invalid fields !");
            setIsProcessingLogin(false);
            setIsLoggedIn(false);
            reject(false);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error("Some error logging you in !");
          setIsProcessingLogin(false);
          reject(error);
        });
    });
  }

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
        signup,
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
    if (isProcessingLogin) return;
    if (!isLoggedIn) router.push(ROUTES.LOGIN);
  }, [isLoggedIn, isProcessingLogin]);

  if (isProcessingLogin || !isLoggedIn) {
    // return <Loader />;
    return <ScaleLoader className="m-auto" color="#3670FF"/>
  }
  return <>{props.children}</>;
};
const OnlyUnAuthenticatedRoute = (props) => {
  const { isLoggedIn, isProcessingLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isProcessingLogin) return;
    if (isLoggedIn) router.push(ROUTES.DASHBOARD);
  }, [isLoggedIn, isProcessingLogin]);

  if (isProcessingLogin || isLoggedIn) {
    // return <Loader />;
    return <ScaleLoader className="m-auto" color="#3670FF"/>
  }
  return <>{props.children}</>;
};

export function withAuthenticatedRoute(WrappedComponent) {
  const HOC = (props) => (
    <AuthenticatedRoute>
      <WrappedComponent {...props} />
    </AuthenticatedRoute>
  );
  return HOC;
}

export function withoutAuthenticatedRoute(WrappedComponent) {
  const HOC = (props) => (
    <OnlyUnAuthenticatedRoute>
      <WrappedComponent {...props} />
    </OnlyUnAuthenticatedRoute>
  );
  return HOC;
}
