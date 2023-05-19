import Articles from "./Articles";
import Banner from "./Banner";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ProgressBar from "react-scroll-progress-bar";



const Blog = () => {
    return (
        <div className="w-10/12 mx-auto mb-12">
            <ProgressBar color1="gray"
                height="4px"
                position="fixed" />
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="lg:mr-10 mb-10">
                    <LeftSide></LeftSide>
                </div>
                <div className="col-span-2">
                    <Articles></Articles>
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Blog;