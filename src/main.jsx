import { StrictMode } from "react"; // استيراد StrictMode من React لتشغيل التحقق من الأخطاء أثناء التطوير
import { createRoot } from "react-dom/client"; // استيراد createRoot من react-dom لإنشاء الجذر لتطبيق React
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // استيراد QueryClientProvider من TanStack React Query لإدارة الاستعلامات
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // استيراد أدوات التطوير لـ React Query
import { RouterProvider } from "react-router-dom"; // استيراد RouterProvider من react-router-dom لإعداد التوجيه في التطبيق

import "./index.css"; // استيراد ملفات CSS الخاصة بالتطبيق
import "./App.css"; // استيراد ملفات CSS الخاصة بمكونات التطبيق
import router from "./routes/routes"; // استيراد التوجيه (router) من ملف routes

// إنشاء عميل React Query (لتخزين حالة الاستعلامات)
const queryClient = new QueryClient();

// تهيئة التطبيق مع الراوتر و React Query
createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* توفير Client لـ React Query عبر QueryClientProvider */}
        <QueryClientProvider client={queryClient}>
            {/* توفير الراوتر باستخدام RouterProvider */}
            <RouterProvider router={router} />
            {/* تمكين أدوات التطوير لـ React Query */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>
);
