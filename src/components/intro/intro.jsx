import React from "react"

import './intro.css'

export const Intro = () => {
    return (
        <div className="intro " >
            <div className="intro-name ">
                <p>Hey, I am <span>R</span>aajesh!</p>
            </div>
            <div className="intro-description ">
                <p> A
                    <span className="red "> Software Engineer </span>
                    in Bengaluru.
                    <br />
                    <br />
                    I build full-stack web apps focusing mostly on front end
                    <br />
                    and also an open-source enthusiast

                    <br />
                    <br />
                    Currently working remotely @ Cerner
                </p>
            </div>
        </div>
    )
}