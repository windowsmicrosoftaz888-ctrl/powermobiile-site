// اسکریپت مدیریت لودر صفحه
document.addEventListener('DOMContentLoaded', function() {
    // مخفی کردن لودر پس از بارگذاری صفحه
    setTimeout(function() {
        document.querySelector('.loader-container').style.display = 'none';
    }, 1000);
    
    // مدیریت ریسپانسیو ویوپورت
    var mvp = document.querySelector('meta[name="viewport"]');
    if (screen.width < 1170 && screen.width > 768) {
        mvp.setAttribute('content', 'width=769, user-scalable=0');
    } else if (screen.width < 768) {
        mvp.setAttribute('content', 'width=468, user-scalable=0');
    }
});