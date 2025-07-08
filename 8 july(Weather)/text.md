🌤️ Weather App Project: Fetch & Display Weather from OpenWeather API
📌 Objective:
Build a simple weather app that fetches real-time weather data from the OpenWeatherMap API and displays it to the user in a clean and user-friendly interface.

📋 Assignment Instructions:
1. Sign Up for OpenWeatherMap API
Go to https://openweathermap.org/api

Create a free account.

Generate an API key from your account dashboard.

2. Tools You Can Use
Frontend: HTML, CSS, JavaScript (Vanilla JS or any framework like React is allowed).

API: OpenWeatherMap (Current Weather Data API endpoint).

3. App Requirements
Your weather app must:

Have a search bar to input city names.

Fetch current weather data using the OpenWeather API.

Display the following information:

City name

Temperature (°C or °F)

Weather condition (e.g., Clear, Rain, Snow)

Humidity

Wind Speed

Weather icon (provided by API)

Handle invalid city names (e.g., show a message like "City not found").

Use CSS to style your app and make it visually appealing.

Be responsive (works on desktop and mobile).

4. Bonus Features (Optional)
Show a 5-day forecast.

🧪 Sample API Call

GET https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
Parameters:

q: City name

appid: Your API key

units: Use metric for Celsius or imperial for Fahrenheit

🗂️ Project Structure Example
weather-app/
│
├── index.html
├── style.css
└── script.js
📌 Explanation for Students
You're going to create a small but powerful app that uses real data from a live API. This project will help you learn and practice:

Working with APIs using fetch()

Asynchronous programming in JavaScript

Basic error handling

DOM manipulation

Creating a responsive UI using CSS


✅ Submission Guidelines
Submit your project folder (or GitHub repo link).

Include a README.md with:

Brief description of the app

How to run it

Screenshots 