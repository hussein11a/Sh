document.addEventListener('DOMContentLoaded', function() {
  // تفعيل زر التمرير للأعلى
  const scrollTopBtn = document.getElementById('scroll-top');
  
  if (scrollTopBtn) {
    // إظهار/إخفاء زر التمرير للأعلى عند التمرير
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    
    // التمرير للأعلى عند النقر على الزر
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // المزيد من وظائف واجهة المستخدم...
});
