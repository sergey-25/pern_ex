import React from 'react';
import {Card, Typography} from "@mui/material";

import StarsRating from "./StarsRating";

function Reviews(props) {
    return (
        <div>
            <Card>
                <Typography>sfdsf</Typography>
                <div><StarsRating rating={2}/></div>
                <div>
                    <p>fsfadsgagasdgdsd</p>
                </div>
            </Card>
        </div>
    );
}

export default Reviews;