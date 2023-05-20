import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProviders';
import banner from '../../assets/home-banner/banner-bg-2.png'

const AddToy = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };
    return (
        <div className='w-10/12 mx-auto p-5 bg-amber-100 shadow-lg rounded-xl mb-20'>
            <h1 className='text-center text-4xl mt-10 font-bold'>Add Some Toys</h1>
            <p className='text-base text-success text-center mb-10 mt-3 font-bold'>Add Whatever You want. There is no limits for adding. Have fun!!!</p>
            <div className='lg:w-1/2 p-5 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <input className='btn mt-5' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;