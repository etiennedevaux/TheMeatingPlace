import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import DESCENDING, PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)

categories = mongo.db.categories.find().sort("sequence", 1)
recipes = list(mongo.db.recipes.find({"upload_date":{"$ne": None}}))
users = mongo.db.users.find()

print("Hello")


existing_user = mongo.db.users.find_one({"username": "carys"})

print(existing_user)

for recipe in recipes:
    recipe['family_name']=mongo.db.users.find_one({"username": recipe["created_by"]})["family_name"]
    recipe['given_name']=mongo.db.users.find_one({"username": recipe["created_by"]})["given_name"]

print(recipes)
