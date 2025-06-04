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
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });
    
    console.log('تم تفعيل التنقل السلس');
  } catch (error) {
    console.error('خطأ في تفعيل التنقل السلس:', error.message);
  }
}

/**
 * تفعيل زر التمرير للأعلى
 */
export function initScrollToTopButton() {
  try {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    
    if (!scrollToTopButton) {
      console.warn('لم يتم العثور على زر التمرير للأعلى');
      return;
    }
    
    // إظهار أو إخفاء الزر حسب موضع التمرير
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('visible');
      } else {
        scrollToTopButton.classList.remove('visible');
      }
    });
    
    // التمرير للأعلى عند النقر على الزر
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    console.log('تم تفعيل زر التمرير للأعلى');
  } catch (error) {
    console.error('خطأ في تفعيل زر التمرير للأعلى:', error.message);
  }
}

/**
 * تفعيل تحميل الصور الكسول
 */
export function initLazyLoading() {
  try {
    // تحديد جميع الصور التي تحتاج إلى تحميل كسول
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    // إنشاء مراقب التمرير
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    
    // مراقبة الصور
    lazyImages.forEach(img => {
      img.classList.add('lazy-load');
      imageObserver.observe(img);
    });
    
    console.log('تم تفعيل التحميل الكسول للصور');
  } catch (error) {
    console.error('خطأ في تفعيل التحميل الكسول للصور:', error.message);
  }
}

// تصدير دالة تهيئة جميع عناصر واجهة المستخدم
export function initUI() {
  try {
    initScrollEffects();
    initSmoothScrolling();
    initScrollToTopButton();
    initLazyLoading();
    
    console.log('تم تهيئة جميع عناصر واجهة المستخدم بنجاح');
  } catch (error) {
    console.error('خطأ في تهيئة عناصر واجهة المستخدم:', error.message);
  }
}

// استدعاء دالة تهيئة واجهة المستخدم بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', initUI);

console.log('تم تحميل وحدة واجهة المستخدم بنجاح');
