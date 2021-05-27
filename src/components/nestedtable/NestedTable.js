import React from 'react';
import { Table,  Popconfirm,  InputNumber } from 'antd';




const NestedTable = (props) => {
  
  const expandedRowRender = (row) => {
    console.log(row);
debugger;
    const columns = [
      {
        title: 'Ürün Resmi',
        dataIndex: 'productImage',
        width: '30%',
        editable: true,
        render: (text, record) => {
          return (<img style={{maxWidth:"60px"}} alt="example" 
          src={record.productImage}/>);

        }
        
      },
      {
        title: 'Ürün Adı',
        dataIndex: 'productName',
        width: '30%',
        editable: true,
      },
      {
        title: 'Adet',
        dataIndex: 'quantity',
        render: (text, record) => {
          return (<InputNumber min={1} max={100} defaultValue={record.quantity} onChange={(e) => onQuantityChange(record.key, e)} />);

        }
      },
      {
        title: 'Fiyat',
        dataIndex: 'price',
      },
      {
        title: '',
        dataIndex: 'operation',
        render: (text, record) =>
          <Popconfirm title="Silmek istediğinize emin misiniz?" okText="Evet"
          cancelText="Hayır" onConfirm={() => handleDelete(record.key)}>
            <a>Sil</a>
          </Popconfirm>
      },
    ];

    const onQuantityChange = (key, quantity) => {
      props.quantityChange(key, quantity);
    }




    let data = row.shopLists.map((shopList, shopIndex) => {
      return ({ productName: shopList.product.name,productImage: shopList.product.productImages[0].filePath,
        quantity: shopList.quantity, price: shopList.price, key: shopList.id })
    });

    const handleDelete = key => {
  debugger;
      let ds = [...data];
      data = ds.filter(item => item.key !== key);
      props.deleteProduct(key);
    };
debugger;
    return row.shopLists.length!=0 ? ( <Table columns={columns} dataSource={data} pagination={false}/>) :(
    row.lessonName==="Diğer Ürünler" ? (
      <div>
      <a href="/app/shop/canta">Çanta Matara Ürünlerimizi Gördünüz mü?</a>
    </div>
    ) : (<Table columns={columns} dataSource={data} pagination={false}/>)
    ) ;
  };

  const columns = [
    { title: 'Ders Adı', dataIndex: 'lessonName', key: 'lessonName' }

  ];



  const data = props.shopListResult.map((lesson, index) => {
    return ({ lessonName: lesson.name, key: index , shopLists: lesson.shopLists });
  });

  return (
   
      <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data} scroll={{ x: 700 }}
    />
   
    
  );
}
export default NestedTable;