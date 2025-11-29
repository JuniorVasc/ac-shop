// Configuration
const WHATSAPP_NUMBER = "258876446317"; // Updated to user's number

// Product Data
const products = [
    {
        id: 1,
        name: "iPhone 11",
        category: "eletronicos",
        price: "14.000 MT",
        image: "https://images.unsplash.com/photo-1596558450426-f4a167918877?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "128GB, Bateria 95%"
    },

    {
        id: 2,
        name: "iPhone 12",
        category: "eletronicos",
        price: "21.000MT",
        image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "128GB, Bateria 95%"
    },
    {
        id: 3,
        name: "HP 14s",
        category: "eletronicos",
        price: "15.000 MT",
        image: "img/hp-14s.jpg",
        description: "Processador: AMD Athlon solver 3050U with Radeon Graphics, 8GB ram, 256GB NVME,14 inch, HDMI,type-c,3-USB, SD, Teclado autónomo, Bactéria 🔋 incluindo carregador original"
    },
    {
        id: 4,
        name: "Dell latitude 5490",
        category: "eletronicos",
        price: "15.200 MT",
        image: "img/dell-latitude.jpeg",
        description: "8th geração, Intel(r)Core i5-8250U CPU @ 1.80Hz, 8GB Ram, 256BG SSD, 14 inch, HDMI typr-c.3-usb.sd, teclado autónimo"
    },
    {
        id: 5,
        name: "TV spring",
        category: "eletronicos",
        price: "7.200 MT",
        image: "img/tv-spring.jpg",
        description: "32 polegadas, Smart TV. HD"
    },
    {
        id: 6,
        name: "Capas de Airpods",
        category: "eletronicos",
        price: "250 MT",
        image: "https://cdn.pixabay.com/photo/2024/04/26/14/19/airpods-8721977_1280.jpg",
        description: "Capas deAirpods por 250MT"
    },
    {
        id: 8,
        name: "Joystick PS4",
        category: "eletronicos",
        price: "1.500 MT",
        image: "https://images.unsplash.com/photo-1581591546163-a6e9bf7ce12d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "PS3 950MT, Personalizado 2000MT, PS5 5000MT"
    },


    {
        id: 9,
        name: "Adidas",
        category: "Vestuário",
        price: "1.850 MT",
        image: "img/adidas.jpeg",
        description: "Algodão egípcio, corte slim fit."
    },
    {
        id: 10,
        name: "Sapatilhas NIKE AIR MAX 90",
        category: "Vestuário",
        price: "1.850 MT",
        image: "img/nike.jpeg",
        description: "Estilo urbano e conforto para o dia a dia."
    },
    {
        id: 11,
        name: "Toyota Hiace",
        category: "carros",
        price: "920.000 MT",
        image: "img/toyota-hiace.jpg",
        description: "Inspeção, 130.000km, Service Feito, Peneus novos,AC, Vidros trocados 4, Automático, Extintores, Imposto e iva 15 lugares, cadeiras 13, Aparelho multimidia Smart, macaco."
    },



    {
        id: 12,
        name: "CAMISETA PREMIUM",
        category: "Vestuário",
        price: "850 MT",
        image: "img/versace.jpeg",
        description: "Estilo urbano e conforto para o dia a dia."
    },
    {
        id: 13,
        name: "CHINELOS LUOFU",
        category: "Vestuário",
        price: "950 MT",
        image: "img/chinelos-luofu.jpeg",
        description: "Estilo urbano e conforto para o dia a dia."
    },
    {
        id: 14,
        name: "Chinelos Adidas Originais",
        category: "Vestuário",
        price: "900 MT",
        image: "img/adidas-chinelo.jpeg",
        description: "Estilo urbano e conforto para o dia a dia."
    },
    {
        id: 15,
        name: "Camisas",
        category: "Vestuário",
        price: "950 MT",
        image: "img/camisas1.jpg",
        description: "Elegância e Estilosas"
    },
    {
        id: 16,
        name: "Adidas Wonder Runner Turbo",
        category: "Vestuário",
        price: "2.500 MT",
        image: "img/adidas-wonder.jpg",
        description: "Elegância e Estilosas",
        onSale: false
    }
];

// --- DOM ELEMENTS ---
const productsGrid = document.getElementById('products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const backToTopBtn = document.getElementById('back-to-top');

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupFilters();
    setupSearch();
    setupBackToTop();
});

// --- RENDER PRODUCTS ---
function renderProducts(items) {
    if (items.length === 0) {
        productsGrid.innerHTML = '<p class="no-results">Nenhum produto encontrado.</p>';
        return;
    }

    productsGrid.innerHTML = items.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                ${product.onSale ? '<div class="promo-badge">PROMOÇÃO</div>' : ''}
                <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <span class="product-price">${product.price}</span>
                <button class="btn-buy" onclick="buyOnWhatsApp('${product.name.replace(/'/g, "\\'")}', '${product.price}')">
                    <i class="fab fa-whatsapp"></i> Comprar Agora
                </button>
            </div>
        </div>
    `).join('');
}

// --- DIRECT WHATSAPP BUY ---
function buyOnWhatsApp(name, price) {
    const message = `Olá! Gostaria de comprar o seguinte produto:\n\n*Produto:* ${name}\n*Preço:* ${price}\n\nAguardo confirmação.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
}

// --- SEARCH LOGIC ---
function setupSearch() {
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        renderProducts(filtered);
    });
}

// --- FILTER LOGIC ---
function setupFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');

            // Reset search when filtering
            if (searchInput) searchInput.value = '';

            if (category === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });
}

// --- BACK TO TOP LOGIC ---
function setupBackToTop() {
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// --- MOBILE MENU COM OVERLAY ---
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const navOverlay = document.getElementById('nav-overlay');
const body = document.body;

if (mobileBtn && nav) {
    // Toggle menu
    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        body.classList.toggle('no-scroll', nav.classList.contains('active'));

        // Muda ícone do botão
        const icon = mobileBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Fecha menu ao clicar nos links
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navOverlay.classList.remove('active');
            body.classList.remove('no-scroll');
            mobileBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });

    // Fecha menu ao clicar no overlay
    navOverlay.addEventListener('click', () => {
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
        body.classList.remove('no-scroll');
        mobileBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });

    // Fecha menu com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            nav.classList.remove('active');
            navOverlay.classList.remove('active');
            body.classList.remove('no-scroll');
            mobileBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
    });
}

// --- ANIMATIONS ---
function setupScrollAnimations() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });
}

function setupTypingEffect() {
    const textToType = "tudo em um só lugar.";
    const typeTargetSpan = document.querySelector('.highlight');
    if (!typeTargetSpan) return;

    let charIndex = 0;
    function typeText() {
        if (charIndex < textToType.length) {
            typeTargetSpan.textContent = textToType.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeText, 100);
        }
    }

    typeTargetSpan.textContent = "";
    typeTargetSpan.classList.add('typing-cursor');
    setTimeout(typeText, 1000);
}

function checkScreenWidth() {
    if (window.innerWidth > 768) {
        setupScrollAnimations();
    } else {
        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.remove('hidden');
            el.classList.add('show');
        });
    }
}

// Initialize Animations
window.addEventListener('load', () => {
    checkScreenWidth();
    setupTypingEffect();
});

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkScreenWidth, 250);
});
