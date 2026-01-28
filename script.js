// بيانات الفيديوهات (ستحفظ في ملف videos.json لاحقاً)
let videos = [
    {
        id: 1,
        title: "مشهد طبيعي خلاب",
        description: "مناظر طبيعية مذهلة من جبال وسهول",
        duration: "2:45",
        views: 1250,
        likes: 89,
        category: "أفلام قصيرة",
        date: "2023-10-15",
        thumbnail: "nature"
    },
    {
        id: 2,
        title: "عرض موسيقي رائع",
        description: "عرض حي لفرقة موسيقية محلية",
        duration: "4:20",
        views: 2300,
        likes: 150,
        category: "موسيقى",
        date: "2023-10-14",
        thumbnail: "music"
    },
    {
        id: 3,
        title: "لعبة جديدة - تجربة تشغيل",
        description: "تجربة تشغيل اللعبة المنتظرة هذا العام",
        duration: "15:30",
        views: 5400,
        likes: 320,
        category: "ألعاب",
        date: "2023-10-13",
        thumbnail: "gaming"
    },
    {
        id: 4,
        title: "درس برمجة للمبتدئين",
        description: "تعلم أساسيات JavaScript خطوة بخطوة",
        duration: "25:10",
        views: 3200,
        likes: 210,
        category: "تعليمية",
        date: "2023-10-12",
        thumbnail: "education"
    },
    {
        id: 5,
        title: "مقاطع مضحكة 2023",
        description: "أجمل المقاطع الكوميدية لهذا العام",
        duration: "8:15",
        views: 8900,
        likes: 650,
        category: "كوميديا",
        date: "2023-10-11",
        thumbnail: "comedy"
    },
    {
        id: 6,
        title: "أهداف مباراة اليوم",
        description: "ملخص وأهداف المباراة المثيرة",
        duration: "6:40",
        views: 12000,
        likes: 850,
        category: "رياضة",
        date: "2023-10-10",
        thumbnail: "sports"
    }
];

// الإحصائيات
let stats = {
    totalDownloads: 12500,
    totalViews: 45600,
    totalVideos: videos.length,
    totalHours: 320
};

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الفيديوهات من localStorage إذا موجودة
    loadVideos();
    
    // عرض الفيديوهات
    displayVideos();
    
    // تحديث الإحصائيات
    updateStats();
    
    // إعداد القائمة المتحركة للهواتف
    setupMobileMenu();
    
    // إعداد أحداث الأزرار
    setupEventListeners();
    
    // تحميل الفيديوهات من ملف JSON (محاكاة)
    loadVideosFromJSON();
});

// دالة لتحميل الفيديوهات من localStorage
function loadVideos() {
    const savedVideos = localStorage.getItem('perez_videos');
    if (savedVideos) {
        const parsedVideos = JSON.parse(savedVideos);
        // دمج الفيديوهات المحفوظة مع الفيديوهات الافتراضية
        videos = [...parsedVideos, ...videos.filter(v => !parsedVideos.some(sv => sv.id === v.id))];
    }
}

// دالة لعرض الفيديوهات
function displayVideos() {
    const videosContainer = document.getElementById('videosContainer');
    if (!videosContainer) return;
    
    videosContainer.innerHTML = '';
    
    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosContainer.appendChild(videoCard);
    });
}

// دالة لإنشاء بطاقة فيديو
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-id', video.id);
    
    // اختيار أيقونة حسب نوع الفيديو
    const icons = {
        'أفلام قصيرة': 'fas fa-film',
        'موسيقى': 'fas fa-music',
        'ألعاب': 'fas fa-gamepad',
        'تعليمية': 'fas fa-graduation-cap',
        'كوميديا': 'fas fa-laugh',
        'رياضة': 'fas fa-basketball-ball'
    };
    
    const iconClass = icons[video.category] || 'fas fa-video';
    
    card.innerHTML = `
        <div class="video-thumbnail">
            <i class="${iconClass}"></i>
            <span class="video-duration">${video.duration}</span>
        </div>
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <p class="video-description">${video.description}</p>
            <div class="video-meta">
                <span><i class="fas fa-eye"></i> ${video.views.toLocaleString()}</span>
                <span><i class="far fa-calendar"></i> ${formatDate(video.date)}</span>
            </div>
            <div class="video-category">${video.category}</div>
            <div class="video-actions">
                <button class="watch-btn" data-id="${video.id}">
                    <i class="fas fa-play"></i> مشاهدة
                </button>
                <button class="like-btn" data-id="${video.id}">
                    <i class="far fa-heart"></i> <span class="like-count">${video.likes}</span>
                </button>
                <button class="download-btn" data-id="${video.id}">
                    <i class="fas fa-download"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// دالة لتنسيق التاريخ
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// دالة لتحديث الإحصائيات
function updateStats() {
    // تحديث إجمالي الفيديوهات
    stats.totalVideos = videos.length;
    
    // تحديث إجمالي المشاهدات
    stats.totalViews = videos.reduce((total, video) => total + video.views, 0);
    
    // تحديث واجهة المستخدم
    document.getElementById('totalDownloads').textContent = stats.totalDownloads.toLocaleString();
    document.getElementById('totalViews').textContent = stats.totalViews.toLocaleString();
    document.getElementById('totalVideos').textContent = stats.totalVideos.toLocaleString();
    document.getElementById('totalHours').textContent = stats.totalHours.toLocaleString();
}

// دالة لإعداد القائمة المتحركة للهواتف
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // إغلاق القائمة عند النقر على رابط
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// دالة لإعداد أحداث الأزرار
function setupEventListeners() {
    // إضافة حدث للنقر على زر المشاهدة
    document.addEventListener('click', function(e) {
        if (e.target.closest('.watch-btn')) {
            const videoId = e.target.closest('.watch-btn').getAttribute('data-id');
            watchVideo(videoId);
        }
        
        if (e.target.closest('.like-btn')) {
            const videoId = e.target.closest('.like-btn').getAttribute('data-id');
            likeVideo(videoId);
        }
        
        if (e.target.closest('.download-btn')) {
            const videoId = e.target.closest('.download-btn').getAttribute('data-id');
            downloadVideo(videoId);
        }
    });
}

// دالة لمشاهدة الفيديو
function watchVideo(videoId) {
    const video = videos.find(v => v.id == videoId);
    if (video) {
        video.views++;
        updateVideoCard(videoId);
        updateStats();
        saveVideos();
        
        // عرض رسالة
        showNotification(`جاري تشغيل: ${video.title}`);
    }
}

// دالة للإعجاب بالفيديو
function likeVideo(videoId) {
    const video = videos.find(v => v.id == videoId);
    if (video) {
        video.likes++;
        updateVideoCard(videoId);
        saveVideos();
        
        // تغيير لون زر الإعجاب
        const likeBtn = document.querySelector(`.like-btn[data-id="${videoId}"]`);
        const likeIcon = likeBtn.querySelector('i');
        likeIcon.className = 'fas fa-heart';
        likeIcon.style.color = '#ef4444';
        
        showNotification('تم الإعجاب بالفيديو!');
    }
}

// دالة لتنزيل الفيديو
function downloadVideo(videoId) {
    const video = videos.find(v => v.id == videoId);
    if (video) {
        stats.totalDownloads++;
        updateStats();
        
        // محاكاة تنزيل الفيديو
        showNotification(`جاري تنزيل: ${video.title}`);
        
        // حفظ الإحصائيات في localStorage
        localStorage.setItem('perez_stats', JSON.stringify(stats));
    }
}

// دالة لتحديث بطاقة الفيديو
function updateVideoCard(videoId) {
    const video = videos.find(v => v.id == videoId);
    if (!video) return;
    
    const card = document.querySelector(`.video-card[data-id="${videoId}"]`);
    if (card) {
        const viewsElement = card.querySelector('.video-meta span:first-child');
        const likesElement = card.querySelector('.like-count');
        
        if (viewsElement) {
            viewsElement.innerHTML = `<i class="fas fa-eye"></i> ${video.views.toLocaleString()}`;
        }
        
        if (likesElement) {
            likesElement.textContent = video.likes;
        }
    }
}

// دالة لعرض إشعار
function showNotification(message) {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
    `;
    
    // إضافة أنيميشن
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(-50%) translateY(-20px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // إزالة الإشعار بعد 3 ثواني
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
}

// دالة لحفظ الفيديوهات في localStorage
function saveVideos() {
    localStorage.setItem('perez_videos', JSON.stringify(videos));
}

// دالة لمحاكاة تحميل الفيديوهات من ملف JSON
function loadVideosFromJSON() {
    // في التطبيق الحقيقي، ستتم قراءة ملف videos.json
    // هنا نستخدم setTimeout لمحاكاة التحميل
    setTimeout(() => {
        console.log('تم تحميل الفيديوهات من قاعدة البيانات');
    }, 1000);
}

// دالة لإضافة فيديو جديد (ستستخدم في صفحة الرفع)
function addNewVideo(videoData) {
    // إنشاء ID جديد
    const newId = videos.length > 0 ? Math.max(...videos.map(v => v.id)) + 1 : 1;
    
    const newVideo = {
        id: newId,
        title: videoData.title || 'فيديو بدون عنوان',
        description: videoData.description || 'لا يوجد وصف',
        duration: videoData.duration || '0:00',
        views: 0,
        likes: 0,
        category: videoData.category || 'عام',
        date: new Date().toISOString().split('T')[0],
        thumbnail: videoData.thumbnail || 'default'
    };
    
    videos.unshift(newVideo); // إضافة في البداية
    displayVideos();
    updateStats();
    saveVideos();
    
    return newVideo;
}

// تصدير الدوال للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addNewVideo, videos, stats };
}
