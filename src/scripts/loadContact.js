// loadContact.js - تحميل وعرض معلومات الاتصال
import { loadCmsData } from './cms.js';

/**
 * دالة عرض معلومات الاتصال
 * تقوم بجلب بيانات الاتصال وعرضها في العنصر المناسب
 */
export async function renderContactInfo() {
  try {
    // جلب بيانات الاتصال
    const contactInfo = await loadCmsData('contact');
    
    // التحقق من وجود قسم معلومات الاتصال
    const contactSection = document.getElementById('contact-info');
    
    if (!contactSection) {
      throw new Error('لم يتم العثور على عنصر معلومات الاتصال (contact-info)');
    }
    
    if (!contactInfo) {
      console.warn('لا توجد معلومات اتصال متاحة للعرض');
      contactSection.innerHTML = '<p class="no-data">لا توجد معلومات اتصال متاحة حالياً</p>';
      return;
    }
    
    // التحقق من صحة بيانات الاتصال
    if (!contactInfo.title || !contactInfo.phone || !contactInfo.whatsapp) {
      console.warn('بيانات الاتصال غير مكتملة:', contactInfo);
      contactSection.innerHTML = '<p class="error-message">معلومات الاتصال غير مكتملة</p>';
      return;
    }
    
    // إنشاء عناصر معلومات الاتصال بطريقة آمنة (تجنب استخدام innerHTML)
    const title = document.createElement('h3');
    title.textContent = contactInfo.title;
    
    const contactDetails = document.createElement('div');
    contactDetails.className = 'contact-details';
    
    // إضافة رقم الهاتف
    const phoneItem = createContactItem('fas fa-phone', contactInfo.phone);
    contactDetails.appendChild(phoneItem);
    
    // إضافة رقم الواتساب
    const whatsappItem = createContactItem('fab fa-whatsapp', contactInfo.whatsapp);
    contactDetails.appendChild(whatsappItem);
    
    // إضافة العنوان إذا كان متوفراً
    if (contactInfo.address) {
      const addressItem = createContactItem('fas fa-map-marker-alt', contactInfo.address);
      contactDetails.appendChild(addressItem);
    }
    
    // إضافة ساعات العمل إذا كانت متوفرة
    if (contactInfo.working_hours) {
      const hoursItem = createContactItem('fas fa-clock', contactInfo.working_hours);
      contactDetails.appendChild(hoursItem);
    }
    
    // مسح المحتوى الحالي وإضافة العناصر الجديدة
    contactSection.innerHTML = '';
    contactSection.appendChild(title);
    contactSection.appendChild(contactDetails);
    
    // تحديث روابط الاتصال في الصفحة
    updateContactLinks(contactInfo);
    
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
 * دالة مساعدة لإنشاء عنصر معلومات اتصال
 * @param {string} iconClass - صنف أيقونة Font Awesome
 * @param {string} text - النص المراد عرضه
 * @returns {HTMLElement} - عنصر معلومات الاتصال
 */
function createContactItem(iconClass, text) {
  const item = document.createElement('div');
  item.className = 'contact-item';
  
  const icon = document.createElement('i');
  icon.className = iconClass;
  
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  
  item.appendChild(icon);
  item.appendChild(paragraph);
  
  return item;
}

/**
 * تحديث روابط الاتصال في الصفحة
 * @param {Object} contactInfo - معلومات الاتصال
 */
function updateContactLinks(contactInfo) {
  // تحديث روابط الهاتف
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.href = `tel:${contactInfo.phone}`;
  });
  
  // تحديث روابط الواتساب
  const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
  const whatsappNumber = contactInfo.whatsapp.replace('+', '');
  whatsappLinks.forEach(link => {
    link.href = `https://wa.me/${whatsappNumber}`;
  });
}

// استدعاء دالة عرض معلومات الاتصال بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderContactInfo);

console.log('تم تحميل وحدة معلومات الاتصال بنجاح');
