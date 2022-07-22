import React, {useState, createContext} from 'react';

export const OrderContext = createContext();

export const OrderContextProvider = props => {
    const [orders, setOrders] = useState([]);
    const [details, setDetails] = useState([]);
    const [selectOrder, setSelectOrder] = useState(null);

    const addOrder = (order) => {
        setOrders([...orders, order])
    }

    return (
        <OrderContext.Provider value={{orders, setOrders, addOrder, selectOrder, setSelectOrder, details, setDetails}}>
            {props.children}
        </OrderContext.Provider>
    )
}