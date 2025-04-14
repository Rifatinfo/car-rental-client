import { useState } from "react";
import HeroSlider from "../HeroSlider/HeroSlider";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Hero = () => {
    const [showVideo , setShowVideo] = useState(false);

    return (
        <div>
            {
                showVideo ? (<VideoPlayer onClose={() => setShowVideo(false)}/>) : (<HeroSlider onWatchVideo={() => setShowVideo(true)}/>)
            }
        </div>
    );
};

export default Hero;