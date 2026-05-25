const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleBtn.addEventListener('click', () => {
    // 1. Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // 2. Update the icon based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = 'light_mode'; // Shows sun icon
    } else {
        themeIcon.textContent = 'dark_mode';  // Shows moon icon
    }
});