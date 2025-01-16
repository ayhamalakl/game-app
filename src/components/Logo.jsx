import LogoImage from "../assets/images/Webp.png";
const Logo = ({ text, className }) => {
    return <img src={LogoImage} alt={text} className={`logo ${className}`} />
};

export default Logo