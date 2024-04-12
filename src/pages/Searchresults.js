import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Searchresults = () => {

 const {id} = useParams()
 const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+id;

 const [results,setResults] = useState([]);

 const getResults = async()=>{
    const initialResults = await fetch(searchUrl);
    const results = await initialResults.json();
    setResults(results.drinks); 
 }

 useEffect(()=>{
    getResults();
 },[id])

  return (
    <>
    <p className='text-orange-500'>Search results for {id}</p>
    {results.map((result) => (
      <div key={result.idDrink} className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden my-8">
        <img className="w-1/3 h-24 object-cover" src={result.strDrinkThumb} alt={result.strDrink}/>
        <div className="px-6 py-4">
          <p className='text-black font-bold text-xl mb-2'>{result.strDrink}</p>
        </div>
      </div>
    ))}
    </>
  )
}

export default Searchresults
