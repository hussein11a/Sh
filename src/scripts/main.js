// main.js - الملف الرئيسي لاستيراد جميع الملفات الأخرى

document.addEventListener('DOMContentLoaded', function() {
  // تحميل معلومات الموقع
  loadSiteInfo();
  
  // تحميل الخدمات
  loadServices();
  
  // تحميل معلومات الاتصال
  loadContactInfo();
  
  // تفعيل تأثيرات التمرير
  initScrollAnimations();
  
  // تفعيل زر التمرير للأعلى
  initScrollToTopButton();
  
  // تحديث السنة الحالية في حقوق النشر
  updateCopyrightYear();
  
  console.log('تم تحميل الموقع بنجاح!');
});

// دالة تحميل معلومات الموقع
async function loadSiteInfo() {
  try {
    // تحميل معلومات الموقع من Netlify CMS
    const siteInfo = await loadCmsData('site_info');
    
    if (siteInfo) {
      // تحديث عناصر معلومات الموقع
      updateSiteElements(siteInfo);
    }
  } catch (error) {
    console.error('خطأ في تحميل معلومات الموقع:', error);
  }
}
