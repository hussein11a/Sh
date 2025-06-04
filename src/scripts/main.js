// main.js - الملف الرئيسي لاستيراد جميع الملفات الأخرى
import { loadCmsData } from './cms.js';
import { renderServices } from './services.js';
import { renderContactInfo } from './loadContact.js';

/**
 * تنفيذ الوظائف الرئيسية بعد تحميل الصفحة
 */
document.addEventListener('DOMContentLoaded', async function() {
  try {
    // تحميل معلومات الموقع
    await loadSiteInfo();
    
    // تفعيل تأثيرات التمرير
    initScrollAnimations();
    
    // تفعيل زر التمرير للأعلى
    initScrollToTopButton();
    
    // تحديث السنة الحالية في حقوق النشر
    updateCopyrightYear();
    
    console.log('تم تحميل الموقع بنجاح');
  } catch (error) {
    console.error('خطأ في تحميل الموقع:', error.message);
  }
});

/**
 * دالة تحميل معلومات الموقع
 */
async function loadSiteInfo() {
  try {
    // تحميل معلومات الموقع من Netlify CMS
    const siteInfo = await loadCmsData('site_info');
    
    if (siteInfo) {
      // تحديث عناصر معلومات الموقع
      updateSiteElements(siteInfo);
    } else {
      console.warn('لم يتم العثور على معلومات الموقع');
    }
  } catch (error) {
    console.error('خطأ في تحميل معلومات الموقع:', error.message);
    throw error;
  }
}

/**
 * دالة تحديث عناصر الموقع
 * @param {Object} siteInfo - معلومات الموقع
 */
function updateSiteElements(siteInfo) {
  try {
    // تحديث العنوان والوصف
    updateElementText('site-title', siteInfo.site_name);
    updateElementText('site-subtitle', siteInfo.site_description);
    
    // تحديث أرقام الهاتف والواتساب
    updateElementHref('phone-link', `tel:${siteInfo.phone}`);
    updateElementHref('whatsapp-link', `https://wa.me/${siteInfo.whatsapp.replace('+', '')}`);
    
    // تحديث نصوص الأزرار
    updateElementText('call-button-text', siteInfo.call_button_text);
    updateElementText('whatsapp-button-text', siteInfo.whatsapp_button_text);
    
    // تحديث الأزرار العائمة
    updateElementHref('call-btn', `tel:${siteInfo.phone}`);
    updateElementHref('whatsapp-btn', `https://wa.me/${siteInfo.whatsapp.replace('+', '')}`);
    
    // تحديث أزرار القسم الرئيسي
    updateElementText('hero-call-button-text', siteInfo.call_button_text);
    updateElementText('hero-whatsapp-button-text', siteInfo.whatsapp_button_text);
    
    // تحديث معلومات التذييل
    updateElementText('footer-phone', siteInfo.phone);
    updateElementText('footer-whatsapp', siteInfo.whatsapp);
    
    console.log('تم تحديث معلومات الموقع بنجاح');
  } catch (error) {
    console.error('خطأ في تحديث عناصر الموقع:', error.message);
  }
}

/**
 * دالة مساعدة لتحديث نص عنصر
 * @param {string} id - معرف العنصر
 * @param {string} text - النص الجديد
 */
function updateElementText(id, text) {
  const element = document.getElementById(id);
  if (element && text) {
    element.textContent = text;
  }
}

/**
 * دالة مساعدة لتحديث رابط عنصر
 * @param {string} id - معرف العنصر
 * @param {string} href - الرابط الجديد
 */
function updateElementHref(id, href) {
  const element = document.getElementById(id);
  if (element && href) {
    element.href = href;
  }
}

/**
 * دالة تفعيل تأثيرات التمرير
 */
function initScrollAnimations() {
  try {
    // تحديد العناصر التي ستتأثر بالتمرير
    const animatedElements = document.querySelectorAll('.animate-fadeInUp, .feature-card, .service-card');
    
    // إنشاء مراقب التمرير
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
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
 * دالة تفعيل زر التمرير للأعلى
 */
function initScrollToTopButton() {
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
 * دالة تحديث السنة الحالية في حقوق النشر
 */
function updateCopyrightYear() {
  try {
    const currentYearElement = document.getElementById('current-year');
    
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  } catch (error) {
    console.error('خطأ في تحديث السنة الحالية:', error.message);
  }
}

console.log('تم تحميل الملف الرئيسي بنجاح');
