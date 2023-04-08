import React from 'react'
import { useAuth, withAuthenticatedRoute } from '../context/AuthContext';

const SafeRoute = () => {
  const { isLoggedIn, isProcessingLogin, profile, login, logout } = useAuth();

  return (
    <div>
      Profile:
      { profile.restaurant_name }
    </div>
  )
}

export default withAuthenticatedRoute(SafeRoute);