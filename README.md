
## Weather App

A simple weather application that fetches real-time weather data from the OpenWeatherMap API. Users can enter the name of a city to get current weather details such as temperature, humidity, and weather conditions.


## Features

- Fetches weather data using the OpenWeatherMap API.
- Displays city name, temperature (in Celsius), humidity, and a weather description.
- Uses a server to securely handle API key requests.
 - Modern and responsive UI with clean styles.

 ## Technologies Used
 - Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- API: OpenWeatherMap API
 - Environment Variables: .env file for securely storing the API key


## Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (version 12 or higher)
 - npm (comes with Node.js)
## Installation

Clone this repository:

```bash
  git clone https://github.com/your-username/weather-app.git
  cd weather-app
```
Install dependencies:
```bash
  npm install

```
Create a ```.env``` file in the root of the project and add your OpenWeatherMap API key:
```bash
  API_KEY=your_openweathermap_api_key

```
Ensure your file structure looks like this:
```bash
  weather-app/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── index.js
├── server/
│   └── server.js
├── .env
├── package.json
├── README.md

```
## Usage/Examples

Start the server:
```bash
   node server/server.js

```
Open your browser and navigate to:
```bash
   http://localhost:3000

```
Enter a city name in the input box and click Get Weather to fetch weather details.


## API Integration
This application uses the OpenWeatherMap API to fetch real-time weather data. Ensure you have a valid API key added to the ```.env``` file.
## Acknowledgements

 - OpenWeatherMap API
 - Node.js
 - Express.js


