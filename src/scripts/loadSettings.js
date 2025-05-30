fetch('./data/settings.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('site-title').textContent = data.siteName;
    document.getElementById('site-subtitle').textContent = data.subtitle;
    document.getElementById('phone-link').href = `tel:${data.phone}`;
    document.getElementById('whatsapp-link').href = `https://wa.me/${data.whatsapp}`;
  } );
