import { theme } from '../../utils/theme'
import Image from 'next/image'

interface Props {
  onTicketClick: () => void
}

const Biglietto: React.FC<Props> = ({ onTicketClick }) => {

  return (
    <div className="h-screen flex flex-col justify-between">
      <nav style={{background: theme.colors.graylight}} className='flex justify-between items-center pb-2'>
        <button className='px-6 py-2 rounded-r-full' style={{background: theme.colors.bluelight}}>
        <Image className='m-1' src="/menu-bar.png" width={30} height={30} alt="menu" />
        </button>
        <p className='uppercase text-blue-800 font-bold'>biglietti comprati</p>
        <button className='px-6 py-2 rounded-l-full' style={{background: theme.colors.bluelight}}>
        <Image src="/return.png" width={30} height={30} alt="return" />
        </button>
      </nav>
      <div onClick={onTicketClick} className='flex w-full items-start mt-2 gap-4 pb-2.5'>
        <div className='flex items-center gap-8 w-full justify-between mx-6'>
          <div className='grid gap-2 font-semibold text-blue-800'>
            <p className='uppercase text-lg'>biglietto scelto</p>
            <div className='grid font-normal'>
              <Image src="/ticket-2.png" height={200} width={125} alt="ticket" />
              <p className='font-semibold'>scadenza: fine servizio</p>
              <p className='text-xs italic'>bippami al validatore o al tornello</p>
            </div>
          </div>
          <div className='flex gap-4'>
            <button style={{background: theme.colors.blue}} className='h-14 w-14 flex justify-center items-center rounded-full'>
              <Image src="/icon.png" height={30} width={30} alt="biglietto info" className='' />
            </button>
          </div>
        </div>
      </div>
      <div style={{background: theme.colors.graylight, borderTop: `2px solid ${theme.colors.blue}`}} className='h-full flex items-end justify-center'>
          <button style={{background: theme.colors.yellow}} className="mb-4 drop-shadow-md uppercase bg-yellow-300 w-full rounded-full py-2 text-blue-800 font-bold text-lg mx-4">acquista nuovo biglietto</button>
      </div>
      <nav className="bg-blue-800 flex justify-around w-full py-2 text-sm">
        <button className='flex justify-center items-center flex-col'>
          <Image  src="/biglietti.png" width={25} height={25} alt='Biglietti' />
          <p style={{color: "#fade00"}}>Biglietti</p></button>
        <button className='flex justify-center items-center flex-col'><Image src="/leggi-titoli.png" width={25} height={25} alt='Leggi titoli' />Leggi titoli</button>
        <button className='flex justify-center items-center flex-col'><Image src="/informobilita.png" width={25} height={25} alt='Informobilità' />Informobilità</button>
      </nav>
    </div>
  )
}

export default Biglietto