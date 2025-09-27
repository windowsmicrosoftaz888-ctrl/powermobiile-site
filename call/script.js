function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

if (!isMobileDevice()) {
    document.getElementById('desktopMessage').style.display = 'block';
}

document.getElementById('callBtn').addEventListener('click', function(e) {
    if (!isMobileDevice()) {
        e.preventDefault();
        alert('لطفاً از گوشی موبایل برای تماس استفاده کنید');
        return;
    }
    
    document.getElementById('loader').style.display = 'block';
    
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 1500);
});

setInterval(function() {
    document.getElementById('callBtn').classList.toggle('pulse');
}, 4000);