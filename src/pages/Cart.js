import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, Row, Col, Spin , Form , Input} from 'antd';
import { LoadingOutlined , UserOutlined } from '@ant-design/icons';
import NestedTable from '../components/nestedtable/NestedTable';
import { useHistory } from 'react-router-dom';
import { set } from 'lodash';

const FormItem = Form.Item;
const Cart = (props) => {
    const history = useHistory();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [shopListDataSource, setShopListDataSource] = useState([]);
  const [shoppingCart, setShopCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [studentSaveButtonType, setStudentSaveButtonType] = useState('primary');
  const [studentSaveButton, setStudentSaveButton] = useState('Kaydet');
  const [gradeName, setGradeName] = useState();
  const [changeGradeText, setChangeGradeText] = useState();
  const [spinActive, setSpinActive] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    debugger;
    const userID = localStorage.getItem('userId');
        console.log(userID);
    const studentNameFromStorage = localStorage.getItem('studentName');
    if(studentNameFromStorage!=null) {
      let studentNameData = { studentName : studentNameFromStorage  };
      form.setFieldsValue(studentNameData);
      setStudentSaveButtonType('default');
      setStudentSaveButton('Güncelle');
    }
        /*if (!(userID && userID.length > 0)) {
            history.push({
                pathname: '/app/signin'
            });
        }*/
    debugger;
    let cartTotalPrice = localStorage.getItem('totalPrice');
    let cartShopList = JSON.parse(localStorage.getItem('shopCart'));
    let cartShopListDataSource = JSON.parse(localStorage.getItem('shopListDataSource'));
    let gradeNameFromLocal =cartShopListDataSource ? (cartShopListDataSource[0].gradeName) : ("Sınıf Seçilmemiş");
    setGradeName(gradeNameFromLocal ?(gradeNameFromLocal):("Sınıf Seçilmemiş"));
    debugger;
    if(gradeNameFromLocal=="Sınıf Seçilmemiş") {
      setChangeGradeText("Sınıf Eklemek için Tıklayın");
    } else if(gradeNameFromLocal=="Diğer Ürünler") {
      setChangeGradeText("Sınıf Eklemek için Tıklayın");
    } else {
      setChangeGradeText("Sınıf Değiştirmek için Tıklayın");
    }
    setTotalPrice(cartTotalPrice);
    setShopCart(cartShopList);
    setShopListDataSource(cartShopListDataSource);
  }, []);

  const handleShopCartChange = (shopCartParam) => {
    console.log(shopCartParam);
    debugger;
    let priceArray = shopCartParam.map((cart) => cart.quantity * cart.price);
    let totPrice = priceArray.reduce(function (a, b) { return a + b; }, 0);
    setTotalPrice(totPrice.toFixed(2));
    localStorage.setItem('totalPrice', totPrice.toFixed(2));
    console.log(totPrice);
  }


  const onQuantityChange = (key, quantity) => {
    let tempCart = shoppingCart;
    tempCart.forEach(cart => {
      if (cart.key === key) {
        cart.quantity = quantity;
      }
    })
    setShopCart(tempCart);
    localStorage.setItem('shopCart', JSON.stringify(tempCart));
    console.log(shoppingCart);
    handleShopCartChange(tempCart);

    let tempShopListDataSource = shopListDataSource;
    tempShopListDataSource.forEach(list => {
        list.shopLists.forEach(listDetail => {
          if (listDetail.id === key) {
            listDetail.quantity = quantity;
          }
        })
    })
    setShopListDataSource(tempShopListDataSource);
    localStorage.setItem('shopListDataSource', JSON.stringify(tempShopListDataSource));

    let otherProducts = JSON.parse(localStorage.getItem('otherProducts'));
    otherProducts.shopLists.forEach(cart => {
      if (cart.id === key) {
        cart.quantity = quantity;
      }
    })
    localStorage.setItem('otherProducts', JSON.stringify(otherProducts));
   
  }

  const onDeleteProduct = (key) => {
    debugger;
    let sc = [...shoppingCart];
    let productItem = sc.filter(item => item.key == key);
    let productPrice = productItem['0']['price'];
    let productQuantity = productItem['0']['quantity'];
    let productAmount = productPrice * productQuantity;
    let cartTotalPrice = localStorage.getItem('totalPrice');
    let lastTotalPriceNumber = cartTotalPrice - productAmount;
    let lastTotalPrice = Number(lastTotalPriceNumber.toFixed(2));
    setTotalPrice(lastTotalPrice);
    localStorage.setItem('totalPrice', lastTotalPrice);
    setShopCart(sc.filter(item => item.key !== key));
    let scNew = sc.filter(item => item.key !== key);
    localStorage.setItem('shopCart', JSON.stringify(scNew));
    let shopListDsTemp = [...shopListDataSource];
    shopListDsTemp.forEach(list => {
      list.shopLists = list.shopLists.filter(item => item.id !== key)
    })
    setShopListDataSource(shopListDsTemp);
    localStorage.setItem('shopListDataSource', JSON.stringify(shopListDsTemp));
    console.log(shopListDataSource);
    debugger;
    let otherProducts = JSON.parse(localStorage.getItem('otherProducts'));
    let otherProductsShopLists = otherProducts.shopLists;
    let newShopLists = otherProductsShopLists.filter(item => item.id !== key);
    otherProducts.shopLists = newShopLists;
    localStorage.setItem('otherProducts', JSON.stringify(otherProducts));



  }

  const changeGrade = () => {
    localStorage.removeItem('shopCart');
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('shopListDataSource');
    localStorage.removeItem('grade');
    localStorage.removeItem('studentName');
    //setShopCart([]);
    console.log(shoppingCart);
    setShopListDataSource([]);
    debugger;
    let otherProducts = JSON.parse(localStorage.getItem('otherProducts'));
    let shopListDataSourceToAdd = {
          gradeName: "Diğer Ürünler",
          id: "0",
          name: "Diğer Ürünler",
          shopLists: []
        };
    let shopListDataSourceWithOtherProducts = otherProducts ?   [otherProducts] : [shopListDataSourceToAdd];
    setShopListDataSource( shopListDataSourceWithOtherProducts);
        debugger;
    let shopCartWithOtherProducts =otherProducts ? [otherProducts] : [];
    let sc = getShoppingCart(shopCartWithOtherProducts);
    setShopCart(sc);
    handleShopCartChange(sc);
    localStorage.setItem('shopCart', JSON.stringify(sc));
    localStorage.setItem('shopListDataSource', JSON.stringify(shopListDataSourceWithOtherProducts));
    history.push({
      pathname: '/app'
    });
  }

  const getShoppingCart = (shopList) => {
    let sc = [];
    shopList.forEach(lesson => {
      lesson.shopLists.forEach(shopList => {
        let exist = false;
        /*if (sc.length > 0) {
          sc.forEach(c => {
            if (c.key === shopList.productDto.barcode) {
              c.quantity = c.quantity + shopList.quantity
              exist = true;
            }
          }) 
        } */
        if (!exist) {
          sc = [...sc, { product: shopList.product, quantity: shopList.quantity, price: shopList.price, key: shopList.id }];
        }
      });
    });
    return sc;
  }

  const handleSubmit = (value) => {
    debugger;
    localStorage.setItem('studentName', value.studentName);
  }

  const navigateCustInfo = () => {
    localStorage.setItem('shopCart', JSON.stringify(shoppingCart));
    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('shopListDataSource', JSON.stringify(shopListDataSource));
    history.push({
      pathname: '/app/address'
    });
  }

  const saveCustInfo = () => {
    localStorage.setItem('shopCart', JSON.stringify(shoppingCart));
    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('shopListDataSource', JSON.stringify(shopListDataSource));
  }

    return (
        <div>
         <Row justify="center" style={{marginLeft:"0px",marginRight:"0px "}}>
        <Col xs={24} md={18}  style={{margin:"auto"}}>
          <Card title={"Ürünler / Sınıf : "+gradeName} extra={<a onClick={() => changeGrade()} >{changeGradeText}</a>}>
          {shopListDataSource ? (
            <Spin indicator={antIcon} spinning={spinActive} >
            <NestedTable shopListResult={shopListDataSource} quantityChange={onQuantityChange} deleteProduct={onDeleteProduct} />
            <p>Toplam Fiyat : {totalPrice}</p>
            </Spin>
          ):(
              <p>Sepetiniz Boş</p>
          )}
          {gradeName!="Sınıf Seçilmemiş" ? (
            <Form form={form} onFinish={handleSubmit} layout="inline">
          <FormItem name="studentName" label="Öğrenci Adı : ">            
              <Input prefix={ <UserOutlined  style={{color: 'rgba(0,0,0,.25)'}}/>}
                     placeholder="Öğrenci Adı-Soyadı"/>      
                           
          </FormItem>
          <FormItem className="gx-text-center">
            <Button type={studentSaveButtonType} htmlType="submit">
              {studentSaveButton}
            </Button>
          </FormItem>
        </Form>
          ):(
            <div></div>
          ) }
          
          </Card>

        </Col></Row>
        <Row justify="center" style={{marginLeft:"0px",marginRight:"0px "}}>
        <Col xs={24} md={12} className="gx-text-center"  style={{margin:"auto"}}>
          <Button type="primary" onClick={saveCustInfo}>Kaydet</Button>
          <Button type="primary" onClick={navigateCustInfo}>Siparişi Onayla</Button>
        </Col></Row>
        </div>
    );
}
export default Cart;