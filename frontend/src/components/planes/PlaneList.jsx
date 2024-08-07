import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlaneList = () => {

    const navigate = useNavigate();
  // This is mock data. In a real application, you'd fetch this from an API or database
  const [planes, setPlanes] = useState([
    { id: '1', model: 'Boeing 747', manufacturer: 'Boeing', purchaseDate: '2020-01-15', businessCapacity: 60, economyCapacity: 300, firstClassCapacity: 14, premiumEconomyCapacity: 40, doorCount: 8, emergencyExitCount: 16, totalFlightTime: 5000, aisleCount: 2 },
    { id: '2', model: 'Airbus A320', manufacturer: 'Airbus', purchaseDate: '2019-05-20', businessCapacity: 0, economyCapacity: 180, firstClassCapacity: 0, premiumEconomyCapacity: 0, doorCount: 4, emergencyExitCount: 8, totalFlightTime: 3500, aisleCount: 1 },
    { id: '3', model: 'Embraer E175', manufacturer: 'Embraer', purchaseDate: '2021-03-10', businessCapacity: 12, economyCapacity: 64, firstClassCapacity: 0, premiumEconomyCapacity: 0, doorCount: 2, emergencyExitCount: 4, totalFlightTime: 2000, aisleCount: 1 },
  ]);

  const handleDelete = (id) => {
    setPlanes(planes.filter(plane => plane.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Plane List</h2>
      <button
                className="btn btn-xs"
                onClick={() => navigate("/addplane")}
            >
                Add New Plane
            </button>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Purchase Date</th>
              <th>Capacity</th>
              <th>Doors</th>
              <th>Emergency Exits</th>
              <th>Total Flight Time</th>
              <th>Aisles</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {planes.map((plane) => (
              <tr key={plane.id}>
                <td>{plane.model}</td>
                <td>{plane.manufacturer}</td>
                <td>{new Date(plane.purchaseDate).toLocaleDateString()}</td>
                <td>
                  <div>First: {plane.firstClassCapacity}</div>
                  <div>Business: {plane.businessCapacity}</div>
                  <div>Premium Economy: {plane.premiumEconomyCapacity}</div>
                  <div>Economy: {plane.economyCapacity}</div>
                </td>
                <td>{plane.doorCount}</td>
                <td>{plane.emergencyExitCount}</td>
                <td>{plane.totalFlightTime} hours</td>
                <td>{plane.aisleCount}</td>
                <td>
                  <button 
                    className="btn btn-error btn-xs mr-2"
                    onClick={() => handleDelete(plane.id)}
                  >
                    Delete
                  </button>
                  <button 
                    className="btn btn-primary btn-xs"
                    onClick={() => console.log('Edit', plane.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {planes.length === 0 && (
        <div className="text-center mt-4">
          <p className="text-gray-500">No planes found</p>
        </div>
      )}
    </div>
  );
};

export default PlaneList;