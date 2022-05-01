import requests
import json
from bs4 import BeautifulSoup as bs

URL = "https://www.dummies.com/"
response = requests.get(URL)
soup = bs(response.text, "lxml")
data = json.loads(soup.select_one("#state-object-element").text)
open("data.json", "w").write(json.dumps(data, indent=2))