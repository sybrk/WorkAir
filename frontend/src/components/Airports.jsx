import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Airports = () => {
    const navigate = useNavigate();
    // This is mock data. In a real application, you'd fetch this from an API or database
    const [airports, setAirports] = useState([
        { id: 1, name: 'John F. Kennedy International Airport', city: 'New York', country: 'USA', code: 1234 },
        { id: 2, name: 'Heathrow Airport', city: 'London', country: 'UK', code: 5678 },
        { id: 3, name: 'Tokyo Haneda Airport', city: 'Tokyo', country: 'Japan', code: 9012 },
    ]);

    const handleDelete = (id) => {
        setAirports(airports.filter(airport => airport.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Airport List</h2>
            <button
                className="btn btn-xs"
                onClick={() => navigate("/addairport")}
            >
                Add New Airport
            </button>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Code</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {airports.map((airport) => (
                            <tr key={airport.id}>
                                <td>{airport.name}</td>
                                <td>{airport.city}</td>
                                <td>{airport.country}</td>
                                <td>{airport.code}</td>
                                <td>
                                    <button
                                        className="btn btn-error btn-xs"
                                        onClick={() => handleDelete(airport.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {airports.length === 0 && (
                <div className="text-center mt-4">
                    <p className="text-gray-500">No airports found</p>
                </div>
            )}
        </div>
    );
};

export default Airports;