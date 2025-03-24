// مخفض لإدارة حالة السمة (الوضع الفاتح/المظلم)
const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":                    // تبديل السمة
            return state === "light" ? "dark" : "light";  // التبديل بين الوضع الفاتح والمظلم
            
        default:                               // الحالة الافتراضية
            return state;                      // إرجاع الحالة الحالية
    }
};

// تصدير المخفض للاستخدام في المكونات
export default themeReducer;