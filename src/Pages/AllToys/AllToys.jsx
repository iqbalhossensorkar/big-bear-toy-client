import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';

const AllToys = () => {
    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys)
    const [search, setSearch] = useState("");

    const handleSearch = async () => {
        try {
          const response = await fetch(`http://localhost:5000/toySearchByTitle/${search}`);
          const data = await response.json();
          setToys(data);
        
          const filteredData = toys.filter((toy) => toy.toyName.toLowerCase().includes(search.toLowerCase()));
          setToys(filteredData);
        } catch (error) {
          console.error('Error searching by title:', error);
        }
      };

    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className='grid justify-center my-10 relative'>
                <div className="input-group">
                    <input className='input input-bordered border-amber-200 border-2' placeholder="Search…" onChange={(event) => setSearch(event.target.value)} type="text" name="" id=" " />
                    <button onClick={handleSearch} className="btn btn-square bg-amber-400 border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        toys.map((alltoy, index) => <AllToysTable key={alltoy._id} allToy={alltoy} index={index}></AllToysTable>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllToys;