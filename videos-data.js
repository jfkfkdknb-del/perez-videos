// بيانات الفيديوهات الجاهزة
const perezVideos = [
    {
        id: 1,
        title: "مشهد طبيعي خلاب",
        description: "مناظر طبيعية مذهلة من جبال وسهول",
        duration: "2:45",
        views: 1250,
        likes: 89,
        category: "أفلام قصيرة",
        date: "2023-10-15",
        videoUrl: "https://i.top4top.io/m_3680jpxoa0.mp4",
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
        videoUrl: "https://j.top4top.io/m_36803yd7u1.mp4",
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
        videoUrl: "https://a.top4top.io/m_3680fq72e0.mp4",
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
        videoUrl: "https://b.top4top.io/m_36802hxr61.mp4",
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
        videoUrl: "https://c.top4top.io/m_368011wxu2.mp4",
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
        videoUrl: "https://d.top4top.io/m_36807nfxw3.mp4",
        thumbnail: "sports"
    },
    {
        id: 7,
        title: "رحلة إلى الجبال",
        description: "مغامرة تسلق جبال رائعة",
        duration: "5:30",
        views: 3400,
        likes: 290,
        category: "أفلام قصيرة",
        date: "2023-10-09",
        videoUrl: "https://e.top4top.io/m_36804ihtc4.mp4",
        thumbnail: "nature"
    },
    {
        id: 8,
        title: "حفل غنائي مباشر",
        description: "أمسية غنائية رائعة لفنان محبوب",
        duration: "12:20",
        views: 6700,
        likes: 530,
        category: "موسيقى",
        date: "2023-10-08",
        videoUrl: "https://f.top4top.io/m_3680j214s5.mp4",
        thumbnail: "music"
    },
    {
        id: 9,
        title: "تحدي الألعاب الإلكترونية",
        description: "منافسة مثيرة في لعبة شهيرة",
        duration: "18:45",
        views: 9200,
        likes: 780,
        category: "ألعاب",
        date: "2023-10-07",
        videoUrl: "https://g.top4top.io/m_36805m1cj6.mp4",
        thumbnail: "gaming"
    },
    {
        id: 10,
        title: "تعليم الرسم الرقمي",
        description: "درس متقدم في الرسم الرقمي",
        duration: "22:10",
        views: 4100,
        likes: 320,
        category: "تعليمية",
        date: "2023-10-06",
        videoUrl: "https://h.top4top.io/m_3680jwj017.mp4",
        thumbnail: "education"
    },
    {
        id: 11,
        title: "مواقف مضحكة يومية",
        description: "مواقف كوميدية من الحياة اليومية",
        duration: "7:25",
        views: 10500,
        likes: 890,
        category: "كوميديا",
        date: "2023-10-05",
        videoUrl: "https://i.top4top.io/m_36809mwe68.mp4",
        thumbnail: "comedy"
    },
    {
        id: 12,
        title: "بطولة كرة القدم",
        description: "أفضل اللقطات من البطولة المحلية",
        duration: "9:15",
        views: 15600,
        likes: 1200,
        category: "رياضة",
        date: "2023-10-04",
        videoUrl: "https://j.top4top.io/m_3680wo3dr9.mp4",
        thumbnail: "sports"
    }
];

// دالة لعرض الفيديوهات
function displayAllVideos() {
    const videosContainer = document.getElementById('videosContainer');
    if (!videosContainer) return;
    
    videosContainer.innerHTML = '';
    
    perezVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosContainer.appendChild(videoCard);
    });
}

// دالة لإنشاء بطاقة فيديو
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-id', video.id);
    
    // أيقونة حسب التصنيف
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
        <div class="video-thumbnail" onclick="playVideo(${video.id})">
            <i class="${iconClass}"></i>
            <span class="video-duration">${video.duration}</span>
            <div class="play-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <p class="video-description">${video.description}</p>
            <div class="video-meta">
                <span><i class="fas fa-eye"></i> ${video.views.toLocaleString()}</span>
                <span><i class="far fa-calendar"></i> ${video.date}</span>
                <span><i class="fas fa-heart"></i> ${video.likes}</span>
            </div>
            <div class="video-category">${video.category}</div>
            <div class="video-actions">
                <button class="watch-btn" onclick="playVideo(${video.id})">
                    <i class="fas fa-play"></i> مشاهدة
                </button>
                <button class="like-btn" onclick="likeVideo(${video.id})">
                    <i class="far fa-heart"></i> <span class="like-count">${video.likes}</span>
                </button>
                <button class="share-btn" onclick="shareVideo(${video.id})">
                    <i class="fas fa-share"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// دالة لتشغيل الفيديو
function playVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (!video) return;
    
    // زيادة المشاهدات
    video.views++;
    
    // فتح مشغل الفيديو
    openVideoPlayer(video);
}

// دالة لفتح مشغل الفيديو
function openVideoPlayer(video) {
    const playerHTML = `
        <div class="video-player-overlay">
            <div class="video-player">
                <div class="player-header">
                    <h3>${video.title}</h3>
                    <button class="close-player" onclick="closeVideoPlayer()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="player-content">
                    <video controls autoplay class="main-video">
                        <source src="${video.videoUrl}" type="video/mp4">
                        متصفحك لا يدعم تشغيل الفيديو.
                    </video>
                    <div class="player-info">
                        <div class="info-row">
                            <span><i class="fas fa-tag"></i> ${video.category}</span>
                            <span><i class="far fa-calendar"></i> ${video.date}</span>
                            <span><i class="fas fa-eye"></i> ${video.views.toLocaleString()} مشاهدة</span>
                            <span><i class="fas fa-heart"></i> ${video.likes} إعجاب</span>
                        </div>
                        <p class="video-description">${video.description}</p>
                        <div class="player-actions">
                            <button onclick="likeVideo(${video.id})" class="player-btn like">
                                <i class="fas fa-heart"></i> أعجبني
                            </button>
                            <button onclick="shareVideo(${video.id})" class="player-btn share">
                                <i class="fas fa-share"></i> مشاركة
                            </button>
                            <button onclick="downloadVideo(${video.id})" class="player-btn download">
                                <i class="fas fa-download"></i> تنزيل
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const overlay = document.createElement('div');
    overlay.innerHTML = playerHTML;
    document.body.appendChild(overlay);
    
    // إغلاق بالضغط على ESC
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            closeVideoPlayer();
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
}

// دالة لإغلاق مشغل الفيديو
function closeVideoPlayer() {
    const overlay = document.querySelector('.video-player-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// دالة للإعجاب بالفيديو
function likeVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (video) {
        video.likes++;
        updateVideoCard(videoId);
    }
}

// دالة للمشاركة
function shareVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (video) {
        const shareUrl = `https://jfkfkdknb-del.github.io/perez-videos/?video=${videoId}`;
        const shareText = `شاهد هذا الفيديو الرائع: ${video.title}`;
        
        if (navigator.share) {
            navigator.share({
                title: video.title,
                text: shareText,
                url: shareUrl
            });
        } else {
            // نسخ الرابط
            navigator.clipboard.writeText(shareUrl)
                .then(() => alert('تم نسخ رابط الفيديو!'))
                .catch(() => {
                    prompt('انسخ الرابط:', shareUrl);
                });
        }
    }
}

// دالة للتنزيل
function downloadVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (video) {
        window.open(video.videoUrl, '_blank');
    }
}

// دالة لتحديث بطاقة الفيديو
function updateVideoCard(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
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

// دالة للبحث في الفيديوهات
function searchVideos(query) {
    const filteredVideos = perezVideos.filter(video => 
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.description.toLowerCase().includes(query.toLowerCase()) ||
        video.category.toLowerCase().includes(query.toLowerCase())
    );
    
    const videosContainer = document.getElementById('videosContainer');
    if (!videosContainer) return;
    
    videosContainer.innerHTML = '';
    
    filteredVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosContainer.appendChild(videoCard);
    });
}

// تحديث الإحصائيات
function updateStats() {
    const totalVideos = perezVideos.length;
    const totalViews = perezVideos.reduce((sum, video) => sum + video.views, 0);
    const totalLikes = perezVideos.reduce((sum, video) => sum + video.likes, 0);
    
    document.getElementById('totalVideos').textContent = totalVideos;
    document.getElementById('totalViews').textContent = totalViews.toLocaleString();
    document.getElementById('totalHours').textContent = Math.round(totalViews * 0.05);
    document.getElementById('totalDownloads').textContent = Math.round(totalViews * 0.1).toLocaleString();
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    displayAllVideos();
    updateStats();
    setupSearch();
});

// إعداد البحث
function setupSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '🔍 ابحث عن فيديو...';
    searchInput.id = 'videoSearch';
    searchInput.style.cssText = `
        margin: 20px auto;
        padding: 12px 20px;
        width: 90%;
        max-width: 500px;
        display: block;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 25px;
        color: white;
        font-family: 'Cairo', sans-serif;
        font-size: 16px;
    `;
    
    const videosSection = document.querySelector('.videos-section');
    if (videosSection) {
        videosSection.insertBefore(searchInput, videosSection.querySelector('.videos-container'));
        
        searchInput.addEventListener('input', function() {
            searchVideos(this.value);
        });
    }
} 
