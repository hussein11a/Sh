document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("services-container");

  if (!container) {
    console.error("لم يتم العثور على عنصر الخدمات.");
    return;
  }

  fetch("./data/services.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("فشل في تحميل بيانات الخدمات.");
      }
      return response.json();
    })
    .then((services) => {
      if (!Array.isArray(services)) {
        throw new Error("صيغة البيانات غير صحيحة.");
      }

      container.innerHTML = services.map(service => `
        <div class="service-card">
          <div class="icon">
            <img src="${service.icon}" alt="${service.title}" />
          </div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>
      `).join('');
    })
    .catch((error) => {
      console.error("خطأ:", error);
      container.innerHTML = `<div class="error-message">تعذر تحميل الخدمات حاليًا.</div>`;
    });
});
