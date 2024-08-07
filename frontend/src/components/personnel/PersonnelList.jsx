import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonnelList = () => {
    const navigate = useNavigate();
  // This is mock data. In a real application, you'd fetch this from an API or database
  const [personnelList, setPersonnelList] = useState([
    { id: '1', name: 'John', surname: 'Doe', birthdate: '1990-01-01', gender: 'Male', nationality: 'USA', height: 180, weight: 75, bloodType: 'A', email: 'john@example.com', profession: 'Engineer' },
    { id: '2', name: 'Jane', surname: 'Smith', birthdate: '1985-05-15', gender: 'Female', nationality: 'UK', height: 165, weight: 60, bloodType: 'B', email: 'jane@example.com', profession: 'Doctor' },
    { id: '3', name: 'Mike', surname: 'Johnson', birthdate: '1988-11-30', gender: 'Male', nationality: 'Canada', height: 175, weight: 70, bloodType: 'O', email: 'mike@example.com', profession: 'Teacher' },
  ]);

  const handleDelete = (id) => {
    setPersonnelList(personnelList.filter(person => person.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Personnel List</h2>
      <button
                className="btn btn-xs"
                onClick={() => navigate("/addpersonnel")}
            >
                Add New Personnel
            </button>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Birthdate</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Blood Type</th>
              <th>Email</th>
              <th>Profession</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {personnelList.map((person) => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.surname}</td>
                <td>{person.birthdate}</td>
                <td>{person.gender}</td>
                <td>{person.nationality}</td>
                <td>{person.height} cm</td>
                <td>{person.weight} kg</td>
                <td>{person.bloodType}</td>
                <td>{person.email}</td>
                <td>{person.profession}</td>
                <td>
                  <button 
                    className="btn btn-error btn-xs mr-2"
                    onClick={() => handleDelete(person.id)}
                  >
                    Delete
                  </button>
                  <button 
                    className="btn btn-primary btn-xs"
                    onClick={() => console.log('Edit', person.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {personnelList.length === 0 && (
        <div className="text-center mt-4">
          <p className="text-gray-500">No personnel found</p>
        </div>
      )}
    </div>
  );
};

export default PersonnelList;