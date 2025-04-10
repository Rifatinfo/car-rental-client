
const AvailableCars = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-rows-1 md:grid-cols-4 gap-3 md:p-0 p-2">
                <div className="relative w-full max-w-sm  mx-auto h-96 rounded-3xl overflow-hidden shadow-lg">
                    <img src="https://demo.awaikenthemes.com/novaride/dark/wp-content/uploads/2024/08/about-img-1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover brightness-50 saturate-50" />
                    <div className="relative z-10 flex flex-col justify-between h-full p-5 text-white">
                        <div>
                            <h2 class="text-2xl font-bold mb-1">Convertible Car</h2>
                            <p class="text-sm text-gray-200">Model: <span class="font-medium">Assumenda aut tempor</span></p>
                            <p class="text-sm text-gray-200">Location: <span class="font-medium">Vitae harum nesciunt</span></p>
                        </div>

                        {/* details */}
                        <div class="mt-auto">
                            <ul class="space-y-1 mb-4">
                                <li> <strong>Features:</strong> Explicabo Est sint</li>
                                <li> <strong>Price/Day:</strong> $885</li>
                                <li> <strong>Reg :</strong> 673</li>
                                <li> <strong>Available:</strong> Yes</li>
                                <li><strong>Booking Count:</strong> 0</li>
                            </ul>
                            <button class="bg-[#ff3600] hover:bg-[#ff3600] w-full py-2 rounded-xl font-semibold transition duration-200">
                               View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableCars;