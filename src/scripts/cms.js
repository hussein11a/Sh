// cms.js - سكريبت Netlify CMS
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

// دالة لتحميل البيانات من Netlify CMS
// في بيئة الإنتاج، سيتم استخدام هذه الدالة لتحميل البيانات من ملفات المحتوى
// في بيئة التطوير، نستخدم بيانات ثابتة

async function loadCmsData(contentType) {
    // هذه الدالة ستكون مسؤولة عن تحميل البيانات من Netlify CMS
    // في بيئة التطوير، نستخدم بيانات ثابتة
    
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
                whatsapp_button_text: 'تواصل عبر الواتساب'
            };
        case 'services':
            return [
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
        case 'contact':
            return {
                title: 'اتصل بنا',
                phone: '+966501234567',
                whatsapp: '+966501234567',
                address: 'الرياض، المملكة العربية السعودية',
                working_hours: '24 ساعة / 7 أيام'
            };
        default:
            return null;
    }
}
