// استيراد الأدوات المطلوبة
import { useQuery } from "@tanstack/react-query";      // استيراد خطاف الاستعلام
import apiClient from "../services/api-client";         // استيراد عميل API

// خطاف مخصص لجلب بيانات لعبة واحدة باستخدام معرفها
const useSingleGame = (id) => useQuery({
    queryKey: ['game', id],                           // مفتاح الاستعلام يتضمن معرف اللعبة
    queryFn: () => apiClient.get(`/games/${id}`)      // دالة جلب بيانات اللعبة المحددة
        .then(res => res.data),                       // معالجة البيانات المستلمة
    enabled: !!id,                                    // تفعيل الاستعلام فقط عند وجود معرف
});

// تصدير الخطاف للاستخدام في المكونات
export default useSingleGame;