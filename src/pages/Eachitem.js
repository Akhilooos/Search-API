import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Eachitem = () => {
const {id} = useParams();
const productApi = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+id;

const[product,setProduct] = useState([]);
const[loading,setLoading]=useState(true);

async function getProductdata(){
  console.log(productApi);
    const details = await fetch(productApi);
    const data = await details.json();
    setProduct(data.drinks[0]);
    
    setLoading(false);
}

useEffect(()=>{
    getProductdata();
},[id])


if(loading) return "Loading...."

  return (
    <div className="flex flex-wrap justify-center md:justify-start">
        <div className='w-full md:w-1/2'>
            <img className='w-full h-64 object-contain' src={product.strDrinkThumb} alt={product.strDrink}/>
        </div>
        <div className='w-full md:w-1/2 p-4 text-left'>
            <h3 className='text-white text-2xl mb-2 font-bold'>{product.strDrink}</h3>
            <p className='text-white mb-2 font-semibold'>{product.strTags}</p>
            <h2 className='text-white text-xl mb-2'>Instructions</h2>
            <p className='text-white mb-2'>{product.strInstructions}</p>
            <p className='text-white'>{product.strInstructionsDE}</p>
        </div>
    </div>
  )
}

export default Eachitem
