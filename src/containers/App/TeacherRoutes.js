import React from "react";
import { Layout } from "antd";
import { Route} from "react-router-dom";
import TeacherAddProduct from '../../pages/TeacherAddProduct';
import TeacherLogin from '../../pages/TeacherLogin';


const { Content, Footer } = Layout;
const TeacherRoutes = (props) => {

    return (
        <Layout className="gx-app-layout">
            {/*getSidebar(width)*/}
            <Layout>
                <Content className="gx-layout-content gx-container-wrap">
                    <Route exact path={props.match.path} component={TeacherLogin}/>
                    <Route path={`${props.match.path}/teacheraddproduct`}  component={TeacherLogin}   >
                        <TeacherAddProduct />
                    </Route>
                    <Footer>
              <div className="gx-layout-footer-content" style={{textAlign:"center"}}>
              <span>
        2020 © <a href="https://www.behasss.com/"><img alt="Logo" style={{width:"11%"}} src={require("assets/images/behasss_logo_renkli.png")}></img></a> </span>
              </div>
            </Footer>
                </Content>

            </Layout>

        </Layout>
    );


}
export default TeacherRoutes;