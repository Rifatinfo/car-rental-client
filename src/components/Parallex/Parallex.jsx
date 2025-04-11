const Parallex = () => {
  return (
    <div>
      <div class="bg-[url('https://duruthemes.com/demo/html/renax/dark/img/cars/06.jpg')]  bg-fixed bg-cover bg-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center px-6 py-24 backdrop-blur-sm bg-black/40 ">
        <div className="w-full md:w-1/2"><img className="md:h-[450px] w-full rounded-2xl shadow-xl object-cover" src="https://duruthemes.com/demo/html/renax/dark/img/cars/01.jpg" alt="Car" /></div>
        <div className="w-full md:w-1/2 text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Luxury on the Move</h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Experience elegance and performance like never before. Our premium vehicles are designed to give you a ride that's not only smooth and powerful, but also breathtakingly stylish. Whether you're cruising the city or hitting the open road, comfort and class follow you wherever you go.
            </p>
            <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-600 transition duration-300">
              Explore More
            </button>
          </div>
      </div>
      </div>

      
    </div>
  );
};

export default Parallex;

