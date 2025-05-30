document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function(e) {
    if(e.target.closest('.toggle-btn.toggle')) {
      const container = e.target.closest('.toggle-content-container');
      const content = container.querySelector('.toggle-content');
      content.classList.toggle('hide');
      e.target.textContent = content.classList.contains('hide') ? 'إظهار' : 'إخفاء';
    }
    if(e.target.closest('.toggle-btn.edit')) {
      const container = e.target.closest('.toggle-content-container');
      const content = container.querySelector('.toggle-content');
      if (!content.isContentEditable) {
        content.contentEditable = "true";
        content.focus();
        e.target.textContent = "حفظ";
      } else {
        content.contentEditable = "false";
        e.target.textContent = "تعديل";
        // يمكنك إضافة كود هنا لحفظ التغيير في قاعدة بيانات مثلا
      }
    }
    if(e.target.closest('.toggle-btn.delete')) {
      const container = e.target.closest('.toggle-content-container');
      if (confirm("هل أنت متأكد من حذف هذا العنصر؟")) {
        container.remove();
      }
    }
  });
});
