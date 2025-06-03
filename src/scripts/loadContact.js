// loadContact.js - تحميل وعرض معلومات الاتصال

// دالة عرض معلومات الاتصال
async function renderContactInfo() {
    try {
        // جلب بيانات الاتصال
        const contactInfo = await loadCmsData('contact');
        
        // التحقق من وجود قسم معلومات الاتصال
        const contactSection = document.getElementById('contact-info');
        
        if (contactSection && contactInfo) {
            // تحديث معلومات الاتصال
            contactSection.innerHTML = `
                <h3>${contactInfo.title}</h3>
                <div class="contact-details">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <p>${contactInfo.phone}</p>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-whatsapp"></i>
                        <p>${contactInfo.whatsapp}</p>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>${contactInfo.address}</p>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-clock"></i>
                        <p>${contactInfo.working_hours}</p>
                    </div>
                </div>
            `;
            
            console.log('تم تحميل معلومات الاتصال بنجاح');
        } else {
            console.warn('لم يتم العثور على قسم معلومات الاتصال أو لا توجد بيانات');
        }
    } catch (error) {
        console.error('خطأ في عرض معلومات الاتصال:', error);
    }
}

// استدعاء دالة عرض معلومات الاتصال بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderContactInfo);
