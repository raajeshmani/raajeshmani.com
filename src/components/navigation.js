import React from 'react'

import config from '../utils/config'

export const Navigation = () => {
    return (
        <header className='navigation'>
            <div className='initials'>
                <a href={config.siteUrl}>
                    <p>M R
                    <span className="red ">.</span>
                    </p>
                </a>
            </div>

        </header>
    )
}
