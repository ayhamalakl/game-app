import { createBrowserRouter } from "react-router-dom";  // استيراد دالة createBrowserRouter من react-router-dom لإنشاء توجيه (Routing) في التطبيق
import App from "../App";  // استيراد مكون App الذي يمثل الصفحة الرئيسية
import GameDetails from "../pages/GameDetails";  // استيراد مكون GameDetails لعرض تفاصيل اللعبة

// إنشاء الـ router الذي يحتوي على المسارات (Routes) الخاصة بالتطبيق
const router = createBrowserRouter([
  { path: "/", element: <App /> },  // المسار الرئيسي الذي يعرض مكون App
  { path: "/GameDetails/:id", element: <GameDetails /> }  // المسار الذي يعرض مكون GameDetails مع تحديد id للعبة
]);

export default router;  // نُصدّر الـ router مباشرة ليتم استخدامه في باقي أجزاء التطبيق
