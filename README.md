# Rychlokurz podvojného účetnictví (pro střední hotelovou školu)

Interaktivní kurz pro přípravu na opravnou zkoušku z předmětu Základy podvojného účetnictví. Obsah pokrývá všechno, co se na střední hotelové škole typicky probírá v prvním pololetí.

## Co je v kurzu

- **Interaktivní HTML kurz** (`ucetnictvi-rychlokurz.html`) – **14 lekcí** + **8 bonusových** (pro šikovné a zvídavé), kvízy, tahák k tisku, tmavý režim
- **Podklady pro NotebookLM** (složka `notebooklm/`) – kapitoly v HTML pro nahrání do Google NotebookLM (audio, infografiky, průvodce)

## Jak spustit

1. Otevři **index.html** nebo přímo **ucetnictvi-rychlokurz.html** v prohlížeči (stačí dvojklik nebo `file:///...`).
2. Postupuj lekce po lekci; po každé lekci můžeš splnit kvíz a odemknout další.
3. Tahák k tisku: tlačítko 🖨️ v hlavičce (při tisku se skryjí navigace a cvičení).

## Obsah lekcí

| # | Téma |
|---|------|
| 1 | Co je účetnictví, proč podvojné |
| 2 | Rozvaha – aktiva a pasiva |
| 3 | T-účty, MD a D |
| 4 | Účtová osnova, nejčastější účty |
| 5 | Účtování – základní případy (včetně 261) |
| 6 | Finanční účty – 211, 221, 261, PPD, VPD, VBU |
| 7 | Inventarizace pokladny – schodek |
| 8 | Zálohy zaměstnancům (335) |
| 9 | Ceniny a stravenky |
| 10 | Zásoby způsob A (111, 112, 501) |
| 11 | Práce v hodině – příklad |
| 12 | Účetní doklady |
| 13 | DPH |
| 14 | Závěrečný test |
| **Bonus 1** | Složitější zápis – na 3 účty |
| **Bonus 2** | Náklady příštích období (379, 381) |
| **Bonus 3** | Odběratelé a dodavatelé (311, 321) v praxi |
| **Bonus 4** | Základní odpisy (551, 082) |
| **Bonus 5** | Výsledovka – náklady a výnosy |
| **Bonus 6** | Hotel – minibar a ubytování |
| **Bonus 7** | Kontrola a typické chyby |
| **Bonus 8** | Mega-práce v hodině |

Bonusové lekce se odemknou po dokončení závěrečného testu.

## Nasazení na veřejnou URL (Vercel / Netlify)

Pro veřejný odkaz (např. pro sdílení s žáky nebo pro NotebookLM) nasaď projekt na **Vercel** nebo **Netlify**. Návod je v souboru **DEPLOY.md**.

## NotebookLM

Soubory ve složce **notebooklm/** jsou určené k nahrání do [NotebookLM](https://notebooklm.google.com). Postup je v souboru **notebooklm/README-NOTEBOOKLM.md**. Z nahraných zdrojů může NotebookLM vygenerovat audio přehled, infografiky a studijní průvodce.

## Technické

- Jedná se o čisté HTML + CSS + JavaScript, bez závislostí. Funguje offline (file://).
- Průběh (dokončené lekce) a téma (tmavý/světlý režim) se ukládají do `localStorage`.
