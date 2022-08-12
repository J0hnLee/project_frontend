import ProTable from '@ant-design/pro-table';
import { Popconfirm, Button } from 'antd';
import { queryProductList } from '@/services/product';
import React from 'react';
import { ProForm, ProFormText } from '@ant-design/pro-components';


const Comparesys = () => {

    return (
        <div><ProForm
        onFinish={async (values) => {
          console.log(values);
        }}
      >
        <ProFormText name="name" label="姓名" />
      </ProForm></div> 
        
    )
}
export default Comparesys