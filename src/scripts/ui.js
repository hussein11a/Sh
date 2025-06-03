// ui.js - تفاعلات واجهة المستخدم

document.addEventListener('DOMContentLoaded', function() {
  // تفعيل تأثيرات التمرير
  initScrollAnimations();
  
  // تحديث السنة الحالية في حقوق النشر
  updateCopyrightYear();
  
  // تحميل معلومات الموقع
  loadSiteInfo();
});

// دالة تفعيل تأثيرات التمرير
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-fadeInUp, .animate-fadeIn, .animate-slideInRight, .animate-slideInLeft');
  
  if (animatedElements.length > 0) {
    // دالة للتحقق من ظهور العنصر في نطاق الرؤية
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
      );
    }
    
    // دالة لتفعيل التأثيرات عند التمرير
    function handleScrollAnimations() {
      animatedElements.forEach(element => {
        if (isElementInViewport(element)) {
          if (element.classList.contains('animate-fadeInUp')) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          } else if (element.classList.contains('animate-fadeIn')) {
            element.style.opacity = '1';
          } else if (element.classList.contains('animate-slideInRight')) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
          } else if (element.classList.contains('animate-slideInLeft')) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
          }
        }
      });
    }
    
    // تفعيل التأثيرات عند تحميل الصفحة وعند التمرير
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('resize', handleScrollAnimations);
    handleScrollAnimations();
  }
}

// دالة تحديث السنة الحالية في حقوق النشر
function updateCopyrightYear() {
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
}

// دالة تحميل معلومات الموقع
function loadSiteInfo() {
  // في بيئة الإنتاج، سيتم تحميل المعلومات من Netlify CMS
  // هنا نستخدم بيانات ثابتة للعرض
  const siteInfo = {
    site_name: 'سطحة هيدروليك',
    site_description: 'خدمة نقل ورفع السيارات على مدار الساعة في الرياض وجميع المناطق المجاورة',
    phone: '+966501234567',
    whatsapp: '+966501234567',
    call_button_text: 'اتصل الآن',
    whatsapp_button_text: 'تواصل عبر الواتساب'
  };
  
  // تحديث عناصر معلومات الموقع
  updateSiteElements(siteInfo);
}

// دالة تحديث عناصر معلومات الموقع
function updateSiteElements(siteInfo) {
  // تحديث عنوان الموقع
  const siteTitleElement = document.getElementById('site-title');
  if (siteTitleElement) {
    siteTitleElement.textContent = siteInfo.site_name;
  }
  
  // تحديث وصف الموقع
  const siteSubtitleElement = document.getElementById('site-subtitle');
  if (siteSubtitleElement) {
    siteSubtitleElement.textContent = siteInfo.site_description;
  }
  
  // تحديث نص أزرار الاتصال
  const callButtonTextElements = document.querySelectorAll('#call-button-text, #hero-call-button-text');
  callButtonTextElements.forEach(element => {
    if (element) {
      element.textContent = siteInfo.call_button_text;
    }
  });
  
  // تحديث نص أزرار الواتساب
  const whatsappButtonTextElements = document.querySelectorAll('#whatsapp-button-text, #hero-whatsapp-button-text');
  whatsappButtonTextElements.forEach(element => {
    if (element) {
      element.textContent = siteInfo.whatsapp_button_text;
    }
  });
  
  // تحديث عنوان الصفحة
  document.title = `${siteInfo.site_name} | ${siteInfo.site_description}`;
}
