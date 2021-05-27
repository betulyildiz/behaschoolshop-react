import React ,{ useState, useEffect } from 'react';
import OrderListItem from "./OrderListItem";



const OrderList  = (props) => {
    useEffect(() => {
        props.spinActiveFunc();
        
      },[]);
    debugger;
    const spinActiveFunc = () => {
        props.spinActiveFunc();
      }
    debugger;
    let orderDataExist = props.orderData;
    const orderItem = props.orderData.length>=1 ?  (
        props.orderData.map((order,index) =>
    <OrderListItem spinActiveFunc={spinActiveFunc} key={index} order={order}/>)):[<p>Sipariş Yok.</p>];


    return(
       <div style={{paddingTop:10}}>
           {orderItem}
       </div>
    );

}

export default OrderList;