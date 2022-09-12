// @Packages
import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const WeatherAccordeon = (props) => {
  const { data, loading } = props;

  const isMobile = useMediaQuery((theme) => theme?.breakpoints.up('sm'), {
    noSsr: true,
  });

  const getWeekday = () => {
    const date = new Date();

    const week = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];

    const day = date.getDay() + 1;

    const nextDays = week.slice(day, week.length).concat(week.slice(0, 5));

    return nextDays;
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: isMobile ? '250px' : '425px',
    width: isMobile ? '520px' : '400px',
  };

  const detailStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'space-between',
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 'auto',
    marginTop: isMobile ? 0 : '10px',
    width: '100%',
  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: isMobile ? '45%' : '100%',
  };

  return (
    <Box className="extended-weather-container" sx={containerStyle}>
      {loading ? (
        <Card
          className="extended-weather-container__loading-card"
          sx={containerStyle}
        >
          <CircularProgress sx={{ margin: 'auto' }} />
        </Card>
      ) : (
        <Box>
          {data?.list?.splice(0, 5).map((item, index) => (
            <Accordion
              className="extended-weather-container__accordion"
              key={index}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                className="extended-weather-container__accordion-summary"
                expandIcon={<ExpandMore />}
                id="panel1a-header"
              >
                <Typography variant="subtitle1" align="left">
                  {getWeekday()[index]}
                </Typography>
                <Box sx={contentStyle}>
                  <Typography variant="h6">
                    {Math.round(item?.main?.temp)}°C
                  </Typography>
                  <img
                    src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                    alt="temp-icon"
                    style={{ width: '30px' }}
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails
                className="extended-weather-container__accordion-details"
                sx={detailStyle}
              >
                <Box sx={infoStyle}>
                  <Typography>Temperatura Mínima</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {Math.round(item?.main?.temp_min)}°C
                  </Typography>
                </Box>
                <Box sx={infoStyle}>
                  <Typography>Temperatura Máxima</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {Math.round(item?.main?.temp_max)}°C
                  </Typography>
                </Box>
                <Box sx={infoStyle}>
                  <Typography>Humedad</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {Math.round(item?.main?.humidity)}%
                  </Typography>
                </Box>
                <Box sx={infoStyle}>
                  <Typography>Sensación Térmica</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {Math.round(item?.main?.feels_like)}°C
                  </Typography>
                </Box>
                <Box sx={infoStyle}>
                  <Typography>Nubocidad</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {Math.round(item?.clouds?.all)}%
                  </Typography>
                </Box>
                <Box sx={infoStyle}>
                  <Typography>Viento</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {Math.round(item?.wind?.speed)} Km/h
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Box>
  );
};

WeatherAccordeon.defaultProps = {
  data: {},
  loading: true,
};

WeatherAccordeon.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};

export default WeatherAccordeon;
