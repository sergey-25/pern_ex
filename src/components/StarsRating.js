import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

function StarsRating({rating}) {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<StarRoundedIcon key={i}/>)

        } else if(i === Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<StarHalfRoundedIcon key={i}/>)
        }
        else {
            stars.push(<StarBorderRoundedIcon key={i}/>)
        }
        return (
            <>
                {stars}
            </>
        );
    }
}
export default StarsRating;