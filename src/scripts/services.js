// services.js - عرض الخدمات في الصفحة

// دالة عرض الخدمات
async function renderServices() {
    try {
        // جلب بيانات الخدمات
        const services = await loadCmsData('services');
        
        // التحقق من وجود قائمة الخدمات
        const servicesList = document.getElementById('services-list');
        
        if (servicesList && services && services.length > 0) {
            // مسح المحتوى الحالي
            servicesList.innerHTML = '';
            
            // إضافة الخدمات
            services.forEach(service => {
                const card = document.createElement('div');
                card.className = 'service-card';
                card.innerHTML = `
                    <img src="${service.image}" alt="${service.title}" />
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <a href="#contact" class="service-btn">اطلب الخدمة الآن</a>
                `;
                servicesList.appendChild(card);
            });
            
            console.log('تم تحميل الخدمات بنجاح');
        } else {
            console.warn('لم يتم العثور على عنصر قائمة الخدمات أو لا توجد خدمات');
        }
    } catch (error) {
        console.error('خطأ في عرض الخدمات:', error);
    }
}

// استدعاء دالة عرض الخدمات بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderServices);
