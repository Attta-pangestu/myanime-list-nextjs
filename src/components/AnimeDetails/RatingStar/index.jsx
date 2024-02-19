
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function RatingStar({rating, setRating}) {
 
  return (
      <Rating
        name="simple-controlled"
        size="large"
        value={rating}
        onChange={(event, newValue) => {
          if (setRating) {
            setRating(newValue);
          }
        }}
      />
  );
}
