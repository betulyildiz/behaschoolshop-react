import React, { useState, useRef, useEffect } from 'react';
import { Form, Button, Select, Card, Row, Col, Spin , Popconfirm} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
//import '../App.css';
import NestedTable from '../components/nestedtable/NestedTable';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';

//const backendUrl = "http://beha-schoolshop.eu-central-1.elasticbeanstalk.com/student/getSchools";
const { Option } = Select;
/*const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}; */

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

/*const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};*/

const Main = (props) => {

  const history = useHistory();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  console.log(props.posts);
  const formRef = useRef();
  const [schoolOptions, setSchoolOptions] = useState();
  const [gradeOptions, setGradeOptions] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  const [shopListDataSource, setShopListDataSource] = useState([]);
 // const [productTables, setProductTables] = useState();
  const [shoppingCart, setShopCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [spinActive, setSpinActive] = useState(false);
  const [gradeFromStorage, setGradeFromStorage] = useState(null);

  useEffect(() => {

    const shopCart = JSON.parse(localStorage.getItem('shopCart'));
    const gradeFromLocalStorage = localStorage.getItem('grade');
    const subDomain = localStorage.getItem('subDomain');
    
    if(gradeFromLocalStorage) {
      history.push({
        pathname: '/app/cart'      
      });
    } else {

    setSpinActive(true);
      debugger;
    fetch("https://behaweb.com/student/school/"+subDomain)
      .then(res => res.json())
      .then(
        (result) => {
          debugger;
          setSpinActive(false);
          let schools = result.map((school, index) => 
          <Option key={index} value={school.id}>{school.name+ " / "+school.campus +" Kamp??s??"  }</Option>);
          setSchoolOptions(schools);
        },
        (error) => {
          setSpinActive(false);
          console.log(error);
        }
      ); 
    /*getSchools ba??lang????
    fetch("https://behaweb.com/student/getSchools")
      .then(res => res.json())
      .then(
        (result) => {
          setSpinActive(false);
          let schools = result.map((school, index) => 
          <Option key={index} value={school.id}>{school.name}</Option>);
          setSchoolOptions(schools);
        },
        (error) => {
          setSpinActive(false);
          console.log(error);
        }
      ); getSchools bitimi */
    }
  }, []);

  useEffect(() => {
    handleShopCartChange();
  }, [shoppingCart]);

  const handleShopCartChange = () => {
    console.log(shoppingCart);
    let priceArray = shoppingCart.map((cart) => cart.quantity * cart.price);
    let totPrice = priceArray.reduce(function (a, b) { return a + b; }, 0);
    setTotalPrice(totPrice.toFixed(2));
    console.log(totPrice);
  }


  const onSchoolChange = schoolId => {
    setSpinActive(true);
    fetch("https://behaweb.com/student/grade/" + schoolId)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          let grades = result.map((grade, index) => <Option key={index} value={grade.id}>{grade.name}</Option>);
          setGradeOptions(grades);
          setSelectedGrade("1.s??n??f");
          setSpinActive(false);
        },
        (error) => {
          console.log(error);
          setSpinActive(false);
        }
      );
  };

  const onQuantityChange = (key, quantity) => {

    let tempCart = shoppingCart;
    tempCart.forEach(cart => {
      if (cart.key === key) {
        cart.quantity = quantity;
      }
    })
    setShopCart(tempCart);
    console.log(shoppingCart);
    handleShopCartChange();
  }

  const onDeleteProduct = (key) => {

    let sc = [...shoppingCart];
    setShopCart(sc.filter(item => item.key !== key));
    let shopListDsTemp = [...shopListDataSource];
    shopListDsTemp.forEach(list => {
      list.shopLists = list.shopLists.filter(item => item.id !== key)
    })
    setShopListDataSource(shopListDsTemp);
    console.log(shopListDataSource);

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

  const onFinish = (value) => {      
    setGradeFromStorage(JSON.parse(localStorage.getItem('grade')));
    setSelectedGrade(formRef.current.getFieldsValue().grade);
    setSpinActive(true);
    fetch("https://behaweb.com/student/shoplist/" + formRef.current.getFieldsValue().grade)
      .then(res => res.json())
      .then(
        (result) => {
          setSpinActive(false);     
          //setShopListDataSource(result);
          let otherProducts = JSON.parse(localStorage.getItem('otherProducts'));
          let shopListDataSourceToAdd = {
            gradeName: "Di??er ??r??nler",
            id: "0",
            name: "Di??er ??r??nler",
            shopLists: [
              ]
          };
          let shopListDataSourceWithOtherProducts = otherProducts ? otherProducts : shopListDataSourceToAdd;
          let shopListWithOtherProducts = [...result,shopListDataSourceWithOtherProducts];  
          setShopListDataSource(shopListWithOtherProducts);
          //localStorage.setItem('shopListDataSource', JSON.stringify(shopListWithOtherProducts));

          //let grades = result.map((grade, index) => <Option key={index} value={grade.id}>{grade.name}</Option>);
          //setGradeOptions(grades);
          
          let shopCartWithOtherProducts =otherProducts ? [...result,otherProducts] : result;
          //let sc3 = getShoppingCart(deneme3);
          let sc = getShoppingCart(shopCartWithOtherProducts);
          setShopCart(sc);

          //console.log({ shoppingCart });
          //let products = result.map((lesson, index) => {
          // let dataSource = lesson.shopLists.map((shopList, shopIndex) => {
          //   return ({ productName: shopList.productDto.name, quantity: shopList.quantity, price: shopList.price, key: shopList.productDto.barcode })
          // }
          //);
          // return (<EditableTable key={index} title={lesson.name} quantityChange={onQuantityChange} deleteProduct={onDeleteProduct} dataSource={dataSource} />);
          //});
          //setProductTables(products);
        },
        (error) => {
          setSpinActive(false);
          console.log(error);
        }
      );
  };

  const onReset = () => {
    formRef.current.resetFields();
  };



  /*const columns = [
    {
      title: '??r??n Ad??',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Adet',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Fiyat',
      dataIndex: 'price',
      key: 'price ',
    }
  ];*/

  const navigateCustInfo = () => {
    console.log(shopListDataSource);
   /* let otherProducts = JSON.parse(localStorage.getItem('otherProducts'));
          let shopListDataSourceToAdd = {
            gradeName: "Di??er ??r??nler",
            id: "0",
            name: "Di??er ??r??nler",
            shopLists: [
              ]
          };
          let shopListDataSourceWithOtherProducts = otherProducts ? otherProducts : shopListDataSourceToAdd;
          let shopListWithOtherProducts = [...shopListDataSource,shopListDataSourceWithOtherProducts];  
          setShopListDataSource(shopListWithOtherProducts);*/
    localStorage.setItem('shopCart', JSON.stringify(shoppingCart));
    localStorage.setItem('grade', selectedGrade);
    localStorage.setItem('totalPrice', totalPrice);
   // const shopListDataSourceTemp = [...shopListDataSource, shopListDataSourceWithOtherProducts];
    localStorage.setItem('shopListDataSource', JSON.stringify(shopListDataSource));
    history.push({
      pathname: '/app/address'
    })
  }




  return (

    <React.Fragment>
    <Row justify="center"  style={{marginLeft:"0px",marginRight:"0px "}}>
      <Col xs={24} md={12} >
          <Card>
            <Spin indicator={antIcon} spinning={spinActive} >
              <Form {...formItemLayout} ref={formRef} name="control-ref" onFinish={onFinish} >
                <Form.Item
                  name="school"
                  label="Okullar"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="L??tfen Okul seciniz"
                    onChange={onSchoolChange}
                    allowClear
                  >
                    {schoolOptions}
                  </Select>
                </Form.Item>
                 <Form.Item
                  name="grade"
                  label="S??n??flar"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                   
                  <Select
                    placeholder="L??tfen S??n??f seciniz"
                    allowClear
                    value={selectedGrade}
                  >
                    {gradeOptions}
                  </Select>
                </Form.Item>

                <Form.Item className="gx-text-center" >

                  <Button type="primary" htmlType="submit">
                    ??r??nleri G??ster
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    Temizle
                  </Button>

                </Form.Item>
              </Form>
            </Spin>
          </Card>
        </Col>
        </Row>
     <Row justify="center" style={{marginLeft:"0px",marginRight:"0px "}}>
        <Col xs={24} md={16} >
          <Card title="??r??nler">
            <NestedTable shopListResult={shopListDataSource} quantityChange={onQuantityChange} deleteProduct={onDeleteProduct} />
            <p>Toplam Fiyat : {totalPrice}</p>
          </Card>

        </Col>
        </Row>
        <Row justify="center" style={{marginLeft:"0px",marginRight:"0px "}}>
        <Col xs={24} md={12} className="gx-text-center"  style={{margin:"auto"}} >
        {gradeFromStorage!=null ? 
          ( <Popconfirm placement="top" title={"Sepetinizdeki S??n??f De??i??ecektir.Onayl??yor musunuz?"} onConfirm={navigateCustInfo} okText="Evet" cancelText="Hay??r">
        <Button>Sipari??i Onayla</Button>
      </Popconfirm>) :
        ( <Button type="primary" onClick={navigateCustInfo}>Sipari??i Onayla</Button>) 
        }
         
        </Col>
   </Row>
    </React.Fragment>

  );
};

const mapStateToProps = (state)=>{
  return {
    posts:state.posts
  }
}

export default connect(mapStateToProps) (Main);