// js/main.js - 首页交互

// ========== 焦点图轮播 ==========
var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var autoInterval;

function showSlide(index) {
    slides.forEach(function(slide, i) {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    var newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
}

function prevSlide() {
    var newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}

function startAutoPlay() {
    autoInterval = setInterval(nextSlide, 3000);
}

function stopAutoPlay() {
    clearInterval(autoInterval);
}

// 绑定轮播事件（修复可选链问题）
if (slides.length > 0) {
    var prevBtn = document.querySelector('.prev');
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    var nextBtn = document.querySelector('.next');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
            var index = parseInt(dot.getAttribute('data-index'));
            showSlide(index);
            stopAutoPlay();
            startAutoPlay();
        });
    });
    startAutoPlay();
}

// ========== TAB选项卡 ==========
function initTabs() {
    var tabBtns = document.querySelectorAll('.tab-btn');
    var tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            tabBtns.forEach(function(b) { b.classList.remove('active'); });
            tabContents.forEach(function(c) { c.classList.remove('active'); });
            btn.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });
}
initTabs();

// ========== 在线咨询浮动窗 ==========
function initConsult() {
    var consultBtn = document.querySelector('.consult-btn');
    var consultWindow = document.querySelector('.consult-window');
    var closeBtn = document.querySelector('.consult-header .close');
    
    if (consultBtn && consultWindow) {
        consultBtn.addEventListener('click', function() {
            consultWindow.classList.toggle('show');
        });
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                consultWindow.classList.remove('show');
            });
        }
        // 点击其他地方关闭
        document.addEventListener('click', function(e) {
            if (!consultBtn.contains(e.target) && !consultWindow.contains(e.target)) {
                consultWindow.classList.remove('show');
            }
        });
    }
}
initConsult();

// ========== 快速搜索 ==========
function initSearch() {
    var searchBtn = document.querySelector('.search-box button');
    var searchInput = document.querySelector('.search-box input');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            var keyword = searchInput.value.trim();
            if (keyword) {
                alert('搜索功能演示：您搜索了“' + keyword + '”');
            } else {
                alert('请输入搜索关键词');
            }
        });
    }
}
initSearch();