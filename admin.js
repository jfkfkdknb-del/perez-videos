// ملف تحكم بالفيديوهات - فقط للمسؤول
class VideoAdmin {
    constructor() {
        this.adminPassword = "perez123"; // كلمة مرور المسؤول
        this.isAuthenticated = false;
        this.videos = [];
        
        this.loadVideos();
        this.setupAdminPanel();
    }
    
    // تحميل الفيديوهات من localStorage
    loadVideos() {
        const savedVideos = localStorage.getItem('perez_admin_videos');
        if (savedVideos) {
            this.videos = JSON.parse(savedVideos);
        }
    }
    
    // حفظ الفيديوهات
    saveVideos() {
        localStorage.setItem('perez_admin_videos', JSON.stringify(this.videos));
    }
    
    // إنشاء واجهة المسؤول
    setupAdminPanel() {
        // إضافة زر المسؤول
        const adminBtn = document.createElement('button');
        adminBtn.id = 'adminToggle';
        adminBtn.innerHTML = '🔐 المسؤول';
        adminBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 9999;
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        `;
        document.body.appendChild(adminBtn);
        
        adminBtn.addEventListener('click', () => this.toggleAdminPanel());
    }
    
    // عرض/إخفاء لوحة التحكم
    toggleAdminPanel() {
        if (!this.isAuthenticated) {
            this.showLogin();
        } else {
            this.showAdminPanel();
        }
    }
    
    // عرض نافذة تسجيل الدخول
    showLogin() {
        const loginHTML = `
            <div class="admin-overlay">
                <div class="admin-modal">
                    <h2><i class="fas fa-lock"></i> دخول المسؤول</h2>
                    <p>أدخل كلمة المرور للوصول لوحة التحكم</p>
                    <input type="password" id="adminPassword" placeholder="كلمة المرور" class="admin-input">
                    <div class="admin-buttons">
                        <button id="loginBtn" class="admin-btn primary">دخول</button>
                        <button id="cancelLogin" class="admin-btn secondary">إلغاء</button>
                    </div>
                </div>
            </div>
        `;
        
        const overlay = document.createElement('div');
        overlay.innerHTML = loginHTML;
        document.body.appendChild(overlay);
        
        document.getElementById('loginBtn').addEventListener('click', () => {
            const password = document.getElementById('adminPassword').value;
            if (password === this.adminPassword) {
                this.isAuthenticated = true;
                overlay.remove();
                this.showAdminPanel();
            } else {
                alert('كلمة المرور غير صحيحة!');
            }
        });
        
        document.getElementById('cancelLogin').addEventListener('click', () => {
            overlay.remove();
        });
    }
    
    // عرض لوحة التحكم
    showAdminPanel() {
        const panelHTML = `
            <div class="admin-overlay">
                <div class="admin-panel">
                    <div class="admin-header">
                        <h2><i class="fas fa-cogs"></i> لوحة تحكم المسؤول</h2>
                        <button id="closeAdmin" class="close-btn">✕</button>
                    </div>
                    
                    <div class="admin-tabs">
                        <button class="tab-btn active" data-tab="add">إضافة فيديو</button>
                        <button class="tab-btn" data-tab="manage">إدارة الفيديوهات</button>
                        <button class="tab-btn" data-tab="links">روابط الفيديوهات</button>
                    </div>
                    
                    <div class="tab-content active" id="addTab">
                        <h3><i class="fas fa-plus-circle"></i> إضافة فيديو جديد</h3>
                        <div class="form-group">
                            <input type="text" id="videoTitle" placeholder="عنوان الفيديو" class="admin-input">
                        </div>
                        <div class="form-group">
                            <input type="text" id="videoUrl" placeholder="رابط الفيديو (MP4)" class="admin-input">
                        </div>
                        <div class="form-group">
                            <textarea id="videoDesc" placeholder="وصف الفيديو" class="admin-textarea"></textarea>
                        </div>
                        <div class="form-group">
                            <select id="videoCategory" class="admin-select">
                                <option value="أفلام قصيرة">أفلام قصيرة</option>
                                <option value="موسيقى">موسيقى</option>
                                <option value="ألعاب">ألعاب</option>
                                <option value="تعليمية">تعليمية</option>
                                <option value="كوميديا">كوميديا</option>
                                <option value="رياضة">رياضة</option>
                            </select>
                        </div>
                        <button id="addVideoBtn" class="admin-btn primary">
                            <i class="fas fa-plus"></i> إضافة الفيديو
                        </button>
                    </div>
                    
                    <div class="tab-content" id="manageTab">
                        <h3><i class="fas fa-edit"></i> إدارة الفيديوهات (${this.videos.length})</h3>
                        <div class="videos-list" id="adminVideosList">
                            ${this.generateVideosList()}
                        </div>
                    </div>
                    
                    <div class="tab-content" id="linksTab">
                        <h3><i class="fas fa-link"></i> روابط الفيديوهات المضافة</h3>
                        <div class="links-container">
                            <textarea id="videoLinks" class="links-textarea" readonly>${this.generateLinksList()}</textarea>
                            <button id="copyLinks" class="admin-btn secondary">
                                <i class="fas fa-copy"></i> نسخ الروابط
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const overlay = document.createElement('div');
        overlay.innerHTML = panelHTML;
        document.body.appendChild(overlay);
        
        // إعداد الأحداث
        this.setupAdminEvents(overlay);
    }
    
    // توليد قائمة الفيديوهات
    generateVideosList() {
        if (this.videos.length === 0) {
            return '<p class="no-videos">لا توجد فيديوهات مضافة بعد</p>';
        }
        
        return this.videos.map((video, index) => `
            <div class="admin-video-item" data-id="${video.id}">
                <div class="video-info">
                    <h4>${video.title}</h4>
                    <p>${video.category} • ${video.date}</p>
                </div>
                <div class="video-actions">
                    <button class="action-btn edit" data-id="${video.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" data-id="${video.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // توليد قائمة الروابط
    generateLinksList() {
        return this.videos.map(video => video.url).join('\n');
    }
    
    // إعداد أحداث لوحة التحكم
    setupAdminEvents(overlay) {
        // إغلاق اللوحة
        document.getElementById('closeAdmin').addEventListener('click', () => {
            overlay.remove();
        });
        
        // التبديل بين التبويبات
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                document.getElementById(btn.dataset.tab + 'Tab').classList.add('active');
            });
        });
        
        // إضافة فيديو جديد
        document.getElementById('addVideoBtn').addEventListener('click', () => {
            this.addNewVideo();
            overlay.remove();
            setTimeout(() => this.showAdminPanel(), 500);
        });
        
        // نسخ الروابط
        document.getElementById('copyLinks').addEventListener('click', () => {
            const textarea = document.getElementById('videoLinks');
            textarea.select();
            document.execCommand('copy');
            alert('تم نسخ الروابط!');
        });
        
        // حذف الفيديوهات
        overlay.addEventListener('click', (e) => {
            if (e.target.closest('.action-btn.delete')) {
                const videoId = e.target.closest('.action-btn').dataset.id;
                if (confirm('هل تريد حذف هذا الفيديو؟')) {
                    this.deleteVideo(videoId);
                    overlay.remove();
                    setTimeout(() => this.showAdminPanel(), 500);
                }
            }
        });
    }
    
    // إضافة فيديو جديد
    addNewVideo() {
        const title = document.getElementById('videoTitle').value;
        const url = document.getElementById('videoUrl').value;
        const desc = document.getElementById('videoDesc').value;
        const category = document.getElementById('videoCategory').value;
        
        if (!title || !url) {
            alert('الرجاء إدخال العنوان والرابط');
            return;
        }
        
        const newVideo = {
            id: Date.now(),
            title: title,
            url: url,
            description: desc || 'لا يوجد وصف',
            category: category,
            date: new Date().toLocaleDateString('ar-EG'),
            views: 0,
            likes: 0,
            thumbnail: this.getThumbnailByCategory(category)
        };
        
        this.videos.unshift(newVideo);
        this.saveVideos();
        
        // تحديث العرض في الموقع
        if (typeof updateVideosDisplay === 'function') {
            updateVideosDisplay();
        }
        
        alert('تم إضافة الفيديو بنجاح!');
    }
    
    // حذف فيديو
    deleteVideo(videoId) {
        this.videos = this.videos.filter(video => video.id != videoId);
        this.saveVideos();
        
        // تحديث العرض
        if (typeof updateVideosDisplay === 'function') {
            updateVideosDisplay();
        }
    }
    
    // الحصول على أيقونة حسب التصنيف
    getThumbnailByCategory(category) {
        const icons = {
            'أفلام قصيرة': 'film',
            'موسيقى': 'music',
            'ألعاب': 'gamepad',
            'تعليمية': 'graduation-cap',
            'كوميديا': 'laugh',
            'رياضة': 'basketball-ball'
        };
        return icons[category] || 'video';
    }
}

// تهيئة النظام عند تحميل الصفحة
let videoAdmin;
document.addEventListener('DOMContentLoaded', () => {
    videoAdmin = new VideoAdmin();
});

// دالة لتحديث عرض الفيديوهات
function updateVideosDisplay() {
    if (videoAdmin) {
        // هنا سيتم تحديث عرض الفيديوهات في الصفحة الرئيسية
        console.log('يجب تحديث عرض الفيديوهات');
    }
}
