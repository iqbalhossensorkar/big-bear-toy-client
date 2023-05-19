import { FaArrowRight } from 'react-icons/fa';
import sideBanner from '../../assets/login-image/Login.jpg'
import google from '../../assets/google.png'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const { googleSignIn, logIn } = useContext(AuthContext)
    const [error, setError] = useState("");
    // const [show, setShow] = useState(false);
    // const navigate = useNavigate();
    // const location = useLocation();
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                form.reset();
                const userLogged = result.user;
                console.log(userLogged);
                // navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleLoggedIn = result.user;
                console.log(googleLoggedIn);
                // navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className=" lg:min-h-screen bg-base-200 rounded-2xl">
                <div className="lg:flex lg:flex-row-reverse">
                    <div className="lg:w-1/2">
                        <div className="card-body">
                            <h1 className='text-5xl font-bold text-amber-400 my-10 text-center underline underline-offset-4'>Log In</h1>
                            <form onSubmit={handleLogIn}>
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
                                <div className="form-control mt-6">
                                    <input className='btn btn-outline text-amber-400 border-none hover:bg-amber-400' type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                        <div className="divider">OR</div>
                        <div className='flex justify-center mt-10'>
                            <div onClick={handleGoogleSignIn} className='p-5 rounded-full active:bg-black active:bg-opacity-20 hover:bg-white hover:shadow-2xl'>
                                <img src={google} alt="" className='h-10' />
                            </div>
                        </div>
                        <p className='text-center'>Dont Have an Account! <Link to='/register' className='text-amber-500 hover:underline'>Create One</Link></p>
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

export default Login;