// استيراد الأدوات المطلوبة
import { useQuery } from "@tanstack/react-query";      // استيراد خطاف الاستعلام
import apiClient from "../services/api-client";         // استيراد عميل API

// خطاف مخصص لجلب بيانات أنواع الألعاب
const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],                          // مفتاح الاستعلام الثابت
        queryFn: async () => {
            // طلب GET لجلب الأنواع
            const { data } = await apiClient.get("/genres");
            return data.results;                       // إرجاع نتائج الأنواع
        },
        staleTime: 1000 * 60 * 60,                    // وقت تحديث البيانات (ساعة واحدة)
    });
};

// تصدير الخطاف للاستخدام في المكونات
export default useGenres;