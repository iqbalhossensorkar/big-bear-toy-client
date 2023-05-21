import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';

const AllToys = () => {
    const allToys = useLoaderData();

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
{
    allToys.map(alltoy => <AllToysTable key={alltoy._id} allToy={alltoy}></AllToysTable>)
}
                </table>
            </div>
        </div>
    );
};

export default AllToys;