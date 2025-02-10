import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const useTableWithPagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editItem, setEditItem] = useState(null);


  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  // Fetch data from MongoDB (GET request)
  useEffect(() => {
    const toastId = toast.loading("Please wait")
    axios
      .get('http://localhost:5000/users') // MongoDB Atlas API URL
      .then((response) => {
        setData(response.data); // MongoDB থেকে ডেটা ফেচ
        // console.log(response.data)
        toast.dismiss(toastId)
      })
      .catch((error) => {
        toast.dismiss(toastId)
        console.error('There was an error fetching data!', error);
      });
  }, []);

  const handleDelete = async (id) => {
    const toastId = toast.loading("Please wait") ///loader
    try {
      const res = await axios.delete(`http://localhost:5000/users/${id}`)
      setData(data.filter(item => item.id !== id));
      toast.update(toastId, {
        render: "success",
        type: "success",
        autoClose: 2000,
        closeButton: true,
        isLoading: false
      })
    } catch (error) {
      toast.update(toastId, {
        render: error.response.data.error,
        type: "error",
        autoClose: 2000,
        closeButton: true,
        isLoading: false
      })

      console.log(error)
    }

  };


  const handleEdit = (item) => {
    setEditItem(item);
  };


  const handleSave = async () => {
    const toastId = toast.loading("Please wait") ///loader
    try {
      const res = await axios.put(`http://localhost:5000/users/${editItem.id}`,
        { name: editItem.name, age: editItem.age, gender: editItem.gender, dob: new Date(editItem.dob) }
      )
      setData(data.map(item => (item.id === editItem.id ? editItem : item)));
      setEditItem(null);
      toast.update(toastId, {
        render: "success",
        type: "success",
        autoClose: 2000,
        closeButton: true,
        isLoading: false
      })
    } catch (error) {
      toast.update(toastId, {
        render: error.response.data.error,
        type: "error",
        autoClose: 2000,
        closeButton: true,
        isLoading: false
      })

      console.log(error)
    }

    // Reset after saving
  };


  const handleChange = (field, value) => {
    setEditItem(prevState => ({ ...prevState, [field]: value }));
  };


  const handleCancel = () => {
    setEditItem(null);  // Reset editing
  };

  const handleAddRow = async (newRow) => {
    const toastId = toast.loading("Please wait") ///loader
    try {
      const res = await axios.post("http://localhost:5000/users", newRow)
      setData((prevData) => [...prevData, res.data]);
      toast.update(toastId, {
        render: "success",
        type: "success",
        autoClose: 2000,
        closeButton: true,
        isLoading: false
      })
    } catch (error) {
      toast.update(toastId, {
        render: error.response.data.error,
        type: "error",
        autoClose: 2000,
        closeButton: true,
        isLoading: false
      })

      console.log(error)
    }

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
    handleAddRow
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
