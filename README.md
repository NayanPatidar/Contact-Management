# Contact Management System

This Contact Management System allows users to manage their contacts by adding, editing, viewing, and deleting contact information. The project is built using a **Node.js** backend with **Express.js** for API handling and a **MongoDB** database for storing contact data. The frontend is built using **React.js** and **Material UI** to create an interactive and responsive user interface.

## Major Technical Decisions

- **Node.js & Express.js**: The backend is built with **Node.js** and **Express.js** to handle RESTful API requests for CRUD operations on contacts. This stack is chosen for its scalability, speed, and ability to handle asynchronous requests efficiently.
- **MongoDB**: The project uses **MongoDB**, a NoSQL database, to store contact data. MongoDB is chosen for its flexibility, scalability, and the ability to easily handle dynamic and changing data.
- **React.js & Material UI**: The frontend uses **React.js** for building the UI components and **Material UI** for modern, responsive design elements. React’s component-based architecture makes the UI easy to manage and scale.

## How Each Part Works

### **Backend (Node.js & Express)**:
- **API Routes**: The backend is built using **Node.js** and **Express.js**, which manage API routes for performing CRUD (Create, Read, Update, Delete) operations on contacts.
  - **POST** `/contacts`: Adds a new contact.
  - **GET** `/contacts`: Retrieves a list of contacts.
  - **PUT** `/contacts:id`: Updates an existing contact.
  - **DELETE** `/contacts:id`: Deletes a contact.
- **MongoDB**: The backend uses **MongoDB** to store contact information, using a flexible schema that allows easy updates to data over time.

### **Frontend (React.js & Material UI)**:
- **User Interface**: The frontend is built with **React.js**, offering a dynamic, component-based structure that allows easy management of the application state (e.g., adding, editing, deleting contacts).
- **API Communication**: The frontend communicates with the backend via **RESTful API** calls using **fetch** to send and receive data.
- **Material UI**: **Material UI** is used to provide pre-styled components for a clean, responsive, and user-friendly design.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/contact-management.git

### **Backend Setup**

2. **Enter the repository:**
    ```bash
   cd backend
   
3. **Add .env file**
   ```bash
   MONGODB_URL=your-api-key

4. **Run the project**
   ```bash
   npm install
   npm run dev

### **Frontend Setup**

5. **Enter the repository:**
  
   ```bash
   cd frontend
   
6. **Add .env file**
   
   ```bash
   VITE_API_URL=http://localhost:3000   (Change the port according to the above running server)
   
7. **Run the project**
   ```bash
   npm install
   npm run dev

