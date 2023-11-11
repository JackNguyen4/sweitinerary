import requests
import json
from flask import Flask, jsonify

app = Flask(__name__)
api_key = "AIzaSyCrCJALHO3GiiIdzSCOMUK3Pe31tSD8-Pk"

def get_shopping(coordinates,radius):
    location = coordinates
    url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={location}&radius={radius}&type=shopping_mall&key={api_key}"
    response = requests.get(url)
    if response.status_code == 200:
        data = json.loads(response.text)
        shopping_malls = data["results"]
        names=[]
        for shopping_mall in shopping_malls:
            name=shopping_mall["name"]
            names.append(name)
    else:
        return(f"Request failed with status code {response.status_code}")

    return names