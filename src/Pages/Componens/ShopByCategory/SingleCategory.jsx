import React from 'react';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';


const SingleCategory = ({ toy }) => {
    const { Description, Name, Picture, Price, Ratings, ststus, _id } = toy;
    // console.log(toy);
    return (
        <div>
            <div className="card w-full  bg-white rounded-lg border-2 hover:border-amber-200 hover:border-dashed">
                <figure className="px-10 pt-10">
                    <img src={Picture} alt="" className="rounded-xl h-64" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{Name}</h2>
                    <p>${Price}</p>
                    <Rating
                                    style={{ maxWidth: 100 }}
                                    value={Ratings}
                                    readOnly
                                />
                    <div className="card-actions">
                        <Link to={`/toyDetails/${_id}`}><button className="btn btn-outline">View Detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;