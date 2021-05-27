import React, { useState  } from "react";
import CustomScrollbars from '../../util/CustomScrollbars';

import MyAccountAddressListItem from "./MyAccountAddressListItem";

const MyAccountAddressList = (props) => {

  const addressListItems = props.addressData.map((address,index) =>
  <MyAccountAddressListItem key={index} address={address} onMyAddress={props.onMyAddress}  
   onEditClick ={props.onEditClick}  onDeleteClick = {props.onDeleteClick}/>);

  return (
    
    <div className="gx-module-list gx-mail-list">
  <CustomScrollbars className="gx-module-content-scroll">      
     {addressListItems}
  </CustomScrollbars>
    </div>
  )
};

export default MyAccountAddressList;