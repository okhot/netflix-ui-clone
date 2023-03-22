import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/components/templates/login/login'
import ProfileCard from '@/components/molecules/profile-card/profile-card'
import Profile from '@/components/templates/profile/profile'
import HomePage from './home'

export default function Home() {
  return (
    <>
    <HomePage />
    </>
  )
}
