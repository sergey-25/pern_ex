import React, {useState} from 'react';
import {Button, Grid, IconButton, TextField} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import api from "../api/api";
import {useParams} from "react-router-dom";

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
    const {id} = useParams();

    const [values, setValues] = useState([...initialValues])

    const [fullName, setFullName] = useState("");
    const [color, setColor] = useState("");
    const [characteristics, setCharacteristics] = useState("");
    const [term, setTerm] = useState("");
    const [size, setSize] = useState("");
    const [amount, , setAmount] = useState("");
    const [link, setLink] = useState("");
    const [orderComment, setOrderComment] = useState("");
    const [orderRecipient, setOrderRecipient] = useState("");


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
    const seveVal = () => {
        setValues(values)
        console.log(values)
    }

    const handleSubmitDetails = async (e) => {
        e.preventDefault()
        const newDetail = {
            full_name: fullName,
            color
        }
        try {
            const response = await api.post(`/${id}/addDetail`, newDetail);
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <Button onClick={seveVal}>save</Button>
            <form>

                {/*{values.map((value, index) =>{*/}
                {/*    return(*/}
                {/*        <>*/}

                <Grid container spacing={2} direction="column">
                    <Grid item><p></p></Grid>
                    <Grid item>
                        <TextField
                            name='full_name'
                            value={fullName}
                            onChange={e => {
                                setFullName(e.target.value);
                            }}
                            label='Name'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="color"
                            value={color}
                            onChange={e => {
                                setColor(e.target.value);
                            }}
                            label='Address'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="characteristics"
                            value={characteristics}
                            // onChange={event => handleChange(index, event)}
                            label='Recipient'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="term"
                            value={term}
                            // onChange={event => handleChange(index, event)}
                            label='Comment'
                            variant="standard"/>
                    </Grid>


                    <Grid item>
                        <TextField
                            name="size"
                            value={size}
                            // onChange={event => handleChange(index, event)}
                            label='Comment'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="amount"
                            value={amount}
                            // onChange={event => handleChange(index, event)}
                            label='Comment'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="link"
                            value={link}
                            // onChange={event => handleChange(index, event)}
                            label='Comment'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="ordercomment"
                            value={orderComment}
                            // onChange={event => handleChange(index, event)}
                            label='Comment'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="orderrecipient"
                            value={orderRecipient}
                            // onChange={event => handleChange(index, event)}
                            label='Comment'
                            variant="standard"/>
                    </Grid>

                </Grid>
                {/*{*/}
                {/*    index >= 0 ?*/}
                {/*        <IconButton color="error"*/}
                {/*                onClick={() => removeFormFields(index)}>*/}
                {/*            <DeleteForeverIcon/>*/}
                {/*        </IconButton>*/}
                {/*        : null*/}
                {/*}*/}
                {/*</>*/}
                {/*    )*/}
                {/*})}*/}


            </form>
            <Button type="button" onClick={handleSubmitDetails}>
                Додати
            </Button>
        </div>
    );
}

export default DetailForm;