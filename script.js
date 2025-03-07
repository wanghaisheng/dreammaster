document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 添加动画效果
    const elements = document.querySelectorAll('.phone-frame');
    elements.forEach((el, index) => {
        el.classList.add('animate-float');
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

