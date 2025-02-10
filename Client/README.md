# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





React Table with Pagination and Editable Fields
Overview
This project is a simple React application that displays a table with pagination and editable fields. The table consists of 5 fields: Name, Age, Date of Birth, Gender, and Actions (Edit, Delete, Save). The project supports the following features:

Pagination: Display data in pages with the ability to change the number of rows per page.
Editable Fields: Click on "Edit" to modify the fields (Name, Age, Date of Birth, Gender).
Add New Row: Create new items by filling out the form and clicking the "Add" button.
Delete Row: Delete an item from the list.
Save Changes: Save any edits made to the fields.
Files
1. 
2. TableWithPagination.js
This file contains the main logic for the table, including data management, pagination, and handling of edit, delete, and save actions.

js

import { useState } from "react";
import initialData from "./data.json";  // Importing JSON data

const useTableWithPagination = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editItem, setEditItem] = useState(null);

  // Logic for pagination, edit, delete, and save actions
};
export default useTableWithPagination;
3. TableWithPagination.jsx
This is the UI component that displays the table and manages interactions. It renders the table, handles form inputs, and triggers actions like editing, deleting, and saving.

jsx

import React from "react";
import useTableWithPagination from "./TableWithPagination";

const TableWithPagination = () => {
  // Data and methods imported from the custom hook
  return (
    <div className="p-4">
      {/* Table structure and buttons */}
    </div>
  );
};

export default TableWithPagination;
Features
Editable Fields: Users can edit the Name, Age, Date of Birth, and Gender directly within the table.
Pagination: You can navigate through different pages with a configurable number of rows per page.
Dynamic Actions: The actions for each row are dynamic, showing "Edit", "Delete", or "Save" based on the state of the row.
Responsive: The app supports responsive design for better accessibility on different screen sizes.
Setup Instructions
Clone the Repository:

git clone https://github.com/amandiu/Table-Management_Interview.git

Server Setup:
Create a Database in mongoDB
cd Server
create a file named .env and add veriable DATABASE_URL='database connection string'

Install Dependencies:

npm install
npx prisma generate
npx prisma db push

Run the Application:

npm start or npm run dev

Client Setup:
cd Cient
npm install
npm run dev
This will start the development server, and you can view the app by opening http://localhost:5173 in your browser.

Technologies Used
React: JavaScript library for building user interfaces,Node JS, Prisma, MongoDB.
Tailwind CSS: Utility-first CSS framework for styling.
License
This project is licensed under the MIT License - see the LICENSE file for details.

How to Use:
Copy the above content into a new README.md file.
Commit the file to your GitHub repository:
git add README.md
git commit -m "Add project documentation"
git push origin main
This will ensure your project is properly documented, and it can be easily understood by others when they visit your GitHub repository.

Let me know if you need further adjustments!