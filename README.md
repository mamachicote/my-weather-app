# Getting Started with My Wather App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Learn More
This application was developed with React JS, Axios and Material UI.
Separate components were created for the Selector, Weather Card and Weather Accordeon. Individualizing styles and responsibilities for greater code organization and readability.
The project was developed with the idea that the first city to display is the user's current location. In case you do not accept the use of the location of the browser. You will have the option to select any of the 5 cities enabled in the selector.

## Folder Structure

```
my-app/
  node_modules/
  README.md
  package.json
  public/
    index.html
    favicon.png
  src/
    api/
    components/
        CitySelect/
            CitySelect.jsx
        WeatherAccordeon/
            WeatherAccordeon.jsx
        WeatherCard/
            WeatherCard.jsx
    App.js
    constants.js
    index.css
    index.js
```