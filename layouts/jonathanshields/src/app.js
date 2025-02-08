function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        button.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'light');
        button.textContent = '☀️';
    }
}
