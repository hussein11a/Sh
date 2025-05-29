fetch('./data/theme.json')
  .then(response => response.json())
  .then(theme => {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
    document.body.style.fontFamily = theme.font;
  });
