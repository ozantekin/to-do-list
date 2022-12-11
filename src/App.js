import './styles/App.css'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='h-screen 	w-screen flex justify-center items-center flex-col whitespace-norma overflow-hidden	bg-blue-100 dark:bg-[#15202B]'>
      <div className='flex justify-between flex-col shadow-md shadow-blue-600  dark:shadow-[#74808D]  bg-white dark:bg-transparent rounded-md border dark:border-[#74808D] w-5/6 h-5/6 md:w-4/6 md:h-4/6 lg:w-3/6'>
        <div className='   w-full h-full overflow-auto hideScroll'>
          <div className=' w-full flex justify-center items-center flex-col'>
            <div className='grotesk w-full z-50 sticky top-[-1px] right-[-1px] left-[-1px] p-8  md:p-8  bg-white border-b dark:border-b-[#74808D] dark:bg-[#15202B] dark:backdrop-blur-md backdrop-blur-md dark:bg-opacity-80 bg-opacity-70 bg-blur-lg'>
              <Header />
              <Form />
            </div>
            <div className='leading-10 relative	w-full p-4  serif   pb-0 md:pb-0 dark:text-white'>
              <List />
            </div>
          </div>
        </div>
        <div className=' border-t p-2  text-xs md:text-sm grotesk  dark:border-t-[#74808D] text-gray-300 dark:text-[#74808D] sticky bottom-0 left-0 right-0  dark:bg-[#15202B] dark:backdrop-blur-md backdrop-blur-md dark:bg-opacity-80 bg-white bg-opacity-70 bg-blur-lg'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
