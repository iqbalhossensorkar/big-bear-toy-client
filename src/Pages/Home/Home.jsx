import Contacts from "../Componens/Contacts";


const Home = () => {
    return (
        <>
            <div className="w-10/12 mx-auto">
                <h1>This is Home</h1>
            </div>
            <div className="container mx-auto relative">
                <Contacts></Contacts>
            </div>
        </>
    );
};

export default Home;