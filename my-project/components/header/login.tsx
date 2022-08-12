import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {Button,Col,Row} from 'antd' ;
import { useSession, signIn, signOut } from "next-auth/react";
import 'tailwindcss/tailwind.css';
import { colors } from '@mui/material'

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <Row>
        <span className="text-white" style={{ marginLeft:10}}>Signed in as {session.user?.email}</span> <br />
        <Button onClick={() => signOut()} style={{ margin:15}}>
          <span className='text-white'>Sign out</span>
          </Button>
        </Row>
      </>
    )
  }
  return (
    <>
    
    <Row>
      <span className='text-white' style={{ marginLeft:10}}>Not signed in</span> <br />
      <Button onClick={() => signIn()} style={{ margin:15}}>
      <span className='text-white'>Sign In</span>
        </Button >
    </Row>
    </>
  )
}