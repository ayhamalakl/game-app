import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import "../styelComponents/PlatformIconList.css"

const PlatformIconList = ({ platforms }) => {
    const iconMap = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };

    return (
        <div className="platform-icons">
            {platforms.map((platform) => {
                const IconPlat = iconMap[platform.slug];
                return (
                    <div key={platform.id} className="icon-wrapper">
                        <IconPlat className="platform-icon" />
                        <span className="platform-tooltip">{platform.name}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default PlatformIconList;