import React, { useState,useEffect } from 'react';
import {LoadingOutlined } from '@ant-design/icons';
import {Spin , Card} from 'antd';
import MyAccountAddressList from '../address/MyAccountAddressList';
import AddressModal from '../address/AddressModal';

const AddressInformation  = (props) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    //const history = useHistory();
    const [spinActive , setSpinActive] = useState(false);
    const [selectedDeleteAddress, setselectedDeleteAddress] = useState(null);
    const [addressListData, setAddressListData] = useState([]);
    const [selectAddress, setSelectAddress] = useState(null);
    const [userId, setUserId] = useState(null);
    const [myAddress, setMyAddress] = useState(null);
    const [selectedEditAddress, setselectedEditAddress] = useState(null);
    const [adressModalStatus, setAddressModalStatus] = useState(false);

    useEffect(() => {
        //formRef.current.setFieldsValue(props.userData);
        const userID = localStorage.getItem('userId');
        setUserId(userID);
        setMyAddress('1');
    });

    const handleSelectAddress = (addressId) => {
        setSelectAddress(addressId);
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
    
    const addAddress = (addedAddress) => {
        setAddressListData([addedAddress, ...addressListData]);
    }
    const handleCancel = () => {
        setselectedEditAddress(null);
        setAddressModalStatus(false);
    }
    const editAddress = (addressId) => {
        addressListData.forEach(address => {
            if (address.id === addressId) {
                setselectedEditAddress(address);
                setAddressModalStatus(true);
            }
        })
    }

    const updateAddress = () => {
        setselectedEditAddress(null);
        setAddressModalStatus(false);
        props.updateData();
        

    }

    useEffect(() => {
        setAddressListData(props.addressData);
         },[props.addressData]);

    return (
<Card style={{padding:"0"}}
    title="Adreslerim" extra={<a onClick={() => setAddressModalStatus(true)} > Adres Ekle</a>}>
        <Spin indicator={antIcon} spinning={spinActive} >
    <div className="gx-module-box-content" >
        <div className="gx-module-box-column">
         
        <MyAccountAddressList onMyAddress={myAddress}   onDeleteClick={deleteAddress} addressData={addressListData} onEditClick={editAddress}></MyAccountAddressList>
                        </div>
                        <AddressModal updateAddress={updateAddress} userId={userId} deleteAddress={selectedDeleteAddress} editAddress={selectedEditAddress}
                         addAddress={addAddress} open={adressModalStatus} onCancel={handleCancel} />
    </div>
    </Spin></Card>
    );
}

export default AddressInformation;