import React from 'react';

const AllToysTable = ({ allToy, index }) => {
    // console.log(allToy);
    const { sellerName, subCategory, toyName, price, photoURL, quantity } = allToy;
    // console.log(allToy);
    return (
        <>
            <tbody>
                <tr>
                    <th>
                        <p>{index + 1}</p>
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{toyName}</div>
                                <div className="text-sm opacity-50">{subCategory}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {sellerName}
                        <br />
                        <span className="badge badge-ghost badge-sm">Seller</span>
                    </td>
                    <td>${price}</td>
                    <td>{quantity}</td>
                    <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
            </tbody>
        </>
    );
};

export default AllToysTable;