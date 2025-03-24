// مخفض لإدارة حالة النوع المحدد
const genreReducer = (state, action) => {
    switch (action.type) {
        case "SELECT_GENRE":                    // اختيار نوع جديد
            return action.payload;              // إرجاع النوع المحدد
            
        case "RESET_GENRE":                    // إعادة تعيين النوع
            return null;                       // إرجاع قيمة فارغة
            
        default:                               // الحالة الافتراضية
            return state;                      // إرجاع الحالة الحالية
    }
};

// تصدير المخفض للاستخدام في المكونات
export default genreReducer;