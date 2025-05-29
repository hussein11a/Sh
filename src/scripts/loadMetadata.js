fetch('./data/metadata.json')
  .then(response => response.json())
  .then(data => {
    document.querySelector('meta[name="description"]').setAttribute('content', data.description);
    document.querySelector('meta[name="keywords"]').setAttribute('content', data.keywords);
    document.querySelector('meta[name="author"]').setAttribute('content', data.author);
    document.title = data.description;
  });
