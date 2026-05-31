const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
let savedTheme=localStorage.getItem('theme');
if(savedTheme==='dark'){
    document.body.classList.add('dark-mode');
    themeIcon.textContent='light_mode';
}
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark=document.body.classList.contains('dark-mode');
    themeIcon.textContent=isDark?'light-mode':'dark-mode';
    localStorage.setItem('theme',isDark?'dark':'light');
});
