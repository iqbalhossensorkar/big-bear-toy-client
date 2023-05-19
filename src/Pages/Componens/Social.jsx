import facebook from '../../assets/social/facebook.png'
import instagram from '../../assets/social/instagram.png'
import twitter from '../../assets/social/twitter.png'
import googlePlus from '../../assets/social/google-plus.png'

const Social = () => {
    return (
        <div>
            <p className='font-medium text-2xl ml-4'>Let Connect with us</p>
            <div className='flex items-center gap-3 p-6'>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" className='h-10' /></a>
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><img src={googlePlus} alt="" className='h-10' /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" className='h-10' /></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" className='h-10' /></a>
            </div>
        </div>
    );
};

export default Social;