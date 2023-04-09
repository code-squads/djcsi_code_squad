import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { withAuthenticatedRoute } from '../context/AuthContext';
import GenderChart from '@/components/genderChart';
import JobRoleChart from '@/components/jobRoleChart';
import { useAuth, withAuthenticatedRoute } from '../context/AuthContext';

const Dashboard = () => {
  const { profile } = useAuth();
  console.log(profile);
    // const router = useRouter()
    // const [expandDiv, setExpandDiv] = useState(true)
    // const [currentRoute, setCurrentRoute] = useState('')
    // // const route = '/dashboard';

    // useEffect(() => {
    //     setCurrentRoute(router.pathname)
    // }, [router])

  return (

    <div className='flex'>
      <div className='flex '>
      <GenderChart></GenderChart>
        <JobRoleChart className=" "></JobRoleChart>
      </div>
        
    </div>
  )
}

export default withAuthenticatedRoute(Dashboard)
