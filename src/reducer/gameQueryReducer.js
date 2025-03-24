// مخفض لإدارة حالة استعلامات الألعاب
const gameQueryReducer = (state, action) => {
    switch (action.type) {
        case "SET_SEARCH_TEXT":                    // تحديث نص البحث
            return { ...state, searchText: action.payload };
            
        case "SET_GENRE":                         // تحديث النوع المحدد
            return { ...state, genre: action.payload };
            
        case "SET_PLATFORM":                      // تحديث المنصة المحددة
            return { ...state, platform: action.payload };
            
        case "SET_SORT_ORDER":                    // تحديث ترتيب العرض
            return { ...state, sortOrder: action.payload };
            
        default:                                  // إرجاع الحالة الحالية
            return state;
    }
};

// تصدير المخفض للاستخدام في المكونات
export default gameQueryReducer;