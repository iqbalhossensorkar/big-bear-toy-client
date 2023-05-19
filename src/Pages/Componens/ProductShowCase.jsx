import React from 'react';
import { AutoPlay } from '@egjs/flicking-plugins';
import Flicking from "@egjs/react-flicking";
// import one from '../../assets/product-showcase/one.png'
// import two from '../../assets/product-showcase/two.png'


const ProductShowCase = () => {
    return <div className='border-4 w-10/12 mx-auto'> <Flicking circular={true} horizontal={true} plugins={[new AutoPlay({ stopOnHover: false })]}>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        {/* <span className="button mr-2 is-white"><img src={one} alt="" className='h-20' /></span> */}
        <span className="button mr-2 is-white">🥝 Kiwi</span>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        <span className="button mr-2 is-white">🥝 Kiwi</span>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        <span className="button mr-2 is-white">🥝 Kiwi</span>
    </Flicking>
    </div>

};

export default ProductShowCase;

