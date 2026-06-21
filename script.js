// Data - English and Arabic
const servicesData = {
    ar: [
        { title: "الإشراف الكامل على المتجر", icon: "fa-store", desc: "مسؤول عن المتجر الإلكتروني والإشراف الكامل على سير العمل اليومي." },
        { title: "قيادة فريق خدمة العملاء", icon: "fa-users", desc: "قيادة ومتابعة فريق خدمة العملاء لضمان رضا العملاء وحل مشاكلهم بسرعة." },
        { title: "التنسيق مع التسويق", icon: "fa-chart-line", desc: "التنسيق مع فريق التسويق لتنفيذ الحملات ومتابعة نتائجها وتحسينها." },
        { title: "التنسيق مع التصميم", icon: "fa-palette", desc: "التنسيق مع فريق التصميم لتجهيز البنرات وصور المنتجات والعروض." },
        { title: "إدارة المنتجات", icon: "fa-boxes", desc: "إدارة المنتجات: إضافة جديدة، حذف المنتهية، وتحديث البيانات باستمرار." },
        { title: "مراجعة الأسعار", icon: "fa-tags", desc: "مراجعة وتعديل الأسعار والكميات حسب العروض وتغيرات السوق." },
        { title: "دمج المنتجات", icon: "fa-object-group", desc: "دمج المنتجات المتشابهة وتنسيق الأوصاف لسهولة التصفح." },
        { title: "متابعة الشحن", icon: "fa-truck", desc: "متابعة تنفيذ الطلبات والتنسيق مع شركات الشحن لضمان التسليم في الوقت." },
        { title: "تحليل المبيعات", icon: "fa-chart-bar", desc: "تحليل تقارير المبيعات وسلوك العملاء واقتراح حلول لرفع الأداء." },
        { title: "تقارير دورية", icon: "fa-file-alt", desc: "تقديم تقارير دورية لإدارة المتجر تتضمن الإنجازات والتوصيات التطويرية." }
    ],
    en: [
        { title: "Full Store Supervision", icon: "fa-store", desc: "Responsible for the e-commerce store and full supervision of daily workflow." },
        { title: "Customer Service Leadership", icon: "fa-users", desc: "Leading and following up the customer service team to ensure satisfaction and quick problem resolution." },
        { title: "Marketing Coordination", icon: "fa-chart-line", desc: "Coordinating with marketing team to execute campaigns and improve results." },
        { title: "Design Coordination", icon: "fa-palette", desc: "Coordinating with design team for banners, product images, and offers." },
        { title: "Product Management", icon: "fa-boxes", desc: "Adding new products, removing discontinued ones, and updating data continuously." },
        { title: "Price & Stock Review", icon: "fa-tags", desc: "Reviewing and adjusting prices and quantities based on offers and market changes." },
        { title: "Product Merging", icon: "fa-object-group", desc: "Merging similar products and formatting descriptions for easy browsing." },
        { title: "Order & Shipping", icon: "fa-truck", desc: "Following up order fulfillment and coordinating with shipping companies." },
        { title: "Sales Analytics", icon: "fa-chart-bar", desc: "Analyzing sales reports and customer behavior to suggest performance improvements." },
        { title: "Periodic Reports", icon: "fa-file-alt", desc: "Providing periodic reports to management including achievements and recommendations." }
    ]
};

const portfolioData = {
    ar: [
        {name:"متجر الحمد للحقائب", url:"https://alhamadbags.com", icon:"fa-bag-shopping", desc:"متجر متخصص في الحقائب والسفر"},
        {name:"متجر متاع السفر", url:"https://mta3sfr.com", icon:"fa-plane", desc:"متجر لحقائب السفر والإكسسوارات"},
        {name:"متجر جزيرة الطيب", url:"https://jazeert.sa", icon:"fa-crown", desc:"متجر متخصص في منتجات العطور والبخور"},
        {name:"متجر أفكار مودرن", url:"https://afkar-modern.com", icon:"fa-lightbulb", desc:"متجر للأثاث والديكورات العصرية"},
        {name:"متجر العوبتاني للبلاستيك", url:"https://asalobathani.com", icon:"fa-recycle", desc:"متجر متخصص في المنتجات البلاستيكية"},
        {name:"متجر سليب ستار", url:"https://sleepstar.sa", icon:"fa-bed", desc:"متجر للمفروشات ومستلزمات النوم"}
    ],
    en: [
        {name:"Alhamad Bags", url:"https://alhamadbags.com", icon:"fa-bag-shopping", desc:"Specialized in bags and travel"},
        {name:"Mta3sfr", url:"https://mta3sfr.com", icon:"fa-plane", desc:"Travel bags and accessories store"},
        {name:"Jazeert Store", url:"https://jazeert.sa", icon:"fa-crown", desc:"Specialized in perfumes and incense products"},
        {name:"Afkar Modern", url:"https://afkar-modern.com", icon:"fa-lightbulb", desc:"Modern furniture and decor store"},
        {name:"Asalobathani Plastic", url:"https://asalobathani.com", icon:"fa-recycle", desc:"Specialized in plastic products"},
        {name:"Sleepstar", url:"https://sleepstar.sa", icon:"fa-bed", desc:"Furniture and bedding store"}
    ]
};

const platformsData = {
    ar: [
        { name: "سلة", desc: "منصة إدارة المتاجر الإلكترونية المتكاملة", icon: "fa-cart-shopping" },
        { name: "جاهز", desc: "منصة التجارة الإلكترونية السحابية", icon: "fa-cloud" },
        { name: "مرسول", desc: "منصة توصيل الطلبات", icon: "fa-motorcycle" },
        { name: "ترينديول", desc: "منصة الدفع الإلكتروني", icon: "fa-credit-card" },
        { name: "نون", desc: "منصة التسوق الإلكتروني الإقليمية", icon: "fa-bag-shopping" },
        { name: "أمازون", desc: "منصة البيع العالمية", icon: "fa-amazon" }
    ],
    en: [
        { name: "Salla", desc: "Integrated e-commerce management platform", icon: "fa-cart-shopping" },
        { name: "Jahez", desc: "Cloud e-commerce platform", icon: "fa-cloud" },
        { name: "Marsool", desc: "Order delivery platform", icon: "fa-motorcycle" },
        { name: "Trendyol", desc: "Electronic payment platform", icon: "fa-credit-card" },
        { name: "Noon", desc: "Regional e-commerce platform", icon: "fa-bag-shopping" },
        { name: "Amazon", desc: "Global selling platform", icon: "fa-amazon" }
    ]
};

let currentLang = 'ar';
let currentTheme = 'light';

const sidebar = document.getElementById('sidebarPanel');
const overlay = document.getElementById('panelOverlay');
const themeBtn = document.getElementById('themeBtn');
const langBtn = document.getElementById('langBtn');

// Drawer functionality
document.getElementById('drawerOpenBtn').onclick = () => {
    sidebar.classList.add('open');
    overlay.classList.add('show');
};

const closePanel = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
};

document.getElementById('drawerCloseBtn').onclick = closePanel;
overlay.onclick = closePanel;
document.querySelectorAll('.sidebar-links a').forEach(a => a.addEventListener('click', closePanel));

// Theme toggle
themeBtn.onclick = () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeBtn.innerHTML = currentTheme === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
};

// Send email functionality
document.getElementById('sendBtn').onclick = () => {
    const accountType = document.getElementById('accountType').value;
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

    const subject = currentLang === 'ar'
        ? `طلب إدارة متجر إلكتروني من ${accountType} - ${name}`
        : `E-commerce Store Management Request from ${accountType} - ${name}`;
    const body = currentLang === 'ar'
        ? `نوع الحساب: ${accountType}%0A%0Aالاسم الكامل: ${name}%0A%0Aالبريد الإلكتروني: ${email}%0A%0Aالرسالة:%0A${message}`
        : `Account Type: ${accountType}%0A%0AFull Name: ${name}%0A%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    window.location.href = `mailto:hassenma2100@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    fb.innerHTML = currentLang === 'ar'
        ? '✅ تم فتح البريد الإلكتروني. راجع البيانات ثم اضغط إرسال'
        : '✅ Email opened. Review data then click send';
    fb.style.color = '#4ade80';
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputMessage').value = '';
    setTimeout(() => fb.innerHTML = '', 5000);
};

function updatePlaceholders() {
    const isAr = currentLang === 'ar';
    document.getElementById('inputName').placeholder = isAr ? 'أدخل الاسم الكامل' : 'Enter full name';
    document.getElementById('inputEmail').placeholder = isAr ? 'example@domain.com' : 'example@domain.com';
    document.getElementById('inputMessage').placeholder = isAr
        ? 'صف فكرتك أو استفسارك عن إدارة المتجر...'
        : 'Describe your idea or inquiry about store management...';
}

function updateContent() {
    const isAr = currentLang === 'ar';
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    document.getElementById('brandLogo').innerText = isAr ? 'م.حسين الحضرمي' : 'Eng. Hussein Al-Hadhrami';
    document.getElementById('locationValue').innerText = isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia';

    // Update combo box options text
    document.getElementById('optionIndividual').innerText = isAr ? 'فرد' : 'Individual';
    document.getElementById('optionEstablishment').innerText = isAr ? 'مؤسسة' : 'Establishment';
    document.getElementById('optionCompany').innerText = isAr ? 'شركة' : 'Company';

    const texts = {
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
        stat2Text: isAr ? "منصات احترافية" : "Platforms",
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
        accountTypeLabel: isAr ? "نوع الحساب" : "Account Type",
        nameLabel: isAr ? "الاسم الكامل" : "Full Name",
        emailFormLabel: isAr ? "البريد الإلكتروني" : "Email",
        messageLabel: isAr ? "تفاصيل المشروع أو الاستفسار" : "Project Details",
        sendBtnText: isAr ? "إرسال الطلب" : "Send Request",
        footerText: isAr ? "© 2026 م.حسين الحضرمي — جميع الحقوق محفوظة | إدارة متاجر إلكترونية احترافية" : "© 2026 Eng. Hussein Al-Hadhrami — All Rights Reserved | Professional E-commerce Management"
    };

    for (let [id, val] of Object.entries(texts)) {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'heroMainTitle') {
                el.innerHTML = val;
            } else {
                el.innerText = val;
            }
        }
    }

    const services = isAr ? servicesData.ar : servicesData.en;
    document.getElementById('servicesGrid').innerHTML = services.map(s => `
        <div class="matrix-node" data-aos="fade-up">
            <div class="node-icon"><i class="fa-solid ${s.icon}"></i></div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
        </div>
    `).join('');

    const portfolio = isAr ? portfolioData.ar : portfolioData.en;
    document.getElementById('portfolioGrid').innerHTML = portfolio.map(p => `
        <div class="showcase-card" data-aos="fade-up">
            <div class="showcase-media"><i class="fa-solid ${p.icon}"></i></div>
            <div class="showcase-body">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <a href="${p.url}" target="_blank" class="showcase-link" rel="noopener noreferrer">
                    ${isAr ? 'زيارة المتجر' : 'Visit Store'} <i class="fa-solid fa-arrow-left"></i>
                </a>
            </div>
        </div>
    `).join('');

    const platforms = isAr ? platformsData.ar : platformsData.en;
    document.getElementById('platformsGrid').innerHTML = platforms.map(p => `
        <div class="credential-card">
            <div class="cred-icon"><i class="fa-solid ${p.icon}"></i></div>
            <div>
                <h3 style="color:var(--text-title);">${p.name}</h3>
                <p>${p.desc}</p>
            </div>
        </div>
    `).join('');

    updatePlaceholders();
    setTimeout(() => {
        AOS.refresh();
    }, 100);
}

// Language toggle
langBtn.onclick = () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateContent();
};

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    AOS.init({ once: false, duration: 800 });
    updateContent();
});

// Active link on scroll
window.addEventListener('scroll', () => {
    let active = '';
    document.querySelectorAll('section').forEach(s => {
        if (pageYOffset >= (s.offsetTop - 250)) {
            active = s.getAttribute('id');
        }
    });
    document.querySelectorAll('.sidebar-links a').forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === `#${active}`) {
            l.classList.add('active');
        }
    });
});
