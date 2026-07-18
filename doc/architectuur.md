# DenkDPIA Architectuur

## Kernprincipe

DenkDPIA bestaat uit twee afzonderlijke domeinen:

```
┌─────────────────────────────────────┐
│      INFORMATIE-SITE                │
│  (Start, Help, Over, Denkkader)     │
│  = Puur content redaction           │
│  = Nooit app.js aanraken            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│      DENKMACHINE                    │
│  (Denkcheck, Uitleg, Resultaten)    │
│  = Applicatielogica                 │
│  = Blijft altijd dynamisch          │
└─────────────────────────────────────┘
```

## COMPONENTEN

### Informatie-site (100% HTML)

Deze pagina's bestaan volledig uit statische HTML. JavaScript raakt deze pagina's **niet** aan, behalve voor navigatie (hash-based routing).

| Pagina | Bestand | Status | Redacteur-veilig |
|--------|---------|--------|------------------|
| Start | `index.html` lines 32-87 | ✅ HTML | Ja, volledig veilig |
| Help | `index.html` lines 190-202 | ✅ HTML | Ja, volledig veilig |
| Over | `index.html` lines 213-220 | ✅ HTML | Ja, volledig veilig |
| Denkkader | `index.html` lines 145-188 | ✅ HTML | Ja, volledig veilig |

**Waarom statisch:**
- Minimale wijzigingsdruk → maximale stabiliteit
- Redacteur kan teksten aanpassen zonder code-kennis
- Geen afhankelijkheden in app.js

---

### Denkmachine (dynamisch via app.js)

Deze pagina's en elementen worden gegenereerd via JavaScript. Zij bevatten toestandsafhankelijke logica en gebruikersinvoer.

| Component | Element ID | Bestand | Functie |
|-----------|-----------|---------|---------|
| Denkcheck wizard | `#step-container` | app.js | Actieve vraag renderen |
| Wizard input form | `#wizard-form` | app.js | Antwoorden verwerken |
| Resultaten | `#result-output` | app.js | Analyse-output renderen |
| Uitleg detail | `#uitleg-detail` | app.js | Geselecteerde uitleg renderen |

---

## FUNCTIONELE API

Dit zijn de HTML-elementen waar app.js afhankelijk van is. Deze hebben een **expliciete functie** en mogen niet zomaar verwijderd worden.

### `#step-container`

**Functie:** Renderen van de actieve denkcheck-vraag (stap in de wizard)

**Reden:** De denkcheck-router vult hier dynamisch elke stap in.

**Aanpassingen:**
- ✅ CSS classe aanpassen
- ✅ Wrapper-divs toevoegen
- ❌ Element verwijderen
- ❌ ID veranderen

**Eigenaar:** Applicatielogica (app.js)

---

### `#wizard-form`

**Functie:** Formulier voor het verwerken van antwoorden in de denkcheck

**Reden:** Event-listener voor `submit` event; staat gekoppeld aan AppState.

**Aanpassingen:**
- ✅ CSS aanpassen
- ✅ Input-velden toevoegen
- ❌ Form-tag verwijderen
- ❌ ID veranderen

**Eigenaar:** Applicatielogica (app.js)

---

### `#result-output`

**Functie:** Renderen van de eindresultaten na denkcheck (werkvoorraad)

**Reden:** Dynamische HTML gegenereerd uit AppState.answers + categorieën

**Aanpassingen:**
- ✅ CSS styling aanpassen
- ✅ Wrapper-elementen toevoegen
- ❌ Container verwijderen
- ❌ ID veranderen

**Eigenaar:** Applicatielogica (app.js)

---

### `#uitleg-detail`

---

**Functie:** Renderen van gedetailleerde uitleg voor geselecteerde categorie

**Reden:** Dynamisch gegenereerd via `renderUitleg()` afhankelijk van categorie-ID

**Aanpassingen:**
- ✅ CSS aanpassen
- ✅ Nesting aanpassen
- ❌ Element verwijderen
- ❌ ID veranderen

**Eigenaar:** Applicatielogica (app.js)

---

## CONTENT vs APPLICATIE

Onderaan elke pagina in HTML staat een HTML-comment dat aangeeft of het element **content** (redacteur kan wijzigen) of **functioneel** (nooit aanraken) is.

### Start pagina (voorbeeld)

```html
<!-- CONTENT: redacteur kan aanpassen -->
<p class="kicker" id="start-kicker">DenkDPIA.nl</p>
<h1 id="start-title">Eerst de redenering. Daarna pas het template.</h1>
<p class="lead" id="start-lead">Voor projectleiders...</p>

<!-- CONTENT: redacteur kan aanpassen -->
<div id="start-intro">
  <p>DenkDPIA beoordeelt geen document...</p>
</div>

<!-- CONTENT: redacteur kan aanpassen -->
<p id="side-text">Een scherpere werkvoorraad...</p>
<p id="side-rule">Geen DPIA-checker, maar georganiseerde tegenspraak.</p>
```

**Regel:** Geen JavaScript aanpakken voor deze elementen. App.js kent deze IDs niet meer.

---

## DATA ARCHITECTURE

### `data.js` na refactoring

`data.js` bevat nu ALLEEN:

```javascript
window.DPIA_MODEL = {
  version: "0.9.8",
  categories: { ... },    // ← Nog nodig voor uitleg/detail en categoriecontext
  steps: [ ... ]          // ← Nog nodig voor denkcheck wizard
}
```

De statische content voor Start, Help, Over en Denkkader staat nu in `index.html` en niet meer in de datastructuur.

---

## ONDERHOUD PER ROL

### Redacteur (inhoudelijk)

Je mag aanpassen **zonder** app.js te openen:

- ✅ Titel/tekst op Start, Help, Over, Denkkader
- ✅ Links toevoegen/verwijderen (op Over pagina)
- ✅ Paragrafen herstructureren
- ✅ Koppelingen in Denkkader aanpassen
- ✅ Toon van "Waarom deze tool bestaat" veranderen

Je mag **niet** aanraken:
- ❌ Element-IDs
- ❌ `data-route` attributen
- ❌ `#step-container`, `#wizard-form`, `#result-output`, `#uitleg-detail`
- ❌ JavaScript bestanden

---

### Developer (logica)

Je werkt in app.js wanneer je:

- ✅ Denkcheck-stappen toevoegt/wijzigt
- ✅ Categorieën uitbreidt
- ✅ Uitleg-logica aanpast
- ✅ AppState/wizard flow wijzigt

Je raakt HTML **niet** aan voor:
- ❌ Start, Help, Over, Denkkader content
- ❌ Statische titels/lead-teksten
- ❌ Informatieve pagina's

---

## RICHTLIJNEN

### Wanneer iets in HTML mag

- ✅ Statische content (tekst, afbeeldingen, links)
- ✅ Semantische structuur
- ✅ Informatie-pagina's
- ✅ CSS classes toevoegen
- ✅ Aria-labels voor accessibility

### Wanneer iets in app.js hoort

- ✅ State management (AppState)
- ✅ Event listeners
- ✅ Dynamische rendering
- ✅ Logica en algoritmes
- ✅ Routing & pagina-switches

### Wanneer iets in data.js hoort

- ✅ Denkcheck-stappen (`steps[]`)
- ✅ Categorie-definities (`categories{}`)
- ✅ Dynamische content die varies per sessie

---

## MIGRATIE VOLTOOID

| Taak | Status | Voordeel |
|------|--------|----------|
| ✅ Start pagina → HTML | KLAAR | renderStart() verwijderd |
| ✅ Help pagina → HTML | KLAAR | Volledig statisch |
| ✅ Over pagina → HTML | KLAAR | renderOver() verwijderd |
| ✅ Denkkader → HTML | KLAAR | Was al HTML |
| ✅ Architectuur document | KLAAR | Dit bestand |

**Netto resultaat:**
- 📉 3 render-functies verwijderd
- 📉 30+ regels JS bespaard
- 📈 Duidelijke Content/API scheiding
- 📈 Redacteur-veilige HTML
- 📈 Onderhoudsvriendelijk

---

## CHECKLIST VOOR TOEKOMSTIGE WIJZIGINGEN

**Voor inhoudelijke wijzigingen op Start/Help/Over/Denkkader:**
- [ ] Wijzig HTML direct
- [ ] Controleer dat je geen element-IDs aanraakt
- [ ] Test in browser
- [ ] Commit naar versiecontrole
- [ ] **Open app.js NIET**

**Voor functionaliteit-uitbreidingen:**
- [ ] Voeg stap toe aan `data.js` (steps array)
- [ ] Of voeg categorie toe (categories object)
- [ ] Zorg dat renderUitleg/renderStep het aankunnen
- [ ] Test met wizard flow
- [ ] **Raak HTML informatie-pagina's NIET aan**

**Voor bug-fixes in content:**
- [ ] Zoek in HTML, niet in app.js
- [ ] Zelfde bericht staat ook ergens in data.js? → Update beide!
- [ ] (Dit vermindert naarmate minder content in data.js zit)

---

*Laatst bijgewerkt: 2026-07-18*
*Versie: 0.9.8*
