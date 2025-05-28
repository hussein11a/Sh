// تخصيص الرسالة حسب الوقت
document.addEventListener('DOMContentLoaded', () => {
  const hours = new Date().getHours();
  const greeting = (hours >= 6 && hours < 18) ? 'نهاركم سعيد!' : 'مساء الخير!';
  const header = document.querySelector('header p');
  if (header) header.textContent = `نقل السيارات داخل وخارج المدينة – ${greeting}`;
});
