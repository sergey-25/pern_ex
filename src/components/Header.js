import React from 'react';

function Header(props) {
    return (
        <div>Header</div>
    // import React, {useState} from 'react';
    // import {Button} from "@mui/material";
    //
    //
    //
    // const initialValues = {
    //     details: [
    //         {size: '', color: ''}
    //     ]
    // }
    //
    // function Orders(props) {
    //     const [sum, setSum] = useState(initialValues)
    //     const [orders, setOrders] = useState([])
    //     const [details, setDetails] = useState(
    //         [ {size: '', amount: ''}]
    //     )
    //
    //
    //     const handleInputChange = (evt) => {
    //         setOrders({
    //             ...orders,
    //             [evt.target.name]: evt.target.value
    //         });
    //     };
    //     // const handleInput = (evt) => {
    //     //     setDetails({
    //     //         ...details,
    //     //         [evt.target.name]: evt.target.value
    //     //     });
    //     // };
    //     const handleFormChange = (index, event) => {
    //         let data = [...details];
    //         data[index][event.target.name] = event.target.value;
    //         setDetails(data);
    //         console.log(data)
    //     }
    //     const addFields = (detail) => {
    //         let newField = initialValues
    //         setDetails(details, detail)
    //         console.log(details)
    //     }
    //     const values = [sum]
    //
    //     const createOrder= (event, order) => {
    //         event.preventDefault();
    //         setSum(
    //             {
    //                 ...orders,
    //                 details:[details],
    //             })
    //
    //         const values = [sum]
    //         console.log(values)
    //         console.log(details)
    //     }
    //
    //
    //     return (
    //         <div>
    //             <Button onClick={()=> console.log(sum)}>set</Button>
    //             <Button onClick={addFields}>add</Button>
    //             <div className="App">
    //                 <div>
    //                     <h2>Simple Todolist</h2>
    //                 </div>
    //                 <div>
    //                     <form >
    //                         Description:<input
    //                         type="text"
    //                         onChange={(event) => {
    //                             handleInputChange( event);
    //                         }}
    //                         name="name"
    //                         value={orders.name}/>
    //                         Date:<input
    //                         type="text"
    //                         onChange={(event) => {
    //                             handleInputChange( event);
    //                         }}
    //                         name="color"
    //                         value={orders.color || ""}/>
    //                         {details.map((item, index) =>{
    //                             return(
    //                                 <div key={index}>
    //                                     <input
    //                                         type="text"
    //                                         onChange={event => handleFormChange(index, event)}
    //                                         name="size"
    //                                         value={item.size || " "}/>
    //                                     <input
    //                                         type="text"
    //                                         onChange={event => handleFormChange(index, event)}
    //                                         name="amount"
    //                                         value={item.amount || ' '}/>
    //                                 </div>
    //
    //                             )
    //
    //                         })}
    //
    //                         <input type="submit" value="Add"/>
    //                     </form>
    //                     <Button onClick={createOrder}>orders</Button>
    //                 </div>
    //                 <div>
    //                     <table>
    //                         <tbody>
    //                         <tr><th>Date</th><th>Description</th></tr>
    //
    //
    //                         <tr>
    //                             <td>{sum.name}</td>
    //                             <td>{sum.color}</td>
    //                             {values.map((value, i)=>{
    //                                 return(
    //                                     <div key={i}>
    //                                         <p>{i +1}</p>
    //                                         <p>{value.size}</p>
    //                                         <p>{value.amount}</p>
    //                                         {value.details.map(d=>{
    //                                             return(
    //                                                 <>
    //                                                     <p>{d.size}</p>
    //                                                     <p>{d.amount}</p>
    //
    //                                                 </>
    //
    //                                             )
    //                                         })}
    //                                     </div>
    //
    //                                 )
    //                             })}
    //
    //                             {/*{sum.length <= 0 ? (*/}
    //                             {/*  <>*/}
    //                             {/*      /!*<td>{sum.size || ''}</td>*!/*/}
    //                             {/*      /!*<td>{sum.amount}</td>*!/*/}
    //                             {/*  </>*/}
    //                             {/*) : (*/}
    //                             {/*    <>*/}
    //                             {/*        /!*<td>{sum.details.size || ''}</td>*!/*/}
    //                             {/*        /!*<td>{sum.details.amount}</td>*!/*/}
    //                             {/*    </>*/}
    //                             {/*)}*/}
    //                         </tr>
    //
    //                         </tbody>
    //
    //                     </table>
    //
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
    //
    // export default Orders;
    );
}

export default Header;