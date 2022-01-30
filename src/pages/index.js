import React, { useState, useEffect, useMemo } from 'react'
import { Helmet } from 'react-helmet'

import { SearchEngineOptimization } from '../components/seo'
import { Layout } from '../components/layout'

import config from '../utils/config'

export default function IndexPage () {
    return (
        <>
        <Layout>
            <Helmet title={config.siteTitle}>
                <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css ' rel='preconnect stylesheet ' />
            </Helmet>
            <SearchEngineOptimization />

            <div className="intro " >
                <div className="intro-name ">
                    <p>Hey, I am <span>R</span>aajesh!</p>
                </div>
                <div className="intro-description ">
                    <p> A
                    <span className="red "> Software Engineer </span>
                    in Bengaluru.
                    <br/>
                    <br/>
                    I build full-stack web apps focusing mostly on front end
                    <br/>
                    and also an open-source enthusiast

                    <br/>
                    <br/>
                    Currently working remotely @ Cerner
                    </p>
                </div>
            </div>
        </Layout>
        </>
    )
}
