// @Packages
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// @App
import { getCurrentWeather, getExtendedWeather } from './api/api';
import CitySelect from './components/CitySelect/CitySelect';
import WeatherAccordeon from './components/WeatherAccordeon/WeatherAccordeon';
import WeatherCard from './components/WeatherCard/WeatherCard';

// @Own
import { CITIES, CITIES_COORDS } from './constants';
import { createTheme } from './theme';

const App = () => {
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [extendedWeather, setExtendedWeather] = useState(null);

  const getLocation = () => {
    navigator?.geolocation?.getCurrentPosition(function (position) {
      setCoords(position.coords);
    });
  };

  const getThemeByTime = () => {
    const date = new Date();

    const time = date?.getHours();

    if (time > 18) {
      return 'dark';
    } else {
      return 'light';
    }
  };

  const handleSelect = (e) => {
    setCoords(CITIES_COORDS[e.target.value]);
  };

  const appStyles = {
    alignItems: 'center',
    backgroundColor: getThemeByTime() === 'light' ? '#e5e5e5' : '#0B0F19',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (coords) {
      getCurrentWeather(
        coords?.latitude,
        coords?.longitude,
        setCurrentWeather,
        setLoading
      );
      getExtendedWeather(
        coords?.latitude,
        coords?.longitude,
        setExtendedWeather,
        setLoading
      );
    }
  }, [coords]);

  useEffect(() => {
    if (currentWeather && extendedWeather) {
      setLoading(false);
    }
  }, [currentWeather, extendedWeather]);

  return (
    <ThemeProvider
      theme={createTheme({
        mode: getThemeByTime(),
      })}
    >
      <Box className="App" sx={appStyles}>
        <CitySelect
          handleReset={getLocation}
          handleSelect={handleSelect}
          options={CITIES}
        />
        <WeatherCard data={currentWeather} loading={loading} />
        <WeatherAccordeon data={extendedWeather} loading={loading} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
