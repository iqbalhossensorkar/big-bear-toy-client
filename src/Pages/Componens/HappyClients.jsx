import { Rating } from '@smastrom/react-rating';
import React from 'react';

const HappyClients = () => {
    return (
        <div className='w-10/12  mx-auto mb-20'>
            <p className='text-4xl text-center mt-20 mb-4'>Our Happy Customers</p>
            <p className='text-base text-center mb-8'>“Treat the customer like you would want to be treated. Period!”</p>
            <div className="carousel carousel-center w-full p-4 space-x-4 bg-amber-200 rounded-box">
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Mr. Azom Khan</h2>
                            <p>“If you are competitor focused, you have to wait until there is a competitor doing something. Being customer-focused allows you to be more pioneering.”</p>
                            <div className="card-actions justify-end">
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Mr. AB Williams</h2>
                            <p>“There is a big difference between a satisfied customer and a loyal customer. Never settle for ‘satisfied’.”</p>
                            <div className="card-actions justify-end">
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={5}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Mrs. Bithi Islam</h2>
                            <p>“Always give people more than what they expect to get.”</p>
                            <div className="card-actions justify-end">
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Mr. Azmain Fouzan</h2>
                            <p>“At the heart of a successful business strategy is a customer experience that is elegantly simple and positive, where consumers are likely to come away satisfied and return.”</p>
                            <div className="card-actions justify-end">
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={3}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClients;