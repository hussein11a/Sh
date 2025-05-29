async function loadServices() {
  try {
    const response = await fetch('./data/services.json');
    if (!response.ok) throw new Error('فشل تحميل بيانات الخدمات');
    const services = await response.json();

    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = '';

    services.forEach(service => {
      const serviceEl = document.createElement('div');
      serviceEl.className = 'service-item';
      serviceEl.innerHTML = `
        <img src="./assets/icons/${service.icon}" alt="${service.title}" />
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;
      servicesContainer.appendChild(serviceEl);
    });
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', loadServices);
