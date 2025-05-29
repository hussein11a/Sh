fetch('./data/services.json')
  .then(response => response.json())
  .then(services => {
    const container = document.getElementById('services');
    services.forEach(service => {
      const item = document.createElement('div');
      item.className = 'service-item';
      item.innerHTML = `
        <img src="assets/icons/${service.icon}" alt="${service.title}" />
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;
      container.appendChild(item);
    });
  });
