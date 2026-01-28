// بيانات الفيديوهات الكاملة لموقع بيريز
const perezVideos = [
    {
        id: 1,
        title: "مشهد طبيعي خلاب من الجبال العالية",
        description: "جولة مصورة في أعلى قمم الجبال مع مناظر طبيعية مذهلة وغروب شمس ساحر",
        duration: "4:35",
        views: 12540,
        likes: 892,
        category: "أفلام قصيرة",
        date: "2023-11-15",
        videoUrl: "https://i.top4top.io/m_3680jpxoa0.mp4",
        thumbnail: "film"
    },
    {
        id: 2,
        title: "عرض موسيقي حي مع فرقة محلية",
        description: "حفلة موسيقية مباشرة لفرقة محلية مع أداء رائع وموسيقى عربية أصيلة",
        duration: "8:20",
        views: 23450,
        likes: 1540,
        category: "موسيقى",
        date: "2023-11-14",
        videoUrl: "https://j.top4top.io/m_36803yd7u1.mp4",
        thumbnail: "music"
    },
    {
        id: 3,
        title: "تجربة تشغيل اللعبة الأكثر انتظاراً",
        description: "مراجعة كاملة وتجربة تشغيل للعبة التي طال انتظارها هذا العام مع تحليل مفصل",
        duration: "22:15",
        views: 54800,
        likes: 3250,
        category: "ألعاب",
        date: "2023-11-13",
        videoUrl: "https://a.top4top.io/m_3680fq72e0.mp4",
        thumbnail: "gamepad"
    },
    {
        id: 4,
        title: "دورة برمجة JavaScript للمبتدئين",
        description: "درس شامل لتعلم أساسيات البرمجة بلغة JavaScript من الصفر حتى الاحتراف",
        duration: "35:10",
        views: 32400,
        likes: 2180,
        category: "تعليمية",
        date: "2023-11-12",
        videoUrl: "https://b.top4top.io/m_36802hxr61.mp4",
        thumbnail: "graduation-cap"
    },
    {
        id: 5,
        title: "أجمل المقاطع الكوميدية لهذا الشهر",
        description: "تجميعة لأطرف وأجمل المقاطع الكوميدية العربية والعالمية لهذا الشهر",
        duration: "12:45",
        views: 89200,
        likes: 6570,
        category: "كوميديا",
        date: "2023-11-11",
        videoUrl: "https://c.top4top.io/m_368011wxu2.mp4",
        thumbnail: "laugh"
    },
    {
        id: 6,
        title: "ملخص مباراة اليوم مع أهداف رائعة",
        description: "أبرز اللحظات والأهداف من المباراة المثيرة بين الفريقين المحليين",
        duration: "9:40",
        views: 124500,
        likes: 8520,
        category: "رياضة",
        date: "2023-11-10",
        videoUrl: "https://d.top4top.io/m_36807nfxw3.mp4",
        thumbnail: "basketball-ball"
    },
    {
        id: 7,
        title: "رحلة سفاري في الغابات الأفريقية",
        description: "مغامرة مثيرة في قلب الغابات الأفريقية مع تصوير حيوانات نادرة",
        duration: "18:30",
        views: 34600,
        likes: 2910,
        category: "أفلام قصيرة",
        date: "2023-11-09",
        videoUrl: "https://e.top4top.io/m_36804ihtc4.mp4",
        thumbnail: "film"
    },
    {
        id: 8,
        title: "حفل غنائي مع أشهر الفنانين العرب",
        description: "أمسية غنائية استثنائية مع مجموعة من أشهر الفنانين العرب",
        duration: "45:20",
        views: 67800,
        likes: 5340,
        category: "موسيقى",
        date: "2023-11-08",
        videoUrl: "https://f.top4top.io/m_3680j214s5.mp4",
        thumbnail: "music"
    },
    {
        id: 9,
        title: "منافسة مثيرة في بطولة الألعاب الإلكترونية",
        description: "نهائي البطولة الدولية للألعاب الإلكترونية مع منافسة قوية بين المتسابقين",
        duration: "28:45",
        views: 92700,
        likes: 7840,
        category: "ألعاب",
        date: "2023-11-07",
        videoUrl: "https://g.top4top.io/m_36805m1cj6.mp4",
        thumbnail: "gamepad"
    },
    {
        id: 10,
        title: "تعلم التصميم الجرافيكي من البداية",
        description: "دورة متكاملة لتعلم التصميم الجرافيكي وأساسيات البرامج الاحترافية",
        duration: "42:10",
        views: 41700,
        likes: 3240,
        category: "تعليمية",
        date: "2023-11-06",
        videoUrl: "https://h.top4top.io/m_3680jwj017.mp4",
        thumbnail: "graduation-cap"
    },
    {
        id: 11,
        title: "تجميعة مواقف مضحكة من الحياة اليومية",
        description: "مجموعة من أطرف المواقف الكوميدية التي تحدث في الحياة اليومية",
        duration: "14:25",
        views: 105800,
        likes: 8970,
        category: "كوميديا",
        date: "2023-11-05",
        videoUrl: "https://i.top4top.io/m_36809mwe68.mp4",
        thumbnail: "laugh"
    },
    {
        id: 12,
        title: "أفضل الأهداف في تاريخ كرة القدم",
        description: "تجميعة لأروع وأجمل الأهداف في تاريخ لعبة كرة القدم العالمية",
        duration: "16:15",
        views: 156800,
        likes: 12100,
        category: "رياضة",
        date: "2023-11-04",
        videoUrl: "https://j.top4top.io/m_3680wo3dr9.mp4",
        thumbnail: "basketball-ball"
    }
];

// دالة لعرض جميع الفيديوهات
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
                <span><i class="fas fa-eye"></i> ${formatNumber(video.views)}</span>
                <span><i class="far fa-calendar"></i> ${formatDate(video.date)}</span>
                <span><i class="fas fa-heart"></i> ${formatNumber(video.likes)}</span>
            </div>
            <div class="video-category">${video.category}</div>
            <div class="video-actions">
                <button class="watch-btn" onclick="playVideo(${video.id})">
                    <i class="fas fa-play"></i> مشاهدة
                </button>
                <button class="like-btn" onclick="likeVideo(${video.id})">
                    <i class="far fa-heart"></i> <span class="like-count">${formatNumber(video.likes)}</span>
                </button>
                <button class="share-btn" onclick="shareVideo(${video.id})">
                    <i class="fas fa-share"></i>
                </button>
                <button class="download-btn" onclick="downloadVideo(${video.id})">
                    <i class="fas fa-download"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// دالة لتنسيق الأرقام (K, M)
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
}

// دالة لتنسيق التاريخ
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'أمس';
    if (diffDays <= 7) return `قبل ${diffDays} أيام`;
    
    return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// دالة لتشغيل الفيديو
function playVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (!video) return;
    
    // زيادة المشاهدات
    video.views++;
    
    // تحديث البطاقة
    updateVideoCard(videoId);
    
    // فتح مشغل الفيديو
    openVideoPlayer(video);
}

// دالة لفتح مشغل الفيديو
function openVideoPlayer(video) {
    // إنشاء العناصر
    const overlay = document.createElement('div');
    overlay.className = 'video-player-overlay';
    
    const player = document.createElement('div');
    player.className = 'video-player';
    
    player.innerHTML = `
        <div class="player-header">
            <h3>${video.title}</h3>
            <button class="close-player">
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
                    <span><i class="far fa-calendar"></i> ${formatDate(video.date)}</span>
                    <span><i class="fas fa-eye"></i> ${formatNumber(video.views)} مشاهدة</span>
                    <span><i class="fas fa-heart"></i> ${formatNumber(video.likes)} إعجاب</span>
                </div>
                <p class="video-description">${video.description}</p>
                <div class="player-actions">
                    <button class="player-btn like" onclick="likeVideo(${video.id}); this.querySelector('i').classList.toggle('fas'); this.querySelector('i').classList.toggle('far');">
                        <i class="far fa-heart"></i> أعجبني
                    </button>
                    <button class="player-btn share" onclick="shareVideo(${video.id})">
                        <i class="fas fa-share"></i> مشاركة
                    </button>
                    <button class="player-btn download" onclick="downloadVideo(${video.id})">
                        <i class="fas fa-download"></i> تنزيل
                    </button>
                </div>
            </div>
        </div>
    `;
    
    overlay.appendChild(player);
    document.body.appendChild(overlay);
    
    // إغلاق المشغل
    const closeBtn = overlay.querySelector('.close-player');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    // إغلاق بالضغط خارج المشغل
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    // إغلاق بالضغط على ESC
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
}

// دالة للإعجاب بالفيديو
function likeVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (video) {
        video.likes++;
        updateVideoCard(videoId);
        showNotification('تم الإعجاب بالفيديو!');
    }
}

// دالة للمشاركة
function shareVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (video) {
        const shareUrl = window.location.href;
        const shareText = `شاهد هذا الفيديو الرائع: ${video.title}`;
        
        if (navigator.share) {
            navigator.share({
                title: video.title,
                text: shareText,
                url: shareUrl
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareUrl)
                .then(() => showNotification('تم نسخ الرابط إلى الحافظة!'))
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
        showNotification('جاري فتح رابط التنزيل...');
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
            viewsElement.innerHTML = `<i class="fas fa-eye"></i> ${formatNumber(video.views)}`;
        }
        
        if (likesElement) {
            likesElement.textContent = formatNumber(video.likes);
        }
    }
    
    // تحديث الإحصائيات
    updateStats();
}

// دالة لعرض إشعار
function showNotification(message) {
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
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
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
    
    if (filteredVideos.length === 0) {
        videosContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لا توجد نتائج</h3>
                <p>لم نتمكن من العثور على فيديوهات تطابق بحثك</p>
            </div>
        `;
        return;
    }
    
    filteredVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosContainer.appendChild(videoCard);
    });
}

// دالة لتصفية الفيديوهات حسب الفئة
function filterVideos(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
    
    if (category === 'all') {
        displayAllVideos();
    } else {
        const filteredVideos = perezVideos.filter(video => video.category === category);
        const videosContainer = document.getElementById('videosContainer');
        
        if (!videosContainer) return;
        
        videosContainer.innerHTML = '';
        
        if (filteredVideos.length === 0) {
            videosContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-folder-open"></i>
                    <h3>لا توجد فيديوهات</h3>
                    <p>لا توجد فيديوهات في هذا القسم حالياً</p>
                </div>
            `;
            return;
        }
        
        filteredVideos.forEach(video => {
            const videoCard = createVideoCard(video);
            videosContainer.appendChild(videoCard);
        });
    }
}

// دالة لتحديث الإحصائيات
function updateStats() {
    const totalVideos = perezVideos.length;
    const totalViews = perezVideos.reduce((sum, video) => sum + video.views, 0);
    const totalLikes = perezVideos.reduce((sum, video) => sum + video.likes, 0);
    const totalHours = Math.round(totalViews * 3 / 60); // متوسط 3 دقائق لكل مشاهدة
    
    if (document.getElementById('totalVideos')) {
        document.getElementById('totalVideos').textContent = totalVideos;
    }
    if (document.getElementById('totalViews')) {
        document.getElementById('totalViews').textContent = formatNumber(totalViews);
    }
    if (document.getElementById('totalLikes')) {
        document.getElementById('totalLikes').textContent = formatNumber(totalLikes);
    }
    if (document.getElementById('totalHours')) {
        document.getElementById('totalHours').textContent = formatNumber(totalHours);
    }
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    displayAllVideos();
    updateStats();
    setupSearch();
});

// إعداد البحث
function setupSearch() {
    const searchInput = document.getElementById('videoSearch');
    const clearSearch = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchVideos(this.value);
            if (clearSearch) {
                clearSearch.style.display = this.value ? 'flex' : 'none';
            }
        });
    }
    
    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            if (searchInput) {
                searchInput.value = '';
                searchVideos('');
                this.style.display = 'none';
            }
        });
    }
    
    // إضافة تنسيقات لنتائج البحث
    const style = document.createElement('style');
    style.textContent = `
        .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            background: rgba(30, 41, 59, 0.5);
            border-radius: 20px;
            border: 2px dashed rgba(255, 255, 255, 0.1);
        }
        
        .no-results i {
            font-size: 60px;
            color: #94a3b8;
            margin-bottom: 20px;
        }
        
        .no-results h3 {
            color: #f1f5f9;
            margin-bottom: 10px;
            font-size: 24px;
        }
        
        .no-results p {
            color: #94a3b8;
            font-size: 16px;
        }
        
        @keyframes slideIn {
            from { transform: translateX(-50%) translateY(-20px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}
