import React, { useState } from "react";

import './Section3.css';

import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'
import image7 from '../../assets/image7.jpg'
import image8 from '../../assets/image8.jpg'

export default function Section3() {
    const imageArray = [image1, image2, image3, image4, image5, image6, image7, image8];
    const [currentImage, setCurrentImage] = useState(-1)

    function onImageHover(ele) {
        setCurrentImage(prev => ele)
    }

    return(
        <div className="section-3-container">
            <div className="section-3-overall-container">
                <div className="section-3-navbar-container">
                    <div onMouseEnter={() => onImageHover(1)} onMouseLeave={() => onImageHover(-1)} className="section-3-nav-link-container">
                        <div className="sec3-no-container">
                            01
                        </div>
                        <div className="sec3-text-container">
                            METAVERSE
                        </div>
                    </div>
                    <div onMouseEnter={() => onImageHover(2)} onMouseLeave={() => onImageHover(-1)} className="section-3-nav-link-container">
                        <div className="sec3-no-container">
                            02
                        </div>
                        <div className="sec3-text-container">
                            PSYCHEDELIC ART
                        </div>
                    </div>
                    <div onMouseEnter={() => onImageHover(3)} onMouseLeave={() => onImageHover(-1)} className="section-3-nav-link-container">
                        <div className="sec3-no-container">
                            03
                        </div>
                        <div className="sec3-text-container">
                            AI-GENERATED MUSIC
                        </div>
                    </div>
                    <div onMouseEnter={() => onImageHover(4)} onMouseLeave={() => onImageHover(-1)} className="section-3-nav-link-container">
                        <div className="sec3-no-container">
                            04
                        </div>
                        <div className="sec3-text-container">
                            Y2K AESTHETICS
                        </div>
                    </div>
                    <div onMouseEnter={() => onImageHover(5)} onMouseLeave={() => onImageHover(-1)} className="section-3-nav-link-container">
                        <div className="sec3-no-container">
                            05
                        </div>
                        <div className="sec3-text-container">
                            SCIENCE, NOT FICTION
                        </div>
                    </div>
                    <div onMouseEnter={() => onImageHover(6)} onMouseLeave={() => onImageHover(-1)} className="section-3-nav-link-container">
                        <div className="sec3-no-container">
                            06
                        </div>
                        <div className="sec3-text-container">
                            ACTS OF SELF-LOVE
                        </div>
                    </div>
                    <div onMouseEnter={() => onImageHover(7)} onMouseLeave={() => onImageHover(-1)} className="section-3-nav-link-container">
                        <div className="sec3-no-container">
                            07
                        </div>
                        <div className="sec3-text-container">
                            THE ART OF SCROLLYTELLING
                        </div>
                    </div>
                    <div onMouseEnter={() => onImageHover(8)} onMouseLeave={() => onImageHover(-1)} className="section-3-nav-link-container">
                        <div className="sec3-no-container">
                            08
                        </div>
                        <div className="sec3-text-container">
                            IMMERSIVE EVERYTHING
                        </div>
                    </div>
                </div>
                <div className="section-3-image-container">
                    {currentImage != -1 && <div className={`section-image-container img-${currentImage-1}`}>
                        <img src={imageArray[currentImage-1]} alt="" className="section-image" />
                    </div>}
                </div>
            </div>
        </div>
    )
}