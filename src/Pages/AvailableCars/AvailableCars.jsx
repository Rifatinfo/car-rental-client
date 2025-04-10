import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AvailableCars = () => {
    const {data, isLoading} = useQuery({ queryKey: ['cars'], queryFn: async  () => {
        const {data} = await axios.get('http://localhost:5000/all-cars')
        return data
    }})
    if(isLoading) return <div className="flex justify-center items-center h-screen text-9xl"><span className="text-orange-600 loading loading-bars loading-xl border"></span></div>

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-rows-1 md:grid-cols-4 gap-3 md:p-0 p-2">
                {data.map(item => <div key={item._id} className="relative w-full max-w-sm  mx-auto h-96 rounded-3xl overflow-hidden shadow-lg">
                    <img src={item.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover brightness-50 saturate-50" />
                    <div className="relative z-10 flex flex-col justify-between h-full p-5 text-white">
                        <div>
                            <h2 class="text-2xl font-bold mb-1">Convertible Car</h2>
                            <p class="text-sm text-gray-200">Model: <span class="font-medium">{item.model}</span></p>
                            <p class="text-sm text-gray-200">Location: <span class="font-medium">{item.location}</span></p>
                        </div>

                        {/* details */}
                        <div class="mt-auto">
                            <ul class="space-y-1 mb-4">
                                <li><strong>Features:</strong> {item.features}</li>
                                <li><strong>Price/Day:</strong> ${item.pricePerDay}</li>
                                <li><strong>Reg :</strong> {item.model}</li>
                                <li><strong>Available:</strong> {item.available === true ? "Yes" : "No"}</li>
                                <li><strong>Booking Count:</strong> {item.bookingCount}</li>
                            </ul>
                            <button class="bg-[#ff3600] hover:bg-[#ff3600] w-full py-2 rounded-xl font-semibold transition duration-200">
                               View Details
                            </button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AvailableCars;