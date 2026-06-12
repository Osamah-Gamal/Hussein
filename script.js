 // Data Arrays
    const servicesAr = [
        {title:"منصات ويب سحابية", icon:"fa-cloud", desc:"تطوير منصات ويب عالية الأداء وبنى serverless مرنة."},
        {title:"تطبيقات الموبايل", icon:"fa-mobile-alt", desc:"تطبيقات هجينة وأصلية بتجربة مستخدم استثنائية."},
        {title:"أنظمة المؤسسات ERP", icon:"fa-network-wired", desc:"أتمتة شاملة للعمليات التجارية والإدارية."},
        {title:"متاجر إلكترونية", icon:"fa-cart-shopping", desc:"حلول تجارة رقمية آمنة وقابلة للتوسع."},
        {title:"استشارات سحابية", icon:"fa-server", desc:"تصميم معماريات سحابية متقدمة على AWS/Azure."},
        {title:"الذكاء الاصطناعي", icon:"fa-brain", desc:"دمج نماذج AI وتحليلات البيانات الذكية."},
        {title:"تجربة المستخدم", icon:"fa-pen-ruler", desc:"تصميم واجهات تفاعلية بديهية وجذابة."},
        {title:"الأمن السيبراني", icon:"fa-shield-halved", desc:"حماية الأنظمة واختبار الاختراق المتقدم."},
        {title:"DevOps وأتمتة", icon:"fa-gears", desc:"إعداد خطوط CI/CD وأتمتة البنية التحتية."}
    ];
    const servicesEn = [
        {title:"Cloud Web Platforms", icon:"fa-cloud", desc:"High-performance web platforms & serverless architectures."},
        {title:"Mobile Applications", icon:"fa-mobile-alt", desc:"Hybrid & native apps with exceptional UX."},
        {title:"ERP Systems", icon:"fa-network-wired", desc:"Complete business process automation."},
        {title:"E-commerce Solutions", icon:"fa-cart-shopping", desc:"Secure & scalable digital commerce platforms."},
        {title:"Cloud Consulting", icon:"fa-server", desc:"Advanced AWS/Azure cloud architectures."},
        {title:"Artificial Intelligence", icon:"fa-brain", desc:"AI models integration & smart analytics."},
        {title:"UI/UX Design", icon:"fa-pen-ruler", desc:"Intuitive & engaging interface design."},
        {title:"Cybersecurity", icon:"fa-shield-halved", desc:"Advanced system protection & penetration testing."},
        {title:"DevOps & Automation", icon:"fa-gears", desc:"CI/CD pipelines & infrastructure automation."}
    ];
    const portfolioAr = [
        {title:"منصة لوجستية ذكية", desc:"حلول تتبع وتحليل لسلاسل الإمداد", icon:"fa-truck-fast"},
        {title:"محفظة مالية مشفرة", desc:"حلول مصرفية رقمية آمنة", icon:"fa-wallet"},
        {title:"محرك مبيعات متكامل", desc:"منصة تجارة إلكترونية لامركزية", icon:"fa-chart-line"}
    ];
    const portfolioEn = [
        {title:"Smart Logistics Hub", desc:"Supply chain tracking & analytics", icon:"fa-truck-fast"},
        {title:"Encrypted FinTech Wallet", desc:"Secure digital banking solutions", icon:"fa-wallet"},
        {title:"Omnichannel Sales Engine", desc:"Decentralized e-commerce platform", icon:"fa-chart-line"}
    ];
    const credsAr = [
        {title:"هندسة النظم المعقدة", desc:"معتمد في تصميم الأنماط البرمجية والبنى الموزعة", icon:"fa-diagram-project"},
        {title:"البنية السحابية المتقدمة", desc:"خبرة معتمدة في Kubernetes و Multi-cloud", icon:"fa-cloud"}
    ];
    const credsEn = [
        {title:"Complex Systems Architecture", desc:"Certified in microservices & distributed patterns", icon:"fa-diagram-project"},
        {title:"Advanced Cloud Infrastructure", desc:"Certified Kubernetes & Multi-cloud expert", icon:"fa-cloud"}
    ];

    let currentLang = 'ar';
    let currentTheme = 'light';

    // DOM Elements
    const sidebar = document.getElementById('sidebarPanel');
    const overlay = document.getElementById('panelOverlay');
    const themeBtn = document.getElementById('themeBtn');
    const langBtn = document.getElementById('langBtn');

    // Sidebar Controls
    document.getElementById('drawerOpenBtn').onclick = () => { sidebar.classList.add('open'); overlay.classList.add('show'); };
    const closePanel = () => { sidebar.classList.remove('open'); overlay.classList.remove('show'); };
    document.getElementById('drawerCloseBtn').onclick = closePanel;
    overlay.onclick = closePanel;
    document.querySelectorAll('.sidebar-links a').forEach(a => a.addEventListener('click', closePanel));

    // Theme Toggle
    themeBtn.onclick = () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeBtn.innerHTML = currentTheme === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    };

    // Email Function
    function sendEmailClient(name, email, message) {
        const toEmail = "hassenma2100@gmail.com";
        let subject, body;
        if (currentLang === 'ar') {
            subject = `طلب استشارة تقنية من ${name}`;
            body = `الاسم: ${name}%0A%0Aالبريد الإلكتروني: ${email}%0A%0Aالرسالة:%0A${message}`;
        } else {
            subject = `Technical Consultation Request from ${name}`;
            body = `Name: ${name}%0A%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
        }
        const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
        window.location.href = mailtoLink;
        return true;
    }

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
        
        sendEmailClient(name, email, message);
        fb.innerHTML = currentLang === 'ar' ? '✅ تم فتح البريد الإلكتروني. راجع البيانات ثم اضغط إرسال' : '✅ Email opened. Review data then click send';
        fb.style.color = '#4ade80';
        document.getElementById('inputName').value = '';
        document.getElementById('inputEmail').value = '';
        document.getElementById('inputMessage').value = '';
        setTimeout(() => fb.innerHTML = '', 5000);
    };

    // ============================================
    // MOBILE HOVER EFFECT - FIXED FOR SCROLLING
    // ============================================
    
    let hoverTimeoutIds = new Map();
    let currentHoveredElement = null;
    
    function initMobileHover() {
        if (window.innerWidth > 768) return;
        
        const selectors = [
            '.matrix-node', '.showcase-card', '.credential-card',
            '.philosophy-container', '.metric-box', '.channel-unit', '.btn-primary'
        ];
        
        const elements = document.querySelectorAll(selectors.join(','));
        
        // Intersection Observer for scroll-based hover
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add hover effect when element comes into view
                    entry.target.classList.add('hover-effect');
                    
                    // Remove effect after the user stops looking at it
                    const timeoutId = setTimeout(() => {
                        entry.target.classList.remove('hover-effect');
                    }, 800);
                    
                    hoverTimeoutIds.set(entry.target, timeoutId);
                } else {
                    // Remove effect when element leaves viewport
                    if (hoverTimeoutIds.has(entry.target)) {
                        clearTimeout(hoverTimeoutIds.get(entry.target));
                        hoverTimeoutIds.delete(entry.target);
                    }
                    entry.target.classList.remove('hover-effect');
                }
            });
        }, { threshold: 0.3, rootMargin: '0px' });
        
        elements.forEach(el => observer.observe(el));
        
        // Touch handlers for immediate feedback
        elements.forEach(el => {
            el.addEventListener('touchstart', function(e) {
                // Remove hover from previously touched element
                if (currentHoveredElement && currentHoveredElement !== this) {
                    currentHoveredElement.classList.remove('hover-effect');
                }
                
                // Clear any existing timeout for this element
                if (hoverTimeoutIds.has(this)) {
                    clearTimeout(hoverTimeoutIds.get(this));
                    hoverTimeoutIds.delete(this);
                }
                
                // Add hover effect
                this.classList.add('hover-effect');
                currentHoveredElement = this;
            }, { passive: true });
            
            el.addEventListener('touchend', function(e) {
                // Remove hover after delay
                const timeoutId = setTimeout(() => {
                    this.classList.remove('hover-effect');
                    if (currentHoveredElement === this) {
                        currentHoveredElement = null;
                    }
                }, 300);
                hoverTimeoutIds.set(this, timeoutId);
            });
            
            el.addEventListener('touchcancel', function(e) {
                this.classList.remove('hover-effect');
                if (hoverTimeoutIds.has(this)) {
                    clearTimeout(hoverTimeoutIds.get(this));
                    hoverTimeoutIds.delete(this);
                }
                if (currentHoveredElement === this) {
                    currentHoveredElement = null;
                }
            });
        });
    }

    // Update Content Function
    function updateContent() {
        const isAr = currentLang === 'ar';
        document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', isAr ? 'ar' : 'en');
        
        const texts = {
            brandLogo: isAr ? "حسين الحضرمي" : "Hussein Al-Hadhrami",
            navHome: isAr ? "الرئيسية" : "Home",
            navServices: isAr ? "الخدمات" : "Services",
            navPortfolio: isAr ? "الأعمال" : "Portfolio",
            navCredentials: isAr ? "الاعتمادات" : "Credentials",
            navPhilosophy: isAr ? "الفلسفة" : "Philosophy",
            navContact: isAr ? "التواصل" : "Contact",
            sideFooterText: isAr ? "استشارات رقمية متقدمة" : "Advanced Digital Consulting",
            heroBadgeText: isAr ? "استشاري نظم رقمية متقدم" : "Senior Digital Systems Consultant",
            heroMainTitle: isAr ? "هندسة <span>حلول رقمية</span> فائقة الأداء" : "Engineering <span>High-Performance</span> Digital Solutions",
            heroDescText: isAr ? "أصمم وأطور منظومات تقنية مبتكرة، تجمع بين السرعة الفائقة والأمان المطلق، لتحويل أفكاركم إلى واقع رقمي متكامل." : "I design innovative tech ecosystems combining speed, security, and scalability to transform your ideas into reality.",
            heroBtnText: isAr ? "استشارة فورية" : "Free Consultation",
            stat1Text: isAr ? "سنوات خبرة" : "Years Exp",
            stat2Text: isAr ? "مشروع متكامل" : "Projects Done",
            stat3Text: isAr ? "مرونة بنيوية" : "Scalability",
            servicesTag: isAr ? "مجالات الخبرة" : "Expertise Areas",
            servicesTitle: isAr ? "حلول برمجية شاملة ومتكاملة" : "Comprehensive Software Solutions",
            portfolioTag: isAr ? "أعمال استراتيجية" : "Strategic Projects",
            portfolioTitle: isAr ? "مشاريع رائدة منفذة" : "Flagship Deliverables",
            credsTag: isAr ? "الجدارة المهنية" : "Professional Merits",
            credsTitle: isAr ? "الاعتمادات والشهادات التخصصية" : "Certifications & Credentials",
            philosophyText: isAr ? '"البرمجة الحقيقية تتجاوز مجرد كتابة الأكواد؛ إنها فن هندسة حلول مرنة تقضي على التعقيد، وتمنح الأنظمة القدرة على النمو المستدام."' : '"True programming goes beyond code; it\'s the art of building adaptive solutions that eliminate complexity and enable sustainable growth."',
            phName: isAr ? "حسين الحضرمي" : "Hussein Al-Hadhrami",
            phTitle: isAr ? "| مستشار النظم والحلول الرقمية" : "| Digital Systems Consultant",
            contactTitle: isAr ? "لنبدأ مشروعك القادم" : "Start Your Next Project",
            contactDesc: isAr ? "تواصل معي الآن لمناقشة متطلباتك التقنية وتحويل رؤيتك إلى واقع رقمي." : "Contact me now to discuss your technical requirements.",
            phoneLabel: isAr ? "رقم الاتصال المباشر" : "Direct Phone",
            emailLabel: isAr ? "البريد الإلكتروني" : "Email Address",
            locationLabel: isAr ? "الموقع الجغرافي" : "Location",
            locationValue: "المملكة العربية السعودية",
            nameLabel: isAr ? "الاسم الكامل أو المؤسسة" : "Full Name / Organization",
            emailFormLabel: isAr ? "البريد الإلكتروني" : "Email Address",
            messageLabel: isAr ? "تفاصيل المشروع التقني" : "Project Technical Details",
            sendBtnText: isAr ? "إرسال الطلب" : "Send Request",
            footerText: isAr ? "© 2026 حسين الحضرمي — جميع الحقوق الفنية والهندسية محفوظة" : "© 2026 Hussein Al-Hadhrami — All Technical Rights Reserved"
        };
        
        for (let [id, val] of Object.entries(texts)) {
            const el = document.getElementById(id);
            if (el) {
                if (id === 'heroMainTitle') el.innerHTML = val;
                else if (id === 'locationValue') el.innerText = val;
                else el.innerText = val;
            }
        }
        
        const servicesData = isAr ? servicesAr : servicesEn;
        document.getElementById('servicesGrid').innerHTML = servicesData.map(s => `
            <div class="matrix-node" data-aos="fade-up">
                <div class="node-icon"><i class="fa-solid ${s.icon}"></i></div>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
            </div>
        `).join('');
        
        const portfolioData = isAr ? portfolioAr : portfolioEn;
        document.getElementById('portfolioGrid').innerHTML = portfolioData.map(p => `
            <div class="showcase-card" data-aos="fade-up">
                <div class="showcase-media"><i class="fa-solid ${p.icon}"></i></div>
                <div class="showcase-body"><h3>${p.title}</h3><p>${p.desc}</p></div>
            </div>
        `).join('');
        
        const credsData = isAr ? credsAr : credsEn;
        document.getElementById('credsGrid').innerHTML = credsData.map(c => `
            <div class="credential-card">
                <div class="cred-icon"><i class="fa-solid ${c.icon}"></i></div>
                <div><h3 style="color:var(--text-title);">${c.title}</h3><p>${c.desc}</p></div>
            </div>
        `).join('');
        
        setTimeout(() => {
            AOS.refresh();
            if (window.innerWidth <= 768) {
                initMobileHover();
            }
        }, 100);
    }

    // Language Toggle
    langBtn.onclick = () => { 
        currentLang = currentLang === 'ar' ? 'en' : 'ar'; 
        updateContent();
    };
    
    // Initialize
    window.addEventListener('DOMContentLoaded', () => {
        AOS.init({ once: false, duration: 800, easing: 'ease-out-cubic' });
        updateContent();
        if (window.innerWidth <= 768) {
            setTimeout(initMobileHover, 200);
        }
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
    
    // Re-initialize on resize for mobile
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            initMobileHover();
        }
    });