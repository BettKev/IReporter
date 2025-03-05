from app import app
from models import db, Users, Admins, RedFlags, Interventions, TokenBlocklist, PasswordResetToken
from werkzeug.security import generate_password_hash
from datetime import datetime

# List of diverse locations across Kenya and Uganda with fixed coordinates
locations = [
    ("Nairobi, CBD", "-1.286389, 36.817223"),
    ("Mombasa, Nyali", "-4.043477, 39.668206"),
    ("Kisumu, Milimani", "-0.102206, 34.761711"),
    ("Nakuru, Lanet", "-0.303099, 36.080025"),
    ("Eldoret, Pioneer", "0.514277, 35.269779"),
    ("Thika, Makongeni", "-1.03326, 37.06933"),
    ("Nyeri, Ruring'u", "-0.416469, 36.951067"),
    ("Meru, Makutano", "0.046307, 37.655894"),
    ("Garissa, Township", "-0.456944, 39.646667"),
    ("Kitale, Milimani", "1.01575, 35.00632"),
    ("Kampala, Kololo", "0.313611, 32.581111"),
    ("Entebbe, Kitoro", "0.0517, 32.4469"),
    ("Jinja, Nalufenya", "0.4244, 33.2042"),
    ("Gulu, Pece", "2.7746, 32.2989"),
    ("Mbale, Wanale", "1.0646, 34.1794"),
    ("Mbarara, Kakoba", "-0.6072, 30.6545"),
    ("Fort Portal, Kabarole", "0.671, 30.2756"),
    ("Masaka, Kimaanya", "-0.3291, 31.7341"),
    ("Lira, Adyel", "2.2491, 32.8998"),
    ("Soroti, Pamba", "1.7146, 33.6111")
]

with app.app_context():

    # Delete all rows in the tables
    RedFlags.query.delete()
    Interventions.query.delete()
    Users.query.delete()
    Admins.query.delete()
    TokenBlocklist.query.delete()
    PasswordResetToken.query.delete()

    # Create empty lists
    users = []
    red_flags = []
    interventions = []
    admins = []

    password = "1234"

    # Seed Users with realistic names and emails
    users.append(Users(first_name="John", last_name="Doe", email="john.doe@gmail.com", phone=10786892, password=generate_password_hash(password), profile_picture="https://img.freepik.com/premium-vector/simple-cute-black-boy-ith-beard-icon-vector_960391-425.jpg?semt=ais_hybrid"))
    users.append(Users(first_name="Jane", last_name="Mwangi", email="jane.mwangi@example.com", phone=10886892, password=generate_password_hash(password), profile_picture="https://img.freepik.com/premium-vector/simple-cute-black-boy-ith-beard-icon-vector_960391-425.jpg?semt=ais_hybrid"))
    # ADMIN SEEDS (keep as is)
    admins.append(Admins(first_name="David", last_name="Parsley", email="davidparsley.kakhayanga@gmail.com", phone=None, password=generate_password_hash(password), profile_picture="https://img.freepik.com/premium-vector/simple-cute-black-boy-ith-beard-icon-vector_960391-425.jpg?semt=ais_hybrid", provider="email"))
    admins.append(Admins(first_name="Emmaculate", last_name="Mwikali", email="mwikaliemmaculate6@gmail.com", phone=None, password=generate_password_hash(password), profile_picture="https://img.freepik.com/premium-vector/simple-cute-black-boy-ith-beard-icon-vector_960391-425.jpg?semt=ais_hybrid", provider="email"))
    admins.append(Admins(first_name="Kevin", last_name="Bett", email="kevin.bett3@student.moringaschool.com", phone=None, password=generate_password_hash(password), profile_picture="https://img.freepik.com/premium-vector/simple-cute-black-boy-ith-beard-icon-vector_960391-425.jpg?semt=ais_hybrid", provider="email"))

    # Create 10 unique realistic red flags
    red_flags = [
        RedFlags(title="Corruption in Nairobi CBD", description="Bribery case reported at City Hall.", image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VKNGuiHlQQBShKImlueiggHaE8%26pid%3DApi&f=1&ipt=e50380860115ecfd7adc8e5e321f9ee96a1751a3245a4160abcba757628e05f5&ipo=images", video="corruption_nairobi.mp4", created_at=datetime.utcnow(), location=locations[0][0], coordinates=locations[0][1], status="active", user_id=1),
        RedFlags(title="Bribery in Mombasa", description="Police accused of taking bribes in Nyali.", image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3Tk8SJO1x30-5OlFiQ61-AHaDt%26pid%3DApi&f=1&ipt=75de01c33bf835f767bf97ee49eed749616214f732945af599c15eeb73e81bfd&ipo=images", video="bribery_mombasa.mp4", created_at=datetime.utcnow(), location=locations[1][0], coordinates=locations[1][1], status="active", user_id=2),
        RedFlags(title="Tribalism in Kisumu", description="Hiring practices discriminating by tribe in Milimani.", image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pVtBx7y-Usjou-UTGmaHCwHaFj%26pid%3DApi&f=1&ipt=bd826a6394d6586a02116c96b38a0c993e2e8f676641d8e7dd9fc5708d3532bc&ipo=images", video="tribalism_kisumu.mp4", created_at=datetime.utcnow(), location=locations[2][0], coordinates=locations[2][1], status="active", user_id=1),
        RedFlags(title="Nepotism in Nakuru", description="County government accused of favoring relatives.", image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vRgZFBmJPMs0B9loKWnCYQHaEK%26pid%3DApi&f=1&ipt=9284e8d7325898931b4ed60490457a5b3f621c70499cf752792c36062648032c&ipo=images", video="nepotism_nakuru.mp4", created_at=datetime.utcnow(), location=locations[3][0], coordinates=locations[3][1], status="active", user_id=2),
        RedFlags(title="Fraud in Eldoret", description="Fake business licenses issued in Pioneer.", image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.xBGZqW-q_95ZPBPLkj6SPAHaEK%26pid%3DApi&f=1&ipt=f02137eec475a9e2addb326f963d2e2495efa4b96367338f6230b3808d5562e3&ipo=images", video="fraud_eldoret.mp4", created_at=datetime.utcnow(), location=locations[4][0], coordinates=locations[4][1], status="active", user_id=1)
    ]

    # Create 10 unique realistic interventions
    interventions = [
        Interventions(title="Road Repair in Thika", description="Potholes in Makongeni need urgent fixing.", image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.c7c8krr6A196X-Y92jfJ9QHaE2%26pid%3DApi&f=1&ipt=7c5719eab76c4fd9fa07cbf5cb923a96bd60936fc6b2442b234270ffac8e0252&ipo=images", video="road_thika.mp4", created_at=datetime.utcnow(), location=locations[5][0], coordinates=locations[5][1], status="active", user_id=1),
        Interventions(title="Electricity Restoration in Nyeri", description="Power outage in Ruring'u.", image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H9cf1Nwks9K_QlMBXPC0rwHaEK%26pid%3DApi&f=1&ipt=96464a0f38cc18a78ba415d5d0b4b4db97e6a14eda1ca6ceeee49f6cfc1a41b0&ipo=images", video="electricity_nyeri.mp4", created_at=datetime.utcnow(), location=locations[6][0], coordinates=locations[6][1], status="active", user_id=2),
        Interventions(title="School Renovation in Meru", description="Makutano Primary School classrooms damaged.", image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmilehighcre.com%2Fwp-content%2Fuploads%2F2020%2F06%2FIMG_7687-scaled.jpg&f=1&nofb=1&ipt=2031377baddc7fd901ff8047fca3b0a6136f21b9ad12e5af78ecbc1993f1f5cc&ipo=images", video="school_meru.mp4", created_at=datetime.utcnow(), location=locations[7][0], coordinates=locations[7][1], status="active", user_id=1)
    ]

    db.session.add_all(users)
    db.session.add_all(admins)
    db.session.commit()
    
    db.session.add_all(red_flags)
    db.session.add_all(interventions)

    db.session.commit()

    print("Database seeded successfully!")
