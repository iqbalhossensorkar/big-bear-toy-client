import facebook from '../../assets/social/facebook.png'
import instagram from '../../assets/social/instagram.png'
import twitter from '../../assets/social/twitter.png'
import googlePlus from '../../assets/social/google-plus.png'

const Social = () => {
    return (
        <div>
            <p className='font-medium text-2xl ml-4'>Let Connect with us</p>
            <div className='flex items-center gap-3 p-6'>
                <img src={facebook} alt="" className='h-10' />
                <img src={googlePlus} alt="" className='h-10' />
                <img src={instagram} alt="" className='h-10' />
                <img src={twitter} alt="" className='h-10' />
            </div>
        </div>
    );
};

export default Social;