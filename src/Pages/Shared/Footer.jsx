import logo from '../../assets/logo.svg'
import Social from '../Componens/Social';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-amber-100 text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p>Big Bear Kids Zone Ltd.<br />Providing Best Kids Toys since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <Social></Social>
                </div>
            </footer>
            <footer className="footer footer-center p-2 bg-base-200 text-base-content rounded">
                <p>Copyright © 2023 - All right reserved by Big Bear Ltd</p>
            </footer>
        </div>
    );
};

export default Footer;