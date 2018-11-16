import requests
import shutil
import os
# os.makedirs("data", exist_ok=True)
def download(item):
    url, filename = item
    if os.path.isfile(filename):
        return
    response = requests.get(url)
    with open(filename, 'w', encoding='ISO-8859-1') as out_file:
        out_file.write(response.text)