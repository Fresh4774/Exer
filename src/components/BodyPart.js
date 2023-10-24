import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #fff', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <Typography fontSize="34px" fontWeight="bold" fontFamily="Alegreya" color="#fff" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
