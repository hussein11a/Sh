// ui.js - ملف لتفعيل عناصر واجهة المستخدم

/**
 * تفعيل تأثيرات التمرير
 */
export function initScrollEffects() {
  try {
    // تحديد العناصر التي ستتأثر بالتمرير
    const animatedElements = document.querySelectorAll('.animate-fadeInUp, .feature-card, .service-card');
    
    // إنشاء مراقب التمرير
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // مراقبة العناصر
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    console.log('تم تفعيل تأثيرات التمرير');
  } catch (error) {
    console.error('خطأ في تفعيل تأثيرات التمرير:', error.message);
  }
}

/**
 * تفعيل روابط التنقل السلس
 */
export function initSmoothScrolling() {
  try {
    // تحديد جميع الروابط التي تشير إلى عناصر داخل الصفحة
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // تعديل للهيدر الثابت
            behavior: 'smooth'
          });
        }
      });
    });
    
    console.log('تم تفعيل التنقل السلس');
  } catch (error) {
    console.error('خطأ في تفعيل التنقل السلس:', error.message);
  }
}

// استدعاء الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  initScrollEffects();
  initSmoothScrolling();
});

console.log('تم تحميل وحدة واجهة المستخدم بنجاح');
