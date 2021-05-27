import React from "react";
import { Layout } from "antd";
import { Route} from "react-router-dom";
import Sidebar from "../../components/sidebar/index";
import SchoolAdmin from '../../pages/SchoolAdmin';
import SchoolAdminLogin from '../../pages/SchoolAdminLogin';
import AddLesson from '../../pages/AddLesson';
import AddTeacher from '../../pages/AddTeacher';


const { Content, Footer } = Layout;
const SchoolAdminRoutes = (props) => {
    let adminResult = JSON.parse(localStorage.getItem('schoolAdminResult')); 
    let adminId = adminResult ? adminResult.adminId : 0;

    return (
        <Layout className="gx-app-layout">
            {/*getSidebar(width)*/}
            <Layout>
                {adminId!=0 ?  (<Sidebar menuType="schooladmin" />) :  []}
                <Content className="gx-layout-content gx-container-wrap">
                    <Route exact path={props.match.path} component={SchoolAdminLogin}/>
                    <Route path={`${props.match.path}/dashboard`}  component={SchoolAdmin}  />
                    <Route path={`${props.match.path}/addlesson`}  component={AddLesson}   />
                    <Route path={`${props.match.path}/addteacher`}  component={AddTeacher}   />
                    <Footer>
              <div className="gx-layout-footer-content" style={{textAlign:"center"}}>
              <span>
        2020 © <a href="https://www.behasss.com/"><img alt="logo" style={{width:"11%"}} src={require("assets/images/behasss_logo_renkli.png")}></img></a> </span>
              </div>
            </Footer>
                </Content>

            </Layout>

        </Layout>
    );


}
export default SchoolAdminRoutes;