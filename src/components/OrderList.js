import React, {useContext, useEffect} from 'react';
import api from '../api/api'
import {Button, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {OrderContext} from "../context/OrderContext";
import {useNavigate} from 'react-router-dom';



function OrderList(props) {

    const navigate = useNavigate();

    const {orders, setOrders} = useContext(OrderContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/")
                setOrders(response.data.data.orders)
                console.log(response.data.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData();
    }, []);

    const handleEdit = (id) => {
        navigate(`/orders/${id}/edit`)
    }

    const handleDelete = async (id) => {
        try {
            const response = await api.delete(`/${id}`)
            setOrders(orders.filter((order) => order.order_id !== id));
            console.log(response)
            // setOrders(orders.filter(order =>{
            //     return order.order_id !== id
            // }))
        } catch (error) {
            console.log(error)
        }
    };

    const handleOrderSelect = (id)=>{
        navigate(`/orders/${id}`)
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
                            <td>
                                <IconButton color="primary" onClick={() => handleOrderSelect(order.order_id)}>
                                    <RemoveRedEyeIcon/>
                                </IconButton>
                                <IconButton color="primary" onClick={() => handleEdit(order.order_id)}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton color="error" onClick={() => handleDelete(order.order_id)}>
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