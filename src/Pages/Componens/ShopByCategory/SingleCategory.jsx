import React from 'react';

const SingleCategory = ({ toy }) => {
    return (
        <div>
            <div className="card w-96 bg-white rounded-lg border-2 hover:border-amber-200 hover:border-dashed">
                <div className="border-dashed-hover absolute inset-0"></div>
                <figure className="px-10 pt-10">
                    <img src="" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-outline">View Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;