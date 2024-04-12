import React from 'react'
import { Link } from 'react-router-dom'

const CocktailItem = ({item}) => {
  return (
    <>
    <Link to={`/item/${item.idDrink}`} className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-lg rounded-md mt-8 flex flex-col items-center p-4 group hover:border-yellow-500 hover:border-2">
    <div>
       <img className='w-full h-64 object-cover rounded-lg' src={item.strDrinkThumb} alt={item.strDrink}/>
       <h3 className='mt-4 text-xl font-bold text-white'>{item.strDrink}</h3>
       <h2 className='mt-2 text-lg text-white'>{item.strCategory}</h2>
    </div>
    </Link>
    </>
  )
}

export default CocktailItem
