// @Packages
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { LocationOnOutlined } from '@mui/icons-material';

const WeatherCard = (props) => {
  const { data, loading } = props;

  const isMobile = useMediaQuery((theme) => theme?.breakpoints.up('sm'), {
    noSsr: true,
  });

  const cardSytle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    minHeight: isMobile ? '200px' : '375px',
    padding: '10px',
    width: isMobile ? '500px' : '380px',
  };

  const mainInfoStyle = {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: isMobile ? 'row' : 'column',
    marginBottom: '50px',
    width: '100%',
  };

  const mainInfoListStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  };

  const mainInfoTempStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: isMobile ? 0 : '10px',
    width: '100%',
  };

  const detailStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'space-between',
  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: isMobile ? '45%' : '100%',
  };

  return (
    <Card className="weather-card" sx={cardSytle}>
      {loading ? (
        <CircularProgress sx={{ margin: 'auto' }} />
      ) : (
        <Box>
          <Box className="weather-card__main-info" sx={mainInfoStyle}>
            <Box sx={mainInfoListStyle}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6">
                  {data?.name} ({data?.sys?.country})
                </Typography>
                <LocationOnOutlined fontSize="small" />
              </Box>
              <Typography
                color="text.disabled"
                align="left"
                sx={{
                  ':first-letter': {
                    textTransform: 'uppercase',
                  },
                }}
              >
                {data?.weather[0]?.description}
              </Typography>
              <Typography align="left" color="text.disabled">
                Min: {Math.round(data?.main?.temp_min)}°C / Max:{' '}
                {Math.round(data?.main?.temp_max)}°C
              </Typography>
            </Box>
            <Box sx={mainInfoTempStyle}>
              <Typography variant="h1">
                {Math.round(data?.main?.temp)}°C
              </Typography>
              <img
                src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
                alt="temp-icon"
              />
            </Box>
          </Box>
          <Box className="weather-card__main-details" sx={detailStyle}>
            <Box sx={infoStyle}>
              <Typography>Humedad</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                {Math.round(data?.main?.humidity)}%
              </Typography>
            </Box>
            <Box sx={infoStyle}>
              <Typography>Sensación Térmica</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                {Math.round(data?.main?.feels_like)}°C
              </Typography>
            </Box>
            <Box sx={infoStyle}>
              <Typography>Nubocidad</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                {Math.round(data?.clouds?.all)}%
              </Typography>
            </Box>
            <Box sx={infoStyle}>
              <Typography>Viento</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                {Math.round(data?.wind?.speed)} Km/h
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Card>
  );
};

WeatherCard.defaultProps = {
  data: {},
  loading: true,
};

WeatherCard.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};

export default WeatherCard;
