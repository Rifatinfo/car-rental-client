import { useState } from "react";

const AddCar = () => {
    const [carData, setCarData] = useState({
        model: "",
        pricePerDay: "",
        available: true,
        registrationNumber: "",
        features: "",
        description: "",
        imageUrl: "",
        location: "",
        bookingCount: 0,
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value, type, checked } = e.target;
        setCarData({
            ...carData,
            [name]: type === 'checkbox' ? checked : value
        })

        const allCarData = { ...carData }
        console.log(allCarData);

    }

    const inputStyle = "w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
            <h2 className="text-2xl font-bold text-center text-orange-600">Add New Car</h2>
            <form className="space-y-4">
                {/* car model */}
                <label className="block font-medium mb-1">Car Model</label>
                <input type="text"
                    name="model"
                    className={inputStyle}
                    value={carData.model}
                    onChange={handleChange}
                    required />

                {/* Daily Rental Price */}
                <div>
                    <label className="block font-medium mb-1">Daily Rental Price ($)</label>
                    <input
                        type="number"
                        name="pricePerDay"
                        value={carData.pricePerDay}
                        onChange={handleChange}
                        className={inputStyle}
                        required
                    />
                </div>

                {/* Availability  */}
                <div className="flex items-center">
                    <input type="checkbox"
                        name="available"
                        checked={carData.available}
                        className="mr-2 accent-amber-600"
                    />
                    <label className="font-medium">Available</label>
                </div>

                {/* Vehicle Registration Number */}
                <div>
                    <label className="block font-medium mb-1">Vehicle Registration Number</label>
                    <input
                        type="text"
                        name="registrationNumber"
                        value={carData.registrationNumber}
                        onChange={handleChange}
                        className={inputStyle}
                        required
                    />
                </div>

                {/* Features */}
                <div>
                    <label className="block font-medium mb-1">Features (e.g., GPS, AC)</label>
                    <input
                        type="text"
                        name="features"
                        value={carData.features}
                        onChange={handleChange}
                        className={inputStyle}
                    />
                </div>

                {/* description  */}
                <textarea
                    name="description"
                    value={carData.description}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    rows={3}
                />
                
                {/* Booking Count (default 0) */}
                <div>
                    <label className="block font-medium mb-1">Booking Count</label>
                    <input
                        type="number"
                        name="bookingCount"
                        value={carData.bookingCount}
                        readOnly
                        className={`${inputStyle} bg-gray-100`}
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block font-medium mb-1">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={carData.imageUrl}
                        onChange={handleChange}
                        className={inputStyle}
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block font-medium mb-1">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={carData.location}
                        onChange={handleChange}
                        className={inputStyle}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
                >
                    Add Car
                </button>
            </form>
        </div>
    );
};

export default AddCar;