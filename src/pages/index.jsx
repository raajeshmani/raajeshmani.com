import React, { useState, useEffect, useMemo } from 'react'
import { Helmet } from 'react-helmet'

import { SearchEngineOptimization } from '../components/seo'
import { Layout } from '../components/layout'
import { Intro } from '../components/intro/intro'

import config from '../utils/config'

export default function IndexPage () {
    return (
        <>
        <Layout>
            <Helmet title={config.siteTitle} htmlAttributes={{"lang": "en"}}>
                <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css ' rel='preload stylesheet ' />
            </Helmet>
            <SearchEngineOptimization />

            <Intro />
        </Layout>
        </>
    )
}
