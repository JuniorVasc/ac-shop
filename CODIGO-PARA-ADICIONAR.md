# CÓDIGO PARA ADICIONAR NO INDEX.HTML

## 1. ADICIONAR LOGO APÓS `<body>` (linha 24)

Adicione estas 3 linhas logo após a tag `<body>`:

```html
<body>
    <!-- Overlay do Menu Mobile -->
    <div class="nav-overlay" id="nav-overlay"></div>
    
    <header class="header">
```

## 2. ADICIONAR ANTES DE `</body>` (antes do script.js)

Adicione este código antes da tag `<script src="js/script.js"></script>`:

```html
    </footer>

    <!-- Botão WhatsApp Flutuante -->
    <a href="https://wa.me/258876446317?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos." 
       class="whatsapp-float" 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label="Contato WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>

    <script src="js/script.js"></script>
</body>
```

---

## COMO FAZER:

1. Abra o arquivo `index.html`
2. Localize a linha 24 onde está `<body>`
3. Logo abaixo, adicione as 3 linhas do overlay
4. Role até o final do arquivo
5. Encontre `</footer>`
6. Adicione o código do botão WhatsApp entre o `</footer>` e o `<script>`

---

## RESULTADO ESPERADO:

✅ Menu mobile funcional com overlay
✅ Botão WhatsApp flutuante verde no canto inferior direito (apenas mobile)
✅ Código limpo sem caracteres estranhos

---

**ARQUIVOS JÁ CRIADOS:**
- ✅ `css/mobile.css` - Estilos mobile
- ✅ `css/promo-badge.css` - Selo de promoção
- ✅ `js/script.js` - JavaScript do menu (já modificado)

**Tudo está pronto! Só falta adicionar essas 2 partes no HTML manualmente.**
