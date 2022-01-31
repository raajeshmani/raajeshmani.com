import React from 'react'

import config from '../utils/config'

export const Navigation = ({ updateTheme, theme }) => {
    const heightAndWidth = "20px"

    return (
        <header className='navigation'>
            <div className='navigation-inner'>
                <div className='initials'>
                <a href={config.siteUrl} key="MR Initials">
                    <p>M R
                        <span className="red ">.</span>
                    </p>
                </a>
                </div>

                <div className='theme-switcher'>
                <button onClick={updateTheme} aria-label="theme switcher">
                    {theme === 'dark' ? (
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" focusable="false" height={heightAndWidth} width={heightAndWidth} xmlns="http://www.w3.org/2000/svg">
                        <path fill="var(--primary)" d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path>
                        </svg>
                    ) : (
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height={heightAndWidth} width={heightAndWidth} xmlns="http://www.w3.org/2000/svg">
                        <path fill="var(--primary)" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                        </svg>
                    )}
                </button>
                </div>
            </div>

        </header>
    )
}
