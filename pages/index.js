import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from './Components/Navbar/Navbar'

export default function Home() {
  
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>MERN APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

    </div>
  )
}
