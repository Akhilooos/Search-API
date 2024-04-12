import React, { useEffect, useState } from 'react'
import CocktailItem from '../components/CocktailItem';

const Homepage = () => {

const allUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const [drinks,setDrinks] = useState([]);
const[loading,setLoading]=useState(true);

 async function getAlldrinks(){
    const response = await fetch(allUrl);
        const data = await response.json();
        setDrinks(data.drinks);
        setLoading(false);
}

useEffect(()=>{
    getAlldrinks();
},[])


if(loading) return "Loading...."

    return (
        <div className='flex flex-wrap justify-center gap-y-4 gap-x-2'>
            {drinks.map((item) => (
                <CocktailItem key={item.idDrink} item={item} />
            ))}
        </div>
    );
 
}

export default Homepage