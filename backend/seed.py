from app import app
from models import db, Users, Admins, RedFlags, Interventions
from werkzeug.security import generate_password_hash
from datetime import datetime
from geopy.geocoders import Nominatim
import random

# Initialize geocoder
geolocator = Nominatim(user_agent="seed.py")

# Function to get coordinates from a location name
def get_coordinates(location):
    location_obj = geolocator.geocode(location)
    if location_obj:
        return (location_obj.latitude, location_obj.longitude)
    return None

# List of Nairobi locations
nairobi_locations = [
    "Nairobi, Westlands", "Nairobi, Karen", "Nairobi, Lavington",
    "Nairobi, Kileleshwa", "Nairobi, Kilimani", "Nairobi, Eastleigh",
    "Nairobi, South B", "Nairobi, South C", "Nairobi, Parklands",
    "Nairobi, CBD"
]

with app.app_context():

    # Delete all rows in the tables
    RedFlags.query.delete()
    Interventions.query.delete()
    Users.query.delete()
    Admins.query.delete()

    # Create empty lists
    users = []
    red_flags = []
    interventions = []
    admins = []

    password = "1234"

    # Seed Users
    for i in range(10):
        users.append(Users(
            first_name=f"User{i+1}",
            last_name=f"Last{i+1}",
            email=f"user{i+1}@example.com",
            phone=random.randint(1000000000, 9999999999),
            password=generate_password_hash(password),
            profile_picture="https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6830.jpg?w=740"
        ))

    # Seed Admins
    for i in range(3):
        admins.append(Admins(
            first_name=f"Admin{i+1}",
            last_name=f"AdminLast{i+1}",
            email=f"admin{i+1}@example.com",
            phone=random.randint(1000000, 9999999),
            password=generate_password_hash(password),
            profile_picture="https://img.freepik.com/premium-photo/memoji-african-american-man-white-background-emoji_826801-6858.jpg?w=740"
        ))

    # Seed RedFlags
    for i in range(15):
        location = random.choice(nairobi_locations)
        coordinates = get_coordinates(location)
        red_flags.append(RedFlags(
            title=f"Red Flag Title {i+1}",
            description=f"Description for red flag {i+1}",
            image="red_flag_image.jpg",
            video="red_flag_video.mp4",
            created_at=datetime.utcnow(),
            location=location,
            coordinates=f"{coordinates[0]}, {coordinates[1]}" if coordinates else "Unknown",
            status="active",
            user_id=random.randint(1, 10)
        ))

    # Seed Interventions
    for i in range(15):
        location = random.choice(nairobi_locations)
        coordinates = get_coordinates(location)
        interventions.append(Interventions(
            title=f"Intervention Title {i+1}",
            description=f"Description for intervention {i+1}",
            image="intervention_image.jpg",
            video="intervention_video.mp4",
            created_at=datetime.utcnow(),
            location=location,
            coordinates=f"{coordinates[0]}, {coordinates[1]}" if coordinates else "Unknown",
            status="active",
            user_id=random.randint(1, 10)
        ))

    # Insert into database
    db.session.add_all(users)
    db.session.add_all(admins)
    db.session.add_all(red_flags)
    db.session.add_all(interventions)

    # Commit transaction
    db.session.commit()

    print("Database seeded successfully!")
