import { useState } from "react";


const AddAirportFrom = () => {
    const [airport, setAirport] = useState({
        name: '',
        city: '',
        country: '',
        code: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setAirport(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Submitted airport:', airport);
        // Reset form after submission
        setAirport({ name: '', city: '', country: '', code: '' });
      };
    
      return (
        <div className="container mx-auto p-4">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6">Add New Airport</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Airport Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Airport Name"
                name="name"
                value={airport.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="City"
                name="city"
                value={airport.city}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                Country
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                placeholder="Country"
                name="country"
                value={airport.country}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
                Airport Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="code"
                type="number"
                placeholder="Airport Code"
                name="code"
                value={airport.code}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Airport
              </button>
            </div>
          </form>
        </div>
      );
}

export default AddAirportFrom;