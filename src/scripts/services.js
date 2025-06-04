// services.js - عرض الخدمات في الصفحة
import { loadCmsData } from './cms.js';

/**
 * دالة عرض الخدمات
 * تقوم بجلب بيانات الخدمات وعرضها في العنصر المناسب
 */
export async function renderServices() {
  try {
    // جلب بيانات الخدمات
    const services = await loadCmsData('services');
    
    // التحقق من وجود قائمة الخدمات
    const servicesList = document.getElementById('services-list');
    
    if (!servicesList) {
      throw new Error('لم يتم العثور على عنصر قائمة الخدمات (services-list)');
    }
    
    if (!services || !Array.isArray(services) || services.length === 0) {
      console.warn('لا توجد خدمات متاحة للعرض');
      servicesList.innerHTML = '<p class="no-data">لا توجد خدمات متاحة حالياً</p>';
      return;
    }
    
    // مسح المحتوى الحالي
    servicesList.innerHTML = '';
    
    // إضافة الخدمات
    services.forEach(service => {
      // التحقق من صحة بيانات الخدمة
      if (!service.title || !service.description || !service.image) {
        console.warn('بيانات خدمة غير مكتملة:', service);
        return; // تخطي هذه الخدمة
      }
      
      // إنشاء بطاقة الخدمة بطريقة آمنة (تجنب استخدام innerHTML)
      const card = document.createElement('div');
      card.className = 'service-card';
      
      // إضافة الصورة
      const img = document.createElement('img');
      img.src = service.image;
      img.alt = service.title;
      img.loading = 'lazy'; // تحميل كسول للصور
      card.appendChild(img);
      
      // إضافة العنوان
      const title = document.createElement('h3');
      title.textContent = service.title;
      card.appendChild(title);
      
      // إضافة الوصف
      const description = document.createElement('p');
      description.textContent = service.description;
      card.appendChild(description);
      
      // إضافة زر طلب الخدمة
      const button = document.createElement('a');
      button.href = '#contact';
      button.className = 'service-btn';
      button.textContent = 'اطلب الخدمة الآن';
      card.appendChild(button);
      
      // إضافة البطاقة إلى القائمة
      servicesList.appendChild(card);
    });
    
    console.log('تم تحميل الخدمات بنجاح');
  } catch (error) {
    console.error('خطأ في عرض الخدمات:', error.message);
    
    // عرض رسالة خطأ للمستخدم بطريقة لطيفة
    const servicesList = document.getElementById('services-list');
    if (servicesList) {
      servicesList.innerHTML = '<p class="error-message">عذراً، حدث خطأ أثناء تحميل الخدمات. يرجى تحديث الصفحة.</p>';
    }
  }
}

// استدعاء دالة عرض الخدمات بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderServices);

console.log('تم تحميل وحدة الخدمات بنجاح');
