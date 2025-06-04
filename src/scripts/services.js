// services.js - عرض الخدمات في الصفحة بشكل ديناميكي
import { loadCmsData } from './cms.js';

/**
 * دالة عرض الخدمات
 * تقوم بجلب بيانات الخدمات وعرضها في العنصر المناسب
 */
export async function renderServices() {
  try {
    // جلب بيانات الخدمات من ملفات المحتوى
    const services = await loadCmsData('services');
    
    // التحقق من وجود قسم الخدمات
    const servicesList = document.getElementById('services-list');
    
    if (!servicesList) {
      console.warn('لم يتم العثور على عنصر قائمة الخدمات (services-list)');
      return;
    }
    
    if (!services || !Array.isArray(services) || services.length === 0) {
      console.warn('لا توجد خدمات متاحة للعرض');
      servicesList.innerHTML = '<p class="no-data">لا توجد خدمات متاحة حالياً</p>';
      return;
    }
    
    // مسح المحتوى الحالي
    servicesList.innerHTML = '';
    
    // ترتيب الخدمات حسب الترتيب إذا كان متوفراً
    const sortedServices = [...services].sort((a, b) => {
      return (a.order || 999) - (b.order || 999);
    });
    
    // إنشاء بطاقات الخدمات
    sortedServices.forEach(service => {
      // التحقق من صحة بيانات الخدمة
      if (!service.title || !service.description) {
        console.warn('بيانات الخدمة غير مكتملة:', service);
        return;
      }
      
      // إنشاء بطاقة الخدمة
      const card = document.createElement('div');
      card.className = 'service-card animate-fadeInUp';
      
      // إضافة الصورة مع معالجة الأخطاء
      const img = document.createElement('img');
      img.src = service.image || './assets/images/default-service.jpg';
      img.alt = service.title;
      img.loading = 'lazy'; // تحسين الأداء
      img.onerror = function() {
        this.src = './assets/images/default-service.jpg';
        console.warn(`تعذر تحميل صورة الخدمة: ${service.title}`);
      };
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
      button.textContent = service.button_text || 'اطلب الخدمة الآن';
      card.appendChild(button);
      
      // إضافة البطاقة إلى القائمة
      servicesList.appendChild(card);
    });
    
    console.log(`تم تحميل ${sortedServices.length} خدمات بنجاح`);
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
