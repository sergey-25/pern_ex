import React, {useContext, useEffect, useState} from 'react';
import api from '../api/api'
import {Button, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {OrderContext} from "../context/OrderContext";
import {useNavigate, useParams} from 'react-router-dom';




function OrderList() {

    const navigate = useNavigate();

    const {orders, setOrders} = useContext(OrderContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/")
                setOrders(response.data.data.orders)
                console.log(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData();
    }, []);



    const showApplication = (id) => {
        navigate(`/orders/${id}/view`)
    }
    const handleEdit = (id) => {
        navigate(`/orders/${id}`)
    }

    const handleDelete = async (id) => {
        try {
            const response = await api.delete(`/${id}`)
            setOrders(orders.filter((order) => order.id !== id));
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    };


    const handleOrderSelect = (id)=>{
        navigate(`/orders/${id}/detail`)
    }

    return (
        <div>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Recipient</th>
                    <th>Comment</th>
                    <th>Actions</th>
                    <th>Color</th>
                </tr>
                </thead>
                <tbody>
                {orders && orders.map((order, index) => {
                    return (
                        <tr key={index}>
                            <td>{order.name}</td>
                            <td>{order.address}</td>
                            <td>{order.recipient}</td>
                            <td>{order.comment}</td>
                            <td>{order.color}</td>
                            <td>
                                <Button onClick={()=>handleOrderSelect(order.id)}>fff</Button>
                                <IconButton color="primary" onClick={() => showApplication(order.id)}>
                                    <RemoveRedEyeIcon/>
                                </IconButton>
                                <IconButton color="primary" onClick={() => handleEdit(order.id)}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton color="error" onClick={() => handleDelete(order.id)}>
                                    <DeleteForeverIcon/>
                                </IconButton>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;