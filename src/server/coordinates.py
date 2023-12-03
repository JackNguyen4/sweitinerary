import os

from smartystreets_python_sdk import SharedCredentials, StaticCredentials, exceptions, ClientBuilder
from smartystreets_python_sdk.us_street import Lookup as StreetLookup



def get_coords(street,city,state,zipcode):
   
    auth_id = ['12ff3d2b-c664-197d-b975-fd4c7e178a46']
    auth_token = ['ObEcKV6SVmEAS8QRiMtd']

    credentials = StaticCredentials(auth_id, auth_token)
    client = ClientBuilder(credentials).build_us_street_api_client()

    lookup = StreetLookup()
    lookup.addressee = "John Doe"
    lookup.street = street
    lookup.city = city
    lookup.state = state
    lookup.zipcode = zipcode

    try:
        client.send_lookup(lookup)
    except exceptions.SmartyException as err:
        print(err)
        return

    result = lookup.result

    if not result:
        print("No candidates. This means the address is not valid.")
        return

    first_candidate = result[0]
    
    latitude = format(first_candidate.metadata.latitude)
    longitude = format(first_candidate.metadata.longitude)
    latlong = str(latitude+","+longitude)
    
    return latlong
print(get_coords("1745 Meadow Forest Ln","Duluth","Georgia","30097"))