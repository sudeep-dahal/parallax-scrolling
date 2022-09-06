

import React from 'react'
import {data} from '../mockData'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


const Horizontalscroll = () => {

    const slideleft=()=>{
        var slider=document.getElementById('slider')
        slider.scrollLeft= slider.scrollLeft -500
    }

    const slideright=()=>{
        var slider=document.getElementById('slider')
        slider.scrollLeft= slider.scrollLeft +500
    }


  return (
    <div className='relative flex items-center md:h-full h-[125px]'>
       
       <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideleft} size={40}/>
       
        <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '>

        {
            data.map((item)=>(
                <img className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' 
                src={item.img} 
                alt="" /> 


            )
        )}


        </div>
      
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideright} size={40}/>


        
        
    </div>
  )
}

export default Horizontalscroll