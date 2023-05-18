import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Navbar = () => {
    // Home, All Toys, My Toys, Add A Toy, Blogs, and User profile picture.
    return (
        <div className='w-10/12 mx-auto sticky -top-5 bg-white'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/allToys'>All Toys</Link></li>
                            <li><Link to='/myToys'>My Toys</Link></li>
                            <li><Link to='/addToy'>Add A Toy</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <img src={logo} alt="" className='h-32' />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allToys'>All Toys</NavLink></li>
                        <li><NavLink to='myToys'>My Toys</NavLink></li>
                        <li><NavLink to='/addToy'>Add A Toy</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="w-8 lg:w-14 rounded-full">
                            <img src={logo} className='bg-black'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;