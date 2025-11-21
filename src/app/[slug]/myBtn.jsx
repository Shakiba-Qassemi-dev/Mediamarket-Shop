'use client'
import useStore from '@/Store/Store'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function MyBtn({myTempObj}) {      
  const addPro = useStore((state)=> state.addPro)
  return (
   <>
   <button onClick={()=>addPro(myTempObj)} className="bg-gray-500 px-6 py-3 text-white rounded-2xl">add to basket <ShoppingCartIcon/> </button>
   </>
  )
}
