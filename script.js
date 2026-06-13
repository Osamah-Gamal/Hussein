// Data - English and Arabic
const servicesData = {
    ar: [
        {title:"الإشراف الكامل على المتجر", icon:"fa-store", desc:"مسؤول عن المتجر الإلكتروني والإشراف الكامل على سير العمل اليومي."},
        {title:"قيادة فريق خدمة العملاء", icon:"fa-users", desc:"قيادة ومتابعة فريق خدمة العملاء لضمان رضا العملاء وحل مشاكلهم بسرعة."},
        {title:"التنسيق مع التسويق", icon:"fa-chart-line", desc:"التنسيق مع فريق التسويق لتنفيذ الحملات ومتابعة نتائجها وتحسينها."},
        {title:"التنسيق مع التصميم", icon:"fa-palette", desc:"التنسيق مع فريق التصميم لتجهيز البنرات وصور المنتجات والعروض."},
        {title:"إدارة المنتجات", icon:"fa-boxes", desc:"إدارة المنتجات: إضافة جديدة، حذف المنتهية، وتحديث البيانات باستمرار."},
        {title:"مراجعة الأسعار", icon:"fa-tags", desc:"مراجعة وتعديل الأسعار والكميات حسب العروض وتغيرات السوق."},
        {title:"دمج المنتجات", icon:"fa-object-group", desc:"دمج المنتجات المتشابهة وتنسيق الأوصاف لسهولة التصفح."},
        {title:"متابعة الشحن", icon:"fa-truck", desc:"متابعة تنفيذ الطلبات والتنسيق مع شركات الشحن لضمان التسليم في الوقت."},
        {title:"تحليل المبيعات", icon:"fa-chart-bar", desc:"تحليل تقارير المبيعات وسلوك العملاء واقتراح حلول لرفع الأداء."},
        {title:"تقارير دورية", icon:"fa-file-alt", desc:"تقديم تقارير دورية لإدارة المتجر تتضمن الإنجازات والتوصيات التطويرية."}
    ],
    en: [
        {title:"Full Store Supervision", icon:"fa-store", desc:"Responsible for the e-commerce store and full supervision of daily workflow."},
        {title:"Customer Service Leadership", icon:"fa-users", desc:"Leading and following up the customer service team to ensure satisfaction and quick problem resolution."},
        {title:"Marketing Coordination", icon:"fa-chart-line", desc:"Coordinating with marketing team to execute campaigns and improve results."},
        {title:"Design Coordination", icon:"fa-palette", desc:"Coordinating with design team for banners, product images, and offers."},
        {title:"Product Management", icon:"fa-boxes", desc:"Adding new products, removing discontinued ones, and updating data continuously."},
        {title:"Price & Stock Review", icon:"fa-tags", desc:"Reviewing and adjusting prices and quantities based on offers and market changes."},
        {title:"Product Merging", icon:"fa-object-group", desc:"Merging similar products and formatting descriptions for easy browsing."},
        {title:"Order & Shipping", icon:"fa-truck", desc:"Following up order fulfillment and coordinating with shipping companies."},
        {title:"Sales Analytics", icon:"fa-chart-bar", desc:"Analyzing sales reports and customer behavior to suggest performance improvements."},
        {title:"Periodic Reports", icon:"fa-file-alt", desc:"Providing periodic reports to management including achievements and recommendations."}
    ]
};

const portfolioData = {
    ar: [
        {name:"متجر الحمد للحقائب", url:"https://alhamadbags.com", icon:"fa-bag-shopping", desc:"متجر متخصص في الحقائب والسفر"},
        {name:"متجر متاح السفر", url:"https://mta3sfr.com", icon:"fa-plane", desc:"متجر لحقائب السفر والإكسسوارات"},
        {name:"متجر جزيرة الطيب", url:"https://jazeert.sa", icon:"fa-crown", desc:"متجر متخصص في المنتجات الغذائية والتمور"},
        {name:"متجر أفكار مودرن", url:"https://afkar-modern.com", icon:"fa-lightbulb", desc:"متجر للأثاث والديكورات العصرية"},
        {name:"متجر العوبتاني للبلاستيك", url:"https://asalobathani.com", icon:"fa-recycle", desc:"متجر متخصص في المنتجات البلاستيكية"},
        {name:"متجر سليب ستار", url:"https://sleepstar.sa", icon:"fa-bed", desc:"متجر للمفروشات ومستلزمات النوم"}
    ],
    en: [
        {name:"Alhamad Bags", url:"https://alhamadbags.com", icon:"fa-bag-shopping", desc:"Specialized in bags and travel"},
        {name:"Mta3sfr", url:"https://mta3sfr.com", icon:"fa-plane", desc:"Travel bags and accessories store"},
        {name:"Jazeert Store", url:"https://jazeert.sa", icon:"fa-crown", desc:"Specialized in food products and dates"},
        {name:"Afkar Modern", url:"https://afkar-modern.com", icon:"fa-lightbulb", desc:"Modern furniture and decor store"},
        {name:"Asalobathani Plastic", url:"https://asalobathani.com", icon:"fa-recycle", desc:"Specialized in plastic products"},
        {name:"Sleepstar", url:"https://sleepstar.sa", icon:"fa-bed", desc:"Furniture and bedding store"}
    ]
};

const platformsData = {
    ar: [
        {name:"متجر سلة", desc:"منصة إدارة المتاجر الإلكترونية المتكاملة", icon:"fa-cart-shopping"},
        {name:"جاهز", desc:"منصة التجارة الإلكترونية السحابية", icon:"fa-cloud"},
        {name:"مرسول", desc:"منصة توصيل الطلبات", icon:"fa-motorcycle"},
        {name:"تريليون", desc:"منصة الدفع الإلكتروني", icon:"fa-credit-card"},
        {name:"أمازون", desc:"منصة البيع العالمية", icon:"fa-amazon"}
    ],
    en: [
        {name:"Salla", desc:"Integrated e-commerce management platform", icon:"fa-cart-shopping"},
        {name:"Jahez", desc:"Cloud e-commerce platform", icon:"fa-cloud"},
        {name:"Marsool", desc:"Order delivery platform", icon:"fa-motorcycle"},
        {name:"Trillion", desc:"Electronic payment platform", icon:"fa-credit-card"},
        {name:"Amazon", desc:"Global selling platform", icon:"fa-amazon"}
    ]
};

let currentLang = 'ar';
let currentTheme = 'light';

// DOM Elements
const sidebar = document.getElementById('sidebarPanel');
const overlay = document.getElementById('panelOverlay');
const themeBtn = document.getElementById('themeBtn');
const langBtn = document.getElementById('langBtn');
const drawerOpenBtn = document.getElementById('drawerOpenBtn');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');

// Sidebar Controls
drawerOpenBtn.onclick = () => { sidebar.classList.add('open'); overlay.classList.add('show'); };
const closePanel = () => { sidebar.classList.remove('open'); overlay.classList.remove('show'); };
drawerCloseBtn.onclick = closePanel;
overlay.onclick = closePanel;
document.querySelectorAll('.sidebar-links a').forEach(a => a.addEventListener('click', closePanel));

// Theme Toggle
themeBtn.onclick = () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeBtn.innerHTML = currentTheme === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
};

// Form submission
document.getElementById('sendBtn').onclick = () => {
    const name = document.getElementById('inputName').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const message = document.getElementById('inputMessage').value.trim();
    const fb = document.getElementById('formFeedback');
    
    if (!name || !email || !message) {
        fb.innerHTML = currentLang === 'ar' ? '⚠️ الرجاء تعبئة جميع الحقول' : '⚠️ Please fill all fields';
        fb.style.color = '#eab308';
        setTimeout(() => fb.innerHTML = '', 3000);
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        fb.innerHTML = currentLang === 'ar' ? '⚠️ الرجاء إدخال بريد إلكتروني صالح' : '⚠️ Please enter a valid email';
        fb.style.color = '#eab308';
        setTimeout(() => fb.innerHTML = '', 3000);
        return;
    }
    
    const subject = currentLang === 'ar' ? `طلب إدارة متجر إلكتروني من ${name}` : `E-commerce Store Management Request from ${name}`;
    const body = currentLang === 'ar' 
        ? `الاسم: ${name}%0A%0Aالبريد الإلكتروني: ${email}%0A%0Aالرسالة:%0A${message}`
        : `Name: ${name}%0A%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    window.location.href = `mailto:hassenma2100@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    fb.innerHTML = currentLang === 'ar' ? '✅ تم فتح البريد الإلكتروني. راجع البيانات ثم اضغط إرسال' : '✅ Email opened. Review data then click send';
    fb.style.color = '#4ade80';
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputMessage').value = '';
    setTimeout(() => fb.innerHTML = '', 5000);
};

// Preview Modal
let previewModal = null;

function createPreviewModal() {
    if (previewModal) return;
    
    previewModal = document.createElement('div');
    previewModal.className = 'preview-modal';
    previewModal.innerHTML = `
        <div class="preview-modal-content">
            <div class="preview-modal-header">
                <h3 id="previewTitle">معاينة المتجر</h3>
                <button class="preview-modal-close"><i class="fa-solid fa-times"></i></button>
            </div>
            <div style="position: relative; height: 100%;">
                <div class="preview-loading" id="previewLoading">
                    <i class="fa-solid fa-spinner"></i>
                    <p>جاري تحميل المتجر...</p>
                </div>
                <iframe id="previewIframe" class="preview-iframe" style="display: none;"></iframe>
            </div>
        </div>
    `;
    document.body.appendChild(previewModal);
    
    const closeBtn = previewModal.querySelector('.preview-modal-close');
    closeBtn.onclick = () => {
        previewModal.classList.remove('active');
        const iframe = document.getElementById('previewIframe');
        iframe.src = 'about:blank';
        iframe.style.display = 'none';
        document.getElementById('previewLoading').style.display = 'flex';
    };
    
    previewModal.onclick = (e) => {
        if (e.target === previewModal) {
            closeBtn.click();
        }
    };
}

window.openPreview = function(url, name) {
    createPreviewModal();
    
    const titleEl = document.getElementById('previewTitle');
    const iframe = document.getElementById('previewIframe');
    const loading = document.getElementById('previewLoading');
    
    titleEl.innerText = currentLang === 'ar' ? `معاينة: ${name}` : `Preview: ${name}`;
    
    loading.style.display = 'flex';
    iframe.style.display = 'none';
    iframe.src = url;
    
    iframe.onload = () => {
        loading.style.display = 'none';
        iframe.style.display = 'block';
    };
    
    setTimeout(() => {
        if (iframe.src && iframe.src !== 'about:blank') {
            loading.style.display = 'none';
            iframe.style.display = 'block';
        }
    }, 3000);
    
    previewModal.classList.add('active');
};

// Mobile Hover Effect
function initMobileHover() {
    if (window.innerWidth > 768) return;
    const selectors = ['.matrix-node', '.showcase-card', '.credential-card', '.philosophy-container', '.metric-box', '.channel-unit', '.btn-primary'];
    const elements = document.querySelectorAll(selectors.join(','));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('hover-effect');
                setTimeout(() => entry.target.classList.remove('hover-effect'), 600);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    elements.forEach(el => observer.observe(el));
    
    elements.forEach(el => {
        el.addEventListener('touchstart', () => el.classList.add('hover-effect'), { passive: true });
        el.addEventListener('touchend', () => setTimeout(() => el.classList.remove('hover-effect'), 200));
    });
}

function updatePlaceholders() {
    const isAr = currentLang === 'ar';
    const nameInput = document.getElementById('inputName');
    const emailInput = document.getElementById('inputEmail');
    const messageInput = document.getElementById('inputMessage');
    
    if (nameInput) nameInput.placeholder = isAr ? 'أدخل اسمك' : 'Enter your name';
    if (emailInput) emailInput.placeholder = isAr ? 'example@domain.com' : 'example@domain.com';
    if (messageInput) messageInput.placeholder = isAr ? 'صف فكرتك أو استفسارك عن إدارة المتجر...' : 'Describe your idea or inquiry about store management...';
}

// Update Content
function updateContent() {
    const isAr = currentLang === 'ar';
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    
    // Update brand logo
    const brandLogo = document.getElementById('brandLogo');
    if (brandLogo) {
        brandLogo.innerText = isAr ? 'م.حسين الحضرمي' : 'Eng. Hussein Al-Hadhrami';
    }
    
    // Update location value
    const locationValue = document.getElementById('locationValue');
    if (locationValue) {
        locationValue.innerText = isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia';
    }
    
    // Update navigation texts
    const navTexts = {
        navHome: isAr ? "الرئيسية" : "Home",
        navServices: isAr ? "المهام" : "Tasks",
        navPortfolio: isAr ? "المتاجر" : "Stores",
        navPlatforms: isAr ? "المنصات" : "Platforms",
        navPhilosophy: isAr ? "رؤيتي" : "My Vision",
        navContact: isAr ? "التواصل" : "Contact",
        sideFooterText: isAr ? "إدارة احترافية للمتاجر الإلكترونية" : "Professional E-commerce Management",
        heroBadgeText: isAr ? "مدير متاجر إلكترونية محترف" : "Professional E-commerce Manager",
        heroMainTitle: isAr ? "إدارة <span>متاجر إلكترونية</span> احترافية" : "Professional <span>E-commerce</span> Management",
        heroDescText: isAr ? "أدير وأشرف على المتاجر الإلكترونية بخبرة عالية، من إدارة المنتجات إلى تحسين المبيعات ورضا العملاء." : "I manage and supervise e-commerce stores with high expertise, from product management to sales optimization.",
        heroBtnText: isAr ? "تواصل معي" : "Contact Me",
        stat1Text: isAr ? "متاجر مُدارة" : "Stores Managed",
        stat2Text: isAr ? "منصات شغال" : "Platforms",
        stat3Text: isAr ? "رضا العملاء" : "Client Satisfaction",
        servicesTag: isAr ? "المهام والمسؤوليات" : "Responsibilities",
        servicesTitle: isAr ? "ما أقدمه من خدمات في إدارة المتاجر" : "E-commerce Management Services",
        portfolioTag: isAr ? "أعمال سابقة" : "Previous Work",
        portfolioTitle: isAr ? "المتاجر الإلكترونية التي تم إدارتها" : "Managed E-commerce Stores",
        platformsTag: isAr ? "المنصات والخبرات" : "Platforms & Expertise",
        platformsTitle: isAr ? "المنصات التي أعمل عليها" : "Platforms I Work With",
        philosophyText: isAr ? '"إدارة المتاجر الإلكترونية ليست مجرد رفع منتجات، إنها فن تحقيق التوازن بين تجربة العميل، جودة الخدمة، وتحقيق الأرباح المستدامة."' : '"E-commerce management is not just about uploading products, it\'s the art of balancing customer experience, service quality, and sustainable profits."',
        phName: isAr ? "م.حسين الحضرمي" : "Eng. Hussein Al-Hadhrami",
        phTitle: isAr ? "| مدير متاجر إلكترونية محترف" : "| Professional E-commerce Manager",
        contactTitle: isAr ? "لنبدأ مشروعك القادم" : "Start Your Next Project",
        contactDesc: isAr ? "تواصل معي الآن لإدارة متجرك الإلكتروني باحترافية." : "Contact me now to manage your e-commerce store professionally.",
        phoneLabel: isAr ? "واتساب" : "WhatsApp",
        emailLabel: isAr ? "البريد الإلكتروني" : "Email",
        locationLabel: isAr ? "الموقع الجغرافي" : "Location",
        nameLabel: isAr ? "الاسم الكامل أو المؤسسة" : "Full Name / Organization",
        emailFormLabel: isAr ? "البريد الإلكتروني" : "Email",
        messageLabel: isAr ? "تفاصيل المشروع أو الاستفسار" : "Project Details",
        sendBtnText: isAr ? "إرسال الطلب" : "Send Request",
        footerText: isAr ? "© 2026 م.حسين الحضرمي — جميع الحقوق محفوظة | إدارة متاجر إلكترونية احترافية" : "© 2026 Eng. Hussein Al-Hadhrami — All Rights Reserved | Professional E-commerce Management"
    };
    
    for (let [id, val] of Object.entries(navTexts)) {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'heroMainTitle') el.innerHTML = val;
            else el.innerText = val;
        }
    }
    
    // Update services grid
    const services = isAr ? servicesData.ar : servicesData.en;
    document.getElementById('servicesGrid').innerHTML = services.map(s => `
        <div class="matrix-node" data-aos="fade-up">
            <div class="node-icon"><i class="fa-solid ${s.icon}"></i></div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
        </div>
    `).join('');
    
    // Update portfolio grid with icons only
    const portfolio = isAr ? portfolioData.ar : portfolioData.en;
    document.getElementById('portfolioGrid').innerHTML = portfolio.map(p => `
        <div class="showcase-card" data-aos="fade-up">
            <div class="showcase-media">
                <i class="fa-solid ${p.icon}" style="font-size: 4rem; color: white; opacity: 0.8;"></i>
                <div class="preview-overlay">
                    <button class="preview-btn" onclick="event.stopPropagation(); openPreview('${p.url}', '${p.name.replace(/'/g, "\\'")}')">
                        <i class="fa-solid fa-eye"></i>
                        ${isAr ? 'معاينة المتجر' : 'Preview Store'}
                    </button>
                </div>
            </div>
            <div class="showcase-body">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <a href="${p.url}" target="_blank" class="showcase-link" rel="noopener noreferrer">${isAr ? 'زيارة المتجر' : 'Visit Store'} <i class="fa-solid fa-arrow-left"></i></a>
            </div>
        </div>
    `).join('');
    
    // Update platforms grid
    const platforms = isAr ? platformsData.ar : platformsData.en;
    document.getElementById('platformsGrid').innerHTML = platforms.map(p => `
        <div class="credential-card">
            <div class="cred-icon"><i class="fa-solid ${p.icon}"></i></div>
            <div><h3 style="color:var(--text-title);">${p.name}</h3><p>${p.desc}</p></div>
        </div>
    `).join('');
    
    // Update form placeholders
    updatePlaceholders();
    
    setTimeout(() => {
        AOS.refresh();
        if (window.innerWidth <= 768) initMobileHover();
    }, 100);
}

// Language Toggle
langBtn.onclick = () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateContent();
};

// Initialize AOS
window.addEventListener('DOMContentLoaded', () => {
    AOS.init({ once: false, duration: 800 });
    updateContent();
    if (window.innerWidth <= 768) setTimeout(initMobileHover, 200);
});

// Active link on scroll
window.addEventListener('scroll', () => {
    let active = '';
    document.querySelectorAll('section').forEach(s => {
        if (pageYOffset >= (s.offsetTop - 250)) active = s.getAttribute('id');
    });
    document.querySelectorAll('.sidebar-links a').forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === `#${active}`) l.classList.add('active');
    });
});

// Reinitialize on resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        initMobileHover();
    }
});