import CustomBotttomShape from "./HowToBuy/CustomBottomShape";
import toys from '../../assets/how-to-buy/toys.png'
import courier from '../../assets/how-to-buy/courier.png'
import pet from '../../assets/how-to-buy/pet.png'


const HowToBuy = () => {
    return (
        <div className="mb-20">
            <div className="min-h-screen bg-gray-200">
                <h1 className="text-center text-5xl font-bold pt-20">How To Buy?</h1>
                <div className="grid grid-cols-1 justify-items-center pb-10 md:grid-cols-3">
                    <div className="text-center">
                        <img src={pet} alt="" className="h-96" />
                        <p className="text-2xl font-semibold -mt-14">Choose A Toy</p>
                        <p className="font-medium text-gray-500">Find over than 2000 latest toys in <br /> our inventory</p>
                    </div>
                    <div className="text-center">
                        <img src={toys} alt="" className="h-96" />
                        <p className="text-2xl font-semibold -mt-14">Come Play And Learn</p>
                        <p className="font-medium text-gray-500">We have the kids playground, here kids <br />can play what they want</p>
                    </div>
                    <div className="pb-24 text-center">
                        <img src={courier} alt="" className="h-96" />
                        <p className="text-2xl font-semibold -mt-14">Just Order The Goods</p>
                        <p className="font-medium text-gray-500">You just have to order we will<br/> come at your place</p>
                    </div>
                </div>
            </div>
            <div className="relative w-full">
                <CustomBotttomShape></CustomBotttomShape>
            </div>
        </div>
    );
};

export default HowToBuy;