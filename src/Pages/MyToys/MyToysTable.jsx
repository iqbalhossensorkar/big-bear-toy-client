import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const MyToysTable = ({ singleToy, index, handleDelete }) => {
    const {control, setControl} = useState(false)
    const { user } = useContext(AuthContext)
    // console.log(singleToy);
    const { sellerName, subCategory, toyName, price, photoURL, quantity, _id, sellerEmail, message, rating } = singleToy;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleToyUpdate = (data, id) => {
        // console.log(data);
        fetch(`http://localhost:5000/updateJob/${data._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if (result.modifiedCount>0) {
                Swal.fire(
                    'Good job!',
                    'You Updated Successfully!',
                    'success'
                  )
                  setControl(!control)
            }
        })
    } 
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
                                    <img src={photoURL} alt="Avatar" />
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
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-6" className="btn btn-ghost btn-xs bg-amber-300">update</label>
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box bg-amber-100">
                                <form onSubmit={handleSubmit(handleToyUpdate)}>
                                <input className='input w-full hidden' defaultValue={_id} {...register("_id")} />
                                    <label className=''>
                                        <p className='text-base'>Toy Name</p>
                                        <input className='input w-full' defaultValue={toyName} {...register("toyName")} />
                                    </label>
                                    <label>
                                        <p className='text-base mt-5'>Photo URL</p>
                                        <input className='input w-full' defaultValue={photoURL} {...register("photoURL")} />
                                    </label>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5 items-center w-full'>
                                        <label>
                                            <p className='text-base'>Seller Name</p>
                                            <input className='input w-full' defaultValue={sellerName}{...register("sellerName")} />
                                        </label>
                                        <label>
                                            <p className='text-base'>Seller Name</p>
                                            <input className='input w-full' defaultValue={sellerEmail}{...register("sellerEmail")} />
                                        </label>
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5 items-center w-full'>
                                        <label>
                                            <p className='text-base'>Price</p>
                                            <input className='input w-full' type='number' defaultValue={price}{...register("price")} />
                                        </label>
                                        <label>
                                            <p className='text-base'>Quantity</p>
                                            <input className='input w-full' type='number' defaultValue={quantity}{...register("quantity")} />
                                        </label>
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5'>
                                        <div>
                                            <p>Sub Category</p>
                                            <select className='w-full px-5 py-2 rounded-md' defaultValue={subCategory} {...register("subCategory")}>
                                                <option value="Animal figurines">Animal figurines</option>
                                                <option value="Safari Stories">Safari Stories</option>
                                                <option value="Stuffed Toys">Stuffed Toys</option>
                                            </select>
                                        </div>
                                        <div>
                                            <p>Rating</p>
                                            <select className='w-full px-5 py-2 rounded-md' defaultValue={rating} {...register("rating")}>
                                                <option value="3">3</option>
                                                <option value="3.5">3.5</option>
                                                <option value="4">4</option>
                                                <option value="4.2">4.2</option>
                                                <option value="4.5">4.5</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <label>
                                        <p>Detail Description:</p>
                                        <textarea className='textarea w-full' defaultValue={message} {...register('message')} />
                                    </label>
                                    <div className='text-center'>
                                        <input className='btn mt-5' type="submit" value='Update'/>
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn">close</label>
                                </div>
                            </div>
                        </div>
                    </th>
                    <th>
                        <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">delete</button>
                    </th>
                </tr>
            </tbody>
        </>
    );
};

export default MyToysTable;