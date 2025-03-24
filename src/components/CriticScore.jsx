// مكون لعرض درجة النقد للعبة
const CriticScore = ({ score }) => {
    // دالة لتحديد لون الخلفية والنص بناءً على الدرجة
    const getColor = (score) => {
        // إذا كانت الدرجة أكبر من 75، يكون اللون أخضر مع نص أبيض
        if (score > 75) return { bg: "bg-green-600", text: "text-white" };
        // إذا كانت الدرجة أكبر من 60، يكون اللون أصفر مع نص أسود
        if (score > 60) return { bg: "bg-yellow-500", text: "text-black" };
        // في الحالات الأخرى، يكون اللون أحمر مع نص أبيض
        return { bg: "bg-red-600", text: "text-white" };
    };

    // استخراج قيم الخلفية والنص من دالة getColor
    const { bg, text } = getColor(score);

    // عرض الدرجة في عنصر span مع التنسيقات المناسبة
    return (
        <span className={`px-2.5 py-0.5 text-sm font-medium rounded ${bg} ${text}`}>
            {score}
        </span>
    );
};

// تصدير المكون للاستخدام في أجزاء أخرى من التطبيق
export default CriticScore;