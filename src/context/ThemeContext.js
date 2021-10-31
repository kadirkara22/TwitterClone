import React, { useEffect, useLayoutEffect, useState } from "react";


export const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
    const [selectedTheme, setSelectedTheme] = useState(null)

    useLayoutEffect(() => {
        const theme = localStorage.getItem("THEME") || "default"
        setSelectedTheme(theme)
    }, [])

    const changeTheme = (theme) => {
        setSelectedTheme(theme)
        localStorage.setItem("THEME", theme)
    }

    useEffect(() => {
        const $html = document.querySelector("html")
        $html.classList.remove("dim")
        $html.classList.remove("default")
        $html.classList.remove("lightsOut")
        $html.classList.add(selectedTheme)

    }, [selectedTheme])

    return (
        <ThemeContext.Provider value={{ selectedTheme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;