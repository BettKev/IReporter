# Red-Flag & Intervention Records Management System

This is a full-stack web application that allows users to create, edit, and delete red-flag and intervention records. Users can provide geolocation, images, and videos to support their claims, while admins can manage and update record statuses. The system includes real-time notifications and integrates Google Maps to display record locations.

---

## Features   

### Important Features

1.user can sign up and login 
2. Users can add images to their records. 
3. Users can add videos to their records. 
4. Google Maps displays markers for record locations. 
5. Users receive real-time email notifications when the status changes. 
6. Users can only update the geolocation of a record before it is marked as "Under Investigation," "Rejected," or "Resolved." ✅
7. Users can only edit or delete records before they are marked as "Under Investigation," "Rejected," or "Resolved." ✅
8. Only the user who created a record can delete it. ✅

---

## Tech Stack

### Backend (Flask)

- Python 3.8+
- Flask & Flask-related dependencies
- PostgreSQL for the  database)
- Flask-Mail (for email notifications)

### Frontend (React)

- React.js with Vite
- Bootstrap & Tailwind CSS
- open street map  API
- google sign up and login API

---

## Setup Instructions

### Prerequisites

- Python 3.8+
- Node.js (v16+ recommended)
- PostgreSQL
- Redis (for notifications)

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/BettKev/IReporter
   cd Ireporter

   ```

2. **for BACKEND Create a virtual environment and activate it:**

   *Cd  Backed  
   *```sh
       python3 -m venv venv
       source venv/bin/activate 
    ```


3. **Initialize the database:**

   ```sh
   flask db upgrade
   ```

4. **Run the Flask server:**

   ```sh
   flask run --debug
   ```

   The backend should now be running at `http://127.0.0.1:5000/`.

     ### Frontend Setup

5 **Navigate to the frontend directory:**

   ```sh
   cd ../frontend
   ```

7. **Install dependencies:**

   ```sh
   npm install
  
   ```

8. **Set up environment variables:** Create a `.env` file in the frontend root directory and add:

   ```env
   REACT_APP_API_URL=http://127.0.0.1:5000/api
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

9. **Start the development server:**

   ```sh
   npm start
 

   The frontend should now be running at `http://localhost:3000/`. or  https://i-reporter-two.vercel.app/

---

## Running Tests

### Backend

```sh
pytest
```


## ALL THE LINKS 

## Github:
https://github.com/BettKev/IReporter

### Backend Deployment:


### Frontend Deployment

https://i-reporter-two.vercel.app/

### Slides
https://www.canva.com/design/DAGgxBDjMKE/4_DVOWR2Vt2j0XLFR5BXmg/edit

### dblink  tables 
https://drawsql.app/teams/moringa-school-3/diagrams/iregister

### canva project sketch
https://www.canva.com/design/DAGfV1GqTlA/UmPqZtskp2FBJbf-qeU7tw/edit

## Challanges faced
- 1.  had a lot of trouble with twilio sms since the charges were coastly

### Contributors
- Bett Kevin
- David Parsley
- Emmaculate Mwikali


---

## License

This project is licensed under the MIT License.

