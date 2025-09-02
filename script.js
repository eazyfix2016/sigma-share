// تأثيرات تفاعلية للصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // تأثير الهوفر للخدمات
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // تأثير الكليك
        card.addEventListener('click', function() {
            const serviceName = this.getAttribute('data-service');
            showServiceInfo(serviceName);
        });
    });
    
    // تأثير الفلاش ميموري
    const flashMemory = document.querySelector('.flash-memory');
    flashMemory.addEventListener('click', function() {
        this.style.animation = 'pulse 0.6s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
    
    
    // أنيميشن التحميل
    animateOnLoad();
    
    // تأثير التمرير
    window.addEventListener('scroll', handleScroll);
});

// عرض معلومات الخدمة
function showServiceInfo(service) {
    const serviceInfo = {
        'huawei': {
            title: 'Remove ID Huawei',
            description: 'إزالة قفل هواوي والـ ID بأمان تام\n- يدعم جميع موديلات هواوي\n- عملية آمنة 100%\n- سريع وموثوق\n\nالسعر: 125 جنيه مصري\nفي حالة عدم نجاح العملية لا يتم الدفع',
            icon: '📱'
        },
        'frp': {
            title: 'Remove FRP Huawei',
            description: 'تخطي حماية جوجل (FRP) لأجهزة هواوي\n- يدعم معظم أجهزة هواوي\n- حل سريع وآمن\n- ضمان على الخدمة\n\nالسعر: 125 جنيه مصري\nفي حالة عدم نجاح العملية لا يتم الدفع',
            icon: '🔓'
        },
        'frp-samsung': {
            title: 'FRP Samsung',
            description: 'فتح قفل سامسونج المتخصص\n- يدعم بعض الأجهزة فقط\n- تقنية متقدمة\n- نتائج مضمونة\n\nالسعر: 125 جنيه مصري\nفي حالة عدم نجاح العملية لا يتم الدفع',
            icon: '📲'
        },
        'repair-chip': {
            title: 'Repair Chip Damaged',
            description: 'إصلاح الشيب التالف لأجهزة هواوي\n- استعادة الجهاز للعمل\n\nالسعر: 125 جنيه مصري\nفي حالة عدم نجاح العملية لا يتم الدفع',
            icon: '🛠️'
        },
        'flash-huawei': {
            title: 'Flash Huawei',
            description: 'تفليش أجهزة هواوي بأمان\n- تحديث النظام أو إصلاح السوفت\n- يدعم معظم الموديلات\n\nالسعر: 150 جنيه مصري',
            icon: '💾'
        },
        'imei-repair': {
            title: 'IMEI Repair',
            description: 'إصلاح رقم IMEI لأجهزة هواوي\n- استعادة الشبكة\n- حل مشاكل الاتصال\n\nالسعر: 125 جنيه مصري\nفي حالة عدم نجاح العملية لا يتم الدفع',
            icon: '🔧'
        },
        'write-oeminfo': {
            title: 'Write Oeminfo',
            description: 'كتابة Oeminfo لأجهزة هواوي\n- ضبط معلومات المصنع\n- حل مشاكل السوفت\n\nالسعر: 125 جنيه مصري\nفي حالة عدم نجاح العملية لا يتم الدفع',
            icon: '📝'
        }
        ,
        'share-30min': {
            title: 'شير لمدة 30 دقيقة',
            description: 'نقوم بتشغيل البرامج على حاسوبك لمدة 30 دقيقة\n\nالسعر: 100 جنيه مصري',
            icon: '⏱️'
        }
    };
    
    const info = serviceInfo[service];
    if (info) {
        alert(`${info.icon} ${info.title}\n\n${info.description}`);
    }
}

// أنيميشن عند التحميل
function animateOnLoad() {
    const elements = document.querySelectorAll('.service-card, .main-title, .price');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// تأثير التمرير
function handleScroll() {
    const scrolled = window.pageYOffset;
    const flashMemory = document.querySelector('.flash-memory');
    
    if (flashMemory) {
        flashMemory.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
}

// إضافة تأثير CSS للـ pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// تأثير الجسيمات في الخلفية
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 102, 0, 0.3);
            border-radius: 50%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// إضافة أنيميشن الجسيمات
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }
`;
document.head.appendChild(particleStyle);

// تشغيل الجسيمات بعد التحميل
setTimeout(createParticles, 1000);