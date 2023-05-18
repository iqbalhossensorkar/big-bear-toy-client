import Fade from 'react-reveal/Fade';
import banner from '../../assets/blog-banner/question_mark.png'

const Banner = () => {
    return (
        <div className="text-3xl my-20 relative">
            <div className='justify-between items-center lg:flex p-10 bg-amber-100 rounded-xl'>
                <Fade left>
                    <div>
                    <h2>What Is a Blog, & Why Should You Create One</h2>
                    <p className='text-sm my-4'>Even if you are not sure what a blog is, you have no doubt come across one at some point in time. Perhaps you have stumbled across a blog when you have searched healthy dinner recipes. In fact, if you are reading this, guess what? You are on a blog.</p>
                    <Fade big bottom>
                    <button className='btn btn-outline border-2'>See More</button>
                    </Fade>
                    </div>
                </Fade>
                <Fade top right>
                    <img src={banner} alt="" />
                </Fade>
            </div>
        </div>
    );
};

export default Banner;