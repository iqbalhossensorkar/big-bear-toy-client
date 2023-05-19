import Contacts from "../Componens/Contacts";
import Gallery from "../Componens/Gallery";
import HomeBanner from "../Componens/HomeBanner";
import HowToBuy from "../Componens/HowToBuy";
import ProductShowCase from "../Componens/ProductShowCase";


const Home = () => {
    return (
        <>
            <div className="w-10/12 mx-auto">
                <HomeBanner></HomeBanner>
            </div>
            <Gallery></Gallery>
            {/* <ProductShowCase></ProductShowCase> */}
            <div className="container mx-auto">
                <HowToBuy></HowToBuy>
            </div>
            <div className="container mx-auto relative">
                <Contacts></Contacts>
            </div>
        </>
    );
};

export default Home;