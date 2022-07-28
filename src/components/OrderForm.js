import React, {useContext, useState} from 'react';
import api from '../api/api'
import {Button, Grid, IconButton, TextField} from "@mui/material";
import {OrderContext} from "../context/OrderContext";
import DetailForm from "./DetailForm";
import {useParams} from "react-router-dom";


// const initialState = {
//     name: '',
//     address: '',
//     recipient: '',
//     comment: ''
// };

function OrderForm(props) {


    const {id} = useParams();


    const {setIsOpen} = props;
    const {orders, setOrders, addDetails, details, setDetails, addOrder, initialValues} = useContext(OrderContext);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [recipient, setRecipient] = useState("");
    const [comment, setComment] = useState("");



    const [fullName, setFullName] = useState("");
    const [color, setColor] = useState("");
    const [characteristics, setCharacteristics] = useState("");
    const [term, setTerm] = useState("");
    const [size, setSize] = useState("");
    const [amount, , setAmount] = useState("");
    const [link, setLink] = useState("");
    const [orderComment, setOrderComment] = useState("");
    const [orderRecipient, setOrderRecipient] = useState("");




    const handleSubmit = async (e) => {
        e.preventDefault()
        const newOrder = {
            name,
            address,
            recipient,
            comment,
        }
        try {
            const response = await api.post("/", newOrder
                //     {
                //    full_name:fullName,
                //                 color,
                //                 name,
                //                 address,
                //                 recipient,
                //                 comment,
                // }
            );
            addOrder(response.data.data);

            console.log(orders.data)

            setIsOpen(false)
        } catch (error) {
            console.log(error.message)
        }
    };

    const handleSubmitDetails = async (e) => {
        e.preventDefault()
        // const newDetail = {
        //     full_name: fullName,
        //     color
        // }
        try {
            const response = await api.post(`/${id}/addDetail`, {
                full_name: fullName,
                color
            });
console.log(response.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleAddFields = () => {
        const values = [...orders];
        values.push({color: ''});
        setOrders(values);
    };

    // const handleRemoveFields = index => {
    //     const values = [...orders];
    //     values.splice(index, 1);
    //     setOrders(values);
    // };
    // const handleInputChange = (index, event) => {
    //     const values = [...orders];
    //     values[index][event.target.name] = event.target.value
    //
    //     setOrders(values);
    // };

    return (
        <div>
            <Button onClick={() => console.log(orders)}>conf</Button>
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


                    <div>
                        {/*<TextField*/}
                        {/*    value={orders.fullName}*/}
                        {/*    onChange={(event, index) => {*/}
                        {/*        handleChangInput(index, event);*/}
                        {/*    }}*/}
                        {/*    label='full_name'*/}
                        {/*    variant="standard"/>*/}
                        {/*{orders.map((order, index) => {*/}
                        {/*    return (*/}
                        {/*        <div key={index}>*/}
                        {/*            <TextField*/}
                        {/*                name="color"*/}
                        {/*                value={[order].color}*/}
                        {/*                onChange={(event,) => {*/}
                        {/*                    setColor[index] = event.target.value*/}
                        {/*                }}*/}
                        {/*                label='color'*/}
                        {/*                variant="standard"/>*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*})}*/}
                        <button
                            className="btn btn-link"
                            type="button"
                            onClick={() => handleAddFields()}
                        >
                            +
                        </button>
                    </div>

                </Grid>

            </form>
            <form>

                {/*{values.map((value, index) =>{*/}
                {/*    return(*/}
                {/*        <>*/}

                <Grid container spacing={2} direction="column">
                    <Grid item><p></p></Grid>
                    <Grid item>
                        <TextField
                            // name='full_name'
                            value={fullName}
                            onChange={e => {
                                setFullName(e.target.value);
                            }}
                            label='full_name'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            // name="color"
                            value={color}
                            onChange={e => {
                                setColor(e.target.value);
                            }}
                            label='color'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            // name="characteristics"
                            value={characteristics}
                            // onChange={event => handleChange(index, event)}
                            label='characteristics'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            // name="term"
                            value={term}
                            // onChange={event => handleChange(index, event)}
                            label='term'
                            variant="standard"/>
                    </Grid>


                    <Grid item>
                        <TextField
                            // name="size"
                            value={size}
                            // onChange={event => handleChange(index, event)}
                            label='size'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            // name="amount"
                            value={amount}
                            // onChange={event => handleChange(index, event)}
                            label='amount'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            // name="link"
                            value={link}
                            // onChange={event => handleChange(index, event)}
                            label='link'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            // name="ordercomment"
                            value={orderComment}
                            // onChange={event => handleChange(index, event)}
                            label='ordercomment'
                            variant="standard"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            // name="orderrecipient"
                            value={orderRecipient}
                            // onChange={event => handleChange(index, event)}
                            label='orderrecipient'
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
            <Button onClick={handleSubmitDetails}>save detail</Button>
            {/*<DetailForm/>*/}

            <Button onClick={handleSubmit}>SAVE</Button>
            <Button onClick={() => setIsOpen(false)}>CLOSE</Button>
        </div>
    );
}

export default OrderForm;