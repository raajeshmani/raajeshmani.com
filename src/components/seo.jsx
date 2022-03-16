import React from 'react'
import { Helmet } from 'react-helmet'

import config from '../utils/config'

export const SearchEngineOptimization = () => {
    const { description, siteLogo, siteUrl, title } = config

    return (
        <Helmet>
            <meta name="description" content={description} />
            <meta name="image" content={siteLogo} />

            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name=" google-site-verification " content="WH0kMapgKJx3zcC83r5np9EsAQYGMG26S-qAWeIissw " />

            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={siteLogo} />

        </Helmet>
    )
}
