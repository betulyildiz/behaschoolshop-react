import { Form, Input, Button, Spin, Card, Select, message, Row, Col } from 'antd';
import React, { useState } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';

const { Option } = Select;
const layout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
/*const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};*/

const PaymentInfo = (props) => {

    const location = useLocation();
    const history = useHistory();
    const userID = localStorage.getItem('userId');
    const grade = (localStorage.getItem('grade'))?(localStorage.getItem('grade')):('28');
    const studentName = (localStorage.getItem('studentName'))?(localStorage.getItem('studentName')):('Belirtilmemiş');
    const totalPrice = localStorage.getItem('totalPrice');
    const shopCart = JSON.parse(localStorage.getItem('shopCart'));
    const [spinActive, setSpinActive] = useState(false);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


    const onFinish = values => {
        setSpinActive(true);
        console.log('Success:', values);
        console.log(location.state);
        const orderRequest = prepareOrderRequest(location.state, values);
        console.log(JSON.stringify(orderRequest));
        fetch('https://behaweb.com/customer/add-order', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderRequest)
        }).then(res => res.json())
            .then(
                (result) => {
                    setSpinActive(false);
                    console.log(result);
                    if (result.status === 's') {
                        message.success('Siparişiniz Başarıyla Oluşturulmuştur', 5);
                        localStorage.removeItem('otherProducts');
                        localStorage.removeItem('shopCart');
                        localStorage.removeItem('totalPrice');
                        localStorage.removeItem('categoryDefaultRefinement');
                        localStorage.removeItem('shopListDataSource');
                        localStorage.removeItem('grade');
                        localStorage.removeItem('studentName');
                       
                        setTimeout(() => {
                            history.push({
                                pathname: '/app'
                            })
                        }, 5000);
                    }

                },
                (error) => {
                    setSpinActive(false);
                    message.error(error);
                    console.log(error);
                });
    };


    const prepareOrderRequest = (state, cardInfo) => {
        const shopList = shopCart.map((cart, index) => {
            return ({ id: cart.key, price: cart.price, product:cart.product, quantity: cart.quantity });
        });
        //const custInfo = state.custInfo;
        /*const customer = {
            email: custInfo.email,
            name: custInfo.studentName,
            surname: custInfo.studentName,
            telephone: custInfo.phone
        };*/

        const request = {
            addressId: state.addressId,
            creditCardDTO: cardInfo,
            gradeId: grade,
            shopList: shopList,
            userId: userID,
            studentName: studentName,
            total: totalPrice
        }
        return request;
    }




    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        
        <Row style={{marginLeft:"0px",marginRight:"0px",height:'100%'}} justify="center">
            <Col xs={24} md={12}>
                <Card >
                <Spin indicator={antIcon} spinning={spinActive} >
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Kart Sahibi Adı Soyadı"
                            name="cardHolderName"
                            rules={[{ required: true, message: 'Kart Sahibi Zorunludur' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Kart Numarası"
                            name="cardNumber"
                            rules={[{ required: true, message: 'Kart Numarası Zorunludur' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Son Kul. Ay" name="cardExpireMonth" rules={[{ required: true, message: 'Son Kul. Ay Zorunludur' }]} >
                            <Select
                                placeholder="Seciniz"
                                allowClear
                            >
                                <Option value="01">01</Option>
                                <Option value="02">02</Option>
                                <Option value="03">03</Option>
                                <Option value="04">04</Option>
                                <Option value="05">05</Option>
                                <Option value="06">06</Option>
                                <Option value="07">07</Option>
                                <Option value="08">08</Option>
                                <Option value="09">09</Option>
                                <Option value="10">10</Option>
                                <Option value="11">11</Option>
                                <Option value="12">12</Option>
                            </Select>

                        </Form.Item>
                        <Form.Item label="Son Kul. Yıl" name="cardExpireYear" rules={[{ required: true, message: 'Son Kul. Yıl Zorunludur' }]}>
                            <Select
                                placeholder="Seciniz"
                                allowClear
                            >
                                <Option value="2020">2020</Option>
                                <Option value="2021">2021</Option>
                                <Option value="2022">2022</Option>
                                <Option value="2023">2023</Option>
                                <Option value="2024">2024</Option>
                                <Option value="2025">2025</Option>
                                <Option value="2026">2026</Option>
                                <Option value="2027">2027</Option>
                                <Option value="2028">2028</Option>
                                <Option value="2029">2029</Option>
                                <Option value="2030">2030</Option>
                            </Select>

                        </Form.Item>

                        <Form.Item
                            label="Güvenlik Kodu"
                            name="cvc"
                            rules={[{ required: true, message: 'Güvenlik Kodu Zorunludur' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item className="gx-text-center">
                            <Button type="primary" htmlType="submit">
                                Ödemeyi Yap
                    </Button>
                        </Form.Item>
                    </Form>
                    </Spin>
                </Card>
            </Col>
        </Row>
    );
};
export default PaymentInfo;