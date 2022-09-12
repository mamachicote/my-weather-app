// @Packages
import React from 'react';
import PropTypes from 'prop-types';
import { Card, MenuItem, Select, useMediaQuery } from '@mui/material';

const CitySelect = (props) => {
  // eslint-disable-next-line react/prop-types
  const { handleSelect, handleReset, options } = props;

  const isMobile = useMediaQuery((theme) => theme?.breakpoints.up('sm'), {
    noSsr: true,
  });

  const cardStyle = {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px',
    width: isMobile ? '500px' : '380px',
  };

  return (
    <Card className="city-select" sx={cardStyle}>
      <Select
        className="city-select__input"
        defaultValue="Buenos Aires"
        fullWidth
        onChange={(e) => handleSelect(e)}
        size="big"
      >
        {/* eslint-disable-next-line react/prop-types */}
        {options?.map((opt, key) => (
          <MenuItem key={key} value={opt.label}>
            {opt.label}
          </MenuItem>
        ))}
        <MenuItem value="Tu ubicación" onClick={(e) => handleReset(e)}>
          Tu ubicación (Habilite el acceso a su ubicación)
        </MenuItem>
      </Select>
    </Card>
  );
};

Select.defaultProps = {
  options: [],
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  handleSelect: PropTypes.func,
  handleReset: PropTypes.func,
};

export default CitySelect;
