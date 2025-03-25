// مكون عنوان الألعاب الذي يعرض النوع والمنصة المختارة
export const GameHeading = ({ selectGenre, selectPlatform }) => {
    // إنشاء نص العنوان بدمج اسم النوع والمنصة المختارة
    // إذا لم يتم اختيار أي منهما، يتم استخدام نص فارغ
    const heading = `${selectGenre?.name || ""} ${selectPlatform?.name || ""} Games`;

    // عرض العنوان 
    return <h1 className="text-4xl font-extrabold">{heading}</h1>;
};