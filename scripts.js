
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

function change_theme() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        document.querySelector('.change_theme').textContent = '🌙';
    } else {
        localStorage.setItem('theme', 'light');
        document.querySelector('.change_theme').textContent = '☀️';
    }
}
