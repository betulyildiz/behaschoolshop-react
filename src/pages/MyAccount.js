import React, { useState, useEffect } from 'react';
import { message, Card, Row, Col, Spin } from 'antd';
import {useHistory} from "react-router-dom";
import {LoadingOutlined } from '@ant-design/icons';
import UserInformation from '../components/myaccount/UserInformation';
import AddressInformation from '../components/myaccount/AddressInformation';
import OrderList from '../components/myaccount/OrderList';

const MyAccount = (props) => {
  const history = useHistory();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const [spinActive , setSpinActive] = useState(false);
  const [key,setKey] = useState('hesap');
  const [userId, setUserId] = useState(null);
  //const [spinActive , setSpinActive] = useState(false);
  const [orderListData, setOrderListData] = useState();
  const [userData, setUserData] = useState();
  const [addressListData, setAddressListData] = useState([]);
  const [deneme,setDeneme] = useState('siparişe tıklanmadı');


  const getAddresses = () => {
    setSpinActive(true); 
    const userID = localStorage.getItem('userId');
    console.log(userID);
        setUserId(userID);
        fetch("https://behaweb.com/customer/getAddresses/" + userID)
            .then(res => res.json())
            .then(
                (result) => {
                    setSpinActive(false);
                    setAddressListData(result);
                },
                (error) => {
                    console.log(error);
                    setSpinActive(false);
                }
            );
  }

  const getCustomerInformation = () => {
    setSpinActive(true);
    const userID = localStorage.getItem('userId');
    if (!(userID && userID.length > 0)) {
        setSpinActive(false);
        history.push({
            pathname: '/app/signin'
        });
    } else {
        setUserId(userID);
        fetch("https://behaweb.com/customer/getCustomer/" + userID)
            .then(res => res.json())
            .then(
                (result) => {
                    setSpinActive(false);
                    if (result.status === 's') {
                      setUserData(result.customerInformationDTO);
                   
                    } else {
                        message.error(result.message);
  
                    }
                },
                (error) => {
                  setSpinActive(false);
                    console.log(error);
                }
            );
    }
  }

  const spinActiveFunc = () => {
    setSpinActive(false);
  }
  const getOrderDetail = () => {
    debugger;
    const userID = localStorage.getItem('userId');
    setSpinActive(true);
        setUserId(userID);
        fetch("https://behaweb.com/customer/getOrders/" + userID)
            .then(res => res.json())
            .then(
                (result) => {
                    setSpinActive(false);
                    console.log(result);
                    setOrderListData(result);
                    //setStatusOptions(status);
                    //setCollapse(status);
                },
                (error) => {
                    setSpinActive(false);
                    console.log(error);
                }
            );
  }
 
  useEffect(() => {
    getAddresses();
    getCustomerInformation();
    getOrderDetail();
    },[]);


  const tabList = [
    {
      key: 'hesap',
      tab: 'Hesap Bilgilerim',
    },
    {
      key: 'adres',
      tab: 'Adres Bilgilerim',
    },
    {
      key: 'siparis',
      tab: 'Sipariş Bilgilerim',
    },
  ];
  
  const contentList = {
    
    hesap:  <UserInformation userData={userData}/>
    ,
    adres:  <AddressInformation addressData={addressListData} updateData={getAddresses} />,

    siparis : <OrderList orderData={orderListData} spinActiveFunc={spinActiveFunc}/>,
  };
  const onTabChange = (e) => {
    //setSpinActive(true);
    //console.log(key);
    
    if(e==="adres"){
      console.log(e);
    }
    else if(e==="hesap"){
      console.log(e);
    }
    else if(e==="siparis"){
      if(deneme=='siparişe tıklanmadı') {
      setSpinActive(true);
      setDeneme('siparişe tıklandı')
    }
      console.log(e);
    }
    setKey(e);
    
  };


  return (
    <Row justify="center" style={{marginLeft:"0px",marginRight:"0px "}}>
    <Col xs={24} md={16}>
    <Spin indicator={antIcon} spinning={spinActive} >
        <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={key}
          onTabChange={onTabChange}
        >
          {contentList[key]}
        </Card>   </Spin>
          </Col></Row>
  );
}

export default MyAccount;