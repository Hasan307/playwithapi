'use client';

import Link from "next/link"
export default async function Home() {
  const handleSet = async () => {
    const response = await fetch('http://localhost:3000/api/product/setcookies')
    const data = await response.json();
  }
  return (
   <div>
    <h1>Homepage</h1>
    <button onClick={handleSet}>set Cookies</button>
    

   </div>
  )
}
