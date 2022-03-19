import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { Navigation } from './navigation/navigation'
import { Footer } from './footer/footer'

import favicon from '../assets/favicon.webp'
import '../styles.css'
import '../light-theme.css'

export const Layout = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const setLightTheme = () => {
        setTheme('light');
        localStorage.setItem('theme', 'light')
        document.body.style.backgroundColor = '#fff'
    }

    const setDarkTheme = () => {
        setTheme('dark');
        localStorage.setItem('theme', 'dark')
        document.body.style.backgroundColor = '#19101F'
    }

    // Rotates theme on button press
    const onUpdateTheme = (theme) => {
        console.log("Theme updating from", theme)
        if (window) {
            window.gtag("event", "click", { "theme": theme })
        }
        switch (theme) {
            case 'light':
                setDarkTheme()
                break
            case 'dark':
                setLightTheme()
                break
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        switch (savedTheme ? savedTheme : theme) {
            case 'light':
                setLightTheme()
                break
            case 'dark':
                setDarkTheme()
                break
        }
    }, [theme])
    return (
        <>
            <Helmet>
                <link rel="shortcut icon " href={favicon} type="image/x-icon " />
            </Helmet>
            <div className={'layout ' + theme}>
                <Navigation updateTheme={() => onUpdateTheme(theme)} theme={theme} />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}