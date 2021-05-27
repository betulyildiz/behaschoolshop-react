import React , {useState, useEffect} from "react";
import { Form, Input, message , Card , Spin , Button } from "antd";
import { LoadingOutlined  } from '@ant-design/icons';
import {  useHistory} from "react-router-dom";
import TeacherTable from "../components/schoolAdmin/TeacherTable";
const FormItem = Form.Item;

const AddTeacher = () => {
    const [form] = Form.useForm();
    let schoolAdminResult = JSON.parse(localStorage.getItem("schoolAdminResult"));
    let schoolId = JSON.parse(localStorage.getItem("schoolId"));
    const [teacher,setTeacher] = useState([]);
    

    console.log(schoolId);
    const formItemLayout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 14 }
      };

      useEffect(() => {
        let schoolAdminResult = JSON.parse(localStorage.getItem('schoolAdminResult')); 
        if(!schoolAdminResult) {
            history.push({
              pathname: '/schooladmin'
            })
        }
      }, []);

      useEffect(() => {
        let teacherData = schoolAdminResult ? schoolAdminResult.teacherDto : [];
        setTeacher(teacherData);

    }, []);

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const [spinActive , setSpinActive] = useState(false);
    const [spinActiveTable , setSpinActiveTable] = useState(false);
    const history = useHistory();

    const handleSubmit = (value) => {
        value["schoolId"]=schoolId;
    setSpinActive(true); 
    fetch("https://behaweb.com/school-admin/add-teacher/",{
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value)
  } )
      .then(res => res.json())
      .then(
        (result) => {
          setSpinActive(false);
          console.log(result);
          if(result.status === 's'){
              message.success('Öğretmen başarıyla eklendi.');
              form.resetFields();
              let tempTeacher = teacher;
              let teacherToAdd = {
                id: result.teacherDTO.id,
                name: result.teacherDTO.name,
                email: result.teacherDTO.email,
                password: result.teacherDTO.password
              };
              tempTeacher=[...tempTeacher,teacherToAdd];
              setTeacher(tempTeacher);
              schoolAdminResult.teacherDto=tempTeacher;
              localStorage.setItem('schoolAdminResult',JSON.stringify(schoolAdminResult));
              console.log(tempTeacher);
          }else{
            setSpinActiveTable(false);
            form.resetFields();
            message.error(result.message);
          }
        },
        (error) => {
          setSpinActive(false);
          console.log(error);
        }
      );  
    };
   const onDeleteTeacher = (teacherId) => {
     setSpinActiveTable(true);
     
      fetch("https://behaweb.com/school-admin/deleteTeacher/" + teacherId)
          .then(res => res.json())
          .then(
              (result) => {
                if(result.status === 's'){
                  setSpinActiveTable(false);
                  let tempTeacher = teacher.filter(item => item.id !== teacherId);
                  console.log(tempTeacher);
                  setTeacher(tempTeacher);
                  schoolAdminResult.teacherDto=tempTeacher;
                  localStorage.setItem('schoolAdminResult',JSON.stringify(schoolAdminResult));
                  console.log(result.message); }
                else{
                  setSpinActiveTable(false);
                  message.error(result.message);
                }
              },
              (error) => {
                setSpinActiveTable(false);
                  console.log(error);
              }
          );

  }

    return (
        <div>
       <Card title="Öğretmen Ekle" style={{ marginRight:"auto", marginLeft:"auto", float:"center",width: 400 }}>
                <Spin indicator={antIcon} spinning={spinActive} >
                <Form onFinish={handleSubmit} form={form} className="gx-login-form gx-form-row0" {...formItemLayout}>
                    <FormItem label="Öğretmen Adı" name="name" rules={[{ required: true, message: 'Lütfen Sınıf Adını Giriniz!' }]}>
                        <Input/>
                    </FormItem>
                    <FormItem label="E-posta" name="email" rules={[{ required: true, message: 'Lütfen Ders Adını Giriniz!' }]}>
                        <Input/>
                    </FormItem>
                    <FormItem label="Şifre" name="password" rules={[{ required: true, message: 'Lütfen Ders Adını Giriniz!' }]}>
                        <Input/>
                    </FormItem>
                    <FormItem style={{float:"right"}}>
                        <Button type="primary" htmlType="submit">
                           Ekle
            </Button>
                    </FormItem>
                </Form>
                </Spin></Card>
                <Spin indicator={antIcon} spinning={spinActiveTable} >
           <TeacherTable deleteTeacher={onDeleteTeacher} teacher={teacher} ></TeacherTable></Spin></div>
    );
}

export default AddTeacher;
