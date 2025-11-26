// Configuration
const WHATSAPP_NUMBER = "258876446317"; // Updated to user's number

// Product Data
const products = [
    {
        id: 1,
        name: "iPhone 12",
        category: "eletronicos",
        price: "21.000MT",
        image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "128GB, Bateria 95%"
    },
    {
        id: 2,
        name: "HP 14s",
        category: "eletronicos",
        price: "15.000 MT", // Renomeado para hp-14s.jpg
        image: "./img/hp-14s.jpg",
        description: "Processador: AMD Athlon solver 3050U with Radeon Graphics, 8GB ram, 256GB NVME,14 inch, HDMI,type-c,3-USB, SD, Teclado autónomo, Bactéria 🔋 incluindo carregador original     "
    },
    {
        id: 3,
        name: "Dell latitude 5490",
        category: "eletronicos",
        price: "15.200 MT", 
        image: "./img/dell-latitude.jpeg",
        description: "8th geração, Intel(r)Core i5-8250U CPU @ 1.80Hz, 8GB Ram, 256BG SSD, 14 inch, HDMI typr-c.3-usb.sd, teclado autónimo"
    },
     {
        id: 4,
        name: "TV spring",
        category: "eletronicos",
        price: "7.200 MT", // Renomeado para jbl-tune.jpeg
        image: "./img/tv-spring.jpg",
        description: "32 polegadas, Smart TV. HD   "
    },
    {
        id: 5,
        name: "Adidas",
        category: "Vestuário",
        price: "1.850MT",
        image: "./img/adidas.jpeg",
        description: "Algodão egípcio, corte slim fit."
    },
    {
        id: 6,
        name: "Sapatilhas NIKE AIR MAX 90",
        category: "Vestuário",
        price: "1.850 MT", // Renomeado para nike.jpeg
        image: "./img/nike.jpeg",
        description: "Estilo urbano e conforto para o dia a dia."
    },
    {
        id: 7,
        name: "Toyota Hiace",
        category: "carros",
        price: "920.000MT", // Renomeado para toyota-hiace.jpg
        image: "./img/toyota-hiace.jpg",
        description: "Inspeção, 130.000km, Service Feito, Peneus novos,AC, Vidros trocados 4, Automático, Extintores, Imposto e iva 15 lugares, cadeiras 13, Aparelho multimidia Smart, macaco  ."
    },
    {
        id: 8,
        name: "Joystick PS4",
        category: "eletronicos",
        price: "1.500MT",
        image: "https://images.unsplash.com/photo-1581591546163-a6e9bf7ce12d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "PS3 950MT, Personalizado 2000MT, PS5 5000MT"
    },

    {
        id: 9,
        name: "Capas de Airpods",
        category: "eletronicos",
        price: "250 MT",
        image: "https://cdn.pixabay.com/photo/2024/04/26/14/19/airpods-8721977_1280.jpg",
        description: "Cancelamento de ruído líder da indústria."
    },
    {
        id: 10,
        name: "JBL tune",
        category: "eletronicos",
        price: "850 MT", // Renomeado para jbl-tune.jpeg
        image: "./img/jbl-tune.jpeg",
        description: "Som sem fios, com estilo!  "
    },
      {
        id: 11,
        name: "CAMISETA PREMIUM",
        category: "Vestuário",
        price: "850 MT",
        image: "./img/versace.jpeg",
        description: "Estilo urbano e conforto para o dia a dia."
    },
    {
        id: 12,
        name: "CHINELOS LUOFU",
        category: "Vestuário",
        price: "950 MT", // Renomeado para chinelos-luofu.jpeg
        image: "./img/chinelos-luofu.jpeg",
        description: "Estilo urbano e conforto para o dia a dia."
    },
    {
        id: 13,
        name: "Chinelos Adidas Originais",
        category: "Vestuário",
        price: "900 MT", // Renomeado para adidas-chinelo.jpeg
        image: "./img/adidas-chinelo.jpeg",
        description: "Estilo urbano e conforto para o dia a dia."
    },
      {
        id: 14,
        name: "Camisas",
        category: "Vestuário",
        price: "950 MT",
        image: "./img/camisas1.jpg",
        description: "Elegância e Estilosas"
    },

];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupFilters();
});

// Render Products
function renderProducts(items) {
    productsGrid.innerHTML = items.map(product => `
        <div class="product-card" data-product-name="${product.name}" data-product-price="${product.price}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <span class="product-price">${product.price}</span>
                <button class="btn-buy">
                    <i class="fab fa-whatsapp"></i> Comprar Agora
                </button>
            </div>
        </div>
    `).join('');
}
 
// WhatsApp Redirect using Event Delegation
productsGrid.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-buy')) {
        const card = e.target.closest('.product-card');
        const name = card.dataset.productName;
        const price = card.dataset.productPrice;
        const message = `Olá! Gostaria de comprar o seguinte produto:\n\n*Produto:* ${name}\n*Preço:* ${price}\n\nAguardo confirmação.`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }
});

// Filter Logic
function setupFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter');

            if (category === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });
}

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileBtn && nav) { // Verifica se ambos os elementos existem
    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('active'); // Apenas alterna a classe 'active'
    });

    // Fecha o menu móvel ao clicar em um link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Typing Effect
const textToType = "tudo em um só lugar.";
const typeTargetSpan = document.querySelector('.highlight');
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typeTargetSpan.textContent = textToType.substring(0, charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        charIndex = 0; // Reset for potential re-animation
    }
}

// Clear text initially and start typing when page loads
if (typeTargetSpan) {
    typeTargetSpan.textContent = "";
    typeTargetSpan.classList.add('typing-cursor');
    setTimeout(typeText, 1000); // Start after 1s
}

// Configuração inicial ao carregar a página
window.addEventListener('load', handleAnimationSetup);

// Reavalia a configuração da animação ao redimensionar a janela (com debounce)
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleAnimationSetup, 250);
});

// Check screen width and apply or disable scroll animations
function checkScreenWidth() {
    // Only run animations on screens wider than 768px
    if (window.innerWidth > 768) {
        setupScrollAnimations();
    } else {
        // On smaller screens, remove animation classes to prevent elements from being hidden
        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.remove('hidden');
        });
    }
}

window.addEventListener('load', checkScreenWidth);
