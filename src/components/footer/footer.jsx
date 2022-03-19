import React, { useEffect, useRef } from 'react'

import { githubSvg, twitterSvg, gmailSvg, linkedinSvg, telegramSvg, resumeSvg } from '../../utils/svgs'
import './footer.css'

export const Footer = () => {

    const onClickAction = (social) => {
        console.log('On Click Action', social)
        if (window ) {
            window.gtag("event", "click", { label: social.label, url: social.url, click: "Social Link" })
        }
    }

    const socialLinks = [
        { url: 'https://t.me/RaajeshM', icon: telegramSvg, label: 'Telegram' },
        { url: 'https://github.com/raajeshmani', icon: githubSvg, label: 'GitHub' },
        { url: 'https://twitter.com/RaajeshMani ', icon: twitterSvg, label: 'Twitter' },
        { url: 'mailto:raajeshmani19@gmail.com', icon: gmailSvg, label: 'Mail' },
        { url: 'https://www.linkedin.com/in/raajesh-m/', icon: linkedinSvg, label: 'Linkedin' },
        { url: 'https://drive.google.com/open?id=1vGyIp5HvJ_aHuJLlv2APdmWP5y1Fkkbv ', icon: resumeSvg, label: 'Raajesh Résumé' },
    ]

    return (
        <footer className='footer'>
            <div className="intro-social ">
                {socialLinks.map((social) => (
                    <a
                        onClick={() => onClickAction(social)}
                        className="svg"
                        href={social.url}
                        target="_blank "
                        key={social.label}>
                        {social.icon}
                    </a>
                ))}
            </div>
        </footer>
    )
}
