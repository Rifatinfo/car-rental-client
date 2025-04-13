import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaPlayCircle } from "react-icons/fa";

const HeroSlider = ({onWatchVideo}) => {
    const sliders = [
        { id: 1, image: 'https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/1.jpg', text: 'Dive into what you love' },
        { id: 2, image: 'https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/3.jpg', text: 'Feel the drive' }
    ]
    return (
        <div className="relative w-full min-h-screen">
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                navigation={true}
                className="mySwiper h-full"
            >
                {sliders.map(slide => <SwiperSlide key={slide.id}>
                    <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* <div className="text-white text-center space-y-6">
                            <h1 className="text-4xl md:text-2xl font-bold">{slide.text}</h1>
                            <div className="flex justify-center items-center">
                                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                                    <button className="px-6 py-3 text-sm md:text-lg bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-600 transition duration-300">
                                        rent Now
                                    </button>
                                    <button className="px-3.5 py-3 text-sm md:text-lg bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-600 transition duration-300">
                                        View Details
                                    </button>

                                </div>

                            </div>
                        </div> */}

                        {/* text and button section  */}
                        <div className="space-y-4">
                            <p className="text-sm tracking-widest text-[#ff3600] font-semibold">* PREMIUM</p>
                            <h1 >Rental</h1>
                            <p>Rolls Royce Cullinan
                                <span>$ 900</span>
                                <span> /DAY</span>
                            </p>
                        </div>

                        <div className="absolute md:mt-200 md:left-450 mt-80">
                            <button
                                className=" mt-6 px-6 py-6 transition"
                             onClick={onWatchVideo}
                            >
                                <FaPlayCircle className="md:text-5xl text-4xl bg-white rounded-full border-1 border-[#ff3600] border-none text-[#ff3600] " />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default HeroSlider;





