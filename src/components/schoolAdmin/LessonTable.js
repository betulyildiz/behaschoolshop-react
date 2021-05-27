import React,{useState} from 'react';
import { Table,  Popconfirm,  Select } from 'antd';
const LessonTable = (props) => {
  const [editingKey, setEditingKey] = useState('');
  const [handleTeacher, setHandleTeacher] = useState('');
  const isEditing = record => record.key === editingKey;
           const columns = [
              {
            title: 'Sınıf Adı',
            dataIndex: 'gradeName',
            width: '30%',
            
          },
          {
            title: 'Ders Adı',
            dataIndex: 'lessonName'
          },
          {
            title: 'Öğretmen',
            dataIndex: 'operation',
            editable: true,
            render: (text, record) =>
            <Select disabled={!isEditing(record)} defaultValue={record.teacherId} onChange={(e) => handleChange(e,record.key)} style={{ width: 120 }} >
            {props.teacher}
            </Select>
          },
          {
            title: 'Öğretmen Değiştir',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Kaydet
            </a>
            <Popconfirm title="Çıkmak istediğinize emin misiniz?" okText="Evet"
              cancelText="Hayır" onConfirm={cancel}>
              <a>Çıkış</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            Düzenle 
          </a>
        );
      },
          },          {
            title: 'Sil',
            dataIndex: 'operation',
            render: (text, record) =>
              <Popconfirm title="Silmek istediğinize emin misiniz?" okText="Evet"
              cancelText="Hayır" onConfirm={() => handleDelete(record.key)}>
                <a>Sil</a>
              </Popconfirm>
          },
        ];
      let data = props.grade.map((grade, shopIndex) => {
      return ({ gradeName: grade.gradeName, lessonName:grade.lessonName, teacherId:grade.teacherId,  teacherName:grade.teacherName , key: grade.lessonId })});
  
        const save = key => {
          console.log(key);
          //console.log(handleTeacher);
          props.updateTeacher(handleTeacher,key);
          setEditingKey('');
        };

        const cancel = () => {
          setEditingKey('');
        };

        const edit = record => {
          setEditingKey(record.key);
          console.log(handleTeacher);
        };

        const handleDelete = key => {
          let ds = [...data];
          data = ds.filter(item => item.key !== key);
          props.deleteLesson(key);
        };

        const handleChange = (e ,key )=> {
          console.log(e);
          setHandleTeacher(e);
        }
    

      return (
          <div>
        <Table
        
          className="components-table-demo-nested"
          columns={columns}
          dataSource={data}
        /></div>
      );
      }

export default LessonTable;