# Nasazení kurzu na veřejnou URL

Kurz je čistý statický web (HTML, CSS, JS). Můžeš ho nasadit na **Vercel**, **Netlify** nebo **GitHub Pages** a získat veřejnou adresu (např. `https://ucetnictvi-rychlokurz.vercel.app`).

---

## Varianta A: Vercel (doporučeno)

### 1. Přes GitHub

1. Vytvoř na GitHubu nový repozitář (např. `ucetnictvi-rychlokurz`).
2. Nahraj do něj obsah složky **Ucetnictvi-Rychlokurz** (všechny soubory včetně `index.html`, `ucetnictvi-rychlokurz.html`, složky `notebooklm/`, `vercel.json`).
3. Jdi na [vercel.com](https://vercel.com), přihlas se (např. přes GitHub).
4. **Add New** → **Project** → **Import** repozitáře `ucetnictvi-rychlokurz`.
5. **Root Directory**: nech prázdné (nebo zadej cestu ke složce, kde je `index.html`).
6. **Build and Output**: u čistého statického webu Vercel většinou sám detekuje, že není co buildit – jen nasadí soubory.
7. Klikni **Deploy**. Po chvíli dostaneš odkaz typu `https://ucetnictvi-rychlokurz-xxx.vercel.app`.
8. Hlavní kurz bude na: `https://tvoje-url.vercel.app/ucetnictvi-rychlokurz.html`  
   Úvodní stránka (doporučeno): `https://tvoje-url.vercel.app/` (zobrazí `index.html`).

**Důležité:** V repozitáři musí být v kořeni (nebo ve zvoleném Root Directory) soubory `index.html` a `ucetnictvi-rychlokurz.html`. Pokud máš v repu celý workspace a kurz je ve složce `Ucetnictvi-Rychlokurz`, v Vercelu nastav **Root Directory** na `Ucetnictvi-Rychlokurz`.

### 2. Přes Vercel CLI (bez GitHubu)

1. Nainstaluj CLI: `npm i -g vercel`
2. V terminálu přejdi do složky kurzu:  
   `cd /cesta/k/Ucetnictvi-Rychlokurz`
3. Spusť: `vercel`
4. Postupuj podle dotazů (login, název projektu). Vercel nasadí aktuální složku a vrátí URL.
5. Pro produkční nasazení: `vercel --prod`

---

## Varianta B: Netlify

1. Jdi na [netlify.com](https://netlify.com) → **Add new site** → **Deploy manually** (nebo propoj GitHub).
2. Při ručním nasazení přetáhni celou složku **Ucetnictvi-Rychlokurz** do okna „Drag and drop“.
3. Netlify nasadí soubory a dá ti adresu typu `https://náhodný-název.netlify.app`.
4. V **Site settings** → **Domain management** můžeš nastavit vlastní název (např. `ucetnictvi-rychlokurz.netlify.app`).

---

## Varianta C: GitHub Pages

1. Nahraj projekt na GitHub (např. repozitář `ucetnictvi-rychlokurz`).
2. V repozitáři: **Settings** → **Pages**.
3. **Source**: Deploy from a branch.
4. **Branch**: `main` (nebo `master`), složka **/ (root)**.
5. Ulož. Po chvíli bude kurz na adrese:  
   `https://tvoje-username.github.io/ucetnictvi-rychlokurz/`  
   (Pokud je `index.html` v kořeni branch, úvodní stránka se zobrazí automaticky.)

**Poznámka:** Pokud je kurz ve tvém workspace v podsložce (např. `Ucetnictvi-Rychlokurz`), na GitHub nahraj přímo obsah této složky do kořene repozitáře, aby byl `index.html` v rootu.

---

## Po nasazení

- **Úvodní stránka:** `https://tvoje-url/` (odkaz na kurz a na podklady pro NotebookLM).
- **Přímý odkaz na kurz:** `https://tvoje-url/ucetnictvi-rychlokurz.html`
- Odkaz můžeš poslat studentům nebo ho vložit do NotebookLM jako webový zdroj (pokud NotebookLM umí načítat URL).

Kurz funguje plně v prohlížeči, nepotřebuje backend ani databázi.
