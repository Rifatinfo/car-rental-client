import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const AddCar = () => {
   
    const {isPending, mutateAsync} = useMutation({
        mutationFn: async cars => {
          await  axios.post('http://localhost:5000/cars', cars)
        },
        onSuccess : () =>{
          return  alert("Successfully Data Send")
        },
        onError : () =>{
           return alert("Err Occ");
        }
    })
     
  

    const handleSubmit = async (e) =>{
         e.preventDefault();
         const form = e.target;
         const model = form.model.value;
         const features = form.features.value;
         const description = form.description.value;
         const pricePerDay = form.pricePerDay.value;
         const imageUrl = form.imageUrl.value;
         const registrationNumber = form.registrationNumber.value;
         const available = form.available.checked
          
         const carInfo = {
            model,
            features,
            description,
            pricePerDay,
            imageUrl,
            registrationNumber,
            available,
            bookingCount : 0
         }

         console.log(carInfo);
        // all car Data send to database
        try{
            await mutateAsync(carInfo) 
          } catch(err){
             console.log(err.message);
             
          }
         
    }

    const inputStyle = "w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
            <h2 className="text-2xl font-bold text-center text-orange-600">Add New Car</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* car model */}
                <label className="block font-medium mb-1">Car Model</label>
                <input type="text"
                    name="model"
                    className={inputStyle}
                    required />

                {/* Daily Rental Price */}
                <div>
                    <label className="block font-medium mb-1">Daily Rental Price ($)</label>
                    <input
                        type="number"
                        name="pricePerDay"
                        className={inputStyle}
                        required
                    />
                </div>

                {/* Availability  */}
                <div className="flex items-center">
                    <input type="checkbox"
                        name="available"
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
                        className={inputStyle}
                    />
                </div>

                {/* description  */}
                <textarea
                    type="text"
                    name="description"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    rows={3}
                />

                {/* Booking Count (default 0) */}
                <div>
                    <label className="block font-medium mb-1">Booking Count</label>
                    <input
                        type="number"
                        name="bookingCount"
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
                        className={inputStyle}
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block font-medium mb-1">Location</label>
                    <input
                        type="text"
                        name="location"
                        className={inputStyle}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
                >
                   {isPending ?  "Loading ....." : "Add Car"} 
                </button>
            </form>
        </div>
    );
};

export default AddCar;