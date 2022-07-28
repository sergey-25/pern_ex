import React, {useState, createContext} from 'react';

export const OrderContext = createContext();


export const OrderContextProvider = props => {
    const initialValues = {
            address: '',
            recipient: '',
            comment: '',
            details: [{
                full_name: '',
                color: '',
                characteristics: '',
                term: '',
                size: '',
                amount: '',
                link: '',
                order_comment: '',
                order_recipient: '',
            }]
        }

        const detailValues = {
        details:[{
            full_name: '',
            color: '',
            characteristics: '',
            term: '',
            size: '',
            amount: '',
            link: '',
            order_comment: '',
            order_recipient: '',
        }]
        }
    const [orders, setOrders] = useState([]);
    const [details, setDetails] = useState([detailValues])
    const [selectOrder, setSelectOrder] = useState(null);


    const addOrder = (order) => {
        setOrders([...orders, order])
        console.log(order)

      // setDetails([...details, detail])
    }
    const addDetails = (detail) => {
        setDetails([...details, detail])
    }


    return (
        <OrderContext.Provider value={{orders, setOrders, addOrder, addDetails, selectOrder, setSelectOrder, initialValues, details, setDetails}}>
            {props.children}

        </OrderContext.Provider>
    )
}