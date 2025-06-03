// cms-integration.js - تكامل Netlify CMS مع الموقع

document.addEventListener('DOMContentLoaded', function() {
  // تحميل البيانات من Netlify CMS
  loadCmsData();
  
  // تفعيل Netlify Identity
  initNetlifyIdentity();
});

// دالة تحميل البيانات من Netlify CMS
async function loadCmsData() {
  try {
    // تحميل معلومات الموقع
    const siteInfo = await fetchCmsData('site_info');
    if (siteInfo) {
      updateSiteInfo(siteInfo);
    }
    
    // تحميل الخدمات
    const services = await fetchCmsData('services');
    if (services && services.length > 0) {
      updateServices(services);
    }
    
    // تحميل معلومات الاتصال
    const contactInfo = await fetchCmsData('contact');
    if (contactInfo) {
      updateContactInfo(contactInfo);
    }
    
    // تحميل إعدادات تذييل الصفحة
    const footerInfo = await fetchCmsData('footer');
    if (footerInfo) {
      updateFooter(footerInfo);
    }
    
    // تحميل إعدادات الألوان
    const colorScheme = await fetchCmsData('colors');
    if (colorScheme) {
      applyColorScheme(colorScheme);
    }
    
    // تحميل إعدادات SEO
    const seoSettings = await fetchCmsData('seo');
    if (seoSettings) {
      applySeoSettings(seoSettings);
    }
    
    console.log('تم تحميل بيانات CMS بنجاح');
  } catch (error) {
    console.error('خطأ في تحميل بيانات CMS:', error);
    // استخدام البيانات الافتراضية في حالة الخطأ
    loadDefaultData();
  }
}

// دالة جلب البيانات من Netlify CMS
async function fetchCmsData(collection) {
  // في بيئة الإنتاج، سيتم استبدال هذا بطلب API حقيقي
  // هنا نستخدم بيانات ثابتة للعرض
  
  // محاكاة تأخير الشبكة
  await new Promise(resolve => setTimeout(resolve, 300));
  
  switch (collection) {
    case 'site_info':
      return {
        site_name: 'سطحة هيدروليك',
        site_description: 'خدمة نقل ورفع السيارات على مدار الساعة في الرياض وجميع المناطق المجاورة',
        phone: '+966501234567',
        whatsapp: '+966501234567',
        logo: '/assets/images/logo.png',
        background_image: '/assets/images/hero-bg.jpg',
        call_button_text: 'اتصل الآن',
        whatsapp_button_text: 'تواصل عبر الواتساب',
        address: 'الرياض، المملكة العربية السعودية',
        working_hours: '24 ساعة / 7 أيام'
      };
    
    case 'services':
      return [
        {
          title: 'نقل السيارات من وإلى مراكز الصيانة',
          description: 'نوفر خدمة نقل آمنة وسريعة للسيارات المتعطلة أو التي تحتاج لصيانة دورية، من موقع العميل إلى مركز الصيانة المعتمد، والعكس، باستخدام سطحه هيدروليك مجهزة بالكامل.',
          image: '/assets/images/service1.jpg',
          order: 1,
          button_text: 'طلب الخدمة'
        },
        {
          title: 'نقل السيارات من وإلى مراكز التقديرات',
          description: 'نقوم بنقل السيارات المتضررة إلى مراكز تقدير الحوادث المعتمدة بكل احترافية، لتسريع إجراءات التأمين والتقييم الفني بدقة وسلاسة.',
          image: '/assets/images/service2.jpg',
          order: 2,
          button_text: 'طلب الخدمة'
        },
        {
          title: 'نقل السيارات من وإلى مراكز الفحص الدوري',
          description: 'نساعدك في إيصال سيارتك إلى مركز الفحص الدوري واستلامها بعد الانتهاء، مع الالتزام التام بالمواعيد وضمان سلامة المركبة أثناء النقل.',
          image: '/assets/images/service3.jpg',
          order: 3,
          button_text: 'طلب الخدمة'
        },
        {
          title: 'نقل السيارات بين المدن',
          description: 'خدمة مخصصة لنقل السيارات بين مختلف مدن المملكة بكل أمان، مع تغطية واسعة وسائقين ذوي خبرة لضمان تسليم المركبة في الوقت المحدد.',
          image: '/assets/images/service4.jpg',
          order: 4,
          button_text: 'طلب الخدمة'
        },
        {
          title: 'يوجد زلاجات في حال عدم عمل القير',
          description: 'لتوفير أقصى درجات السلامة، نستخدم زلاجات خاصة لسحب السيارات التي لا يعمل فيها القير، دون التسبب بأي ضرر أثناء التحميل أو النقل.',
          image: '/assets/images/service5.jpg',
          order: 5,
          button_text: 'طلب الخدمة'
        }
      ];
    
    case 'contact':
      return {
        title: 'اتصل بنا',
        phone: '+966501234567',
        whatsapp: '+966501234567',
        address: 'الرياض، المملكة العربية السعودية',
        working_hours: '24 ساعة / 7 أيام',
        call_button_text: 'اتصل الآن',
        whatsapp_button_text: 'تواصل عبر الواتساب'
      };
    
    case 'footer':
      return {
        copyright_text: 'سطحة هيدروليك - جميع الحقوق محفوظة',
        about_text: 'نقدم خدمات نقل السيارات بأعلى معايير الجودة والأمان على مدار الساعة في الرياض وجميع المناطق المجاورة.',
        contact_title: 'اتصل بنا',
        quick_links_title: 'روابط سريعة'
      };
    
    case 'colors':
      return {
        primary_color: '#0056b3',
        secondary_color: '#004494',
        accent_color: '#00a8e8',
        dark_text: '#333333',
        light_text: '#ffffff',
        light_bg: '#f8f9fa'
      };
    
    case 'seo':
      return {
        site_title: 'سطحة هيدروليك | خدمة نقل السيارات على مدار الساعة',
        site_description: 'خدمة نقل ورفع السيارات على مدار الساعة في الرياض وجميع المناطق المجاورة. نقل سيارات من وإلى مراكز الصيانة، التقديرات، والفحص الدوري.',
        keywords: 'سطحة هيدروليك, نقل سيارات, سحب سيارات, خدمة سيارات, الرياض, سطحة, نقل سيارات بين المدن',
        og_image: '/assets/images/og-image.jpg',
        author: 'سطحة هيدروليك',
        language: 'Arabic',
        canonical_url: 'https://sathte.netlify.app/'
      };
    
    default:
      return null;
  }
}

// دالة تحديث معلومات الموقع
function updateSiteInfo(siteInfo) {
  // تحديث عنوان الموقع
  const siteTitleElement = document.getElementById('site-title');
  if (siteTitleElement) {
    siteTitleElement.textContent = siteInfo.site_name;
  }
  
  // تحديث وصف الموقع
  const siteDescriptionElement = document.getElementById('site-description');
  if (siteDescriptionElement) {
    siteDescriptionElement.textContent = siteInfo.site_description;
  }
  
  // تحديث شعار الموقع
  const logoElement = document.querySelector('.logo img');
  if (logoElement && siteInfo.logo) {
    logoElement.src = siteInfo.logo;
    logoElement.alt = siteInfo.site_name;
  }
  
  // تحديث صورة الخلفية
  const heroBackgroundElement = document.querySelector('.hero-background img');
  if (heroBackgroundElement && siteInfo.background_image) {
    heroBackgroundElement.src = siteInfo.background_image;
  }
  
  // تحديث نص أزرار الاتصال
  const callButtonTextElements = document.querySelectorAll('.call-button-text');
  callButtonTextElements.forEach(element => {
    if (element) {
      element.textContent = siteInfo.call_button_text;
    }
  });
  
  // تحديث نص أزرار الواتساب
  const whatsappButtonTextElements = document.querySelectorAll('.whatsapp-button-text');
  whatsappButtonTextElements.forEach(element => {
    if (element) {
      element.textContent = siteInfo.whatsapp_button_text;
    }
  });
  
  // تحديث عنوان الصفحة
  document.title = `${siteInfo.site_name} | ${siteInfo.site_description}`;
}

// دالة تحديث الخدمات
function updateServices(services) {
  const servicesContainer = document.getElementById('services-list');
  if (!servicesContainer) return;
  
  // ترتيب الخدمات حسب الترتيب المحدد
  services.sort((a, b) => a.order - b.order);
  
  // إفراغ الحاوية
  servicesContainer.innerHTML = '';
  
  // إضافة الخدمات
  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card animate-fadeInUp';
    
    serviceCard.innerHTML = `
      <div class="service-image">
        <img src="${service.image}" alt="${service.title}">
      </div>
      <div class="service-content">
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
        <a href="#contact" class="service-cta">${service.button_text || 'طلب الخدمة'}</a>
      </div>
    `;
    
    servicesContainer.appendChild(serviceCard);
  });
}

// دالة تحديث معلومات الاتصال
function updateContactInfo(contactInfo) {
  // تحديث عنوان قسم الاتصال
  const contactTitleElement = document.getElementById('contact-title');
  if (contactTitleElement) {
    contactTitleElement.textContent = contactInfo.title;
  }
  
  // تحديث رقم الهاتف
  const phoneElements = document.querySelectorAll('.contact-phone, #footer-phone');
  phoneElements.forEach(element => {
    if (element) element.textContent = contactInfo.phone;
  });
  
  // تحديث رقم الواتساب
  const whatsappElements = document.querySelectorAll('.contact-whatsapp, #footer-whatsapp');
  whatsappElements.forEach(element => {
    if (element) element.textContent = contactInfo.whatsapp;
  });
  
  // تحديث العنوان
  const addressElements = document.querySelectorAll('.contact-address, #footer-address');
  addressElements.forEach(element => {
    if (element) element.textContent = contactInfo.address;
  });
  
  // تحديث ساعات العمل
  const hoursElements = document.querySelectorAll('.contact-hours');
  hoursElements.forEach(element => {
    if (element) element.textContent = contactInfo.working_hours;
  });
  
  // تحديث روابط الاتصال
  const callBtns = document.querySelectorAll('a[href^="tel:"]');
  callBtns.forEach(btn => {
    btn.href = `tel:${contactInfo.phone.replace(/\s+/g, '')}`;
  });
  
  const whatsappBtns = document.querySelectorAll('a[href^="https://wa.me/"]');
  const whatsappNumber = contactInfo.whatsapp.replace(/\+/g, '').replace(/\s+/g, '');
  whatsappBtns.forEach(btn => {
    btn.href = `https://wa.me/${whatsappNumber}`;
  });
}

// دالة تحديث تذييل الصفحة
function updateFooter(footerInfo) {
  // تحديث نص حقوق النشر
  const copyrightElement = document.querySelector('.footer-copyright');
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = `© <span id="current-year">${currentYear}</span> ${footerInfo.copyright_text}`;
  }
  
  // تحديث نبذة عن الموقع
  const aboutTextElement = document.querySelector('.footer-about-text');
  if (aboutTextElement) {
    aboutTextElement.textContent = footerInfo.about_text;
  }
  
  // تحديث عنوان قسم الاتصال
  const contactTitleElement = document.querySelector('.footer-contact-title');
  if (contactTitleElement) {
    contactTitleElement.textContent = footerInfo.contact_title;
  }
  
  // تحديث عنوان قسم الروابط السريعة
  const quickLinksTitleElement = document.querySelector('.footer-links-title');
  if (quickLinksTitleElement) {
    quickLinksTitleElement.textContent = footerInfo.quick_links_title;
  }
}

// دالة تطبيق نظام الألوان
function applyColorScheme(colorScheme) {
  // إنشاء عنصر style
  let styleElement = document.getElementById('dynamic-colors');
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'dynamic-colors';
    document.head.appendChild(styleElement);
  }
  
  // تحديث متغيرات CSS
  styleElement.textContent = `
    :root {
      --primary-color: ${colorScheme.primary_color};
      --secondary-color: ${colorScheme.secondary_color};
      --accent-color: ${colorScheme.accent_color};
      --dark-text: ${colorScheme.dark_text};
      --light-text: ${colorScheme.light_text};
      --light-bg: ${colorScheme.light_bg};
    }
  `;
}

// دالة تطبيق إعدادات SEO
function applySeoSettings(seoSettings) {
  // تحديث عنوان الصفحة
  document.title = seoSettings.site_title;
  
  // تحديث وصف الصفحة
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', seoSettings.site_description);
  
  // تحديث الكلمات المفتاحية
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', seoSettings.keywords);
  
  // تحديث بيانات Open Graph
  const ogTags = {
    'og:title': seoSettings.site_title,
    'og:description': seoSettings.site_description,
    'og:image': seoSettings.og_image,
    'og:url': seoSettings.canonical_url,
    'og:type': 'website',
    'og:site_name': seoSettings.site_title.split('|')[0].trim()
  };
  
  Object.entries(ogTags).forEach(([property, content]) => {
    let metaTag = document.querySelector(`meta[property="${property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  });
  
  // تحديث الرابط القانوني
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', seoSettings.canonical_url);
}

// دالة تفعيل Netlify Identity
function initNetlifyIdentity() {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
}

// دالة تحميل البيانات الافتراضية في حالة الخطأ
function loadDefaultData() {
  console.log('تم تحميل البيانات الافتراضية');
  // يمكن تنفيذ منطق تحميل البيانات الافتراضية هنا
}
