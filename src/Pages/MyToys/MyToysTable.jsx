import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';

const MyToysTable = ({ singleToy, index, handleDelete }) => {
    const { user } = useContext(AuthContext)
    // console.log(singleToy);
    const { sellerName, subCategory, toyName, price, photoURL, quantity, _id } = singleToy;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleToyUpdate = (data) => {
        console.log(data);
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
                                        <p className='text-base'>Toy Name <span className='text-error'>*</span></p>
                                        <input className='input w-full' placeholder='mickey mouse' {...register("toyName", { required: true })} />
                                        {errors.toyName && <p className='text-sm text-error'>This field is required</p>}
                                    </label>
                                    <label>
                                        <p className='text-base mt-5'>Photo URL <span className='text-error'>*</span></p>
                                        <input className='input w-full' placeholder='https://'{...register("photoURL", { required: true })} />
                                        {errors.photoURL && <p className='text-sm text-error'>This field is required</p>}
                                    </label>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5 items-center w-full'>
                                        <label>
                                            <p className='text-base'>Seller Name</p>
                                            <input className='input w-full' defaultValue={user?.displayName}{...register("sellerName")} />
                                        </label>
                                        <label>
                                            <p className='text-base'>Seller Name</p>
                                            <input className='input w-full' defaultValue={user?.email}{...register("sellerEmail")} />
                                        </label>
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5 items-center w-full'>
                                        <label>
                                            <p className='text-base'>Price <span className='text-error'>*</span></p>
                                            <input className='input w-full' type='number' placeholder='$'{...register("price", { required: true })} />
                                            {errors.price && <p className='text-sm text-error'>This field is required</p>}
                                        </label>
                                        <label>
                                            <p className='text-base'>Quantity <span className='text-error'>*</span></p>
                                            <input className='input w-full' type='number' placeholder=''{...register("quantity", { required: true })} />
                                            {errors.quantity && <p className='text-sm text-error'>This field is required</p>}
                                        </label>
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5'>
                                        <div>
                                            <p>Sub Category</p>
                                            <select className='w-full px-5 py-2 rounded-md' {...register("subCategory")}>
                                                <option value="Animal figurines">Animal figurines</option>
                                                <option value="Safari Stories">Safari Stories</option>
                                                <option value="Stuffed Toys">Stuffed Toys</option>
                                            </select>
                                        </div>
                                        <div>
                                            <p>Rating</p>
                                            <select className='w-full px-5 py-2 rounded-md' {...register("rating")}>
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
                                        <textarea className='textarea w-full' {...register('message')} />
                                    </label>
                                    <div className='text-center'>
                                        <input className='btn mt-5' type="submit" value='Update'/>
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn">Yay!</label>
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