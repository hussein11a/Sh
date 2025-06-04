// loadContact.js - تحميل وعرض معلومات الاتصال بشكل ديناميكي
import { loadCmsData } from './cms.js';

/**
 * دالة عرض معلومات الاتصال
 * تقوم بجلب بيانات الاتصال وعرضها في العنصر المناسب
 */
export async function renderContactInfo() {
  try {
    // جلب بيانات الاتصال من ملفات المحتوى
    const contactInfo = await loadCmsData('contact');
    
    // التحقق من وجود قسم معلومات الاتصال
    const contactSection = document.getElementById('contact-info');
    
    if (!contactSection) {
      console.warn('لم يتم العثور على عنصر معلومات الاتصال (contact-info)');
      return;
    }
    
    if (!contactInfo) {
      console.warn('لا توجد معلومات اتصال متاحة للعرض');
      contactSection.innerHTML = '<p class="no-data">لا توجد معلومات اتصال متاحة حالياً</p>';
      return;
    }
    
    // التحقق من صحة بيانات الاتصال
    if (!contactInfo.phone || !contactInfo.whatsapp) {
      console.warn('بيانات الاتصال غير مكتملة:', contactInfo);
      contactSection.innerHTML = '<p class="error-message">معلومات الاتصال غير مكتملة</p>';
      return;
    }
    
    // إنشاء عناصر معلومات الاتصال بطريقة آمنة
    const contactHTML = `
      <div class="contact-card">
        <div class="contact-info-item">
          <i class="fas fa-phone-alt"></i>
          <div>
            <h4>رقم الهاتف</h4>
            <p><a href="tel:${contactInfo.phone}" dir="ltr">${contactInfo.phone}</a></p>
          </div>
        </div>
        <div class="contact-info-item">
          <i class="fab fa-whatsapp"></i>
          <div>
            <h4>واتساب</h4>
            <p><a href="https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}" target="_blank" rel="noopener noreferrer" dir="ltr">${contactInfo.whatsapp}</a></p>
          </div>
        </div>
        <div class="contact-info-item">
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <h4>العنوان</h4>
            <p>${contactInfo.address || 'الرياض، المملكة العربية السعودية'}</p>
          </div>
        </div>
        <div class="contact-info-item">
          <i class="fas fa-clock"></i>
          <div>
            <h4>ساعات العمل</h4>
            <p>${contactInfo.working_hours || '24 ساعة طوال أيام الأسبوع'}</p>
          </div>
        </div>
      </div>
    `;
    
    // إضافة المحتوى إلى القسم
    contactSection.innerHTML = contactHTML;
    
    // تحديث أزرار الاتصال في جميع أنحاء الصفحة
    updateContactButtons(contactInfo);
    
    console.log('تم تحميل معلومات الاتصال بنجاح');
  } catch (error) {
    console.error('خطأ في عرض معلومات الاتصال:', error.message);
    
    // عرض رسالة خطأ للمستخدم بطريقة لطيفة
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.innerHTML = '<p class="error-message">عذراً، حدث خطأ أثناء تحميل معلومات الاتصال. يرجى تحديث الصفحة.</p>';
    }
  }
}

/**
 * تحديث أزرار الاتصال في جميع أنحاء الصفحة
 * @param {Object} contactInfo - معلومات الاتصال
 */
function updateContactButtons(contactInfo) {
  try {
    if (!contactInfo) return;
    
    // تحديث روابط الهاتف
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
      link.href = `tel:${contactInfo.phone}`;
      
      // تحديث النص إذا كان الزر يحتوي على نص فقط (بدون أيقونات)
      if (link.childElementCount === 0) {
        link.textContent = contactInfo.call_button_text || 'اتصل الآن';
      }
    });
    
    // تحديث روابط الواتساب
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
    whatsappLinks.forEach(link => {
      link.href = `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`;
      
      // تحديث النص إذا كان الزر يحتوي على نص فقط (بدون أيقونات)
      if (link.childElementCount === 0) {
        link.textContent = contactInfo.whatsapp_button_text || 'تواصل عبر الواتساب';
      }
    });
    
    console.log('تم تحديث أزرار الاتصال بنجاح');
  } catch (error) {
    console.error('خطأ في تحديث أزرار الاتصال:', error.message);
  }
}

// استدعاء دالة عرض معلومات الاتصال بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderContactInfo);

console.log('تم تحميل وحدة معلومات الاتصال بنجاح');
