from flask import Flask, jsonify
from smartystreets_python_sdk import SharedCredentials, StaticCredentials, exceptions, ClientBuilder
from smartystreets_python_sdk.us_street import Lookup as StreetLookup

from schedule import set_schedule
from coordinates import get_coords

app = Flask(__name__)


@app.route('/parameters/<street>/<city>/<state>/<zipcode>/<radius>/<int:desired_price>')
def get_schedule(street, city, state, zipcode, radius, desired_price):

    coordinates = get_coords(street, city, state, zipcode)
    schedule = set_schedule(coordinates, desired_price, radius)
    json_schedule = jsonify(schedule)

    return json_schedule

print(get_schedule("1745 Meadow Forest Ln","Duluth","Georgia","30097", 2, 5000))
if __name__ == '__main__':
    app.run(debug=True)