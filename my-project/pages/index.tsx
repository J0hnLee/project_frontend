import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/event-list';
<<<<<<< Updated upstream
import Login from './login';
import React from 'react';
import { DatePicker } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
=======
import Component from './login';
import Result from 'ant-design-pro/lib/Result';
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式
//import '@ant-design/pro-components/dist/components.css';
import '@Ant-Design/pro-form/dist/form.css'
import '@Ant-Design/pro-card/dist/card.css'
import { ProForm, ProFormText } from '@ant-design/pro-components';
>>>>>>> Stashed changes

function HomePage(){
  const featuredEvents = getFeaturedEvents();
return (
  <div>
  
    <Head>
      <title>Hello everyone</title>
    </Head>
    <div>
        <button onClick={()=> alert('Hello')}>Hello</button>
      <div>
        <EventList items={featuredEvents}/>
      </div>
<<<<<<< Updated upstream
      <Login/>
      <DatePicker/>
=======
      <Component></Component>
      <Result type="success" />
      <ProForm
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      <ProFormText name="name" label="姓名" />
    </ProForm>
>>>>>>> Stashed changes
    </div>
  </div>
  )

}


export default HomePage;


// return (
//   <div>
//   <h1>HomePage</h1>
//   <h2>You need to login first</h2>
//   <Link href="/login">To the login</Link>
  
//   <ul>
//     <li>
//     <Link href="/clients/max">Hello</Link>
//     </li>
//   </ul>
//   </div>
//   )

// }
