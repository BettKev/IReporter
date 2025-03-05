# Red-Flag & Intervention Records Management System (React Frontend)

This is the frontend for a system that allows users to create, edit, and delete red-flag and intervention records. Users can provide geolocation, images, and videos to support their claims, while admins can manage and update record statuses. The system includes real-time notifications and integrates Google Maps to display record locations.

## Features

### MVP Features
1. Users can create an account and log in. normal signup or social auth
2. Users can create a red-flag record (An incident linked to corruption). 
3. Users can create intervention records (A call for a government agency to intervene). 
4. Users can edit their red-flag or intervention records. 
5. Users can delete their red-flag or intervention records. 
6. Users can add geolocation (Lat Long Coordinates) to their records. 
7. Users can update the geolocation of their records. 
8. Admins can change the status of a record (Under Investigation, Rejected, Resolved). 

### Important Features
1. Users can add images to their records. 
2. Users can add videos to their records. 
3. The application displays Google Maps with markers for record locations. 
4. Users receive real-time email notifications when the status changes. 
5. Users receive real-time SMS notifications when the status changes. 🔄 (In Progress excluded by tm)

### Constraints
- Users can only update the geolocation of a record before it is marked as "Under Investigation," "Rejected," or "Resolved." 
- Users can only edit or delete records before they are marked as  "Resolved." 
- Only the user who created a record can delete it. 
- users can view all records for other users but cannot make changes on them , 
---

## Setup Instructions

### Prerequisites
- Node.js (v20+ recommended)
- npm 
- A running Flask backend

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://i-reporter-three.vercel.app/
   cd frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   npm shell
   npm run dev
 
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_API_URL=http://localhost:5173/
   google provide = id: "899188581344-8f98569b2lni1b6nu459j42v0eio029h.apps.googleusercontent.com"
 
   ```

4. **Start the development server:**
   ```sh
   npm run dev

 
   The app should now be running at `http://localhost:5137/`.


```

---

## Project Structure
```
/react-red-flag-system
│── src/
│   ├── components/     # footer,intervention ,layout,navbar,openstreetmap,redflag
│   ├── pages/          # about,adminprofile,home,login,nopage ,profile,resetpassword ,settingpage,signup,single intervention and redflag, userprofile
│   ├── context/       # intervention/redflag/user
│   ├── config/          # configuted our backend
│   ├── assets/         # Images and other static files
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point
│
│── public/             # Static assets
│── .env                # Environment variables
│── package.json        # Dependencies and scripts
│── README.md           # Project documentation
```

---

## Deployment
For production deployment
- Vercel 
- Docker & Docker Compose
- CI/CD pipeline for automated builds

---

## Contributors
-  https://github.com/DavidParsley
-  https://github.com/BettKev
-  https://github.com/EMMA-KAREN
---
