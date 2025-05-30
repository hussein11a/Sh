// testimonials.js - تشغيل شريط الشهادات

document.addEventListener('DOMContentLoaded', function() {
  // الحصول على عناصر شريط الشهادات
  const testimonialsSlider = document.querySelector('.testimonials-slider');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevButton = document.querySelector('.testimonial-prev');
  const nextButton = document.querySelector('.testimonial-next');
  
  if (testimonialsSlider && testimonialCards.length > 0) {
    let currentIndex = 0;
    const totalSlides = testimonialCards.length;
    
    // إخفاء جميع البطاقات ما عدا الأولى
    testimonialCards.forEach((card, index) => {
      if (index !== 0) {
        card.style.display = 'none';
      }
    });
    
    // دالة لعرض البطاقة الحالية
    function showCurrentSlide() {
      testimonialCards.forEach((card, index) => {
        if (index === currentIndex) {
          card.style.display = 'block';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
          card.classList.remove('animate-fadeIn');
        }
      });
    }
    
    // دالة للانتقال إلى البطاقة التالية
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showCurrentSlide();
    }
    
    // دالة للانتقال إلى البطاقة السابقة
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showCurrentSlide();
    }
    
    // إضافة مستمعي الأحداث لأزرار التنقل
    if (nextButton) {
      nextButton.addEventListener('click', nextSlide);
    }
    
    if (prevButton) {
      prevButton.addEventListener('click', prevSlide);
    }
    
    // تشغيل التبديل التلقائي كل 5 ثوانٍ
    setInterval(nextSlide, 5000);
  }
});
