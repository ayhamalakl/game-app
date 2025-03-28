// مكون لعرض درجة النقد للعبة
const CriticScore = ({ score }) => {
    // دالة لتحديد لون الخلفية والنص بناءً على الدرجة
    const getColor = (score) => {
        if (score > 75) return { bg: "bg-green-600", text: "text-white" };
        if (score > 60) return { bg: "bg-yellow-500", text: "text-black" };
        return { bg: "bg-red-600", text: "text-white" };
    };

    // استخراج قيم الخلفية والنص من دالة getColor
    const { bg, text } = getColor(score);
    return (
        <span className={`px-2.5 py-0.5 text-sm font-medium rounded ${bg} ${text}`}>
            {score}
        </span>
    );
};

export default CriticScore;