import { useState } from "react";
import initialData from "../../public/data.json";  // Importing JSON data


const useTableWithPagination = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editItem, setEditItem] = useState(null);


  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);


  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };


  const handleEdit = (item) => {
    setEditItem(item);
  };


  const handleSave = () => {
    setData(data.map(item => (item.id === editItem.id ? editItem : item)));
    setEditItem(null);  // Reset after saving
  };


  const handleChange = (field, value) => {
    setEditItem(prevState => ({ ...prevState, [field]: value }));
  };


  const handleCancel = () => {
    setEditItem(null);  // Reset editing
  };


  return {
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
  };
};


export default useTableWithPagination;
























































// import { useState } from "react";


// const initialData = Array.from({ length: 10 }, (_, i) => ({
//   id: i + 1,
//   name: `Item ${i + 1}`,
//   value: `Value ${i + 1}`,
// }));


// const useTableWithPagination = () => {
//   const [data, setData] = useState(initialData);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [newItem, setNewItem] = useState({ name: "", value: "" });


//   const totalPages = Math.ceil(data.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const endIndex = startIndex + rowsPerPage;
//   const currentData = data.slice(startIndex, endIndex);


//   const handleCreate = () => {
//     const newItemId = data.length ? data[data.length - 1].id + 1 : 1;
//     setData([...data, { id: newItemId, ...newItem }]);
//     setNewItem({ name: "", value: "" });
//   };


//   const handleDelete = (id) => {
//     setData(data.filter(item => item.id !== id));
//   };


//   const handleUpdate = (id, updatedItem) => {
//     setData(data.map(item => (item.id === id ? { ...item, ...updatedItem } : item)));
//   };


//   return {
//     data,
//     currentPage,
//     rowsPerPage,
//     totalPages,
//     currentData,
//     newItem,
//     setNewItem,
//     setRowsPerPage,
//     setCurrentPage,
//     handleCreate,
//     handleDelete,
//     handleUpdate,
//   };
// };


// export default useTableWithPagination;
