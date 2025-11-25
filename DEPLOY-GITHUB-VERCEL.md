# 🚀 Guia: GitHub + Vercel Deploy

## ✅ Passo 1: Criar Repositório no GitHub

### 1.1 Acesse GitHub
- Vá para: https://github.com
- Faça login (ou crie uma conta se não tiver)

### 1.2 Criar Novo Repositório
1. Clique no **"+"** no canto superior direito
2. Selecione **"New repository"**
3. Configure:
   - **Repository name**: `ac-shop` (ou o nome que você quiser)
   - **Description**: "Loja online AC Shop - Eletrônicos, Roupas e Automóveis"
   - **Visibilidade**: 
     - ✅ **Public** (recomendado - gratuito)
     - ⚠️ Private (só se quiser esconder o código)
   - ❌ **NÃO** marque "Initialize with README" (já temos um)
4. Clique em **"Create repository"**

### 1.3 Conectar Repositório Local
Após criar, o GitHub mostrará comandos. Use estes:

```powershell
cd "c:\Users\armenio.junior\Videos\AC SHOP"
git remote add origin https://github.com/SEU-USUARIO/ac-shop.git
git branch -M main
git push -u origin main
```

**⚠️ IMPORTANTE**: Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!

---

## ✅ Passo 2: Conectar com Vercel

### 2.1 Voltar ao Vercel
1. Acesse: https://vercel.com
2. Faça login (use a mesma conta do GitHub se possível)

### 2.2 Importar Repositório
1. Na tela "Let's build something new"
2. Vá em **"Import Git Repository"**
3. Procure por **"ac-shop"** (seu repositório)
4. Clique em **"Import"**

### 2.3 Configurar Deploy
1. **Project Name**: `ac-shop` (ou personalize)
2. **Framework Preset**: Other
3. **Root Directory**: `./`
4. **Build Command**: (deixe vazio)
5. **Output Directory**: (deixe vazio)
6. Clique em **"Deploy"**

### 2.4 Aguarde Deploy (30-60 segundos)
- Vercel vai construir e publicar seu site
- Você verá uma animação de confete quando terminar! 🎉

---

## 🎯 Seu Site Estará Online!

**URL**: `ac-shop.vercel.app` (ou o nome que você escolheu)

---

## 🔄 Como Atualizar o Site Depois

### Método Simples (Recomendado):
```powershell
cd "c:\Users\armenio.junior\Videos\AC SHOP"
git add .
git commit -m "Atualização do site"
git push
```

**Pronto!** Vercel detecta automaticamente e atualiza o site! 🚀

---

## 📋 Resumo dos Comandos

### Primeira vez (já fizemos):
```powershell
git init
git add .
git commit -m "Initial commit"
```

### Conectar com GitHub (você vai fazer):
```powershell
git remote add origin https://github.com/SEU-USUARIO/ac-shop.git
git branch -M main
git push -u origin main
```

### Atualizações futuras:
```powershell
git add .
git commit -m "Descrição da mudança"
git push
```

---

## 🆘 Problemas Comuns

### "Authentication failed"
- Use GitHub CLI: `gh auth login`
- Ou configure token: https://github.com/settings/tokens

### "Repository not found"
- Verifique se o nome do repositório está correto
- Verifique se você está logado na conta certa

### "Permission denied"
- Configure SSH: https://docs.github.com/pt/authentication/connecting-to-github-with-ssh

---

## 🎁 Bônus: Domínio Personalizado

Depois que estiver online, você pode:
1. Comprar domínio (ex: acshop.com)
2. Ou usar gratuito: Freenom (.tk, .ml, .ga)
3. Conectar no Vercel: Settings → Domains

---

## ✅ Checklist

- [ ] Criar conta no GitHub
- [ ] Criar repositório "ac-shop"
- [ ] Executar comandos git remote/push
- [ ] Importar no Vercel
- [ ] Deploy concluído
- [ ] Site online!

---

**Desenvolvido por Arménio Vasco**
**Qualquer dúvida, me chame! 😊**
