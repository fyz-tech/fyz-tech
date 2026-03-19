from pymongo import MongoClient

client = MongoClient("mongodb+srv://fyzadmin:Abisha123@cluster0.bvdotlh.mongodb.net/?appName=Cluster0")

db = client["fyztech"]
collection = db["users"]

data = {
    "name": "Abisha",
    "email": "abisha@example.com",
    "role": "admin"
}

collection.insert_one(data)

print("Data inserted successfully")