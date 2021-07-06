import "./intro.scss"
import { init } from 'ityped';
import { useEffect, useRef } from 'react'

const Intro = () => {
    const introText = useRef();
    useEffect(() => {
        init(introText.current, 
            { 
                showCursor: false, 
                backDelay: 1500,
                backSpeed: 60,
                showCursor: true,
                strings: ['Student at TON DUC THANG University!', 'Fresher Web Developer!' ] 
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="intro-left">
                <div className="img-container">
                    <img src="assets/avatar.png" alt="" />
                </div>
            </div>
            <div className="intro-right">
                <div className="wrapper">
                    <h2>Hi there, I'm </h2>
                    <h1>Luan Nguyen</h1>
                    <h3><span ref={introText}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
