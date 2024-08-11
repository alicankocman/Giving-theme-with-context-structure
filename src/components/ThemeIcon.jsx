import React, { useContext } from 'react';
import { LightThemeIcon, darkThemeIcon } from './Icon.jsx';
import { ThemeContext } from '../context/ContextTheme'; 

export default function ThemeIcon(props) {
    const { themeName, handleTheme } = useContext(ThemeContext);
    console.log(themeName); 

    return (
        <>
            {themeName === "light" ? (
                <button onClick={handleTheme} className="btn">
                    {LightThemeIcon} Light
                </button>
            ) : (
                <button onClick={handleTheme} className="btn">
                    {darkThemeIcon} Dark
                </button>
            )}
        </>
    );
}
