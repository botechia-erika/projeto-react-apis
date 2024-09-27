import React from 'react'

export const OrderCategories = ({filterType}) => {
  return (
    <InputSelect onChange={(e)=>{filterType(e.target.value)}} >
        <InputOption value="0">TIPO</InputOption>
        <InputOption value="1">Camiseta</InputOption>  
        <InputOption value="2">Calça</InputOption>
        <InputOption value="3">Meias</InputOption>
    </InputSelect>
  )
}
