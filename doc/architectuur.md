# Architectuur DenkDPIA

Dit document beschrijft de technische scheiding tussen informatieve content en de dynamische denkmachine van DenkDPIA.

## 1. Kernprincipe

DenkDPIA bestaat uit twee domeinen:

```text
INFORMATIE-SITE
Start, Help, Over, Denkkader
= statische HTML
= redacteur-veilig
= app.js niet nodig voor inhoud
```

```text
DENKMACHINE
Denkcheck, Uitleg, Resultaten, PDF-output
= applicatielogica
= dynamisch
= gebaseerd op gebruikerskeuzes en data.js
```

Deze scheiding is belangrijk omdat DenkDPIA zowel redactionele content als functionele denklogica bevat. Die twee mogen niet onnodig door elkaar lopen.

## 2. Informatie-site

De informatiepagina's staan zoveel mogelijk als statische HTML in `index.html`.

Dit geldt voor:

- Start;
- Help;
- Over;
- Denkkader.

JavaScript raakt deze pagina's alleen voor navigatie en routering.

### Waarom statisch?

- Redactionele wijzigingen zijn veiliger.
- Teksten kunnen worden aangepast zonder applicatielogica te wijzigen.
- De kans op regressie in de denkcheck wordt kleiner.
- De scheiding tussen content en logica blijft zichtbaar.

## 3. Denkmachine

De denkmachine bestaat uit de onderdelen die afhankelijk zijn van gebruikerskeuzes, toestand of modeldata.

Belangrijke onderdelen:

| Component | Element | Bestand | Functie |
| --- | --- | --- | --- |
| Denkcheck wizard | `#step-container` | `app.js` | actieve vraag renderen |
| Wizard formulier | `#wizard-form` | `app.js` | antwoorden en notities verwerken |
| Resultaten | `#result-output` | `app.js` | analyse-output renderen |
| Uitleg detail | `#uitleg-detail` | `app.js` | uitleg bij keuze renderen |
| PDF-output | `#print-output` | `app.js` en `styles.css` | denkverslag genereren en printen |

## 4. Data-architectuur

`data.js` bevat het model van de denkmachine.

Het model bevat:

- categorieën;
- stappen;
- opties;
- feedback;
- vragen;
- severity;
- strengths;
- uitlegvelden.

`data.js` bevat geen statische sitecontent voor Start, Help, Over of Denkkader.

## 5. Belangrijke functionele elementen

De volgende elementen zijn onderdeel van de functionele API tussen HTML en JavaScript.

### `#step-container`

Rendert de actieve denkcheck-vraag.

Niet doen:

- ID wijzigen;
- element verwijderen;
- functie verplaatsen zonder app.js aan te passen.

### `#wizard-form`

Verwerkt antwoorden en werknotities.

Niet doen:

- form-tag verwijderen;
- ID wijzigen;
- submit-flow omzeilen.

### `#result-output`

Rendert de resultaatpagina.

Niet doen:

- container verwijderen;
- ID wijzigen.

### `#uitleg-detail`

Rendert dynamische uitleg bij gekozen tegenspraak.

Niet doen:

- ID wijzigen;
- element verwijderen.

### `#print-output`

Wordt dynamisch aangemaakt voor de PDF/printweergave.

Niet doen:

- PDF als losse webdump vormgeven;
- print-CSS laten botsen met documentstijl;
- webcomponenten kopiëren zonder documentfunctie.

## 6. Resultaatpagina en PDF

De resultaatpagina en PDF gebruiken dezelfde analysebasis, maar hebben een andere vorm.

De resultaatpagina is een reflectie-interface.

De PDF is een blijvend denkproduct.

Beide moeten dezelfde inhoudelijke spanning bewaren:

- gemaakte keuzes;
- geactiveerde tegenspraak;
- niet-verkende bouwstenen;
- sterke signalen;
- eventuele werknotities.

De PDF hoeft visueel niet op de resultaatpagina te lijken. De PDF moet als document lezen.

## 7. Onderhoud per rol

### Redacteur

Mag aanpassen zonder `app.js` te openen:

- statische tekst op Start, Help, Over en Denkkader;
- links;
- alinea's;
- toon en formulering van informatiepagina's;
- tekst binnen de ontwerpdocumenten.

Niet aanpassen:

- functionele element-ID's;
- `data-route` attributen;
- `#step-container`;
- `#wizard-form`;
- `#result-output`;
- `#uitleg-detail`;
- JavaScript.

### Developer

Werkt in `app.js` wanneer het gaat om:

- state management;
- wizard-flow;
- dynamische rendering;
- resultaatlogica;
- PDF-generatie;
- routing;
- event listeners.

Werkt in `data.js` wanneer het gaat om:

- denkcheck-stappen;
- opties;
- feedback;
- categorieën;
- severity;
- uitlegvelden.

Werkt in `styles.css` wanneer het gaat om:

- visuele stijl;
- responsive gedrag;
- printstijl;
- documentstijl van PDF.

## 8. Documentenset als ontwerpcontract

Naast de code hoort bij DenkDPIA een documentenset:

- `denkkader.md` beschrijft welk probleem de tool oplost;
- `principes.md` beschrijft de ontwerpprincipes;
- `anti-principes.md` beschrijft wat de tool bewust niet doet;
- `persona.md` beschrijft de primaire gebruiker;
- `UX.md` beschrijft UX- en designtaalprincipes;
- `architectuur.md` beschrijft de technische scheiding.

Deze documenten vormen samen een ontwerpcontract. Nieuwe functionaliteit moet niet alleen technisch werken, maar ook passen binnen dit contract.

## 9. Checklist voor toekomstige wijzigingen

Voor elke wijziging:

- Past de wijziging bij het denkkader?
- Neemt de tool geen verantwoordelijkheid over van de gebruiker?
- Blijft de tool volledig clientside?
- Wordt de PDF nog steeds een denkproduct en geen eindrapport?
- Worden statische content en applicatielogica gescheiden gehouden?
- Wordt iets zichtbaar gemaakt zonder het als oordeel te presenteren?
- Is de wijziging nodig voor scherper denken, of vooral voor gemak?

## 10. Laatst bijgewerkt

Deze architectuurnotitie is aangescherpt naar aanleiding van de feedbackrondes over DenkDPIA en de vastgelegde ontwerpdocumenten.
