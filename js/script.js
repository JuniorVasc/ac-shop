// Configuration
const WHATSAPP_NUMBER = "258876446317"; // Updated to user's number

// Product Data
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "eletronicos",
        price: "1.200.000 Kz",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
        description: "Titânio, A17 Pro, o iPhone mais poderoso de sempre."
    },
    {
        id: 2,
        name: "MacBook Pro M3",
        category: "eletronicos",
        price: "2.500.000 Kz",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=800",
        description: "Desempenho extremo para profissionais."
    },
    {
        id: 3,
        name: "T-Shirt Premium Black",
        category: "roupas",
        price: "15.000 Kz",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
        description: "Algodão egípcio, corte slim fit."
    },
    {
        id: 4,
        name: "Casaco Bomber",
        category: "roupas",
        price: "45.000 Kz",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
        description: "Estilo urbano e conforto para o dia a dia."
    },
    {
        id: 5,
        name: "Tesla Model S",
        category: "carros",
        price: "85.000.000 Kz",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
        description: "Elétrico, autonomia de 600km, 0-100 em 2s."
    },
    {
        id: 6,
        name: "Mercedes AMG GT",
        category: "carros",
        price: "120.000.000 Kz",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
        description: "Potência bruta e luxo alemão."
    },
    {
        id: 7,
        name: "Sony Headphones XM5",
        category: "eletronicos",
        price: "350.000 Kz",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
        description: "Cancelamento de ruído líder da indústria."
    },
    {
        id: 8,
        name: "Relógio Smart Ultra",
        category: "eletronicos",
        price: "80.000 Kz",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800",
        description: "Monitoramento de saúde 24/7."
    }
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
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${product.description}</p>
                <span class="product-price">${product.price}</span>
                <button class="btn-buy" onclick="buyProduct('${product.name}', '${product.price}')">
                    <i class="fab fa-whatsapp"></i> Comprar Agora
                </button>
            </div>
        </div>
    `).join('');
}

// WhatsApp Redirect
window.buyProduct = function (name, price) {
    const message = `Olá! Gostaria de comprar o seguinte produto:\n\n*Produto:* ${name}\n*Preço:* ${price}\n\nAguardo confirmação.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

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

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        nav.classList.toggle('active');
    });
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Typing Effect
const textToType = "tudo em um só lugar.";
const typeTarget = document.querySelector('.highlight');
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typeTarget.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Clear text initially and start typing when page loads
if (typeTarget) {
    typeTarget.textContent = "";
    typeTarget.classList.add('typing-cursor');
    setTimeout(typeText, 1000); // Start after 1s
}
