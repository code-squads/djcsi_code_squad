import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/loader";


const Test = () => {
  const { isLoggedIn, isProcessingLogin, profile, login, logout } = useAuth();

  function testLogin() {
    const phone = "9988776655";
    const password = "abcd";
    login(phone, password);
  }

  useEffect(() => {
    console.log("Auth status: ", isLoggedIn, profile);
  }, [profile, isLoggedIn]);

  if (isProcessingLogin) {
    return <Loader />;
  }

  return (
    <div>
      Test
      {isLoggedIn && profile ? (
        <div>
          Logged in as { profile.restaurant_name } ( GSTIN - { profile.gstin } )<br/>
          Address { profile.address } <br/>
          <br />
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <div>
          <Button onClick={testLogin}>Login</Button>
        </div>
      )}
    </div>
  );
};

export default Test;
