// loadServices.js - تحميل الخدمات من ملفات المحتوى

document.addEventListener('DOMContentLoaded', function() {
  // الحصول على عنصر قائمة الخدمات
  const servicesList = document.getElementById('services-list');
  
  // بيانات الخدمات (يمكن استبدالها بطلب API أو بيانات من Netlify CMS)
  const services = [
    {
      id: 'service-1',
      title: 'نقل سيارات داخل المدينة',
      description: 'نقل سريع وآمن للسيارات داخل المدينة باستخدام سطحة هيدروليك.',
      image: './assets/images/service-1.jpg'
    },
    {
      id: 'service-2',
      title: 'سيارات بين المدن',
      description: 'خدمة نقل السيارات بين المدن المختلفة بأسعار تنافسية وخدمة ممتازة.',
      image: './assets/images/service-2.jpg'
    },
    {
      id: 'service-3',
      title: 'سحب السيارات المعطلة',
      description: 'سحب وإنقاذ السيارات المعطلة من الطرق والمواقف بسرعة واحترافية.',
      image: './assets/images/service-3.jpg'
    },
    {
      id: 'service-4',
      title: 'نقل السيارات الفارهة',
      description: 'خدمة خاصة لنقل السيارات الفارهة والرياضية مع عناية فائقة وتأمين كامل.',
      image: './assets/images/service-4.jpg'
    }
  ];
  
  // إنشاء بطاقات الخدمات وإضافتها للصفحة
  if (servicesList) {
    services.forEach((service, index) => {
      // إنشاء بطاقة الخدمة
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card animate-fadeInUp';
      serviceCard.style.animationDelay = `${index * 0.1}s`;
      
      // إضافة محتوى البطاقة
      serviceCard.innerHTML = `
        <div class="service-image">
          <img src="${service.image}" alt="${service.title}" />
        </div>
        <div class="service-content">
          <h3 class="service-title">${service.title}</h3>
          <p class="service-description">${service.description}</p>
          <a href="#contact" class="btn btn-primary">اطلب الخدمة</a>
        </div>
      `;
      
      // إضافة البطاقة إلى قائمة الخدمات
      servicesList.appendChild(serviceCard);
    });
  }
});
