import json
import pytest
from models import db, Users, Admins, TokenBlocklist
from werkzeug.security import generate_password_hash,check_password_hash
from flask_jwt_extended import create_access_token
from unittest.mock import patch

def test_register_user(client, app):
    """Test user registration API."""
    with app.app_context():
        # Test successful registration
        new_user_data = {
            "first_name": "John",
            "last_name": "Doe",
            "email": "johndoe@example.com",
            "password": "securepassword",
            "phone": "987654321",
            "profile_picture": "https://example.com/profile.jpg"
        }

        response = client.post('/user',  # Directly use the route path
                       data=json.dumps(new_user_data),
                       content_type='application/json')

        
        assert response.status_code == 200
        assert response.json["msg"] == "User Registered Successfully"
        
        # Check if user exists in database
        user = Users.query.filter_by(email=new_user_data["email"]).first()
        assert user is not None
        assert user.first_name == "John"
        assert check_password_hash(user.password, "securepassword")

        # Test duplicate email registration
        response = client.post('/user',  # Use actual route path
                       data=json.dumps(new_user_data),
                       content_type='application/json')

        
        assert response.status_code == 404
        assert response.json["error"] == "Email exists"

        # Test duplicate phone registration
        new_user_data["email"] = "newemail@example.com"  # Change email to avoid email conflict
        response = client.post('/user',  # Use actual route path
                       data=json.dumps(new_user_data),
                       content_type='application/json')
        
        assert response.status_code == 404
        assert response.json["error"] == "Phone Number exists"
