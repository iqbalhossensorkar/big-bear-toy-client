import Lottie from 'lottie-react';
import animated404 from '../../assets/error-404.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' h-screen text-center'>
            <div className='flex justify-center items-center'>
                <Lottie animationData={animated404}></Lottie>
            </div>
            <Link to='/'><button className='btn'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;