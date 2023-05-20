import { FaArrowRight } from 'react-icons/fa';
import sideBanner from '../../assets/login-image/Login.jpg'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [userPhoto, setUserPhoto] = useState('');
    const [userName, setUserName] = useState('')
    const [error, setError] = useState('')
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);
        createUser(email, password)
            .then(result => {
                form.reset();
                const signeduser = result.user;
                console.log(signeduser);
                handleUpdate(signeduser, name, photoURL)
                if (createUser) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                }

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })


    }

    const handleUpdate = (result, name, photoURL) => {
        updateProfile(result, {
            displayName: name,
            photoURL: photoURL,

        })
            .then(() => {
                console.log(result.displayName, result.photoURL);
                setUserName(result.displayName);
                setUserPhoto(result.photoURL)
            }).catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className='w-10/12 mx-auto'>
            <div className=" lg:min-h-screen bg-base-200 rounded-2xl">
                <div className="lg:flex lg:flex-row-reverse">
                    <div className="lg:w-1/2">
                        <div className="card-body">
                            <h1 className='text-5xl font-bold text-amber-400 my-10 text-center underline underline-offset-4'>Register</h1>
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name<span className='text-red-500'>*</span></span>
                                    </label>
                                    <input type="name" name='name' placeholder="your name" className="input" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email<span className='text-red-500'>*</span></span>
                                    </label>
                                    <input type="email" name='email' placeholder="@example.com" className="input" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password<span className='text-red-500'>*</span></span>
                                    </label>
                                    <input type="password" name='password' placeholder="******" className="input" required />
                                </div>
                                <div>{error && <p className='text-sm text-error'>{error}</p>}</div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL<span className='text-red-500'>*</span></span>
                                    </label>
                                    <input type="text" name='photoURL' placeholder="https://" className="input" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-outline text-amber-400 border-none hover:bg-amber-400' type="submit" value="register" />
                                </div>
                            </form>
                        </div>
                        <p className='text-center'>Already Have an Account! <Link to='/login' className='text-amber-500 hover:underline'>LogIn Now</Link></p>
                    </div>
                    <div className='lg:min-h-screen text-center lg:w-1/2 lg:text-left'>
                        <div className="hero min-h-screen" style={{ backgroundImage: `url(${sideBanner})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Lets Bring us all Happiness</h1>
                                    <p className="mb-5">Explore most of your kids favourite toys in one store. We have A playground for kids, So your kids will learn something new. Find the best choice and offers from us</p>
                                    <div className='btn btn-circle btn-outline text-white border-2'><FaArrowRight></FaArrowRight></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;