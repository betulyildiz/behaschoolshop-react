import React ,{ useState,  useEffect } from "react";
import { Layout , Col , Row } from "antd";
import {  Route} from "react-router-dom";
import Main from "../../pages/Main";

import Sidebar from "../../components/sidebar/index";
import CustInfo from "../../pages/CustomerInformation";
import Canta from "../../pages/Canta";
import Matara from "../../pages/Matara";
import Kalem from "../../pages/Kalem";
import Cart from "../../pages/Cart";
import PaymentInfo from "../../pages/PaymentInformation";
import SignIn from '../../pages/SignIn';
import AboutUs from '../../pages/AboutUs';
import CancelAndRefund from '../../pages/CancelAndRefund';
import ServicePolicy from '../../pages/ServicePolicy';
import SignUp from '../../pages/SignUp';
import Address from '../../pages/Address';
import Kvkk from '../../pages/Kvkk';
import TermsOfUse from '../../pages/TermsOfUse';
import MyAccount from '../../pages/MyAccount';
import InsideHeader from "../Topbar/InsideHeader/index";
import asyncComponent from "../../util/asyncComponent";
import Sample from "../../pages/SamplePage";

const {  Content, Footer } = Layout;
const CustomerRoutes = (props) => {
  const [width, setWidth] = useState(0);
  const [sideBar, setSidebar] = useState(null);
  const updateWindowDimensions = () =>{
    setWidth( window.innerWidth);
    setSidebar(getSidebar(window.innerWidth));
  }

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
  }, []);

  const getSidebar = ( width) => {
    if (width < 992) {
      return <Sidebar menuType="customer" />;
    }
    return null;
  };
    return(
        <Layout style={{height:"100%", display:"block"}}>
        {sideBar}
        <Layout>
          <InsideHeader />
          <Content >
           
            
            <Route  path="/sidebar">
                <Sidebar menuType="customer" />
              </Route>
              <Route exact path={props.match.path} component={Main}/>
              <Route path={`${props.match.path}/hakkimizda`} component={AboutUs} />
              <Route path={`${props.match.path}/hizmet-politikasi`} component={ServicePolicy} />
              <Route path={`${props.match.path}/kullanim-sartlari`} component={TermsOfUse} />
              <Route path={`${props.match.path}/iptal-iade-sartlari`} component={CancelAndRefund} />
              <Route path={`${props.match.path}/kvkk`} component={Kvkk} />
              <Route path={`${props.match.path}/cart`} component={Cart} />
              <Route path={`${props.match.path}/shop/yazi-gerecleri`} component={Kalem} />
              <Route path={`${props.match.path}/shop/canta`} component={Canta} />
              <Route path={`${props.match.path}/shop/matara`} component={Matara} />
              <Route path={`${props.match.path}/myaccount`} component={MyAccount} />
              <Route path={`${props.match.path}/customerinformation`} component={CustInfo} />
              <Route path={`${props.match.path}/paymentinformation`} component={PaymentInfo} />
              <Route path={`${props.match.path}/signin`} component={SignIn} />
              <Route path={`${props.match.path}/signup`} component={SignUp} />
              <Route path={`${props.match.path}/address`} component={Address} />
              <Route path={`${props.match.path}/forgotpassword`} component={asyncComponent(() => import('../../pages/ForgotPassword'))}/>
              <Route path={`${props.match.path}/algolia`} component={asyncComponent(() => import('../../components/algolia'))}/>
              <Route path={`${props.match.path}/sample`} component={Sample} />
            
            
            
          </Content>
          <Footer>
          <Row>
          <Col lg={8} md={8} sm={8} xs={8}></Col>
          <Col lg={8} md={8} sm={8} xs={8}>
              <div className="gx-layout-footer-content" style={{textAlign:"center"}}>
              
              <span>
        2020 © <a href="https://www.behasss.com/"><img alt="BEHASSS" style={{width:"25%"}} src={require("assets/images/behasss_logo_renkli.png")}></img></a> </span>
       
              </div>
              </Col>
              <Col lg={8} md={8} sm={8} xs={8}>
              <div className="gx-layout-footer-content" style={{textAlign:"right"}}>
              <img alt="BEHASSS" style={{width:"20%"}} src={require("assets/images/master-visa-logo.png")}></img></div>
                </Col>
              </Row>
            </Footer>
        </Layout>

      </Layout>


    );
}
export default CustomerRoutes;