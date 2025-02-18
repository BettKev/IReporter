import json
import pytest
from models import db, Users, Admins, TokenBlocklist
from werkzeug.security import generate_password_hash
from flask_jwt_extended import create_access_token
# import io


@pytest.fixture
def test_user(app):
    """Fixture to create a test user."""
    with app.app_context():
        user = Users(
            first_name="Test",
            last_name="User",
            email="testuser@example.com",
            password=generate_password_hash("testpassword"),
            phone="123456789"
        )
        db.session.add(user)
        db.session.commit()
        yield user
        db.session.delete(user)
        db.session.commit()

@pytest.fixture
def test_admin(app):
    """Fixture to create a test admin."""
    with app.app_context():
        admin = Admins(
            first_name="Admin",
            last_name="User",
            email="admin@example.com",
            password=generate_password_hash("adminpassword"),
            phone="987654321"
        )
        db.session.add(admin)
        db.session.commit()
        yield admin
        db.session.delete(admin)
        db.session.commit()


def test_login_user(client, test_user):
    """Test user login endpoint."""
    response = client.post("/login", json={"email": test_user.email, "password": "testpassword"})
    data = response.get_json()

    assert response.status_code == 200
    assert "access_token" in data


def test_login_invalid_password(client, test_user):
    """Test login with incorrect password."""
    response = client.post("/login", json={"email": test_user.email, "password": "wrongpassword"})
    data = response.get_json()

    assert response.status_code == 404
    assert data["error"] == "Incorrect Password "


def test_login_nonexistent_user(client):
    """Test login with a non-existent email."""
    response = client.post("/login", json={"email": "nonexistent@example.com", "password": "password"})
    data = response.get_json()

    assert response.status_code == 404
    assert data["error"] == "Email not found for both User or Admin"


def test_current_user(client, test_user):
    """Test getting the current logged-in user."""
    access_token = create_access_token(identity=str(test_user.id), additional_claims={"is_user": True})


    headers = {"Authorization": f"Bearer {access_token}"}
    response = client.get("/current_user", headers=headers)
    data = response.get_json()

    assert response.status_code == 200, f"Unexpected response: {data}"

# def test_update_user(client, test_user):
#     """Test updating user information."""
#     access_token = create_access_token(identity=str(test_user.id), additional_claims={"is_user": True})

#     headers = {"Authorization": f"Bearer {access_token}"}

#     # Correctly formatted form data
#     data = {
#         "phone": (None, "987654321"),
#         "email": (None, "updateduser@example.com"),
#         "password": (None, "newsecurepassword123"),
#         "profile_picture": (io.BytesIO(b"fake_image_data"), "new_unique_picture.png")
#     }

#     # Send request as multipart/form-data (Flask will handle content-type)
#     response = client.patch("/user/update", data=data, headers=headers)

#     # Debugging: Print response if test fails
#     print(response.status_code, response.data.decode())

#     # Check response status
#     assert response.status_code == 200


from flask_jwt_extended import decode_token

def test_logout(client, app, test_user):
    """Test logging out a user."""
    access_token = create_access_token(identity=str(test_user.id), additional_claims={"is_user": True})

    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }

    response = client.delete("/logout", headers=headers)
    
    # Debugging: Print response for better error analysis
    print("Response status:", response.status_code)
    print("Response JSON:", response.get_json())

    data = response.get_json() or {}  # Ensure it's a dictionary
    
    assert response.status_code == 200
    assert "success" in data, f"Expected 'success' key, got: {data}"
    assert data["success"] == "Logged Out successfully"




