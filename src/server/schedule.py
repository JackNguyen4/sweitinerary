from restaurants import get_restaurants
from bars import get_bars
from shopping_malls import get_shopping
import random


def set_schedule(coordinates, desired_price, radius):
    schedule = {"12:00 PM": "", "1:00 PM": "", "2:00 PM": "",
                          "3::00 PM": "", "4:00 PM": "", "5:00 PM": "", "6:00 PM": "", "8:00 PM": ""}

    restaurant = random.choice(get_restaurants(coordinates, desired_price, radius))
    shopping = random.choice(get_shopping(coordinates, radius))
    bar = random.choice(get_bars(coordinates, desired_price, radius))

    schedule["12:00 PM"] = restaurant
    schedule["2:00 PM"] = shopping
    schedule["8:00 PM"] = bar

    return schedule

print(set_schedule("34.00314,-84.08807", 2, 5000))