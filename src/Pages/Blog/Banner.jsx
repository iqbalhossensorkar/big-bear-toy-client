import Fade, { Slide } from "react-awesome-reveal";
import banner from '../../assets/blog-banner/question_mark.png'

const Banner = () => {
    return (
        <div className="text-3xl relative mb-20">
            <div className='lg:flex justify-between items-center py-28 px-10 bg-amber-100 rounded-xl'>
                <div>
                    <Slide>
                        <h2>What Is a Blog, & Why Should You Create One</h2>
                    </Slide>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <p className='text-sm my-4 text-zinc-400'>Even if you are not sure what a blog is, you have no doubt come across one at some point in time. Perhaps you have stumbled across a blog when you have searched healthy dinner recipes. In fact, if you are reading this, guess what? You are on a blog.</p>
                    </Fade>
                    <Slide direction='up'><button className='btn btn-outline border-2'>See More</button></Slide>
                </div>
                <div>
                    <Slide direction="right">
                        <img src={banner} alt="" />
                    </Slide>
                </div>
            </div>
        </div >
    );
};

export default Banner;