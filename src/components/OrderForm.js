import React, {useContext, useState} from 'react';
import api from '../api/api'
import {Button, Grid, TextField} from "@mui/material";
import {OrderContext} from "../context/OrderContext";
import DetailForm from "./DetailForm";


// const initialState = {
//     name: '',
//     address: '',
//     recipient: '',
//     comment: ''
// };

function OrderForm(props) {


    const {setIsOpen} = props;
    const {addOrder} = useContext(OrderContext);

    // const [orders, setOrders] = useState([initialState]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [recipient, setRecipient] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post("/", {
                name,
                address,
                recipient,
                comment
            });
            addOrder(response.data.data);
        setIsOpen(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <TextField
                            value={name}
                            onChange={e => {
                                setName(e.target.value);
                            }}
                            label='Name'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            value={address}
                            onChange={e => {
                                setAddress(e.target.value);
                            }}
                            label='Address'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            value={recipient}
                            onChange={e => {
                                setRecipient(e.target.value);
                            }}
                            label='Recipient'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            value={comment}
                            onChange={e => {
                                setComment(e.target.value);
                            }}
                            label='Comment'
                            variant="standard"/>
                    </Grid>
                </Grid>
            </form>
            <DetailForm/>
            <Button onClick={handleSubmit}>SAVE</Button>
            <Button onClick={() => setIsOpen(false)}>CLOSE</Button>
        </div>
    );
}

export default OrderForm;