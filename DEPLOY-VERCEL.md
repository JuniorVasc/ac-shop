# 🚀 Guia Completo: Deploy no Vercel

## Método 1: Interface Web (Mais Fácil) ⭐ RECOMENDADO

### Passo 1: Criar Conta no Vercel
1. Acesse: https://vercel.com
2. Clique em **"Sign Up"**
3. Escolha uma opção:
   - **GitHub** (recomendado)
   - **GitLab**
   - **Bitbucket**
   - **Email**

### Passo 2: Fazer Deploy
1. Após login, clique em **"Add New..."** → **"Project"**
2. Clique em **"Browse"** ou arraste a pasta **AC SHOP**
3. Configure:
   - **Project Name**: `ac-shop` (ou o nome que você quiser)
   - **Framework Preset**: Other
   - **Root Directory**: ./
4. Clique em **"Deploy"**

### Passo 3: Pronto! 🎉
- Seu site estará em: `ac-shop.vercel.app` (ou o nome que você escolheu)
- Vercel te dará o link completo

---

## Método 2: Vercel CLI (Linha de Comando)

### Instalação
```powershell
npm install -g vercel
```

### Deploy
```powershell
cd "c:\Users\armenio.junior\Videos\AC SHOP"
vercel
```

Siga as instruções:
1. Login (abrirá navegador)
2. Confirme o projeto
3. Pronto!

---

## 🔄 Como Atualizar o Site Depois

### Opção A: Interface Web
1. Entre em https://vercel.com
2. Vá no seu projeto
3. Clique em **"Deployments"**
4. Arraste a pasta atualizada

### Opção B: CLI (Mais Rápido)
```powershell
cd "c:\Users\armenio.junior\Videos\AC SHOP"
vercel --prod
```

---

## 🎯 Seu Domínio Ficará Assim:

- **Gratuito Vercel**: `ac-shop.vercel.app`
- **Domínio Próprio** (opcional): `www.acshop.com`
  - Você pode conectar um domínio próprio depois gratuitamente!

---

## 📱 Recursos do Vercel

✅ Deploy automático
✅ HTTPS/SSL grátis
✅ CDN global (site rápido em todo mundo)
✅ Analytics gratuito
✅ Preview de mudanças
✅ Domínio personalizado grátis

---

## 🆘 Problemas Comuns

### "Build Failed"
- Verifique se todos os arquivos estão na pasta
- Certifique-se que `index.html` está na raiz

### "404 Not Found"
- Verifique se o `vercel.json` está configurado corretamente

---

## 📞 Precisa de Ajuda?

Me chame que eu te ajudo! 😊

**Desenvolvido por Arménio Vasco**
