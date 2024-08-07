import React, { useState } from 'react';

const PlaneForm = () => {
  const [plane, setPlane] = useState({
    model: '',
    manufacturer: '',
    purchaseDate: '',
    businessCapacity: '',
    economyCapacity: '',
    firstClassCapacity: '',
    premiumEconomyCapacity: '',
    doorCount: '',
    emergencyExitCount: '',
    totalFlightTime: '',
    aisleCount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlane(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitted plane:', plane);
    // Reset form after submission
    setPlane({
      model: '',
      manufacturer: '',
      purchaseDate: '',
      businessCapacity: '',
      economyCapacity: '',
      firstClassCapacity: '',
      premiumEconomyCapacity: '',
      doorCount: '',
      emergencyExitCount: '',
      totalFlightTime: '',
      aisleCount: ''
    });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6">Add New Plane</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
              Model
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="model"
              type="text"
              placeholder="Model"
              name="model"
              value={plane.model}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manufacturer">
              Manufacturer
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="manufacturer"
              type="text"
              placeholder="Manufacturer"
              name="manufacturer"
              value={plane.manufacturer}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purchaseDate">
              Purchase Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="purchaseDate"
              type="date"
              name="purchaseDate"
              value={plane.purchaseDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessCapacity">
              Business Capacity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="businessCapacity"
              type="number"
              placeholder="Business Capacity"
              name="businessCapacity"
              value={plane.businessCapacity}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="economyCapacity">
              Economy Capacity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="economyCapacity"
              type="number"
              placeholder="Economy Capacity"
              name="economyCapacity"
              value={plane.economyCapacity}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstClassCapacity">
              First Class Capacity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstClassCapacity"
              type="number"
              placeholder="First Class Capacity"
              name="firstClassCapacity"
              value={plane.firstClassCapacity}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="premiumEconomyCapacity">
              Premium Economy Capacity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="premiumEconomyCapacity"
              type="number"
              placeholder="Premium Economy Capacity"
              name="premiumEconomyCapacity"
              value={plane.premiumEconomyCapacity}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doorCount">
              Door Count
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="doorCount"
              type="number"
              placeholder="Door Count"
              name="doorCount"
              value={plane.doorCount}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emergencyExitCount">
              Emergency Exit Count
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emergencyExitCount"
              type="number"
              placeholder="Emergency Exit Count"
              name="emergencyExitCount"
              value={plane.emergencyExitCount}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalFlightTime">
              Total Flight Time (hours)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="totalFlightTime"
              type="number"
              placeholder="Total Flight Time"
              name="totalFlightTime"
              value={plane.totalFlightTime}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aisleCount">
              Aisle Count
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="aisleCount"
              type="number"
              placeholder="Aisle Count"
              name="aisleCount"
              value={plane.aisleCount}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Plane
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaneForm;