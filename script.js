const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = 'light_mode'; 
    } else {
        themeIcon.textContent = 'dark_mode';  
    }
});
