// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // إعداد القائمة المتحركة للهواتف
    setupMobileMenu();
    
    // إعداد التنقل السلس
    setupSmoothScroll();
    
    // إعداد تحديث الإحصائيات
    updateStatsPeriodically();
    
    // إضافة تأثيرات عند التمرير
    setupScrollAnimations();
});

// دالة لإعداد القائمة المتحركة للهواتف
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
        
        // إغلاق القائمة عند النقر على رابط
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            });
        });
        
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    }
}

// دالة لإعداد التنقل السلس
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // تحديث حالة الروابط النشطة
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // التنقل السلس
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // تحديث الروابط النشطة عند التمرير
    window.addEventListener('scroll', updateActiveNavLink);
}

// دالة لتحديث الرابط النشط حسب الموقع
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// دالة لتحديث الإحصائيات بشكل دوري
function updateStatsPeriodically() {
    // تحديث كل 30 ثانية
    setInterval(() => {
        if (typeof updateStats === 'function') {
            updateStats();
        }
    }, 30000);
}

// دالة لإعداد تأثيرات التمرير
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر لإضافة الأنيميشن
    document.querySelectorAll('.video-card, .category-card, .stat-card').forEach(card => {
        observer.observe(card);
    });
}

// دالة لإظهار رسالة ترحيب
function showWelcomeMessage() {
    if (!localStorage.getItem('perez_welcome_shown')) {
        setTimeout(() => {
            const welcomeMsg = document.createElement('div');
            welcomeMsg.className = 'welcome-message';
            welcomeMsg.innerHTML = `
                <div class="welcome-content">
                    <i class="fas fa-video"></i>
                    <h3>مرحباً بك في بيريز!</h3>
                    <p>استمتع بأفضل الفيديوهات العربية عالية الجودة</p>
                    <button class="close-welcome">متابعة</button>
                </div>
            `;
            
            // إضافة التنسيقات
            const style = document.createElement('style');
            style.textContent = `
                .welcome-message {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    animation: fadeIn 0.5s ease;
                }
                
                .welcome-content {
                    background: #1e293b;
                    padding: 40px;
                    border-radius: 20px;
                    text-align: center;
                    max-width: 400px;
                    border: 2px solid #3b82f6;
                    animation: slideUp 0.5s ease;
                }
                
                .welcome-content i {
                    font-size: 60px;
                    color: #3b82f6;
                    margin-bottom: 20px;
                }
                
                .welcome-content h3 {
                    color: #f1f5f9;
                    margin-bottom: 10px;
                    font-size: 24px;
                }
                
                .welcome-content p {
                    color: #cbd5e1;
                    margin-bottom: 25px;
                    font-size: 16px;
                }
                
                .close-welcome {
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 10px;
                    font-family: 'Cairo', sans-serif;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .close-welcome:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `;
            
            document.head.appendChild(style);
            document.body.appendChild(welcomeMsg);
            
            // إغلاق الرسالة
            welcomeMsg.querySelector('.close-welcome').addEventListener('click', () => {
                document.body.removeChild(welcomeMsg);
                document.head.removeChild(style);
                localStorage.setItem('perez_welcome_shown', 'true');
            });
        }, 1000);
    }
}

// دالة للتحميل التدريجي للصور
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// دالة لإضافة تأثيرات الـ Hover على الأزرار
function setupHoverEffects() {
    const buttons = document.querySelectorAll('.btn, .video-actions button, .player-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// دالة لتحسين تجربة الهاتف
function setupMobileEnhancements() {
    if ('ontouchstart' in window) {
        // إضافة تأثير اللمس
        document.querySelectorAll('.video-card, .category-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            card.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
        
        // منع التكبير على المدخلات النصية
        document.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('touchstart', function() {
                this.style.fontSize = '16px';
            });
        });
    }
}

// دالة لإدارة حالة التحميل
function setupLoadingStates() {
    // إضافة مؤشر تحميل للفيديوهات
    const loadingHTML = `
        <div class="loading-overlay" id="loadingOverlay">
            <div class="loading-spinner">
                <i class="fas fa-video"></i>
                <div class="spinner"></div>
            </div>
        </div>
    `;
    
    const loadingElement = document.createElement('div');
    loadingElement.innerHTML = loadingHTML;
    document.body.appendChild(loadingElement);
    
    // إخفاء مؤشر التحميل عند اكتمال التحميل
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loadingOverlay').style.opacity = '0';
            setTimeout(() => {
                if (document.getElementById('loadingOverlay')) {
                    document.body.removeChild(document.getElementById('loadingOverlay'));
                }
            }, 300);
        }, 1000);
    });
    
    // إضافة التنسيقات
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #0f172a;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
            transition: opacity 0.3s ease;
        }
        
        .loading-spinner {
            text-align: center;
        }
        
        .loading-spinner i {
            font-size: 60px;
            color: #3b82f6;
            margin-bottom: 20px;
            display: block;
            animation: bounce 2s infinite;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(59, 130, 246, 0.3);
            border-top-color: #3b82f6;
            border-radius: 50%;
            margin: 0 auto;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
    `;
    document.head.appendChild(loadingStyle);
}

// دالة لإدارة وضع عدم الاتصال
function setupOfflineSupport() {
    window.addEventListener('online', () => {
        showNotification('تم استعادة الاتصال بالإنترنت', 'success');
    });
    
    window.addEventListener('offline', () => {
        showNotification('فقدت الاتصال بالإنترنت', 'error');
    });
}

// دالة لعرض إشعارات محسنة
function showNotification(message, type = 'info') {
    // إزالة أي إشعارات سابقة
    const oldNotifications = document.querySelectorAll('.custom-notification');
    oldNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `custom-notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="close-notification">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // إضافة التنسيقات
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        .custom-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #1e293b;
            color: white;
            padding: 15px 20px;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 10000;
            transform: translateX(150%);
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            border-left: 4px solid #3b82f6;
            max-width: 350px;
        }
        
        .custom-notification.show {
            transform: translateX(0);
        }
        
        .notification-success {
            border-left-color: #10b981;
        }
        
        .notification-error {
            border-left-color: #ef4444;
        }
        
        .notification-warning {
            border-left-color: #f59e0b;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
        }
        
        .notification-content i {
            font-size: 20px;
        }
        
        .notification-success .notification-content i {
            color: #10b981;
        }
        
        .notification-error .notification-content i {
            color: #ef4444;
        }
        
        .notification-warning .notification-content i {
            color: #f59e0b;
        }
        
        .notification-info .notification-content i {
            color: #3b82f6;
        }
        
        .close-notification {
            background: none;
            border: none;
            color: #94a3b8;
            cursor: pointer;
            padding: 5px;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        .close-notification:hover {
            color: #f1f5f9;
            background: rgba(255, 255, 255, 0.1);
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        notificationStyle.id = 'notification-styles';
        document.head.appendChild(notificationStyle);
    }
    
    // إظهار الإشعار
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // إغلاق الإشعار
    notification.querySelector('.close-notification').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
    
    // إخفاء تلقائي بعد 5 ثوان
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// دالة للحصول على أيقونة الإشعار المناسبة
function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// تهيئة جميع الميزات عند تحميل الصفحة
function initializeAllFeatures() {
    // إظهار رسالة الترحيب
    showWelcomeMessage();
    
    // تحميل الصور التدريجي
    lazyLoadImages();
    
    // إعداد تأثيرات الـ Hover
    setupHoverEffects();
    
    // تحسينات للهاتف
    setupMobileEnhancements();
    
    // إدارة حالة التحميل
    setupLoadingStates();
    
    // دعم وضع عدم الاتصال
    setupOfflineSupport();
    
    // تحديث تاريخ التحديث الأخير
    updateLastModified();
}

// دالة لتحديث تاريخ التحديث الأخير
function updateLastModified() {
    const lastModified = document.lastModified;
    const dateElement = document.createElement('div');
    dateElement.className = 'last-modified';
    dateElement.textContent = `آخر تحديث: ${new Date(lastModified).toLocaleDateString('ar-EG')}`;
    dateElement.style.cssText = `
        text-align: center;
        color: #64748b;
        font-size: 14px;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255,255,255,0.1);
    `;
    
    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) {
        footerBottom.appendChild(dateElement);
    }
}

// تشغيل جميع الميزات
initializeAllFeatures();

// جعل الدوال متاحة عالمياً للاستخدام من videos-data.js
window.showNotification = showNotification;
window.filterVideos = filterVideos;
window.searchVideos = searchVideos;

// تهيئة النافذة عند اكتمال التحميل
window.addEventListener('load', () => {
    console.log('موقع بيريز جاهز للاستخدام!');
    
    // إضافة تأثيرات إضافية بعد التحميل
    document.body.classList.add('loaded');
    
    // تحريك العناصر المتأخرة
    setTimeout(() => {
        document.querySelectorAll('.video-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
});
