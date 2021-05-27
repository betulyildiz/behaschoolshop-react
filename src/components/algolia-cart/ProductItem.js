import React, { useState, useEffect } from "react";
import { Highlight } from 'react-instantsearch-dom';
import { Button, InputNumber, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const ProductItem = ({ item }) => {
  console.log(item);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const [addButton, setAddButton] = useState('Ekle');
  const [addButtonType, setAddButtonType] = useState('primary');
  const [addButtonDisabled, setAddButtonDisabled] = useState(false);
  const [productQuantity, setProductQuantity] = useState('1');
  const [spinActive, setSpinActive] = useState(false);
  const [inputNumberDisabled,setInputNumberDisabled]=useState(false);

  useEffect(() => {
    let shopCart = JSON.parse(localStorage.getItem('shopCart'));
    if(shopCart){
    let userId = localStorage.getItem('userId');
    if(userId) {
    setAddButton('Ekle');
    setAddButtonType('primary');
    setAddButtonDisabled(false);
    setInputNumberDisabled(false);
    setProductQuantity('1');
   
    shopCart.forEach(product => {
      if (item.barcode === product.product.barcode) {
        setAddButtonType('success');
        setAddButton('Eklendi');
        setAddButtonDisabled(true);
        setInputNumberDisabled(true);
        if(product.quantity!='1') {
          setProductQuantity(product.quantity);
        }
      }
      
    });}
  }
  },[]);

  const getShoppingCart = (shopList) => {

    let sc = [];
    shopList.forEach(lesson => {
      lesson.shopLists.forEach(shopList => {
        let exist = false;
        if (!exist) {
          sc = [...sc, { product: shopList.product, quantity: shopList.quantity, price: shopList.price, key: shopList.id }];
        }
      });
    });
    return sc;
  }
  const sendBarcode = () => {
    
    setAddButton('Eklendi');
    setAddButtonType('success');
    setAddButtonDisabled(true);
    setInputNumberDisabled(true);
    
    let shopListDataSourceOnlyProducts = [{
      gradeName: "Diğer Ürünler",
      id: "0",
      name: "Diğer Ürünler",
      shopLists: [
        ]
    }];
    let shopListDataSourceFromStorage = JSON.parse(localStorage.getItem('shopListDataSource'));
    let shopListDataSource = shopListDataSourceFromStorage ? shopListDataSourceFromStorage : shopListDataSourceOnlyProducts;

    let otherProducts = shopListDataSource.filter(item => item.id == "0")["0"];
    let exist = false;
    otherProducts.shopLists.forEach(shopList => {
      if (shopList.product.barcode == item.barcode) {
        exist = true;
      }
    });
    if (!exist) {
      let shopListToAdd = {
        id: item.barcode ,
        quantity: productQuantity,
        price: item.price,
        product: {
          name: item.name,
          barcode: item.barcode,
          productImages: [
            {
              filePath: item.image
            }
          ]
        }
      };

      const otherProductsTemp = [...otherProducts.shopLists, shopListToAdd];
      otherProducts.shopLists = otherProductsTemp;
      localStorage.setItem('otherProducts', JSON.stringify(otherProducts));
      let shopListTemp = shopListDataSource.filter(item => item.id !== "0");
      let shopListDataSourceTemp = [...shopListTemp,otherProducts];
      console.log(shopListDataSourceTemp);
      localStorage.setItem('shopListDataSource', JSON.stringify(shopListDataSourceTemp));
      let sc = getShoppingCart(shopListDataSourceTemp);
      localStorage.setItem('shopCart', JSON.stringify(sc));
      debugger;
      let productPrice = item.price*productQuantity;
      let productPriceToNumber = Number(productPrice.toFixed(2));
      let cartTotalPrice = localStorage.getItem('totalPrice');
      let cartTotalPriceToNumber = Number(cartTotalPrice);
      let cartTotalPriceAdded = cartTotalPriceToNumber + productPriceToNumber;
      let cartTotalPriceAddedToNumber = Number(cartTotalPriceAdded.toFixed(2));
      console.log(cartTotalPriceAddedToNumber);
      localStorage.setItem('totalPrice', cartTotalPriceAddedToNumber);
    }


  };
  const onChange = (value) => {
    console.log('changed', value);
    setProductQuantity(value);
  };
  return (
    <Spin indicator={antIcon} spinning={spinActive} >
      <div className="gx-product-item gx-product-vertical">
        <div className="gx-product-image" style={{ textAlign: "center" }}>
          <img style={{ width: "50%", height: "auto" }}
            src={`https://res.cloudinary.com/hilnmyskv/image/fetch/h_200,q_100,w_auto,c_scale/${
              item.image
              }`} alt=''
          />
        </div>
        <div className="gx-product-body">

          <div className="gx-product-name">
            <Highlight attribute="name" hit={item} />
          </div>
          <div className="gx-product-price">{item.price} TL</div>
          <InputNumber style={{ width: "50%", marginRight: "5%" }} min={1} max={50} disabled={inputNumberDisabled} value={productQuantity} onChange={onChange} />
          <Button  onClick={sendBarcode} type={addButtonType} htmlType="submit"  disabled={addButtonDisabled}>
            {addButton}
          </Button>

        </div>
      </div></Spin>
  );
};

export default ProductItem;
