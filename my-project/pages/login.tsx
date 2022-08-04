import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function LoginPage(){

return (
  <div>

    <h1>Login Page</h1>

    <form>
    <p>email:</p>
    <input type="text" name="email" />
    <p>password</p>
    <input type="text" name="password" />
    <button type="submit">Submit</button>
    <ul>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/portfolio">portfolio</Link>
        </li>
    </ul>
  </form>
  </div>
  )

}


export default LoginPage;