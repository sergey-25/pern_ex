import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";

const initialValues = [{
    fullname: '',
    color: '',
    characteristics: '',
    term: '',
    size: '',
    amount: '',
    link: '',
    ordercomment: '',
    orderrecipient: '',
}
];


function DetailForm(props) {

    const[values, setValues] = useState([...initialValues])

    // const [fullname, setFullName] = useState("");
    // const [color, setColor] = useState("");
    // const [characteristics, setCharacteristics] = useState("");
    // const [term, setTerm] = useState("");
    // const [size, setSize] = useState("");
    // const [amount, , setAmount] = useState("");
    // const [link, setLink] = useState("");
    // const [ordercomment, setOrderComment] = useState("");
    // const [orderrecipient, setOrderRecipient] = useState("");


    const addFormFields = () => {
        setValues([...values, {initialValues}])
    }
    const removeFormFields = (i) => {
        let newFormValues = [...values];
        newFormValues.splice(i, 1);
        setValues(newFormValues)
    }
    const handleChange = (index, event) => {
        let formValues = [...values];
        formValues[index][event.target.name] = event.target.value;
        setValues(formValues);
    }

    return (
        <div>
            <form>

                {values.map((value, index) =>{
                    return(
                        <>

                            <Grid key={index} container spacing={2} direction="column">
                                <Grid item><p>{index +1}</p></Grid>
                                <Grid item>
                                    <TextField
                                        value={value.fullname}
                                        onChange={event => handleChange(index, event)}
                                        label='Name'
                                        variant="standard"/>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        value={value.color}
                                        onChange={event => handleChange(index, event)}
                                        label='Address'
                                        variant="standard"/>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        value={value.characteristics}
                                        onChange={event => handleChange(index, event)}
                                        label='Recipient'
                                        variant="standard"/>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        value={value.term}
                                        onChange={event => handleChange(index, event)}
                                        label='Comment'
                                        variant="standard"/>
                                </Grid>


                                <Grid item>
                                    <TextField
                                        value={value.size}
                                        onChange={event => handleChange(index, event)}
                                        label='Comment'
                                        variant="standard"/>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        value={value.amount}
                                        onChange={event => handleChange(index, event)}
                                        label='Comment'
                                        variant="standard"/>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        value={value.link}
                                        onChange={event => handleChange(index, event)}
                                        label='Comment'
                                        variant="standard"/>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        value={value.ordercomment}
                                        onChange={event => handleChange(index, event)}
                                        label='Comment'
                                        variant="standard"/>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        value={value.orderrecipient}
                                        onChange={event => handleChange(index, event)}
                                        label='Comment'
                                        variant="standard"/>
                                </Grid>

                            </Grid>
                            {
                                index >= 0 ?
                                    <button type="button" className="button remove"
                                            onClick={() => removeFormFields(index)}>Remove</button>
                                    : null
                            }
                        </>
                    )
                })}


            </form>
            <Button  type="button" onClick={() => addFormFields()}>+</Button>
        </div>
    );
}

export default DetailForm;