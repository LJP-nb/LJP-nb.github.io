// js/about.js - 关于页交互
document.addEventListener('DOMContentLoaded', function() {
    // 页面加载动画效果
    var aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateY(20px)';
        setTimeout(function() {
            aboutContent.style.transition = 'all 0.5s ease';
            aboutContent.style.opacity = '1';
            aboutContent.style.transform = 'translateY(0)';
        }, 100);
    }
});