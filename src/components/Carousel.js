import React from 'react'
import photo1 from "./image/streetview3.png";
import photo2 from "./image/inside4.png";
import photo3 from "./image/inside5.png";

const Carousel = () => {
    return (
        <>
        
        <div id="carouselExampleSlidesOnly" className="carousel slide pwrapper" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active picture" data-bs-interval="1500">
                    <img src={photo1} className="d-block w-100" alt="street"/>
                </div>
                <div className="carousel-item picture" data-bs-interval="1500">
                    <img src={photo2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item picture" data-bs-interval="1500">
                    <img src={photo3} className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
        
        </>
    )
}
 export default Carousel;