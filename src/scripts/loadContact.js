// src/scripts/loadContact.js

fetch('data/contact.json')
  .then(response => response.json())
  .then(data => {
    const contactContainer = document.getElementById('contact-info');
    if (!contactContainer) return;

    contactContainer.innerHTML = `
      <h2>اتصل بنا</h2>
      <p><strong>الهاتف:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
      <p><strong>واتساب:</strong> <a href="https://wa.me/${data.whatsapp}" target="_blank">${data.whatsapp}</a></p>
      <p><strong>العنوان:</strong> ${data.address}</p>
    `;
  } )
  .catch(error => console.error('فشل تحميل معلومات التواصل:', error));
