import React, { useState, useEffect } from 'react';
import {  useHistory } from "react-router-dom";
import { Card, Row, Col, Spin, Button , message} from 'antd';
import AddressList from '../components/address/AddressList';
import AddressModal from '../components/address/AddressModal';
import { LoadingOutlined } from '@ant-design/icons';
import AlgoliaApp from '../components/algolia-cart';
const Address = (props) => {
    const history = useHistory();
    const [addressChoose,setaddressChoose]=useState('1');
    const [adressModalStatus, setAddressModalStatus] = useState(false);
    const [addressListData, setAddressListData] = useState([]);
    const [userId, setUserId] = useState(null);
    const [updateAddressValue, setUpdateAddressValue] = useState(null);
    const [selectedEditAddress, setselectedEditAddress] = useState(null);
    const [selectAddress, setSelectAddress] = useState(null);
    const [selectedDeleteAddress, setselectedDeleteAddress] = useState(null);
    const [spinActive, setSpinActive] = useState(false);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    useEffect(() => {
       /* const gradeId = localStorage.getItem('grade');
        if(gradeId==null)
          {
            let grade=0;
            localStorage.setItem('grade', grade);
          }*/
        
        const userID = localStorage.getItem('userId');
        console.log(userID);
        if (!(userID && userID.length > 0)) {
            history.push({
                pathname: '/app/signin'
            });
        } else {
            setUpdateAddressValue(null);
            setUserId(userID);
            fetch("https://behaweb.com/customer/getAddresses/" + userID)
                .then(res => res.json())
                .then(
                    (result) => {
                        setAddressListData(result);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    }, [updateAddressValue]);

    const handleCancel = () => {
        setselectedEditAddress(null);
        setAddressModalStatus(false);
    }

    const updateAddress = () => {
        setUpdateAddressValue('1');
        setselectedEditAddress(null);
        setAddressModalStatus(false);
        

    }

    const addAddress = (addedAddress) => {
        setAddressListData([addedAddress, ...addressListData]);
    }

    const editAddress = (addressId) => {
        addressListData.forEach(address => {
            if (address.id === addressId) {
                setselectedEditAddress(address);
                setAddressModalStatus(true);
            }
        })
    }
    const navigateAddress = () => {
        if(!selectAddress){
            message.warn('Lütfen Adres Seçiniz', 3);
        }else{
            history.push({
                pathname: '/app/paymentinformation',
                state: { addressId: selectAddress }
            })
        }
        
    };

    const moreProduct = () => {
        history.push({
            pathname : 'shop/canta'
        })
    }

    const handleSelectAddress = (addressId) => {
        setSelectAddress(addressId);
    }

    const addAddressButton = () => {
        setAddressModalStatus(true);      
    }

    const deleteAddress = (addressId) => {
        setSpinActive(true);
        fetch("https://behaweb.com/customer/deleteAddress/" + addressId)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.message);
                    let sc = [...addressListData];
                    setAddressListData(sc.filter(item => item.id !== addressId));
                    setSpinActive(false);
                },
                (error) => {
                    setSpinActive(false);
                    console.log(error);
                }
            );

    }
    return (
        <Row justify="center" style={{marginLeft:"0px",marginRight:"0px "}}>
            <Col xs={24} md={18}>
                <Card title="Adres Seçimi" extra={<a onClick={addAddressButton} > Adres Ekle</a>}>
                <Spin indicator={antIcon} spinning={spinActive} >
                    <div className="gx-module-box-content">
                        <div className="gx-module-box-column">
                            <AddressList onSelectAddress={handleSelectAddress} onDeleteClick={deleteAddress} addressData={addressListData} onEditClick={editAddress}></AddressList>
                        </div>
                        <AddressModal userId={userId} deleteAddress={selectedDeleteAddress} editAddress={selectedEditAddress}
                          addressChoose={addressChoose}  addAddress={addAddress} open={adressModalStatus} onCancel={handleCancel} updateAddress={updateAddress} />
                    </div>
                    </Spin>
                </Card>
                <Card title="Çanta Matara Ürünlerimizi Gördünüz mü?" extra={<a onClick={moreProduct} > Daha Fazla Ürün İçin Tıklayın...</a>}>
                    <AlgoliaApp ></AlgoliaApp>
                    </Card>
                <Row justify="center" /*style={{ marginTop: 10 }}*/>
                    <Col xs={24} md={12} className="gx-text-center" >
                        <Button type="primary" onClick={navigateAddress}>Siparişi Onayla</Button></Col>
                </Row>
            </Col>



        </Row>
    );
};
export default Address;

