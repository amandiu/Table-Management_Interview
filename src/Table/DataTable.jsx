

import useTableWithPagination from "./useTableWithPagination";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";


const DataTable = () => {
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
    } = useTableWithPagination();


    return (
        <div className="p-4">
            <h1 className="font-extrabold text-3xl mb-5 text-green-500">Personal Info</h1>


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
                                        onChange={(e) => handleChange("name", e.target.value)}
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
                                        onChange={(e) => handleChange("age", e.target.value)}
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
                                        onChange={(e) => handleChange("dob", e.target.value)}
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
                                        onChange={(e) => handleChange("gender", e.target.value)}
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
                                        <button className="p-1 text-xl rounded" onClick={handleSave}><CiSaveDown2/></button>
                                        <button className="p-1 bg-gray-300 rounded ml-2" onClick={handleCancel}>Cancel</button>
                                    </div>
                                ) : (
                                    <div className="text-xl">
                                        <button className="p-1  rounded" onClick={() => handleEdit(item)}><FaEdit/></button>
                                        <button className="p-1  rounded ml-2" onClick={() => handleDelete(item.id)}><MdDelete /></button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className="mt-4 flex justify-between">




                <label className="mb-2 block">Rows per page:</label>
                <select
                    className="border rounded p-2 mb-4"
                    value={rowsPerPage}
                    onChange={(e) => {
                        setRowsPerPage(Number(e.target.value));
                        setCurrentPage(1); // Reset to first page on change
                    }}
                >
                    {[10, 20, 30, 40, 50].map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>




                <button
                    className="p-2 text-xl border rounded bg-gray-300"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                    <FcPrevious/>
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    className="p-2 text-xl border rounded bg-gray-300"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                    <FcNext/>
                </button>
            </div>
        </div>
    );
};


export default DataTable;










// <div className="mt-4 flex justify-between">


// <label className="mb-2 block">Rows per page:</label>
// <select
//     className="border rounded p-2 mb-4"
//     value={rowsPerPage}
//     onChange={(e) => {
//         setRowsPerPage(Number(e.target.value));
//         setCurrentPage(1); // Reset to first page on change
//     }}
// >
//     {[10, 20, 30, 40, 50].map((num) => (
//         <option key={num} value={num}>{num}</option>
//     ))}
// </select>




// <span>Page {currentPage} of {totalPages}</span>
// <button
//     className="p-2 border rounded bg-gray-300"
//     disabled={currentPage === 1}
//     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// >
//     Previous
// </button>
// <button
//     className="p-2 border rounded bg-gray-300"
//     disabled={currentPage === totalPages}
//     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// >
//     Next
// </button>
// </div>
