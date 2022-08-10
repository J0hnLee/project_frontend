import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {Button} from 'antd' ;
import { useSession, signIn, signOut } from "next-auth/react";
import 'tailwindcss/tailwind.css';

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <span className="text-white">Signed in as {session.user?.email}</span> <br />
        <Button onClick={() => signOut()} >
          <span className='text-white'>Sign out</span>
          
          </Button>
        
      </>
    )
  }
  return (
    <>
      <span className='text-white'>Not signed in</span> <br />
      <Button onClick={() => signIn()} >
      <span className='text-white'>Sign In</span>
        </Button>
    </>
  )
}