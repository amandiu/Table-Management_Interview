// Pagination.js
// import React from 'react';
import { FcPrevious, FcNext } from "react-icons/fc";
import PropTypes from "prop-types"; // Import PropTypes

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  setRowsPerPage,
  rowsPerPage,
}) => {
  return (
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
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <button
        className="p-2 text-xl border rounded bg-gray-300"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      >
        <FcPrevious />
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="p-2 text-xl border rounded bg-gray-300"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      >
        <FcNext />
      </button>
    </div>
  );
};

// Prop Types validation
Pagination.propTypes = {
  currentPage: PropTypes.isRequired,
  totalPages: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.func.isRequired,
};

export default Pagination;
