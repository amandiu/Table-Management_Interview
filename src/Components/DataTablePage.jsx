// DataTablePage.js
// import React, { useState } from 'react';
import { useState } from 'react';
import AddRowForm from './AddRowForm';
import DataTable from './DataTable';
import Pagination from "./Pagination "
import useTableWithPagination from "../Table/useTableWithPagination";

const DataTablePage = () => {
  const {
    data,
    currentPage,
    rowsPerPage,
    totalPages,
    currentData,
    editItem,
    setRowsPerPage,
    setCurrentPage,
    handleDelete,
    handleEdit,
    handleSave,
    handleChange,
    handleCancel,
    handleAddRow,
  } = useTableWithPagination();

  const [newRow, setNewRow] = useState({
    id: data.length + 1,
    name: '',
    age: '',
    dob: '',
    gender: 'Male',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleNewRowChange = (field, value) => {
    setNewRow((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleAddNewRow = () => {
    handleAddRow(newRow);
    setNewRow({ id: data.length + 1, name: '', age: '', dob: '', gender: 'Male' });
    setIsFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  return (
    <div className="p-4">
      <h1 className="font-extrabold text-3xl mb-5 text-green-500">Personal Info</h1>

      <button
        className="bg-blue-500 text-white p-2 rounded mb-4"
        onClick={toggleFormVisibility}
      >
        {isFormVisible ? 'Cancel' : 'Add Row'}
      </button>

      {/* Pass the necessary props to AddRowForm */}
      {isFormVisible && (
        <AddRowForm
          newRow={newRow}
          handleNewRowChange={handleNewRowChange}
          handleAddNewRow={handleAddNewRow}
          handleCancel={() => setIsFormVisible(false)}
        />
      )}

      <DataTable
        currentData={currentData}
        editItem={editItem}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleSave={handleSave}
        handleCancel={handleCancel}
        handleChange={handleChange}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        setRowsPerPage={setRowsPerPage}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default DataTablePage;
