import { theme } from '@/utils/theme';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Props {
  onTicketClick: () => void
}

const QRScreen: React.FC<Props> = ({ onTicketClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onTicketClick();
    }, 750);
  }

  useEffect(() => {
    const autoClick = setTimeout(() => handleClick(), 7000);
    return () => {
      clearTimeout(autoClick);
    };
  }, []);

  return (
    <div style={{background: theme.colors.graylight}} className='h-screen w-screen absolute top-0 left-0 z-10 overflow-y-auto'>
      <nav style={{background: theme.colors.graylight}} className='flex  items-center pb-2'>
        <button className='px-6 py-2 rounded-r-full' style={{background: theme.colors.bluelight}}>
        <Image onClick={handleClick} className='m-1' src="/close.png" width={30} height={30} alt="menu" />
        </button>
        <p className='uppercase text-blue-900 font-bold ml-4'>biglietto scelto</p>
      </nav>
      <div>
        <p className='text-2xl ml-7 my-2 text-black font-bold text-center'>Daily APP</p>

          <div role="status" style={{position: "absolute", zIndex: 3000, transform: "translate(-50%, -50%)", top: "50%", left:"50%"}}>
              <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-400 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
          </div>
          <div className='absolute h-screen w-screen bg-black opacity-60 z-20 top-0 left-0'></div>

      </div>
    </div>
  )
}

export default QRScreen