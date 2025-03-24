import axios from "axios";  // استيراد مكتبة axios لإجراء الطلبات HTTP

// إنشاء إعدادات مخصصة لمكتبة axios باستخدام create
export default axios.create({
    baseURL: "https://api.rawg.io/api",  // تحديد الـ base URL للـ API الذي سيتم إجراء الطلبات إليه
    params: {  // إضافة المعلمات الثابتة التي ستتم إضافتها إلى كل طلب
        key: "aeeac9251adf4763b799ab2fec2f8526",  // إضافة مفتاح الـ API الذي سيتم استخدامه للوصول إلى بيانات الـ API
    },
});
