import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AddReview(props) {


    const [values, setValues] = useState({
        fullname: '',
        color: '',
        characteristics: '',
        term: '',
        size: '',
        amount: '',
        link: '',
        ordercomment: '',
        orderrecipient: ''
        }
    );

    const changeHandler = e => {
        setValues( prevValues => {
            return { ...prevValues,[e.target.name]: e.target.value}
            console.log(setValues)
        }
        )}
    return (
        <div>
            <Button onClick={()=>console.log(values)}>dasdas</Button>
            <form>
                <TextField
                    name="fullname"
                    value={values.fullname}
                label='full name'
                variant='standard'
                onChange={changeHandler}
                />
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={value}
                            label="Age"

                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </form>
            <Button>SAVE</Button>
        </div>
    );
}

export default AddReview;