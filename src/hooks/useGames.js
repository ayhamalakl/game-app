// استيراد الأدوات المطلوبة
import { useQuery } from "@tanstack/react-query";      // استيراد خطاف الاستعلام
import apiClient from "../services/api-client";         // استيراد عميل API

// خطاف مخصص لجلب بيانات الألعاب مع معايير التصفية
const useGames = (selectGenre, selectPlatform, selectSortOrder, searchText) => {
    return useQuery({
        // مفتاح الاستعلام يتغير مع تغير المعايير
        queryKey: ["games", selectGenre?.id, selectPlatform?.id, selectSortOrder, searchText], 
        // دالة جلب البيانات
        queryFn: async () => {
            // طلب GET مع المعايير كمعلمات
            const { data } = await apiClient.get("/games", {
                params: {
                    genres: selectGenre?.id,          // معرف النوع المحدد
                    platforms: selectPlatform?.id,     // معرف المنصة المحددة
                    ordering: selectSortOrder,         // ترتيب النتائج
                    search: searchText,                // نص البحث
                },
            });
            return data.results;                      // إرجاع نتائج الألعاب
        },
        staleTime: 1000 * 60 * 5,                    // وقت تحديث البيانات (5 دقائق)
    });
};

// تصدير الخطاف للاستخدام في المكونات
export default useGames;