// main.js - الملف الرئيسي لاستيراد جميع الملفات الأخرى

document.addEventListener('DOMContentLoaded', function() {
    // تحميل معلومات الموقع
    loadSiteInfo();
    
    // تفعيل تأثيرات التمرير
    initScrollAnimations();
    
    // تفعيل زر التمرير للأعلى
    initScrollToTopButton();
    
    // تحديث السنة الحالية في حقوق النشر
    updateCopyrightYear();
    
    console.log('تم تحميل الموقع بنجاح');
});

// دالة تحميل معلومات الموقع
async function loadSiteInfo() {
    try {
        // تحميل معلومات الموقع من Netlify CMS
        const siteInfo = await loadCmsData('site_info');
        
        if (siteInfo) {
            // تحديث عناصر معلومات الموقع
            updateSiteElements(siteInfo);
        }
    } catch (error) {
        console.error('خطأ في تحميل معلومات الموقع:', error);
    }
}

// دالة تحديث عناصر الموقع
function updateSiteElements(siteInfo) {
    // تحديث عناصر معلومات الموقع
    
    // تحديث العنوان والوصف
    const siteTitle = document.getElementById('site-title');
    const siteSubtitle = document.getElementById('site-subtitle');
    
    if (siteTitle) siteTitle.textContent = siteInfo.site_name;
    if (siteSubtitle) siteSubtitle.textContent = siteInfo.site_description;
    
    // تحديث أرقام الهاتف والواتساب
    const phoneLink = document.getElementById('phone-link');
    const whatsappLink = document.getElementById('whatsapp-link');
    const callButtonText = document.getElementById('call-button-text');
    const whatsappButtonText = document.getElementById('whatsapp-button-text');
    
    if (phoneLink) phoneLink.href = `tel:${siteInfo.phone}`;
    if (whatsappLink) whatsappLink.href = `https://wa.me/${siteInfo.whatsapp.replace('+', '')}`;
    if (callButtonText) callButtonText.textContent = siteInfo.call_button_text;
    if (whatsappButtonText) whatsappButtonText.textContent = siteInfo.whatsapp_button_text;
    
    // تحديث الأزرار العائمة
    const callBtn = document.getElementById('call-btn');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    if (callBtn) callBtn.href = `tel:${siteInfo.phone}`;
    if (whatsappBtn) whatsappBtn.href = `https://wa.me/${siteInfo.whatsapp.replace('+', '')}`;
    
    // تحديث أزرار القسم الرئيسي
    const heroCallButtonText = document.getElementById('hero-call-button-text');
    const heroWhatsappButtonText = document.getElementById('hero-whatsapp-button-text');
    
    if (heroCallButtonText) heroCallButtonText.textContent = siteInfo.call_button_text;
    if (heroWhatsappButtonText) heroWhatsappButtonText.textContent = siteInfo.whatsapp_button_text;
    
    // تحديث معلومات التذييل
    const footerPhone = document.getElementById('footer-phone');
    const footerWhatsapp = document.getElementById('footer-whatsapp');
    
    if (footerPhone) footerPhone.textContent = siteInfo.phone;
    if (footerWhatsapp) footerWhatsapp.textContent = siteInfo.whatsapp;
    
    console.log('تم تحديث معلومات الموقع بنجاح');
}

// دالة تفعيل تأثيرات التمرير
function initScrollAnimations() {
    // يمكن إضافة تأثيرات التمرير هنا
    console.log('تم تفعيل تأثيرات التمرير');
}

// دالة تفعيل زر التمرير للأعلى
function initScrollToTopButton() {
    // يمكن إضافة زر التمرير للأعلى هنا
    console.log('تم تفعيل زر التمرير للأعلى');
}

// دالة تحديث السنة الحالية في حقوق النشر
function updateCopyrightYear() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}
