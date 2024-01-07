import React from 'react'
import Navbar from '../Navbar/Navbar'
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


function Gallery() {
  return (
    <div>
          <Navbar/>

          <div class=" mx-auto  px-5 py-2 lg:px-20 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl1} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl2} />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl3} />
      </div>
    </div>
    
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl9} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl4} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl5} />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl6} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl6} />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl4} />
      </div>
    </div>

    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl6} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl7} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={gl11} />
      </div>
    </div>

  </div>
</div>
</div>

  )
}

export default Gallery
