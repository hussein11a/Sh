// cms.js - سكريبت Netlify CMS مع دعم جلب البيانات من ملفات المحتوى
// تصدير دالة loadCmsData لاستخدامها في الملفات الأخرى

/**
 * دالة لتحميل البيانات من Netlify CMS
 * @param {string} contentType - نوع المحتوى المطلوب تحميله
 * @returns {Promise<Object|Array>} - البيانات المطلوبة
 */
export async function loadCmsData(contentType) {
  try {
    // التحقق من صحة نوع المحتوى
    if (!contentType || typeof contentType !== 'string') {
      throw new Error('نوع المحتوى غير صالح');
    }

    // محاولة جلب البيانات من ملفات المحتوى
    try {
      // تحديد مسار الملف بناءً على نوع المحتوى
      const contentPath = `/content/${contentType}/${contentType}.json`;
      
      // جلب البيانات من ملف JSON
      const response = await fetch(contentPath);
      
      // التحقق من نجاح الطلب
      if (response.ok) {
        const data = await response.json();
        console.log(`تم تحميل البيانات من ${contentPath} بنجاح`);
        return data;
      } else {
        console.warn(`فشل في تحميل البيانات من ${contentPath}: ${response.status} ${response.statusText}`);
        // استخدام البيانات الاحتياطية في حالة الفشل
        throw new Error('فشل في تحميل البيانات من الملف');
      }
    } catch (fetchError) {
      console.warn(`خطأ في جلب البيانات: ${fetchError.message}، سيتم استخدام البيانات الاحتياطية`);
      
      // استخدام البيانات الاحتياطية في حالة فشل الاتصال
      // هذه البيانات تستخدم فقط عندما لا يمكن الوصول إلى ملفات المحتوى
      switch (contentType) {
        case 'site_info':
          return {
            site_name: 'سطحة هيدروليك',
            site_description: 'خدمة نقل ورفع السيارات على مدار الساعة في الرياض وجميع المناطق المجاورة',
            phone: '+966501234567',
            whatsapp: '+966501234567',
            logo: './assets/images/logo.png',
            background_image: './assets/images/hero-bg.jpg',
            call_button_text: 'اتصل الآن',
            whatsapp_button_text: 'تواصل عبر الواتساب',
            address: 'الرياض، المملكة العربية السعودية',
            working_hours: '24 ساعة طوال أيام الأسبوع'
          };
        case 'services':
          return [
            {
              id: 'service-1',
              title: 'نقل السيارات من وإلى مراكز الصيانة',
              description: 'نوفر خدمة نقل آمنة وسريعة للسيارات المتعطلة أو التي تحتاج لصيانة دورية، من موقع العميل إلى مركز الصيانة المعتمد، والعكس، باستخدام سطحه هيدروليك مجهزة بالكامل.',
              image: './assets/images/service1.jpg',
              order: 1,
              button_text: 'اطلب الخدمة الآن'
            },
            {
              id: 'service-2',
              title: 'نقل السيارات من وإلى مراكز التقديرات',
              description: 'نقوم بنقل السيارات المتضررة إلى مراكز تقدير الحوادث المعتمدة بكل احترافية، لتسريع إجراءات التأمين والتقييم الفني بدقة وسلاسة.',
              image: './assets/images/service2.jpg',
              order: 2,
              button_text: 'اطلب الخدمة الآن'
            },
            {
              id: 'service-3',
              title: 'نقل السيارات من وإلى مراكز الفحص الدوري',
              description: 'نساعدك في إيصال سيارتك إلى مركز الفحص الدوري واستلامها بعد الانتهاء، مع الالتزام التام بالمواعيد وضمان سلامة المركبة أثناء النقل.',
              image: './assets/images/service3.jpg',
              order: 3,
              button_text: 'اطلب الخدمة الآن'
            },
            {
              id: 'service-4',
              title: 'نقل السيارات بين المدن',
              description: 'خدمة مخصصة لنقل السيارات بين مختلف مدن المملكة بكل أمان، مع تغطية واسعة وسائقين ذوي خبرة لضمان تسليم المركبة في الوقت المحدد.',
              image: './assets/images/service4.jpg',
              order: 4,
              button_text: 'اطلب الخدمة الآن'
            },
            {
              id: 'service-5',
              title: 'يوجد زلاجات في حال عدم عمل القير',
              description: 'لتوفير أقصى درجات السلامة، نستخدم زلاجات خاصة لسحب السيارات التي لا يعمل فيها القير، دون التسبب بأي ضرر أثناء التحميل أو النقل.',
              image: './assets/images/service5.jpg',
              order: 5,
              button_text: 'اطلب الخدمة الآن'
            }
          ];
        case 'contact':
          return {
            title: 'اتصل بنا',
            phone: '+966501234567',
            whatsapp: '+966501234567',
            address: 'الرياض، المملكة العربية السعودية',
            working_hours: '24 ساعة طوال أيام الأسبوع',
            call_button_text: 'اتصل الآن',
            whatsapp_button_text: 'تواصل عبر الواتساب'
          };
        default:
          throw new Error(`نوع المحتوى غير معروف: ${contentType}`);
      }
    }
  } catch (error) {
    console.error(`خطأ في تحميل البيانات (${contentType}):`, error.message);
    return null;
  }
}

// تفعيل Netlify Identity
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

console.log('تم تحميل وحدة CMS بنجاح');
