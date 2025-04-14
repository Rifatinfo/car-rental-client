import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaPlayCircle } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";


const HeroSlider = ({ onWatchVideo }) => {
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
                navigation={false}
                className="mySwiper h-full custom-swiper"
            >
                {sliders.map(slide => <SwiperSlide key={slide.id}>
                    <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-start md:px-50"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                    <div className="absolute inset-0 bg-black/50 z-0"></div>

                        {/* text and button section  */}
                        <div className="relative z-10 space-y-4 p-2 md:p-0 ">
                            <p className="text-sm tracking-widest text-[#ff3600] font-semibold">* PREMIUM</p>
                            <h1 className="text-4xl md:text-8xl font-semibold text-white">Rental Car</h1>
                            <p className="text-lg text-white/90">Rolls Royce Cullinan
                                <span className="text-yellow-400 font-bold ml-2">$ 900</span>
                                <span className="text-sm text-white/70"> /DAY</span>
                            </p>


                            <div className="flex flex-col  gap-4 md:flex-row md:items-center pt-4 ">
                                <div className="flex items-center text-center">
                                    <button className="text-center bg-yellow-400 hover:bg0-yellow-500 text-black font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">View Details<span className="text-lg"><GoArrowUpRight /></span></button>
                                    <button></button>
                                </div>
                                <div className="flex items-center text-center">
                                    <button className=" bg-yellow-400 hover:bg0-yellow-500 text-black font-medium py-3 px-8 rounded-full text-sm transition flex items-center gap-2">Rent Now<span className="text-lg"><GoArrowUpRight /></span></button>
                                </div>
                            </div>
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





