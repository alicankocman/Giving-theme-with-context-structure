import React, { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [themeName, setThemeName] = useState('light');

    function handleTheme() {
        setThemeName((prev) => {
            const themeInfo = prev === "light" ? "dark" : "light";
            changeTheme(themeInfo)
            document.documentElement.setAttribute("data-bs-theme", themeInfo);
            localStorage.setItem("theme", themeInfo);
            return themeInfo;
        });
    }


    function changeTheme(themeName){
        document.documentElement.setAttribute("data-bs-theme",themeName);
    }

    function getPrefferedTheme(){
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme){
            return storedTheme;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
       }

    //ilk uygulama calistiginda calisacak olan useEffect...
    useEffect(() => {
       changeTheme(getPrefferedTheme())
       setThemeName(getPrefferedTheme())

    },
    [])

    return (
        <ThemeContext.Provider value={{ themeName, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
