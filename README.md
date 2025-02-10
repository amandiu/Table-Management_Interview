# React Table with Pagination and Editable Fields

## Overview
This project is a simple React application that displays a table with pagination and editable fields. The table consists of five fields: **Name, Age, Date of Birth, Gender, and Actions (Edit, Delete, Save)**. 

### Features:
- **Pagination**: Display data in pages with the ability to change the number of rows per page.
- **Editable Fields**: Click on "Edit" to modify the fields (Name, Age, Date of Birth, Gender).
- **Add New Row**: Create new items by filling out the form and clicking the "Add" button.
- **Delete Row**: Remove an item from the list.
- **Save Changes**: Persist any edits made to the fields.
- **Responsive Design**: Works seamlessly across different screen sizes.

---

## 📂 Project Structure

```
Table-Management_Interview/
│── Client/
│   ├── src/
│   │   ├── Components/
│   │   │   
│   │   ├── Table/
│   │   │   
│   │   ├
│── Server/
│   ├── prisma/
│   ├── server.js
│── .env
│── package.json
│── README.md
```

### 🔹 Main Files:
#### `useTableWithPagination.js`
This file contains the main logic for the table, including data management, pagination, and handling of edit, delete, and save actions.

```javascript
import { useState } from "react";
import initialData from "../data.json";  // Importing JSON data

const useTableWithPagination = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editItem, setEditItem] = useState(null);

  // Logic for pagination, edit, delete, and save actions
};

export default useTableWithPagination;
```

#### `TableWithPagination.jsx`
This is the UI component that displays the table and manages interactions. It renders the table, handles form inputs, and triggers actions like editing, deleting, and saving.

```jsx
import React from "react";
import useTableWithPagination from "../hooks/useTableWithPagination";

const TableWithPagination = () => {
  // Data and methods imported from the custom hook
  return (
    <div className="p-4">
      {/* Table structure and buttons */}
    </div>
  );
};

export default TableWithPagination;
```

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository:
```bash
git clone https://github.com/amandiu/Table-Management_Interview.git
```

### 2️⃣ Server Setup:
- **Create a MongoDB Database**.
- **Configure environment variables**:
  ```bash
  cd Server
  touch .env
  ```
  Add the following variable in `.env` file:
  ```env
  DATABASE_URL='your-mongodb-connection-string'
  ```
- **Install dependencies** and set up Prisma:
  ```bash
  npm install
  npx prisma generate
  npx prisma db push
  ```
- **Run the server**:
  ```bash
  npm start
  ```

### 3️⃣ Client Setup:
```bash
cd Client
npm install
npm run dev
```

Once the setup is complete, open your browser and go to:
```
http://localhost:5173
```

---

## 🛠️ Technologies Used
- **React** – JavaScript library for building user interfaces.
- **Vite** – A fast development server for modern web applications.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **MongoDB** – NoSQL database for storing data.
- **Node.js** – JavaScript runtime for backend development.
- **Prisma** – ORM for interacting with the database.

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📌 How to Contribute
1. **Fork** the repository.
2. **Create** a new branch (`git checkout -b feature-branch`).
3. **Commit** your changes (`git commit -m 'Add some feature'`).
4. **Push** to the branch (`git push origin feature-branch`).
5. **Open a Pull Request**.

---

🚀 Happy Coding! 🎉
