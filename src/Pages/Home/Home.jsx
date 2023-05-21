import { useContext } from "react";
import Contacts from "../Componens/Contacts";
import Gallery from "../Componens/Gallery";
import HomeBanner from "../Componens/HomeBanner";
import HowToBuy from "../Componens/HowToBuy";
import ShopByCategory from "../Componens/ShopByCategory/ShopByCategory";
import HappyClients from "../Componens/HappyClients";


const Home = () => {
    return (
        <>
            <div className="w-10/12 mx-auto">
                <HomeBanner></HomeBanner>
            </div>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
            <HappyClients></HappyClients>
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
