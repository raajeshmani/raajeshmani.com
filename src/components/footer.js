import React from 'react'

const socialLinks = [
    {url: 'https://github.com/raajeshmani', icon: 'fa fa-github', label: 'GitHub'},
    {url: 'https://twitter.com/RaajeshMani ', icon: 'fa fa-twitter', label: 'Twitter'},
    {url: 'https://www.linkedin.com/in/raajesh-m/', icon: 'fa fa-linkedin', label: 'Linkedin'},
]
export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="intro-social ">
                {socialLinks.map((social) => (
                    <a href={social.url} target="_blank " alt={social.label}><i label={social.label} className={social.icon}></i></a>
                ))}
                <a href="https://drive.google.com/open?id=1vGyIp5HvJ_aHuJLlv2APdmWP5y1Fkkbv " target="_blank "><img src="/cv.png " title="Raajesh Résumé " alt="Raajesh M CV "/></a>
            </div>
        </footer>
    )
}
