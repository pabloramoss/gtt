'use client'
import Biglietto from '@/components/Biglietto/Biglietto'
import TicketScreen from '@/components/TicketScreen/TicketScreen'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [showTicketScreen, setShowTicketScreen] = useState(true)

  const handleShowTicketScreen = () => {
    setShowTicketScreen(!showTicketScreen)
  }

  return (
    <main className="bg-white h-screen">
      <Biglietto onTicketClick={handleShowTicketScreen} />
      {showTicketScreen && <TicketScreen onTicketClick={handleShowTicketScreen} />}
    </main>
  )
}
