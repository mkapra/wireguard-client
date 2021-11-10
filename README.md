# WGCM official web-based GUI client
This project was designed from ground up to work with the WGCM API. It is the official frontend application for interacting and working with the WGCM API.


## 1. Current State
The frontend application in it's current state of development is further ahead than the actual API and therefore may change drastically in behaviour and function. Most of the code written is POC or Mockup.

(This is the first thing with a real-world use that [I](https://github.com/CC3301) have ever writte. So please forgive any bad-practice or insecure code, the entire project will be refactored probably multiple times in its growth process)

## 2. WGCM API
The API and therefore the integral part and core idea of this project is developed seperately to this frontend, which is part of the reason that this code includes a simple Python3 Flask App which is able to provide mockup data and support a few core features such as API-side version returns and API-side connection checks and token validation. Until this is implemented in the actual API code anyone who wants to test this application will have to run the local Flask App or (depending on the test case) install the latest version of the API.

## 3. Installation
Installation is dead simple. Python3 and the **http.server** module are required. The repository includes a tiny shell script which aids in running the GUI. You can pass a listen-port as the first and only parameter.

> ./run_gui.sh