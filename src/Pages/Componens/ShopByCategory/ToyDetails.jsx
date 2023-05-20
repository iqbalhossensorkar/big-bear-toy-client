import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toys = useLoaderData();
    const { _id, Description, Name, Picture, Price, Ratings } = toys;
    console.log(toys);
    return (
        <div className='w-10/12 mx-auto'>
            <div className="hero min-h-screen bg-base-200 relative">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">{Name}</h1>
                        <p className="pt-6">${Price}</p>
                        <p className="pb-10 pt-2"><Rating
                            style={{ maxWidth: 100 }}
                            value={Ratings}
                            readOnly
                        /></p>

                        <p className="py-6">{Description}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <img src={Picture} alt="" />
                            <span>
                                <label className="swap">
                                    <input type="checkbox" />
                                    <FaRegHeart className="swap-off fill-current text-2xl"></FaRegHeart>
                                    <FaHeart className="swap-on fill-current text-2xl"></FaHeart>
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;