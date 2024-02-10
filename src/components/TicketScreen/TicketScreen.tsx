import { theme } from '@/utils/theme';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Props {
  onTicketClick: () => void
}

const TicketScreen: React.FC<Props> = ({ onTicketClick }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setOpacity(1), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{background: theme.colors.graylight}} className='h-screen w-screen absolute top-0 left-0 z-10'>
      <nav style={{background: theme.colors.graylight}} className='flex  items-center pb-2'>
        <button className='px-6 py-2 rounded-r-full' style={{background: theme.colors.bluelight}}>
        <Image className='m-1' src="/close.png" width={30} height={30} alt="menu" />
        </button>
        <p className='uppercase text-blue-800 font-bold ml-4'>biglietto scelto</p>
      </nav>
      <div className='flex flex-col items-center'>
        <Image src="/portello.png" height={200} width={125} className='pb-6' alt="ticket" />
        <img src="/sali-a-bordo.png" className='px-16' alt="ticket" />
        <img src="/ticket-2-big.png" className='p-4' alt="ticket" />
      </div>
      <div style={{ opacity: opacity*.6, transition: "opacity 1s ease-in-out" }} className='absolute h-screen w-screen bg-black opacity-60 z-10 top-0 left-0'></div>
      <div className='absolute h-screen w-screen top-0 left-0 z-20'>
        <div className='flex items-center justify-center h-full'>
          <img onClick={onTicketClick} style={{ opacity, transition: "opacity 1s ease-in-out" }} src="/ticket-convalidato.png" className='p-7' />
        </div>
      </div>
    </div>
  )
}

export default TicketScreen