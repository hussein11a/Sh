// ui.js - تفاعلات واجهة المستخدم

document.addEventListener('DOMContentLoaded', function() {
  // تفعيل زر التمرير للأعلى
  const scrollTopBtn = document.getElementById('scroll-top');
  
  if (scrollTopBtn) {
    // إظهار/إخفاء زر التمرير للأعلى عند التمرير
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    
    // التمرير للأعلى عند النقر على الزر
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // تفعيل قائمة التنقل المتجاوبة
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', 
        menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
      );
    });
    
    // إغلاق القائمة عند النقر على أي رابط فيها
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  // تفعيل التمرير السلس للروابط الداخلية
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // تعويض ارتفاع الرأس
          behavior: 'smooth'
        });
      }
    });
  });
  
  // تفعيل تأثيرات التحريك عند التمرير
  const animateElements = document.querySelectorAll('.animate-fadeInUp, .animate-fadeIn, .animate-slideInRight, .animate-slideInLeft');
  
  // دالة للتحقق مما إذا كان العنصر مرئيًا في نافذة العرض
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // دالة لتفعيل التأثيرات عند التمرير
  function checkAnimations() {
    animateElements.forEach(element => {
      if (isElementInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
      }
    });
  }
  
  // تفعيل التأثيرات عند تحميل الصفحة وعند التمرير
  window.addEventListener('scroll', checkAnimations);
  window.addEventListener('resize', checkAnimations);
  checkAnimations(); // تفعيل عند تحميل الصفحة
  
  // تحديث معلومات الاتصال من إعدادات الموقع
  updateContactInfo();
  
  // تفعيل نموذج الاتصال
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // هنا يمكن إضافة كود لإرسال النموذج عبر API أو خدمة بريدية
      
      // عرض رسالة نجاح (مؤقتًا)
      alert('تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.');
      
      // إعادة تعيين النموذج
      contactForm.reset();
    });
  }
});

// تحديث معلومات الاتصال من الإعدادات
function updateContactInfo() {
  // يمكن استبدال هذه البيانات بطلب API أو بيانات من Netlify CMS
  const contactInfo = {
    phone: '+966501234567',
    whatsapp: '+966501234567',
    location: 'الرياض، المملكة العربية السعودية',
    hours: '24 ساعة / 7 أيام'
  };
  
  // تحديث أرقام الهاتف وروابط الواتساب
  const phoneElements = document.querySelectorAll('#contact-phone, #footer-phone');
  const whatsappElements = document.querySelectorAll('#contact-whatsapp, #footer-whatsapp');
  const locationElements = document.querySelectorAll('#contact-location, #footer-location');
  const hoursElements = document.querySelectorAll('#contact-hours');
  
  // تحديث رقم الهاتف
  phoneElements.forEach(element => {
    if (element) element.textContent = contactInfo.phone;
  });
  
  // تحديث رقم الواتساب
  whatsappElements.forEach(element => {
    if (element) element.textContent = contactInfo.whatsapp;
  });
  
  // تحديث الموقع
  locationElements.forEach(element => {
    if (element) element.textContent = contactInfo.location;
  });
  
  // تحديث ساعات العمل
  hoursElements.forEach(element => {
    if (element) element.textContent = contactInfo.hours;
  });
  
  // تحديث روابط الاتصال
  const callBtn = document.getElementById('call-btn');
  const whatsappBtn = document.getElementById('whatsapp-btn');
  
  if (callBtn) {
    callBtn.href = `tel:${contactInfo.phone.replace(/\s+/g, '')}`;
  }
  
  if (whatsappBtn) {
    const whatsappNumber = contactInfo.whatsapp.replace(/\+/g, '').replace(/\s+/g, '');
    whatsappBtn.href = `https://wa.me/${whatsappNumber}`;
  }
}
