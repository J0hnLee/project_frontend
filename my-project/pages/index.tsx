import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/event-list';
import Login from '../components/header/login';
import React from 'react';
import { DatePicker } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';

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
    
    </div>
  </div>
  )

}


export default HomePage;


