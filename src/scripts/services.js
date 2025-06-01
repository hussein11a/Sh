// services.js - تحميل وعرض الخدمات

document.addEventListener('DOMContentLoaded', function() {
  // الحصول على عنصر قائمة الخدمات
  const servicesList = document.getElementById('services-list');
  
  if (servicesList) {
    // تحميل الخدمات من ملفات المحتوى
    loadServices();
  }
});

// دالة تحميل الخدمات
async function loadServices() {
  try {
    // في بيئة الإنتاج، سيتم تحميل الخدمات من Netlify CMS
    // هنا نستخدم بيانات ثابتة للعرض
    const services = [
      {
        id: 'service-1',
        title: 'نقل السيارات من وإلى مراكز الصيانة',
        description: 'نوفر خدمة نقل آمنة وسريعة للسيارات المتعطلة أو التي تحتاج لصيانة دورية، من موقع العميل إلى مركز الصيانة المعتمد، والعكس، باستخدام سطحه هيدروليك مجهزة بالكامل.',
        image: './assets/images/service1.jpg',
        order: 1
      },
      {
        id: 'service-2',
        title: 'نقل السيارات من وإلى مراكز التقديرات',
        description: 'نقوم بنقل السيارات المتضررة إلى مراكز تقدير الحوادث المعتمدة بكل احترافية، لتسريع إجراءات التأمين والتقييم الفني بدقة وسلاسة.',
        image: './assets/images/service2.jpg',
        order: 2
      },
      {
        id: 'service-3',
        title: 'نقل السيارات من وإلى مراكز الفحص الدوري',
        description: 'نساعدك في إيصال سيارتك إلى مركز الفحص الدوري واستلامها بعد الانتهاء، مع الالتزام التام بالمواعيد وضمان سلامة المركبة أثناء النقل.',
        image: './assets/images/service3.jpg',
        order: 3
      },
      {
        id: 'service-4',
        title: 'نقل السيارات بين المدن',
        description: 'خدمة مخصصة لنقل السيارات بين مختلف مدن المملكة بكل أمان، مع تغطية واسعة وسائقين ذوي خبرة لضمان تسليم المركبة في الوقت المحدد.',
        image: './assets/images/service4.jpg',
        order: 4
      },
      {
        id: 'service-5',
        title: 'يوجد زلاجات في حال عدم عمل القير',
        description: 'لتوفير أقصى درجات السلامة، نستخدم زلاجات خاصة لسحب السيارات التي لا يعمل فيها القير، دون التسبب بأي ضرر أثناء التحميل أو النقل.',
        image: './assets/images/service5.jpg',
        order: 5
      }
    ];
    
    // ترتيب الخدمات حسب الترتيب
    services.sort((a, b) => a.order - b.order);
    
    // إنشاء بطاقات الخدمات وإضافتها للصفحة
    const servicesList = document.getElementById('services-list');
    
    if (servicesList) {
      // إفراغ القائمة أولاً
      servicesList.innerHTML = '';
      
      // إضافة الخدمات
      services.forEach(service => {
        const serviceCard = createServiceCard(service);
        servicesList.appendChild(serviceCard);
      });
    }
  } catch (error) {
    console.error('خطأ في تحميل الخدمات:', error);
  }
}

// دالة إنشاء بطاقة خدمة
function createServiceCard(service) {
  const card = document.createElement('div');
  card.className = 'service-card animate-fadeInUp';
  card.id = service.id;
  
  card.innerHTML = `
    <div class="service-image">
      <img src="${service.image}" alt="${service.title}" loading="lazy">
    </div>
    <div class="service-content">
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <a href="tel:+966501234567" class="service-cta">اطلب الخدمة الآن</a>
    </div>
  `;
  
  return card;
}

// دالة تحميل معلومات الاتصال
function loadContactInfo() {
  const contactInfo = {
    phone: '+966501234567',
    whatsapp: '+966501234567',
    location: 'الرياض، المملكة العربية السعودية',
    hours: '24 ساعة / 7 أيام'
  };
  
  // تحديث عناصر الاتصال في الصفحة
  const contactInfoElement = document.getElementById('contact-info');
  
  if (contactInfoElement) {
    contactInfoElement.innerHTML = `
      <div class="contact-item">
        <div class="contact-icon">
          <i class="fas fa-phone-alt"></i>
        </div>
        <div class="contact-text">
          <h4>اتصل بنا</h4>
          <p><a href="tel:${contactInfo.phone}" id="contact-phone">${contactInfo.phone}</a></p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">
          <i class="fab fa-whatsapp"></i>
        </div>
        <div class="contact-text">
          <h4>واتساب</h4>
          <p><a href="https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '' ).replace(/\s+/g, '')}" target="_blank" id="contact-whatsapp">${contactInfo.whatsapp}</a></p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="contact-text">
          <h4>الموقع</h4>
          <p id="contact-location">${contactInfo.location}</p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">
          <i class="fas fa-clock"></i>
        </div>
        <div class="contact-text">
          <h4>ساعات العمل</h4>
          <p id="contact-hours">${contactInfo.hours}</p>
        </div>
      </div>
    `;
  }
  
  // تحديث روابط الاتصال
  updateContactLinks(contactInfo);
}

// دالة تحديث روابط الاتصال
function updateContactLinks(contactInfo) {
  // تحديث روابط الهاتف
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.href = `tel:${contactInfo.phone.replace(/\s+/g, '')}`;
  });
  
  // تحديث روابط الواتساب
  const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]' );
  const whatsappNumber = contactInfo.whatsapp.replace(/\+/g, '').replace(/\s+/g, '');
  whatsappLinks.forEach(link => {
    link.href = `https://wa.me/${whatsappNumber}`;
  } );
  
  // تحديث نصوص الاتصال
  document.getElementById('footer-phone').textContent = contactInfo.phone;
  document.getElementById('footer-whatsapp').textContent = contactInfo.whatsapp;
  document.getElementById('footer-location').textContent = contactInfo.location;
  document.getElementById('contact-hours').textContent = contactInfo.hours;
}

// تحميل معلومات الاتصال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  loadContactInfo();
});
