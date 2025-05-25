import { useState } from 'react'
import { theme } from '../../utils/theme'
import Image from 'next/image'

interface Props {
  onTicketClick: () => void
  onQRClick?: () => void
  onPdfClick?: () => void
}

const menuBottonColor = "#e9eaef"
const menuBottomActiveColor = "#4a4968"
const menuItems = [
  { buttonTitle: "I miei biglietti", title: "Biglietti comprati" },
  { buttonTitle: "Leggi titoli", title: "Leggi Titoli" },
  { buttonTitle: "Storico biglietti", title: "Biglietti scaduti" },
  { buttonTitle: "Impostazioni", title: "Impostazioni" },
  { buttonTitle: "Lingua", title: "Lingua" },
  { buttonTitle: "Contatti GTT", title: "Call center gtt" },
  { buttonTitle: "Tutorial", title: "Tutorial" },
  { buttonTitle: "FAQ", title: "FAQ" },
];

const Biglietto: React.FC<Props> = ({ onTicketClick, onQRClick, onPdfClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0])

  const handleSelectItem = (selectedItem: { buttonTitle: string, title: string }) => {
    setSelectedMenuItem(selectedItem)
    setIsDrawerOpen(false)
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  const currentDate = (() => {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  })();

  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleDrawer}
        >


        </div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-20 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300`}
      >
        <div id="drawer" className="flex flex-col h-full">
          <div style={{ backgroundColor: menuBottonColor }} className='flex items-center justify-center py-4 px-6'>
            <Image src="/gtt-logo.png" alt="logo gtt" width={300} height={300} />
          </div>
          <div className='flex-1 flex flex-col gap-[2px]'>
            {
              menuItems.map((item, index) => (
                <div onClick={() => handleSelectItem(item)} key={index} style={{ backgroundColor: selectedMenuItem.buttonTitle === item.buttonTitle ? menuBottomActiveColor : menuBottonColor }} className="flex items-center py-4 h-full">
                  <p style={{ color: selectedMenuItem.buttonTitle === item.buttonTitle ? 'white' : '#1c4495' }} className="ml-6 font-bold">{item.buttonTitle}</p>
                </div>
              ))
            }
            <div
              style={{ backgroundColor: menuBottonColor, color: menuBottonColor }}
              className="flex-1/3 flex items-center justify-center"
            >Menu</div>
          </div>
        </div>
      </div>
      {/* Navbar Top */}
      <nav style={{ background: theme.colors.graylight }} className='flex justify-between items-center pb-2'>
        <button onClick={toggleDrawer} className='px-6 py-2 rounded-r-full' style={{ background: theme.colors.bluelight }}>
          <Image className='m-1' src="/menu-bar.png" width={30} height={30} alt="menu" />
        </button>
        <p className='uppercase text-blue-800 font-bold'>{selectedMenuItem.title}</p>
        <button className='px-6 py-2 rounded-l-full' style={{ background: theme.colors.bluelight }}>
          <Image src="/return.png" width={30} height={30} alt="return" />
        </button>
      </nav>
      {/* Main content */}
      {selectedMenuItem.title === "Biglietti comprati" ? (
        <>
          <div className='flex w-full items-start mt-2 gap-4 pb-2.5'>
            <div className='flex items-center gap-8 w-full justify-between mx-3'>
              <div className='grid gap-2 font-semibold text-blue-800 w-full'>
                <p className='uppercase text-lg'>biglietto scelto</p>
                <div className='grid font-normal'>
                  <div className='flex justify-between'>
                    <Image onClick={onTicketClick} src="/ticket-2.png" height={200} width={125} alt="ticket" />
                    <div className='flex gap-4'>
                      <button onClick={onQRClick} style={{ background: theme.colors.blue }} className='h-14 w-14 flex justify-center items-center rounded-full'>
                        <Image src="/icon.png" height={30} width={30} alt="biglietto info" className='' />
                      </button>
                      <button onClick={onPdfClick} style={{ background: theme.colors.blue }} className='h-14 w-14 flex justify-center items-center rounded-full'>
                        <Image src="/Bip.png" height={30} width={30} alt="biglietto info" className='' />
                      </button>
                    </div>
                  </div>
                  <p className='font-semibold text-xs mt-1'>Valido per il giorno {currentDate}, fino a fine servizio</p>
                  <p className='text-xs italic'>bippami al validatore o al tornello</p>
                </div>
              </div>

            </div>
          </div>
          <div style={{ background: theme.colors.graylight, borderTop: `2px solid ${theme.colors.blue}` }} className='h-full flex items-end justify-center'>
            <button style={{ background: theme.colors.yellow }} className="mb-4 drop-shadow-md uppercase bg-yellow-400 w-full rounded-full py-2 text-blue-800 font-bold text-lg mx-4">acquista nuovo biglietto</button>
          </div>
          <nav className="bg-blue-800 flex justify-around w-full py-2 text-sm">
            <button className='flex justify-center items-center flex-col'>
              <Image src="/biglietti.png" width={25} height={25} alt='Biglietti' />
              <p style={{ color: "#fade00" }}>Biglietti</p></button>
            <button className='flex justify-center items-center flex-col'><Image src="/leggi-titoli.png" width={25} height={25} alt='Leggi titoli' />Leggi titoli</button>
            <button className='flex justify-center items-center flex-col'><Image src="/informobilita.png" width={25} height={25} alt='Informobilità' />Informobilità</button>
          </nav>
        </>
      ) : (
        <>
          <div role="status" style={{ position: "absolute", zIndex: 15, transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}>
            <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-400 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
          {/* <div className='absolute h-screen w-screen bg-black opacity-60 z-20 top-0 left-0'></div> */}
        </>
      )}
    </div>
  )
}

export default Biglietto