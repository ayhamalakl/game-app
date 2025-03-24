// استيراد صور الإيموجي من مجلد الأصول
import bullsEye from "../assets/images/bulls-eye.webp";    // صورة العين الثاقبة للتقييم الممتاز
import meh from "../assets/images/meh.webp";              // صورة محايدة للتقييم المتوسط
import thumbsUp from "../assets/images/thumbs-up.webp";    // صورة الإبهام لأعلى للتقييم الجيد

// مكون الإيموجي الذي يستقبل قيمة التقييم كخاصية
export const Emoji = ({ rating }) => {
    // إذا كان التقييم أقل من 3، لا نعرض أي إيموجي
    if (rating < 3) return null;

    // تعريف خريطة الإيموجي مع ربط كل تقييم بالصورة المناسبة
    const emojiMap = {
        3: { src: meh, alt: "meh" },             // تقييم 3 يعرض الإيموجي المحايد
        4: { src: thumbsUp, alt: "thumbsUp" },    // تقييم 4 يعرض إيموجي الإبهام لأعلى
        5: { src: bullsEye, alt: "bullsEye" },    // تقييم 5 يعرض إيموجي العين الثاقبة
    };

    // عرض الصورة المناسبة للتقييم مع تحديد عرضها
    return <img {...emojiMap[rating]} width={25} />;
};

// تصدير المكون كقيمة افتراضية
export default Emoji;