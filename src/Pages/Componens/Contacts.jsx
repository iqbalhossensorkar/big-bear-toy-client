import newsletter from '../../assets/newsletter/toys-kid.jpg'

const Contacts = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${newsletter})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="flex-shrink-0 w-full max-w-sm">
                                    <div className="mockup-phone bg-amber-100 border-none">
                                        <div className="camera" style={{ backgroundColor: '#FEF3C7' }}></div>
                                        <div className="display w-72 lg:w-full">
                                            <div className="artboard h-20 artboard-demo bg-amber-200 phone-1">
                                                <div className='text-center mr-8 lg:mr-0'>
                                                    <p className="text-gray-600 text-2xl font-bold mb-5 ml-2">Subscribe Newsletter</p>
                                                    <div className="form-control mb-4">
                                                        <div className="relative">
                                                            <input type="text" placeholder="Cute baby toys" className="input bg-amber-50 focus:bg-white w-full pr-16" />
                                                        </div>
                                                    </div>
                                                    <div className="form-control mb-4">
                                                        <div className="relative">
                                                            <input type="text" placeholder="username@site.com" className="input bg-amber-50 focus:bg-white w-full pr-16" />
                                                        </div>
                                                    </div>
                                                        <button className='btn btn-outline w-full hover:bg-gray-500 text-white hover:border-none'>Lets go</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Join Our Big Family!</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className='btn btn-outline text-white hover:bg-white hover:text-gray-500'>Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;