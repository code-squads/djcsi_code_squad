import TagList from "@/components/TagList"
import Loader from "@/components/loader"
import { AppContext } from "@/context/appContext"
import { useContext, useEffect, useState } from "react"

const Landing = () => {
    const [isLoading, setIsLoading] = useState(true)
    const appContext = useContext(AppContext)
    const [darkMode, setDarkMode] = useState(appContext.state.darkMode)

    useEffect(() => {
        setDarkMode(appContext.state.darkMode)
    }, [appContext.state.darkMode])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    })

    // if (isLoading) {
    //     return (
    //         <Loader/>
    //     )
    // }

    return (
        <div className={`w-full h-[calc(100vh-60px)] flex justify-center items-center ${darkMode && "text-white bg-dark2"}`}>
            <TagList />
        </div>
    )
}

export default Landing

//star
{/* <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
</svg> */}

//background lines
// <img className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
