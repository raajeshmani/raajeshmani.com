import React from 'react'
import { Helmet } from 'react-helmet'

import { Navigation } from './navigation'
import { Footer } from './footer'

import '../styles.css'

export const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon " href="favicon.png " type="image/x-icon " />
            </Helmet>
            <div className='layout'>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}