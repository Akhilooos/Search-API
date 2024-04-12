import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    const [searchterm,setSearchterm] = useState('');
    
    const handleSearchChange = (event) => {
        setSearchterm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
    }

    return (
        <header>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
               <Link to='/' ><img className='sm:mb-2' src={logo} alt="Logo" /> </Link>
                <form onSubmit={handleSearchSubmit} className='flex flex-row gap-x-4 ml-auto'>
                    <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                        value={searchterm}
                        onChange={handleSearchChange}
                    />
                    <Link to={`/search/${searchterm}`}>
                    <button className="inline-flex items-center bg-[#F6A018]  border-0 py-1 px-3 text-white font-medium hover:bg-orange-500">
                        Search
                    </button>
                    </Link>
                </form>
            </div>
        </header>
    );
};

export default Header;
