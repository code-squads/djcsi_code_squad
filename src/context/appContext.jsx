import { useTheme } from "next-themes"

const { useState, createContext, useEffect } = require("react")

const APP = {
    darkMode: false,
}

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(APP)
    const { systemTheme, theme, setTheme } = useTheme(); //for flowbite dark mode


    useEffect(() => {
        const darkModeLocalStorage = JSON.parse(localStorage.getItem('darkMode'))
        setState((prevState) => ({
            ...prevState,
            darkMode: darkModeLocalStorage
        }))
    }, [])

    const toggleTheme = () => {
        setState((prevState) => ({
            ...prevState,
            darkMode: !prevState.darkMode
        }))
        localStorage.setItem('darkMode', JSON.stringify(!state.darkMode))
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const providerValue = {
        state,
        toggleTheme,
    }

    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider