import video1 from "../../assets/travel_video_2.mp4";

const VideoPlayer = ({ onClose }) => {
    
    return (
        <div className="relative w-full h-screen bg-screen bg-black flex items-center justify-center">
            <div>
                <video  autoPlay controls src={video1} />
            </div>
            <button
                onClick={onClose}
                className="absolute top-5 right-5 bg-white text-black px-4 py-2 btn"
            >close</button>
        </div>
    );
};

export default VideoPlayer;