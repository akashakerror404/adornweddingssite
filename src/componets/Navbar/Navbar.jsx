import React,{useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
// import logo from '../../../static/logopixel.png';
import logo from '../../assets/adorn.png'
import { useNavigate } from 'react-router-dom';

function Customenavbar() {

    const [toggle,setToggle] =useState(false)

    const navigate=useNavigate();


  
  return (
    <>
    <div className='w-full h-[80px] bg-white border-b shadow fixed z-50'>
        <div className='md:max-w-[1240px]  max-w-[330px] w-full h-full flex justify-between items-center m-auto'>
       
            <div className="flex flex-shrink-0 ">
                <img
                  className="md:h-56 h-36 w-auto"
                  src={logo}
                  alt="Your Company"
                />
              </div>
           
              <div className='hidden md:flex'>
                <ul className='flex gap-9'>
                    <li className='group relative px-3 py-2 text-sm font-medium' onClick={()=>navigate('/')}>
                    HOME 
                    <div className='absolute inset-x-0 bottom-0 h-1 bg-[#1791c8] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></div>
                    </li>
                    <li className='group relative px-3 py-2 text-sm font-medium'onClick={()=>navigate('/gallery')}>
                    GALLERY
                    <div className='absolute inset-x-0 bottom-0 h-1  bg-[#1791c8]  transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></div>
                    </li>
               
                    <li className='group relative px-3 py-2 text-sm font-medium' onClick={()=>navigate('/')}>
                    ABOUT US
                    <div className='absolute inset-x-0 bottom-0 h-1  bg-[#1791c8] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></div>
                    </li>
                    <li className='group relative px-3 py-2 text-sm font-medium' onClick={()=>navigate('/')}>
                    BOOKINGS
                    <div className='absolute inset-x-0 bottom-0 h-1  bg-[#1791c8]  transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></div>
                    </li>
                 
                    
                </ul>
                </div>
       

    




        
        






        
        

           
            <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
               {toggle ? <i className="fa fa-times"></i> : <i  className="fa fa-bars"></i> }
            </div>

        </div>
        <div className={toggle ? 'absolute z-50 p-4 bg-white w-full px-8 md:hidden' :'hidden'}>
            <ul>
                <li className='p-4 hover:bg-gray-100'  onClick={()=>navigate('/')}>HOME</li>

                <li className='p-4 hover:bg-gray-100'onClick={()=>navigate('/')} >GALLERY</li>
                <li className='p-4 hover:bg-gray-100'onClick={()=>navigate('/')}>ABOUT</li>
                <li className='p-4 hover:bg-gray-100'onClick={()=>navigate('/blog')}>BOOKINGS</li>
                
         
            </ul>
        </div>
      
    </div>
        <div className='w-full h-[80px] bg-white border-b shadow  '>
                </div>
                </>

  )
}

export default Customenavbar
