// AddRowForm.js
// import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

const AddRowForm = ({ newRow, handleNewRowChange, handleAddNewRow, handleCancel }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={newRow.name}
        onChange={(e) => handleNewRowChange('name', e.target.value)}
        placeholder="Name"
        className="border p-1 mr-2"
      />
      <input
        type="number"
        value={newRow.age}
        onChange={(e) => handleNewRowChange('age', e.target.value)}
        placeholder="Age"
        className="border p-1 mr-2"
      />
      <input
        type="date"
        value={newRow.dob}
        onChange={(e) => handleNewRowChange('dob', e.target.value)}
        className="border p-1 mr-2"
      />
      <select
        value={newRow.gender}
        onChange={(e) => handleNewRowChange('gender', e.target.value)}
        className="border p-1 mr-2"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleAddNewRow}
      >
        Add Row
      </button>
      <button
        className="bg-gray-500 text-white p-2 rounded ml-2"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};



// Prop Types validation
AddRowForm.propTypes = {
    newRow: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      dob: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
    }).isRequired,
    handleNewRowChange: PropTypes.func.isRequired,
    handleAddNewRow: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
  };

export default AddRowForm;
