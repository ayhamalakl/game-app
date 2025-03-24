// استيراد الأدوات المطلوبة
import { useQuery } from "@tanstack/react-query";      // استيراد خطاف الاستعلام
import apiClient from "../services/api-client";         // استيراد عميل API

// خطاف مخصص لجلب بيانات منصات الألعاب
const usePlatform = () => {
    return useQuery({
        queryKey: ["platforms"],                       // مفتاح الاستعلام الثابت
        queryFn: async () => {
            // طلب GET لجلب المنصات
            const { data } = await apiClient.get("/platforms");
            return data.results;                       // إرجاع نتائج المنصات
        },
        staleTime: 1000 * 60 * 60 * 24,              // وقت تحديث البيانات (24 ساعة)
    });
};

// تصدير الخطاف للاستخدام في المكونات
export default usePlatform;