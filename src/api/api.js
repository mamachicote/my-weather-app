import axios from 'axios';
import { API_URL_EXTEND, API_URL_CURRENT, API_KEY } from './constants';

export const getCurrentWeather = (lat, lon, setData, setLoading) => {
  setLoading(true);
  setTimeout(() => {
    axios
      .get(
        `${API_URL_CURRENT}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
      )
      .then((response) => {
        setData(response?.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, 2000);
};

export const getExtendedWeather = (lat, lon, setData, setLoading) => {
  setLoading(true);
  setTimeout(() => {
    axios
      .get(
        `${API_URL_EXTEND}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setData(response?.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, 2000);
};
