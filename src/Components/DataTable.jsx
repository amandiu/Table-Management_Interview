// DataTable.js
// import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { CiSaveDown2 } from 'react-icons/ci';
// import { FcPrevious, FcNext } from 'react-icons/fc';

const DataTable = ({
  currentData,
  editItem,
  handleEdit,
  handleDelete,
  handleSave,
  handleCancel,
  handleChange,
}) => {
  return (
    <table className="border-collapse w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 p-2">ID</th>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Age</th>
          <th className="border border-gray-300 p-2">Date of Birth</th>
          <th className="border border-gray-300 p-2">Gender</th>
          <th className="border border-gray-300 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((item) => (
          <tr key={item.id} className="border border-gray-300">
            <td className="border border-gray-300 p-2">{item.id}</td>
            <td className="border border-gray-300 p-2">
              {editItem && editItem.id === item.id ? (
                <input
                  type="text"
                  value={editItem.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="border p-1"
                />
              ) : (
                item.name
              )}
            </td>
            <td className="border border-gray-300 p-2">
              {editItem && editItem.id === item.id ? (
                <input
                  type="number"
                  value={editItem.age}
                  onChange={(e) => handleChange('age', e.target.value)}
                  className="border p-1"
                />
              ) : (
                item.age
              )}
            </td>
            <td className="border border-gray-300 p-2">
              {editItem && editItem.id === item.id ? (
                <input
                  type="date"
                  value={editItem.dob}
                  onChange={(e) => handleChange('dob', e.target.value)}
                  className="border p-1"
                />
              ) : (
                item.dob
              )}
            </td>
            <td className="border border-gray-300 p-2">
              {editItem && editItem.id === item.id ? (
                <select
                  value={editItem.gender}
                  onChange={(e) => handleChange('gender', e.target.value)}
                  className="border p-1"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                item.gender
              )}
            </td>
            <td className="border border-gray-300 p-2">
              {editItem && editItem.id === item.id ? (
                <div>
                  <button className="p-1 text-xl rounded" onClick={handleSave}>
                    <CiSaveDown2 />
                  </button>
                  <button
                    className="p-1 bg-gray-300 rounded ml-2"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="text-xl">
                  <button className="p-1 rounded" onClick={() => handleEdit(item)}>
                    <FaEdit />
                  </button>
                  <button
                    className="p-1 rounded ml-2"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Prop Types validation
DataTable.propTypes = {
  currentData: PropTypes.array.isRequired,
  editItem: PropTypes.object,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DataTable;
