var themeToggle = document.querySelector('.theme-toggle');

if(themeToggle) {
  themeToggle.addEventListener('click', function() {
    var themeStyle = document.querySelector('#theme-style');
    if(themeStyle.getAttribute('href') == '/assets/css/light.css') {
      themeStyle.href = '/assets/css/dark.css';
    } else {
      themeStyle.href = '/assets/css/light.css';
    }
  });
}