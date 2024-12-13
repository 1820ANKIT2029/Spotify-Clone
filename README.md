# 🎵 Spotify Clone 🎵

This project is a **Spotify Clone** built to simulate some core functionalities of Spotify, including 🎶 music playback, 🔄 activity updates, and 🔒 user authentication.

---

## 🛠️ Features

- **👤 User Authentication:**
  - 🛂 Clerk integration for user authentication.
  - 🔒 Secure user sessions managed through Clerk's robust SDK.
- **🎧 Music Management:**
  - 📡 stream music files using ☁️ Cloudinary for storage.
  - 🕒 Real-time activity updates for users using 🔌 Socket.IO.
- **📱 Responsive Design:**
  - ⚙️ Optimized for both 🖥️ desktop and 📱 mobile devices.

---

## 💻 Technologies Used

### Backend

- **🟩 Node.js**
- **📦 Express.js**
- **🔌 Socket.IO** (for real-time communication)
- **☁️ Cloudinary** (for file storage)

### Frontend

- **⚛️ React.js** (with ⚡ Vite for project setup)
- **🌳 Zustand** (state management)

### Database

- **🍃 MongoDB** (with Mongoose)

---

## 🛠️ Setup Instructions

### 📋 Prerequisites

- **🟩 Node.js** (version >= 16.x)
- **🍃 MongoDB** (local or ☁️ instance)
- A **☁️ Cloudinary account**

### 🧩 Steps

1. 🔽 Clone the repository:

   ```bash
   git clone https://github.com/your-username/spotify-clone.git
   cd spotify-clone
   ```

2. ⚙️ Install dependencies for both backend and frontend:

   ```bash
   spotify-clone $ npm run build
   ```

3. 🛠️ Create environment variable files:

   - **Backend**: Create a `.env` file in the `backend` directory:
     ```env
     PORT=
     MONGODB_URI=
     ADMIN_EMAIL=
     NODE_ENV=

     CLOUDINARY_API_KEY=
     CLOUDINARY_API_SECRET=
     CLOUDINARY_CLOUD_NAME=


     CLERK_PUBLISHABLE_KEY=
     CLERK_SECRET_KEY=
     ```
   - **Frontend**: Create a `.env.local` file in the `frontend` directory:
     ```env
     VITE_CLERK_PUBLISHABLE_KEY=
     ```

4. ▶️ Start the backend and frontend servers:

   ```bash
   spotify-clone $ npm run start
   ```

5. 🌐 Open the application in your browser:

   ```
   http://localhost:3000 (if NODE_ENV=development)
   http://localhost:5000 (if NODE_ENV=production)
   ```

---

## 🎯 Usage

- **🔐 Sign In**: Use 🌐 Google authentication to sign in.
- **⬆️ Upload Music**: Admins can upload new 🎵 tracks to ☁️ Cloudinary.
- **▶️ Play Music**: Users can 🎶 play tracks and view the 🕒 real-time activity of other users.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. 🍴 Fork the repository.
2. 🌿 Create a new branch.
3. ✏️ Make your changes and 💾 commit them.
4. 🔼 Push your branch and 📨 create a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
