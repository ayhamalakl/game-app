const toggleReducer = (state, action) => {  // تعريف الـ reducer الذي يدير حالة التبديل (فتح/غلق)
    switch (action.type) {  // التبديل بناءً على نوع الفعل (action)
        case "TOGGLE":  // حالة عند حدوث الفعل TOGGLE
            return { isOpen: !state.isOpen };  // عكس الحالة الحالية (إذا كانت مفتوحة تصبح مغلقة والعكس)
        case "CLOSE":  // حالة عند حدوث الفعل CLOSE
            return { isOpen: false };  // تعيين الحالة إلى مغلقة
        default:  // في حالة عدم وجود أي نوع من الـ actions المعروفة
            return state;  // إرجاع الحالة الحالية دون تغيير
    }
};

export default toggleReducer;  // تصدير الـ reducer ليتم استخدامه في أماكن أخرى
