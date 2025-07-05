# doctor-appointment-app
Full-stack Doctor Appointment Booking App using MERN stack



# 🏥 Doctor Appointment Booking App – MERN Stack

A **Full-Stack Doctor Appointment Booking System** developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows **patients** to book appointments with **doctors**, and includes fully functional, role-based **dashboards** for **Admin**, **Doctor**, and **Patient**.

This system is designed to streamline healthcare scheduling, reduce manual work, and enable real-time communication between patients and healthcare professionals.

---

## ✨ Key Features

✅ **Role-Based Authentication** using JWT (Admin, Doctor, Patient)  
✅ **Patient Dashboard** to book, reschedule, and cancel appointments  
✅ **Doctor Dashboard** to manage availability and approve/reject bookings  
✅ **Admin Dashboard** to manage all users and doctors  
✅ **Secure RESTful APIs** built with Express.js  
✅ **Responsive UI** built using React.js + Tailwind CSS  
✅ **Dynamic Slot & Availability Management**  
✅ **Real-Time Status Updates** for appointment approval  
✅ **Optimized MongoDB Queries** for scalability  
✅ **Fully Modular Code Structure** with MVC pattern

---

## 📁 Project Structure
doctor-appointment-app/
├── client/ # Frontend - React.js
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── App.js
│
├── server/ # Backend - Express.js
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── index.js
│
├── .gitignore
├── README.md
└── package.json



---

## ⚙️ Tech Stack

### 👨‍💻 Frontend
- **React.js**
- **Tailwind CSS**
- React Router
- Axios
- Toast Notifications

### 🖥 Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT for Authentication**
- Bcrypt (Password Hashing)
- dotenv (Environment Variables)

---

## 🚀 Getting Started – Installation & Setup

> Follow these steps to run the project on your local system.

---

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/yourusername/doctor-appointment-app.git
cd doctor-ap🛠️ 2. Backend Setup (Server)
bash
Copy
Edit
cd server
npm install
Create a .env file inside server/ directory:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Then, start the backend server:

bash
Copy
Edit
npm run dev
Server will run on: http://localhost:5000

💻 3. Frontend Setup (Client)
bash
Copy
Edit
cd client
npm install
Then, start the React development server:

bash
Copy
Edit
npm start
Frontend will run on: http://localhost:3000

🔗 Full App Access
Once both frontend and backend are running:

Open http://localhost:3000

Register as a Patient

Admin can approve Doctors

Doctors can login and manage appointments

🔐 Role-Based Access
Role	Permissions
Admin	View & manage all doctors, users, and bookings
Doctor	Manage availability, approve or reject appointments
Patient	Book appointments, view status, reschedule or cancel

🔒 Authentication
Users must register and login

JWT tokens are issued and stored securely

Protected routes restrict access based on role

💾 Environment Variables
In server/.env:

ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb+srv://<your-connection-string>
JWT_SECRET=yourSecretKey
🖼️ Screenshots (Optional)
Add screenshots in a screenshots/ folder

Patient Booking View

Doctor Approval Panel

Admin User Management

☁️ Deployment Guide (Optional)
🌍 Frontend
Deploy on Vercel or Netlify

⚙️ Backend
Deploy on Render, Railway, or Cyclic

📊 Database
Use MongoDB Atlas for cloud database

Make sure to set your production environment variables in your hosting platform.

🤝 Contributing
Feel free to fork the repository, make changes, and create a pull request.

bash
Copy
Edit
# Fork it
git clone https://github.com/yourusername/doctor-appointment-app.git

# Create your feature branch
git checkout -b feature/YourFeature

# Commit your changes
git commit -m "Added YourFeature"

# Push to the branch
git push origin feature/YourFeature

# Create a pull request
🧠 Learning Outcomes
Building scalable full-stack apps using MERN

Role-based access control

REST API integration with frontend

UI/UX improvements using Tailwind CSS

Real-world authentication & authorization workflow

👨‍💻 Author
Shivam Singh
MERN Stack Developer
📧 [youremail@example.com]
🔗 [LinkedIn / Portfolio if applicable]

📝 License
This project is licensed under the MIT License.
.env
build/
dist/
README.md in the root folder

Add Screenshots/GIFs if possiblepointment-app
