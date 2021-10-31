import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
const Theme = {
    default: "Default",
    dim: "Dim",
    lightsOut: "Lights out"
}

const More = () => {
    const { selectedTheme, changeTheme } = useContext(ThemeContext)
    return (
        <div className="flex flex-row items-center justify-evenly h-20 w- 20 border-l-2 border-r-2 h-screen">

            {
                ["lightsOut", "dim", "default"].map((theme) => (
                    <div className="flex flex-row items-center justify-center font-bold bg-gray-100 hover:bg-gray-200 w-40 h-40 cursor-pointer">
                        <label key={theme} className="cursor-pointer">
                            <input
                                type="radio"
                                value={theme}
                                name="theme"
                                className="w-5 h-5 m-2 cursor-pointer"
                                checked={theme === selectedTheme}
                                onChange={(e) => changeTheme(e.target.value)} />
                            {Theme[theme]}
                        </label>
                    </div>
                ))
            }

        </div>
    )
}

export default More
