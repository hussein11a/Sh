// src/scripts/loadPages.js

fetch('data/pages.json')
  .then(response => response.json())
  .then(data => {
    const pagesContainer = document.getElementById('pages-list');
    if (!pagesContainer) return;

    data.pages.forEach(page => {
      const pageItem = document.createElement('li');
      pageItem.innerHTML = `<a href="${page.url}">${page.title}</a>`;
      pagesContainer.appendChild(pageItem);
    });
  })
  .catch(error => console.error('فشل تحميل الصفحات:', error));
