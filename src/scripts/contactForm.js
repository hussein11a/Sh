// contactForm.js - معالجة نموذج الاتصال

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    // إضافة مستمع حدث لتقديم النموذج
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // الحصول على قيم الحقول
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const location = document.getElementById('location').value;
      const message = document.getElementById('message').value;
      
      // التحقق من صحة البيانات
      if (!name || !phone || !location) {
        showFormMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
      }
      
      // محاكاة إرسال البيانات (يمكن استبدالها بإرسال فعلي للبيانات)
      showFormMessage('جاري إرسال طلبك...', 'info');
      
      // محاكاة تأخير الإرسال
      setTimeout(function() {
        // إعادة تعيين النموذج
        contactForm.reset();
        
        // عرض رسالة نجاح
        showFormMessage('تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.', 'success');
      }, 1500);
      
      // في الإصدار الحقيقي، يمكن استخدام Fetch API لإرسال البيانات
      /*
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          location,
          message
        }),
      })
      .then(response => response.json())
      .then(data => {
        contactForm.reset();
        showFormMessage('تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.', 'success');
      })
      .catch(error => {
        showFormMessage('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.', 'error');
      });
      */
    });
  }
  
  // دالة لعرض رسائل النموذج
  function showFormMessage(message, type) {
    // التحقق من وجود عنصر الرسالة
    let messageElement = document.getElementById('form-message');
    
    // إنشاء عنصر الرسالة إذا لم يكن موجودًا
    if (!messageElement) {
      messageElement = document.createElement('div');
      messageElement.id = 'form-message';
      contactForm.insertAdjacentElement('beforebegin', messageElement);
    }
    
    // تعيين نص الرسالة ونوعها
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
    
    // إظهار الرسالة
    messageElement.style.display = 'block';
    
    // إخفاء رسائل النجاح والمعلومات بعد فترة
    if (type === 'success' || type === 'info') {
      setTimeout(function() {
        messageElement.style.display = 'none';
      }, 5000);
    }
  }
});
