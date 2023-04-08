import { Button } from "flowbite-react";
import axios from 'axios';
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/loader";
import { batch2 } from "../constants/testPeople";
import { SERVER_URL } from "../constants/config";


const Test = () => {
  const { isLoggedIn, isProcessingLogin, profile, login, logout } = useAuth();

  function testLogin() {
    const phone = "9988776655";
    const password = "abcd";
    login(phone, password);
  }

  async function setup(){
    for(const person of batch2){
      const params = {
        first_name: person.first_name,
        middle_name: person.middle_name,
        last_name: person.last_name,
        dob: person.dob,
        gender: person.gender,
        email: person.email,
        phone_number: person.phone_number,
        aadhar_number: person.aadhar_number,
        address: person.address,
        password: "abcd",
      }
      if(person.verified)
        params.verified = person.verified;
      if(person.current_employer)
        params.current_employer = person.current_employer;
      if(person.current_role)
        params.current_role = person.current_role;
      if(person.recommends)
        params.recommends = person.recommends;
      if(person.reports)
        params.reports = person.reports;
      if(person.past_employers)
        params.past_employers = person.past_employers;
      console.log("Create person with params", params);
      axios
        .post(`${SERVER_URL}/api/newPerson`, params)
        .then(res => console.log(`Created person`, res.data))
        .catch(err => console.error(err));
    }
    
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
      <Button onClick={setup}>
        Setup
      </Button>
    </div>
  );
};

export default Test;
