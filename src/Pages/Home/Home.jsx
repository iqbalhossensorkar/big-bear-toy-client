import Contacts from "../Componens/Contacts";
import HomeBanner from "../Componens/HomeBanner";


const Home = () => {
    return (
        <>
            <div className="w-10/12 mx-auto">
                <HomeBanner></HomeBanner>
            </div>
            <div className="container mx-auto relative">
                <Contacts></Contacts>
            </div>
        </>
    );
};

export default Home;