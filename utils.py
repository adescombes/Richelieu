import requests
import shutil
import os
os.makedirs("data", exist_ok=True)
def download(item):
    url, filename = item
    if os.path.isfile(filename):
        return
    response = requests.get(url, stream=True)
    with open(filename, 'wb') as out_file:
        shutil.copyfileobj(response.raw, out_file)