import bullsEye from "../assets/images/bulls-eye.webp";  
import meh from "../assets/images/meh.webp";             
import thumbsUp from "../assets/images/thumbs-up.webp";    

// مكون الإيموجي الذي يستقبل قيمة التقييم كخاصية
export const Emoji = ({ rating }) => {
    if (rating < 3) return null;

    // تعريف خريطة الإيموجي مع ربط كل تقييم بالصورة المناسبة
    const emojiMap = {
        3: { src: meh, alt: "meh" },             
        4: { src: thumbsUp, alt: "thumbsUp" },   
        5: { src: bullsEye, alt: "bullsEye" },   
    };

    // عرض الصورة المناسبة للتقييم مع تحديد عرضها
    return <img {...emojiMap[rating]} width={25} />;
};

export default Emoji;