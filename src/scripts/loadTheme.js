fetch('./data/theme.json')
  .then(response => response.json())
  .then(theme => {
    document.documentElement.style.setProperty('--primary-bg', theme.primaryColor);
    document.documentElement.style.setProperty('--accent-color', theme.secondaryColor);
    document.body.style.fontFamily = theme.font;
  });
