import React, { useState } from 'react'
import './languagetrlr.css'

export default function Languagetrlr() {
    const[language,setLanguage] = useState();
    const[select,setSelect] = useState('en');
  return (
    <div className='whole'>
    <div className='text-black font-semibold text-5xl'>Language Translator</div>
    <div className='Content'>
    <div className='langselect'>
    <div className='from'></div>
    <div className='arrow'></div>
    <div className='to'></div>
    </div>
    <textarea className='w-1/2 h-1/2 p-4 border border-solid border-gray-500 rounded-md shadow-md font-bold text-2xl'/>
    <div class="flex items-center justify-center space-x-2">
  <div class="arrow">&#9660;</div>
</div>
    <textarea className='w-1/2 h-1/2 p-4 bg-gray-400 border border-solid border-gray-500 rounded-md shadow-md text-white font-bold text-2xl' readOnly></textarea>
    <button className='bg-blue-500 text-white py-2 px-4 rounded'>Translate</button>
    </div>
    </div>
  )
}