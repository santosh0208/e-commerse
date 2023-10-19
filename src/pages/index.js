import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import DefaultLayout from '@/layouts'
import HomePage from './homePage'
import { HeaderSearch } from '@/components/Header'
//import '../styles/globals.css'


export default function Home() {
  return (
    <>
      <DefaultLayout/>
    </>
  )
}
