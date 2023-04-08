import React from 'react'
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

    <div>
        Dashboard
    </div>
  )
}

export default withAuthenticatedRoute(Dashboard)
