import { AppContext } from '@/context/appContext'
import { useContext, useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
const Loader = () => {
    const appContext = useContext(AppContext)
    const [darkMode, setDarkMode] = useState(appContext.state.darkMode)

    useEffect(() => {
        setDarkMode(appContext.state.darkMode)
    }, [appContext.state.darkMode])
    
    return (
        <div className={`h-[calc(100vh-304px)] w-full flex flex-col justify-center items-center box-border font-inter ${darkMode && "text-white bg-dark2"}`}>
            <ScaleLoader color="#3670FF"/>
            <div className="mt-[20px]">Loading...</div>
        </div>
    )
}

export default Loader