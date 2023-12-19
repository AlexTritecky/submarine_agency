"use client";
import { Inter } from 'next/font/google'
import HomePage from '@/Pages/home';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   return <HomePage />
}

