import React, {useState} from 'react';
import Header from "../components/Header";
import OrderForm from "../components/OrderForm";
import OrderList from "../components/OrderList";
import {Button, Dialog} from "@mui/material";

function Home(props) {
    const [isOpen, setIsOpen] = useState(false)

    const handleDialogOpen = ()=>{
        setIsOpen(true)
    }
    const handleDialogClose = ()=>{
        setIsOpen(false)
    }
    return (
        <div>
            <Header/>
            <Dialog
                fullScreen
                open={isOpen}>
                <OrderForm  setIsOpen={setIsOpen}/>
            </Dialog>
            <Button onClick={handleDialogOpen}>add</Button>

            <OrderList/>
        </div>
    );
}

export default Home;