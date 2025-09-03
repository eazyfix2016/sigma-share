// تأثيرات تفاعلية للصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // Scroll progress indicator
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = scrolled + '%';
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe all service cards
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });
    
    // تأثير الهوفر للخدمات
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // إظهار النافذة عند الضغط على الخدمة (ولكن ليس على الزر)
        card.addEventListener('click', function(e) {
            // تجاهل الضغط إذا كان على الزر
            if (e.target.classList.contains('service-button')) {
                return;
            }
            
            const serviceName = this.getAttribute('data-service');
            showServiceInfo(serviceName);
        });
    });
    
    // إضافة وظائف أزرار طلب الخدمة
    const serviceButtons = document.querySelectorAll('.service-button');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // منع تفعيل الكارت
            
            const serviceName = this.getAttribute('data-service-name');
            const message = `السلام عليكم ورحمة الله وبركاته\nأريد طلب خدمة: ${serviceName}`;
            const encodedMessage = encodeURIComponent(message);
            
            // رابط Messenger مع الرسالة الجاهزة
            const messengerUrl = `https://m.me/108368025162245?text=${encodedMessage}`;
            
            // فتح Messenger في نافذة جديدة
            window.open(messengerUrl, '_blank');
        });
        
        // تأثيرات إضافية للأزرار
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // تأثير الفلاش ميموري
    const flashMemory = document.querySelector('.flash-memory');
    if (flashMemory) {
        flashMemory.addEventListener('click', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    }
    
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
            description: '• إزالة قفل هواوي والـ ID بأمان تام\n• يدعم جميع موديلات هواوي\n• عملية آمنة 100%\n• سريع وموثوق\n• ضمان على العمليات (في حالة عدم نجاح العملية لا يتم الدفع)',
            price: '125 جنيه مصري'
        },
        'frp': {
            title: 'Remove FRP Huawei',
            description: '• تخطي حماية جوجل (FRP) لأجهزة هواوي\n• يدعم معظم أجهزة هواوي\n• حل سريع وآمن\n• ضمان على الخدمة\n• ضمان على العمليات (في حالة عدم نجاح العملية لا يتم الدفع)',
            price: '125 جنيه مصري'
        },
        'frp-samsung': {
            title: 'FRP Samsung',
            description: '• فتح قفل سامسونج المتخصص\n• يدعم بعض الأجهزة فقط\n• تقنية متقدمة\n• نتائج مضمونة\n• ضمان على العمليات (في حالة عدم نجاح العملية لا يتم الدفع)',
            price: '125 جنيه مصري'
        },
        'repair-chip': {
            title: 'Repair Chip Damaged',
            description: '• إصلاح الشيب التالف لأجهزة هواوي\n• استعادة الجهاز للعمل\n• تقنية احترافية متقدمة\n• ضمان على العمليات (في حالة عدم نجاح العملية لا يتم الدفع)',
            price: '125 جنيه مصري'
        },
        'flash-huawei': {
            title: 'Flash Huawei',
            description: '• تفليش أجهزة هواوي بأمان\n• تحديث النظام أو إصلاح السوفت\n• يدعم معظم الموديلات\n• استعادة الأداء الأمثل',
            price: '150 جنيه مصري'
        },
        'imei-repair': {
            title: 'IMEI Repair',
            description: '• إصلاح رقم IMEI لأجهزة هواوي\n• استعادة الشبكة\n• حل مشاكل الاتصال\n• إصلاح مشاكل البيانات\n• ضمان على العمليات (في حالة عدم نجاح العملية لا يتم الدفع)',
            price: '125 جنيه مصري'
        },
        'write-oeminfo': {
            title: 'Write Oeminfo',
            description: '• كتابة Oeminfo لأجهزة هواوي\n• ضبط معلومات المصنع\n• حل مشاكل السوفت\n• استعادة الإعدادات الأصلية\n• ضمان على العمليات (في حالة عدم نجاح العملية لا يتم الدفع)',
            price: '125 جنيه مصري'
        },
        'share-30min': {
            title: 'شير سيجما بلص 30 دقيقة',
            description: '• تشغيل البرامج على حاسوبك لمدة 30 دقيقة\n• دعم فني مباشر\n• إمكانية استخدام جميع الأدوات\n• خدمة سريعة وموثوقة',
            price: '100 جنيه مصري'
        },
        'cheetah-tool': {
            title: 'Cheetah Tool',
            description: '• أداة Cheetah Tool المتطورة\n• تبسط إصلاح الهواتف الذكية\n• تدعم أجهزة هواوي وكوالكوم\n• إصلاح وتغيير IMEI\n• إزالة حساب MI وFRP\n• معظم العمليات تلقائية',
            price: '200 جنيه مصري'
        },
        'format-t505-t509': {
            title: 'Format T505 - T509',
            description: '• فورمات تاب T505 و T509\n• خروج من المنظومة\n• حذف MDM\n• إعادة تهيئة كاملة للجهاز\n• استعادة الأداء الطبيعي\n• ضمان على العمليات (في حالة عدم نجاح العملية لا يتم الدفع)',
            price: '125 جنيه مصري'
        },
        'whatsapp-transfer': {
            title: 'نقل شات الواتس',
            description: '• نقل شات الواتس والمحافظة على الداتا بنسبة 100%\n• من أندرويد لآيفون أو العكس\n• واتس عادي أو بيزنس\n• حفظ جميع الرسائل والوسائط\n• عملية آمنة ومضمونة',
            price: '300 جنيه مصري'
        }
    };
    
    const info = serviceInfo[service];
    if (info) {
        alert(`${info.title}\n\nالوصف: ${info.description}\n\nالسعر: ${info.price}`);
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
            width: 3px;
            height: 3px;
            background: rgba(102, 126, 234, 0.4);
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