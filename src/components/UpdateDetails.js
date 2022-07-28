import React from 'react';
import {Button} from "@mui/material";

function UpdateDetails({details}) {
    return (
        <div>UpdateDetails
            <Button onClick={()=>console.log(details)}>
                detail
            </Button>
        </div>
    );
}

export default UpdateDetails;