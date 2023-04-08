import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { withAuthenticatedRoute } from '../context/AuthContext';

const Dashboard = () => {
    // const router = useRouter()
    // const [expandDiv, setExpandDiv] = useState(true)
    // const [currentRoute, setCurrentRoute] = useState('')
    // // const route = '/dashboard';

    // useEffect(() => {
    //     setCurrentRoute(router.pathname)
    // }, [router])

  return (

    <div>
        Dashboard
    </div>
  )
}

export default withAuthenticatedRoute(Dashboard)
