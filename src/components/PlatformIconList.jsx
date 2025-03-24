// استيراد أيقونات المنصات من مكتبات React Icons
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";  // أيقونات من Font Awesome
import { MdPhoneIphone } from "react-icons/md";    // أيقونة iPhone من Material Design
import { SiNintendo, SiPanasonic } from "react-icons/si";  // أيقونات من Simple Icons
import { BsGlobe } from "react-icons/bs";          // أيقونة الويب من Bootstrap Icons

// مكون قائمة أيقونات المنصات الذي يستقبل مصفوفة المنصات
const PlatformIconList = ({ platforms }) => {
    // تعريف خريطة الأيقونات لكل منصة
    const iconMap = {
        pc: FaWindows,           // أيقونة Windows للكمبيوتر
        playstation: FaPlaystation,  // أيقونة PlayStation
        xbox: FaXbox,            // أيقونة Xbox
        nintendo: SiNintendo,    // أيقونة Nintendo
        mac: FaApple,            // أيقونة Apple للماك
        linux: FaLinux,          // أيقونة Linux
        android: FaAndroid,      // أيقونة Android
        ios: MdPhoneIphone,      // أيقونة iPhone
        web: BsGlobe,            // أيقونة الويب
    };

    return (
        <>
            <div className="flex space-x-2 my-2">
                {platforms.map((platform) => {
                    const IconPlat = iconMap[platform.slug];    // اختيار الأيقونة المناسبة للمنصة
                    return <IconPlat key={platform.id} className="text-gray-500 w-6 h-6" />;  // عرض الأيقونة مع التنسيق
                })}
            </div>
        </>
    );
};

// تصدير المكون للاستخدام في أجزاء أخرى من التطبيق
export default PlatformIconList;