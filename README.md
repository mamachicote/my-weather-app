# Getting Started with My Wather App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

It is necessary to run this command for the correct installation of all the packages necessary to run the application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Learn More
This application was developed with React JS, Axios and Material UI.
Separate components were created for the Selector, Weather Card and Weather Accordeon. Individualizing styles and responsibilities for greater code organization and readability.

The user will have the possibility to select between several cities and also enable access to their browser location, they will be able to view their location data in real time.

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