Single-database configuration for Flask.
# Red-Flag & Intervention Records Management System (Flask Backend)

This is the backend for a system that allows users to create, edit, and delete red-flag and intervention records. Users can provide geolocation, images, and videos to support their claims, while admins can manage and update record statuses. The system includes real-time email  notifications for status changes and integrates Google Maps to display record locations.
rofile 
================
Every user can update their p

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
- Python 3.8+
- Flask & Flask-related dependencies
- PostgreSQL 



### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/BettKev/IReporter
   cd IReporter
   ```

2. **Create a virtual environment and activate it:**
   ```sh
   python3 -m venv venv
   source venv/bin/activate  
   ```

3. **Install dependencies:**
   ```sh
   pipenv install -r requirements.txt
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
        MAIL_SERVER='smtp.gmail.com'
        MAIL_USERNAME='iregisterweb@gmail.com'
        MAIL_PASSWORD='tabi jxvp xgmu acnx'
        JWT_SECRET_KEY="dgjhjhgjllijikmuh"
        SQLALCHEMY_DATABASE_URI='sqlite:///iRegister.db'
   ```

5. **Initialize the database:**
   ```sh
   flask db upgrade
   ```

6. **Run the Flask server:**
   ```sh
   flask run --debug
   ```
   The server should now be running at `http://127.0.0.1:5000/`. or deployment link:https://ireporter-8cyw.onrender.com

### Running Tests
To run tests, use:
```sh
pytest
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | /user` | User registration |
| POST | `/login` | User login |
| POST | `/google_login` | Google login |
| POST | `/red_flags` | Create a red-flag record |
| POST | `/intervention` | Create an intervention record |


| GET | `//current_user` | Retrieve the current user's information |
| GET | `/User` |fetch all users |
| GET | `/admin` | fetch all admin users |
| GET | `/red_flags` | Retrieve all red-flag records |
| GET | `/intervention` | Retrieve all intervention records |
| GET | `/intervention/<int:intervention_id>` |Fetch a single intervention for current user |
| GET | `/red_flag/<int:red_flag_id>` | Retrieve the current user's red-flag records |

| PATCH| `/user/update`  | Update the current user's information |
| PATCH| `/intervention/<int:intervention_id>`  | Intervention |
| PATCH| `/red_flag/<int:red_flag_id>`  | Update redflag |

| DELETE | `/user/<int:user_id>` | Delete the current user's account |
| DELETE | `/logout` | Delete the current user's account |
| DELETE | `/intervention/<int:intervention_id>` | Delete intervention |
| DELETE | `/red_flag/<int:red_flag_id>` | Delete redflag |


---

## Deployment
For production deployment link:https://ireporter-8cyw.onrender.com
used :- PostgreSQL 
used :- Flask
used :- Gunicorn (`gunicorn run:app`)


---

## Contributors
-  https://github.com/DavidParsley
-  https://github.com/BettKev
-  https://github.com/EMMA-KAREN
---


