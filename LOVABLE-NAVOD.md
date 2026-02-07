# Publikace kurzu na Lovable

Lovable **neumí přímo importovat** existující GitHub repozitář ([docs](https://docs.lovable.dev/integrations/github) – „Can I import an existing GitHub repo into Lovable? No.“). Kurz ale na Lovable dostaneš tímto **workaroundem**: vytvoříš v Lovable nový projekt, propojíš ho s GitHubem a do vytvořeného repa nahradíš obsah naším kurzem.

---

## Krok 1: Nový projekt v Lovable

1. Jdi na **[lovable.dev](https://lovable.dev)** a přihlas se.
2. Klikni **„Build something”** nebo na chat prompt.
3. Napiš třeba: **„Vytvoř jednoduchou statickou stránku s názvem Účetnictví Rychlokurz a jedním tlačítkem Start.“**
4. Nech Lovable vygenerovat projekt (jednu stránku stačí). **Tím vznikne nový Lovable projekt** s editovatelným kódem.

---

## Krok 2: Propojení s GitHubem (Lovable vytvoří nový repo)

1. V projektu vpravo nahoře klikni na **ikona GitHub** (nebo **Settings → Connectors → GitHub**).
2. **Connect GitHub** → přihlas se / autorizuj Lovable.
3. **Install the Lovable GitHub App** na svůj účet (nebo organizaci) – „Install & Authorize“.
4. **Connect project** → zvol účet (např. jirilangr) → **Transfer anyway**.

Lovable tím **vytvoří nový repozitář** (např. `jirilangr/ucetnictvi-rychlokurz-lovable` nebo podle názvu projektu) a začne do něj syncovat svůj vygenerovaný kód.

---

## Krok 3: Nahrazení obsahu repa naším kurzem

Teď do **tohoto nového repozitáře** (ne do původního `ucetnictvi-rychlokurz`) nahraď obsah naším kurzem.

### Varianta A: Přes lokální Git (doporučeno)

V terminálu (nahraď `LOVABLE-REPO-URL` adresou repa, které Lovable vytvořil):

```bash
# Klon nového repa z Lovable (URL uvidíš na GitHubu po Kroku 2)
git clone LOVABLE-REPO-URL lovable-ucetnictvi
cd lovable-ucetnictvi

# Smazat vše kromě .git (pozor: opravdu jen v této složce)
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +

# Zkopírovat obsah našeho kurzu (cesta k Ucetnictvi-Rychlokurz na tvém disku)
cp -r "/Users/jiri.langr/Documents/Cursor/Ucetnictvi-Rychlokurz"/* .
cp "/Users/jiri.langr/Documents/Cursor/Ucetnictvi-Rychlokurz/.gitignore" . 2>/dev/null || true

# Commit a push
git add .
git commit -m "Replace with Účetnictví Rychlokurz static HTML course"
git push origin main
```

### Varianta B: Ručně na GitHubu

1. Na GitHubu otevři **nový** repozitář vytvořený Lovablem.
2. Smaž všechny soubory (kromě případného README) a nahraď je soubory z našeho kurzu:  
   `index.html`, `ucetnictvi-rychlokurz.html`, `vercel.json`, složka `notebooklm/`, `README.md`, `DEPLOY.md` atd.
3. Commit změny (např. přes webové rozhraní „Upload files“ nebo přes VS Code / Cursor).

---

## Krok 4: Sync v Lovable a publikace

1. V Lovableu **obnov stránku** projektu (F5). Lovable načte obsah z GitHubu (sync z `main`).
2. Pokud Lovable očekává npm/React projekt a build selže, můžeš v Lovableu v **nastavení projektu** zkusit nastavit „Static site“ nebo podobně, nebo nechat Lovable opravit build (např. přidat jednoduchý `package.json` se skriptem, který jen kopíruje HTML).
3. Klikni **Publish** (ikona vpravo nahoře) → nastav **Published URL** (nebo nech vygenerovat) → **Publish**.

Po dokončení deploye dostaneš odkaz typu **`https://[název].lovable.app`**.

---

## Důležité

- **Lovable neimportuje existující repo** – proto musíš začít novým projektem v Lovable a novým repem, které Lovable vytvoří.
- **Zdroj pravdy je pak GitHub** – úpravy v Lovable se zapisují do toho repa; úpravy v repu (lokálně nebo na GitHubu) se po pushi na `main` objeví v Lovable.
- Repozitář **ucetnictvi-rychlokurz** na Vercelu můžeš nechat dál – budeš mít kurz na dvou URL: Vercel a Lovable.

---

## Pokud Lovable „neví“, jak nasadit čistý HTML

Lovable často cílí na React/Vite. Pokud publish selže s chybou buildu:

- V Lovableu v chatu napiš: *„Tento projekt je čistý statický HTML (žádný React). Přidej minimální package.json a konfiguraci tak, aby build jen zkopíroval HTML/CSS/JS do výstupu pro statický hosting.“*  
- Lovable pak může doplnit jednoduchý build (např. jen `cp` nebo minimální Vite s static plugin), aby publish prošel.

Hotový kurz máš na GitHubu v repozitáři **jirilangr/ucetnictvi-rychlokurz** – ten můžeš při kopírování použít jako zdroj souborů (clone nebo stažení ZIP a rozbalení do složky z Kroku 3).
