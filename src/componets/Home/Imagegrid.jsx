import React from 'react';
import './Content.css';
import { useNavigate } from 'react-router-dom';

import gl1 from '../../assets/gl-h/gl1-min.jpg'; 
import gl2 from '../../assets/gl-h/gl2-min.jpg'; 
import gl3 from '../../assets/gl-h/gl3-min.jpg'; 
import gl4 from '../../assets/gl-h/gl4-min.jpg'; 
import gl5 from '../../assets/gl-h/gl5-min.jpg'; 
import gl6 from '../../assets/gl-h/gl6-min.jpg'; 
import gl7 from '../../assets/gl-h/gl7-min.jpg'; 
import gl8 from '../../assets/gl-h/gl8-min.jpg'; 
import gl9 from '../../assets/gl-h/gl9-min.jpg'; 
import gl10 from '../../assets/gl-h/gl10-min.jpg'; 
import gl11 from '../../assets/gl-h/gl11-min.jpg'; 
import gl12 from '../../assets/gl-h/gl12-min.jpg'; 






function Imagegrid() {
    const navigate=useNavigate();

    const titleStyle = {
        letterSpacing: '0.3em', // Adjust the value based on your preference
      };
  return (

    <>
    <div className='w-full h-8 mb-4 bg-[#ebebed]'>

    </div>

    <div className='w-full h-16 mb-4 bg-[#ebebed] flex flex-col items-center'>
    <h1 className='font-Poppins text-xl mb-2' style={titleStyle}>Gallery</h1>
        <hr className="bookends"/>
      </div>
    
    <div>
        
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 p-2">
        <div>
          <img className="h-90 max-w-full rounded-lg" src={gl1} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl8} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl4} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl5} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl7} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl12} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl9} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl10} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl11} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl3} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={gl7} alt="" />
        </div>
        
      </div>
    </div>

    <div className='w-full h-16 mb-4 bg-[#ebebed] flex justify-center items-center'>
    <button href="#_" class="relative inline-flex items-center justify-center p-2 px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#1791c8] rounded-full shadow-md group "onClick={()=>navigate('/gallery')}>
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#1791c8] group-hover:translate-x-0 ease">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-[#1791c8] transition-all duration-300 transform group-hover:translate-x-full ease">see more</span>
  <span class="relative invisible">Button Text</span>
</button>

      </div>
    </>

  );
}

export default Imagegrid;
