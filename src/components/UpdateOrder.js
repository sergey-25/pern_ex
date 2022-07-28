import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {OrderContext} from "../context/OrderContext";
import api from "../api/api";
import UpdateDetails from "./UpdateDetails";



function UpdateOrder() {

    const navigate = useNavigate();

    const {id} = useParams();
    const {orders, selectOrder, setSelectOrder} = useContext(OrderContext);


    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [recipient, setRecipient] = useState("");
    const [comment, setComment] = useState("");
    const [color, setColor] = useState("");



    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get(`/${id}`)
            console.log(response.data.data)
            setSelectOrder(response.data.data)
            setName(response.data.data.orders.name)
            setAddress(response.data.data.orders.address)
            setRecipient(response.data.data.orders.recipient)
            setComment(response.data.data.orders.comment)
            setColor(response.data.data.details.color)
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updateOrder = await api.put(`/${id}`, {
            address,
            recipient,
            comment
        });
        navigate("/")
    }

    // const handleSubmitReview = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await api.post(`/${id}/addDetail`, {
    //            color
    //         });
    //
    //     } catch (err) {}
    // };
    const handleCloseEdit = () => {
        navigate("/")
    }

    return (
        <div>

            {/*<Typography variant="h6">{orders[0].name}</Typography>*/}
            <form>
                <Grid container spacing={2}>

                    <Grid item>
                        <TextField
                            variant="standard"
                            id="address"
                            value={address}
                            label=''
                            onChange={e => {
                                setAddress(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant="standard"
                            id="recipient"
                            value={recipient}
                            label=''
                            onChange={e => {
                                setRecipient(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant="standard"
                            id="comment"
                            value={comment}
                            label=''
                            onChange={e => {
                                setComment(e.target.value);
                            }}
                        />
                    </Grid>
                </Grid>
            </form>
            {selectOrder && (
                <>
                    <Typography>order details update</Typography>
                    <UpdateDetails details={selectOrder.details}/>
{/*<Button onClick={handleSubmitReview}>sub</Button>*/}
                </>
            )}

            <Button onClick={handleSubmit}>SAVE</Button>
            <Button onClick={handleCloseEdit}>CLOSE</Button>
        </div>
    );
}

export default UpdateOrder;