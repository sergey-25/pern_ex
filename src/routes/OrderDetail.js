import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {OrderContext} from "../context/OrderContext";
import api from "../api/api";
import StarsRating from "../components/StarsRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";


function OrderDetail(props) {

    const {id} = useParams();

    const {selectOrder, setSelectOrder} = useContext(OrderContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/${id}`)
                setSelectOrder(response.data.data.orders)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    return <div> {selectOrder && (
        <>
            <div>
                <Reviews/>
            </div>
            <div>
                <AddReview/>
            </div>
        </>
    )} </div>
}

export default OrderDetail;