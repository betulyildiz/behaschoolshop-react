import React,{useEffect,useState} from "react";
import { Modal,Layout } from "antd";
import AlgoliaApp from '../components/algolia-shop';

const {  Content, Sider } = Layout;


const Canta = (props) => {
  const [category, setCategory] = useState(false);
  useEffect(() => {
    let categoryFromIndex = localStorage.getItem('category');
    localStorage.removeItem('category');
    debugger;
    if(categoryFromIndex==null || categoryFromIndex=="") {
      setCategory("Çanta");
     
    }
    else {
      setCategory(categoryFromIndex);}
  }, []);
  return (
    <Layout>
   <AlgoliaApp category={category}></AlgoliaApp>
    </Layout>

    
  );
};



export default Canta;