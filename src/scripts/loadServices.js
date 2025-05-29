// src/scripts/loadServices.js

document.addEventListener("DOMContentLoaded", () => {
  fetch('./data/services.json')
    .then(response => {
      if (!response.ok) throw new Error("فشل تحميل بيانات الخدمات");
      return response.json();
    })
    .then(services => renderServices(services))
    .catch(error => {
      console.error("خطأ في تحميل الخدمات:", error);
      displayError("تعذر تحميل الخدمات حاليًا.");
    });
});

function renderServices(services) {
  const container = document.getElementById("services-container");
  if (!container) return console.warn("عنصر الخدمات غير موجود في الصفحة");

  container.innerHTML = ""; // تنظيف المحتوى السابق إن وُجد

  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";

    card.innerHTML = `
      <div class="icon">
        <img src="${service.icon}" alt="Icon" loading="lazy" />
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;

    container.appendChild(card);
  });
}

function displayError(message) {
  const container = document.getElementById("services-container");
  if (container) {
    container.innerHTML = `<p class="error-message">${message}</p>`;
  }
}
