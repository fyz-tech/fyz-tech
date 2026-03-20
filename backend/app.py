from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import certifi
import jwt
import datetime
import bcrypt
from functools import wraps
from bson.objectid import ObjectId
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

SECRET_KEY = os.getenv("SECRET_KEY")
app.config["SECRET_KEY"] = SECRET_KEY

# ================= MongoDB Connection =================


client = MongoClient(
    os.getenv("MONGO_URI"),
    tlsCAFile=certifi.where()
)

db = client["fyztech"]

users = db["users"]
applications = db["applications"]
contacts = db["contacts"]
subscribers = db["subscribers"]

print("MongoDB Connected Successfully")


# ================= JWT AUTH =================

def token_required(f):

    @wraps(f)
    def decorated(*args, **kwargs):

        token = request.headers.get("Authorization")

        if not token:
            return jsonify({"message": "Token missing"}), 403

        try:
            token = token.replace("Bearer ", "")
            jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        except:
            return jsonify({"message": "Invalid token"}), 403

        return f(*args, **kwargs)

    return decorated


# ================= REGISTER =================

@app.route("/register", methods=["POST"])
def register():

    data = request.json

    hashed = bcrypt.hashpw(data["password"].encode("utf-8"), bcrypt.gensalt())

    user = {
        "name": data["name"],
        "email": data["email"],
        "phone": data["phone"],
        "password": hashed
    }

    users.insert_one(user)

    return jsonify({"message": "User Registered"})


# ================= LOGIN =================

@app.route("/login", methods=["POST"])
def login():

    data = request.json

    user = users.find_one({"email": data["email"]})

    if not user:
        return jsonify({"message": "User not found"}), 404

    if bcrypt.checkpw(data["password"].encode("utf-8"), user["password"]):

        token = jwt.encode({
            "user_id": str(user["_id"]),
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        }, SECRET_KEY, algorithm="HS256")

        return jsonify({
            "message": "Login success",
            "token": token
        })

    return jsonify({"message": "Invalid password"}), 401


# ================= APPLY COURSE =================

@app.route("/apply", methods=["POST"])
def apply():

    data = request.json

    application = {
        "name": data["name"],
        "email": data["email"],
        "phone": data["phone"],
        "course": data["course"],
        "created_at": datetime.datetime.utcnow()
    }

    applications.insert_one(application)

    return jsonify({"message": "Application submitted"})


# ================= CONTACT FORM =================

@app.route("/api/contact", methods=["POST"])
def contact():

    data = request.json

    contact_data = {
        "name": data.get("name"),
        "email": data.get("email"), 
        "phone": data.get("phone"),
        "company": data.get("company"),
        "message": data.get("message"),
        "created_at": datetime.datetime.utcnow()
    }

    contacts.insert_one(contact_data)

    return jsonify({"message": "Form submitted successfully"})


# ================= EMAIL SUBSCRIBE =================

@app.route("/api/subscribe", methods=["POST"])
def subscribe():

    data = request.json
    email = data.get("email")

    if not email:
        return jsonify({"message": "Email required"}), 400

    # Duplicate check
    if subscribers.find_one({"email": email}):
        return jsonify({"message": "Already subscribed"})

    subscribers.insert_one({
        "email": email,
        "created_at": datetime.datetime.utcnow()
    })

    return jsonify({"message": "Subscribed successfully"})


# ================= ADMIN USERS =================

@app.route("/admin/users", methods=["GET"])
@token_required
def get_users():

    data = []

    for user in users.find():
        user["_id"] = str(user["_id"])
        del user["password"]
        data.append(user)

    return jsonify(data)


# ================= DELETE USER =================

@app.route("/admin/delete/<id>", methods=["DELETE"])
@token_required
def delete_user(id):

    users.delete_one({"_id": ObjectId(id)})

    return jsonify({"message": "User deleted"})


# ================= VIEW APPLICATIONS =================

@app.route("/admin/applications", methods=["GET"])
@token_required
def view_applications():

    data = []

    for app_data in applications.find():
        app_data["_id"] = str(app_data["_id"])
        data.append(app_data)

    return jsonify(data)


# ================= RUN =================

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)