import React , { useEffect , useState } from "react";
import { Menu , Radio , Card, Row, Col, Dropdown} from "antd";

const options = [
  'Düzenle',
  'Sil',
];

const MyAccountAddressListItem = (props) => {

  const address = props.address;

  const menus = () => (<Menu onClick={(e) => {
    if (e.key === 'Düzenle') {
      //this.onEditContact()
      props.onEditClick(address.id);
    } else if(e.key === 'Sil') {
      props.onDeleteClick(address.id);
    }
    
    else {
      //this.onDeleteContact(this.props.contact)
    }
  }
  }>
    {options.map(option =>
      <Menu.Item key={option}>
        {option}
      </Menu.Item>,
    )}
  </Menu>);

  return (
  <Col lg={24} md={24} sm={24} xs={24} >
   <Card>
    <Row style={{alignItems:"center"}}>
      <Col lg={20} md={20} sm={20} xs={20}>
        <div style={{/*maxWidth:"100%", display:"flex" ,flex:"1 1 auto"*/}}>
        <Col lg={6} md={6} sm={24} xs={24}>
           <span className="gx-sender-name">{address.addressName}</span></Col>
           <Col lg={18} md={18} sm={24} xs={24} style={{paddingRight:"0px"}}>
            <span className="gx-d-inline-block gx-text-truncate" style={{overflow:"inherit", whiteSpace:"normal"}}>
              {address.addressDescription+" "+address.county+" "+address.province}
            </span></Col>
        </div>
      </Col>
      <Col lg={2} md={2} sm={2} xs={2} >
        <Dropdown overlay={menus()} placement="bottomRight" trigger={['click']}>
          <i className="gx-icon-btn icon icon-ellipse-v" style={{width:"auto",height:"auto",float:"right"}}/>
        </Dropdown>
      </Col>

     
      
     
    </Row></Card></Col>
  )
};

export default MyAccountAddressListItem;
