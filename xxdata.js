window.DPIA_MODEL = {
  "version": "0.9.8",
  "categories": {
    "verwerking": {
      "title": "Verwerking en scope",
      "intro": "Waar gaat de DPIA feitelijk over?",
      "look": "Deze categorie test of je de verwerking beoordeelt in plaats van de applicatie, leverancier of oplossing.",
      "mistake": "De redenering start bij een productnaam terwijl nog niet scherp is wat er met persoonsgegevens gebeurt.",
      "weak": "We doen een DPIA op systeem X.",
      "strong": "We beoordelen hoe persoonsgegevens in proces Y worden verzameld, gebruikt en gedeeld."
    },
    "doel": {
      "title": "Doel en noodzaak",
      "intro": "Waarom is deze verwerking nodig?",
      "look": "Deze categorie test of doel, voordeel en noodzakelijkheid uit elkaar blijven.",
      "mistake": "De verwerking wordt noodzakelijk genoemd terwijl vooral het voordeel duidelijk is.",
      "weak": "Deze verwerking is nodig omdat zij efficiënter werkt.",
      "strong": "Deze verwerking is nodig om het doel te bereiken. Minder ingrijpende alternatieven zijn beoordeeld."
    },
    "gegevens": {
      "title": "Gegevens en betrokkenen",
      "intro": "Welke gegevens en betrokkenen dragen de redenering?",
      "look": "Deze categorie test of je weet welke gegevens kunnen meekomen en wie daardoor geraakt kan worden.",
      "mistake": "Er wordt over persoonsgegevens gesproken zonder concreet te maken welke gegevens, over wie, en met welke bijvangst.",
      "weak": "Er worden waarschijnlijk geen gevoelige gegevens verwerkt.",
      "strong": "De gegevenssoorten zijn benoemd, inclusief mogelijke bijvangst door vrije invoer, communicatie of output."
    },
    "keten": {
      "title": "Keten, toegang en beheer",
      "intro": "Kan de redenering ook in de uitvoering standhouden?",
      "look": "Deze categorie test of opslag, toegang, leverancier, beheer en wijziging zichtbaar zijn.",
      "mistake": "De verwerking wordt beschreven alsof zij alleen in één systeem plaatsvindt.",
      "weak": "De gegevens staan veilig in de cloudomgeving.",
      "strong": "Opslag, toegang, leveranciers, beheer, bewaartermijn en wijzigingsroutes zijn toetsbaar beschreven."
    },
    "recht": {
      "title": "Rechtmatigheid",
      "intro": "Volgt de juridische route uit de redenering?",
      "look": "Deze categorie test of de juridische route volgt uit verwerking, doel en noodzaak.",
      "mistake": "Een grondslag wordt vroeg gekozen en daarna wordt de rest van de redenering passend gemaakt.",
      "weak": "De verwerking valt onder de publieke taak van de organisatie.",
      "strong": "De verwerking ondersteunt een concrete taak en de noodzakelijkheid is afzonderlijk onderbouwd."
    },
    "risico": {
      "title": "Risico voor betrokkenen",
      "intro": "Welk gevolg kan dit hebben voor betrokkenen?",
      "look": "Deze categorie test of een probleem is vertaald naar een mogelijk gevolg voor mensen.",
      "mistake": "Een onzekerheid wordt risico genoemd zonder zichtbaar gevolg voor betrokkenen.",
      "weak": "Er is een risico omdat de leverancier onduidelijk is.",
      "strong": "Door onduidelijke rolverdeling kan verwerking buiten de beoogde context plaatsvinden, waardoor betrokkenen minder controle hebben."
    },
    "maatregel": {
      "title": "Beheersing en maatregelen",
      "intro": "Past de maatregel bij de redenering?",
      "look": "Deze categorie test of een maatregel het benoemde risico daadwerkelijk kleiner maakt en uitvoerbaar is.",
      "mistake": "Een bekende maatregel wordt genoemd zonder te toetsen of die dit risico echt beheerst.",
      "weak": "We lossen dit op met een gebruikskader.",
      "strong": "Het gebruikskader helpt waar gedrag het risico veroorzaakt; technische begrenzing of controle is geregeld waar gebruikers het risico niet zelf beheersen."
    },
    "besluit": {
      "title": "Randvoorwaarden en besluitvorming",
      "intro": "Wat moet nog expliciet besloten worden?",
      "look": "Deze categorie test of open punten zichtbaar blijven als randvoorwaarde, besluitpunt of restrisico.",
      "mistake": "Een conclusie wordt geformuleerd terwijl belangrijke voorwaarden nog openstaan.",
      "weak": "De DPIA is akkoord als de maatregelen worden uitgevoerd.",
      "strong": "De verwerking kan pas verantwoord starten als randvoorwaarden zijn ingevuld en restrisico expliciet is belegd."
    }
  },
  "steps": [
    {
      "id": "positie",
      "number": 1,
      "title": "Waarvoor gebruik je de denkcheck?",
      "intro": "Kies je vertrekpunt. Daarmee bepaal je niet of je antwoord goed of fout is, maar welke soort tegenspraak het meest relevant wordt.",
      "type": "single",
      "options": [
        {
          "id": "nieuw",
          "label": "Ik verken een nieuwe verwerking.",
          "feedback": "Welke aannames wil je voorlopig laten staan, en welke zijn nog te onzeker om op voort te bouwen?",
          "cat": "besluit",
          "severity": "info",
          "question": "Welke aannames wil je voorlopig laten staan, en welke zijn nog te onzeker om op voort te bouwen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Bij een nieuwe verwerking zijn aannames vaak nog nuttig, maar ook risicovol. De verdieping helpt bepalen welke aannames tijdelijk bruikbaar zijn en welke eerst onderzocht moeten worden.",
            "commonMistake": "Een verkenning wordt te vroeg behandeld alsof de besluitrichting al vaststaat.",
            "whatToCheck": "Welke aannames zijn noodzakelijk om verder te kunnen, en welke aannames moeten eerst worden getoetst?",
            "strongerReasoning": "Een sterkere redenering maakt zichtbaar welke keuzes voorlopig zijn, welk bewijs nog ontbreekt en wanneer de beoordeling opnieuw moet worden aangescherpt.",
            "sources": []
          }
        },
        {
          "id": "bestaand",
          "label": "Ik heb al een beschrijving of concept-DPIA.",
          "feedback": "Welke redenering in die tekst zou onder druk komen te staan als iemand kritisch doorvraagt?",
          "cat": "besluit",
          "severity": "info",
          "question": "Welke redenering in de bestaande tekst vraagt nog bewijs?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een bestaande tekst kan compleet lijken terwijl de dragende redenering nog zwak is. Deze keuze vraagt om het scheiden van nette formulering en echte onderbouwing.",
            "commonMistake": "De bestaande DPIA-tekst wordt als bewijs gezien, terwijl niet duidelijk is welke aannames de tekst dragen.",
            "whatToCheck": "Welke redenering in de bestaande tekst vraagt nog bewijs of afbakening?",
            "strongerReasoning": "Een sterkere redenering laat per conclusie zien waarop zij rust en waar nog onderzoek, besluitvorming of bewijs nodig is.",
            "sources": []
          }
        },
        {
          "id": "template",
          "label": "Ik moet een DPIA-template gaan invullen.",
          "feedback": "Welke schakel moet eerst kloppen voordat het zinvol is om tekst in het template te zetten?",
          "cat": "besluit",
          "severity": "info",
          "question": "Welke schakel moet eerst kloppen voordat je het template invult?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een template helpt bij vastleggen, maar dwingt niet automatisch goede redenering af. Deze keuze vraagt om eerst te bepalen welke schakel inhoudelijk moet kloppen.",
            "commonMistake": "Het invullen van velden wordt verward met het oplossen van de inhoudelijke DPIA-vragen.",
            "whatToCheck": "Welke inhoudelijke schakel moet eerst helder zijn voordat tekst in het template betrouwbaar wordt?",
            "strongerReasoning": "Een sterkere redenering gebruikt het template pas nadat verwerking, doel, risico en maatregelen voldoende toetsbaar zijn gemaakt.",
            "sources": []
          }
        },
        {
          "id": "twijfel",
          "label": "Ik twijfel of een DPIA nodig is.",
          "feedback": "Deze tool beslist dat niet. Welke signalen maken dat je deze verwerking niet zomaar als laag-impact kunt behandelen?",
          "cat": "besluit",
          "severity": "info",
          "question": "Deze tool beslist dat niet. Welke signalen maken dat je deze verwerking niet zomaar als laag-impact kunt behandelen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Twijfel over de DPIA-plicht is vaak een signaal dat de verwerking of impact nog onvoldoende scherp is. De tool beslist dit niet, maar maakt de onderliggende signalen zichtbaar.",
            "commonMistake": "De vraag of een DPIA nodig is wordt behandeld als ja-nee-vraag, zonder eerst de impactsignalen te benoemen.",
            "whatToCheck": "Welke signalen maken dat je deze verwerking niet zomaar als laag-impact kunt behandelen?",
            "strongerReasoning": "Een sterkere redenering benoemt welke kenmerken van de verwerking op verhoogde impact kunnen wijzen en welke beoordeling daarvoor nog nodig is.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "verwerking",
      "number": 2,
      "title": "Welke verwerking staat centraal?",
      "intro": "Kies wat er feitelijk met persoonsgegevens gebeurt. Als je vooral de naam van een applicatie of leverancier in gedachten hebt, is dit meestal de eerste denkfout.",
      "type": "single",
      "options": [
        {
          "id": "kennis",
          "label": "Kennis- of notitieomgeving.",
          "feedback": "Wanneer wordt deze omgeving een tweede administratie, en hoe voorkom je dat de formele bron uit beeld raakt?",
          "cat": "verwerking",
          "severity": "warning",
          "question": "Wanneer wordt deze omgeving een tweede administratie, en hoe voorkom je dat de formele bron uit beeld raakt?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een kennis- of notitieomgeving kan ongemerkt een plek worden waar persoonsgegevens opnieuw worden vastgelegd en gedeeld. Daardoor verschuift de beoordeling van hulpmiddel naar verwerking.",
            "commonMistake": "De omgeving wordt gezien als neutrale opslagplaats, terwijl zij in de praktijk een tweede bron of administratie kan worden.",
            "whatToCheck": "Wanneer wordt deze omgeving een tweede administratie, en hoe voorkom je dat de formele bron uit beeld raakt?",
            "strongerReasoning": "Een sterkere redenering beschrijft welke informatie in de omgeving terechtkomt, welke bron leidend blijft en hoe gebruik wordt begrensd.",
            "sources": []
          }
        },
        {
          "id": "vastlegging",
          "label": "Opname, transcriptie of verslaglegging.",
          "feedback": "Wat verandert er voor betrokkenen doordat vluchtige informatie blijvend, vindbaar en deelbaar wordt?",
          "cat": "gegevens",
          "severity": "warning",
          "question": "Wat verandert er voor betrokkenen doordat vluchtige informatie blijvend, vindbaar en deelbaar wordt?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Opname, transcriptie of verslaglegging verandert vluchtige informatie in blijvende en doorzoekbare gegevens. Dat kan de impact voor betrokkenen groter maken dan de oorspronkelijke situatie.",
            "commonMistake": "Er wordt vooral gekeken naar gemak van vastleggen, niet naar het effect van blijvend vindbare informatie.",
            "whatToCheck": "Wat verandert er voor betrokkenen doordat vluchtige informatie blijvend, vindbaar en deelbaar wordt?",
            "strongerReasoning": "Een sterkere redenering maakt duidelijk welke informatie wordt vastgelegd, hoe lang die vindbaar blijft en wie toegang krijgt.",
            "sources": []
          }
        },
        {
          "id": "ai",
          "label": "AI-assistent of generatieve AI.",
          "feedback": "Welke persoonsgegevens kunnen in invoer, context of output terechtkomen, en wie controleert wat daarna met die informatie gebeurt?",
          "cat": "gegevens",
          "severity": "warning",
          "question": "Welke persoonsgegevens kunnen in invoer, context of output terechtkomen, en wie controleert wat daarna met die informatie gebeurt?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Bij generatieve AI kunnen persoonsgegevens in invoer, context en output terechtkomen. Zonder afbakening is niet duidelijk welke gegevens feitelijk worden verwerkt.",
            "commonMistake": "De AI-toepassing wordt beoordeeld als losse tool, terwijl de echte verwerking ontstaat door prompts, bronnen, context en output.",
            "whatToCheck": "Welke persoonsgegevens kunnen in invoer, context of output terechtkomen, en wie controleert wat daarna met die informatie gebeurt?",
            "strongerReasoning": "Een sterkere redenering beschrijft welke gegevens in elke fase kunnen meekomen en hoe ongewenst gebruik of hergebruik wordt begrensd.",
            "sources": []
          }
        },
        {
          "id": "kennisplatform",
          "label": "Zoekindex of kennisplatform.",
          "feedback": "Welke bronnen worden doorzoekbaar, en klopt de toegang tot de zoekuitkomst nog met de toegang tot de bron?",
          "cat": "keten",
          "severity": "warning",
          "question": "Welke bronnen worden doorzoekbaar, en klopt de toegang tot de zoekuitkomst nog met de toegang tot de bron?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een zoekindex of kennisplatform verandert de vindbaarheid van bestaande bronnen. Daardoor kan toegang tot zoekresultaten afwijken van toegang tot de oorspronkelijke bron.",
            "commonMistake": "Er wordt aangenomen dat bestaande autorisaties vanzelf goed doorwerken in indexering, samenvatting of zoekuitkomst.",
            "whatToCheck": "Welke bronnen worden doorzoekbaar, en klopt de toegang tot de zoekuitkomst nog met de toegang tot de bron?",
            "strongerReasoning": "Een sterkere redenering laat zien welke bronnen zijn geïndexeerd, wie welke resultaten ziet en hoe autorisaties actueel blijven.",
            "sources": []
          }
        },
        {
          "id": "output",
          "label": "Systeem met automatische analyse, score, advies of output.",
          "feedback": "Welke status krijgt de output in het proces: hulpmiddel, advies, feit of besluit?",
          "cat": "risico",
          "severity": "warning",
          "question": "Welke status krijgt de output in het proces: hulpmiddel, advies, feit of besluit?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Automatische analyse, score of advies kan in een proces meer gewicht krijgen dan bedoeld. De rol van output bepaalt mede welk risico voor betrokkenen ontstaat.",
            "commonMistake": "Output wordt formeel hulpmiddel genoemd, maar wordt feitelijk behandeld als feit, advies of besluit.",
            "whatToCheck": "Welke status krijgt de output in het proces: hulpmiddel, advies, feit of besluit?",
            "strongerReasoning": "Een sterkere redenering beschrijft hoe output wordt gebruikt, wie controleert en wanneer output niet zelfstandig richtinggevend mag zijn.",
            "sources": []
          }
        },
        {
          "id": "vrije_invoer",
          "label": "Samenwerkingsomgeving met vrije invoer.",
          "feedback": "Welke gegevens kunnen gebruikers invoeren die je niet bedoeld had, maar waar je daarna wel verantwoordelijk voor wordt?",
          "cat": "gegevens",
          "severity": "warning",
          "question": "Welke gegevens kunnen gebruikers invoeren die je niet bedoeld had, maar waar je daarna wel verantwoordelijk voor wordt?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Vrije invoer maakt de verwerking minder voorspelbaar, omdat gebruikers ook gegevens kunnen invoeren die niet waren bedoeld. Daardoor kan bijvangst onderdeel worden van de beoordeling.",
            "commonMistake": "De beoogde invoer wordt beschreven, maar niet wat gebruikers feitelijk kunnen invullen.",
            "whatToCheck": "Welke gegevens kunnen gebruikers invoeren die je niet bedoeld had, maar waar je daarna wel verantwoordelijk voor wordt?",
            "strongerReasoning": "Een sterkere redenering benoemt welke vrije invoer mogelijk is, welke bijvangst kan ontstaan en hoe die wordt beperkt of beheerst.",
            "sources": []
          }
        },
        {
          "id": "onduidelijk",
          "label": "Nog niet duidelijk.",
          "feedback": "Als de verwerking nog niet scherp is, kan de rest van je redenering nog niet dragen. Wat beoordeel je precies?",
          "cat": "verwerking",
          "severity": "blocker",
          "question": "Als de verwerking nog niet scherp is, kan de rest van je redenering nog niet dragen. Wat beoordeel je precies?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als de verwerking nog niet duidelijk is, kan de rest van de DPIA-redenering niet betrouwbaar worden opgebouwd. Dan is eerst afbakening nodig.",
            "commonMistake": "De beoordeling start bij een systeemnaam of initiatief, zonder te beschrijven wat er feitelijk met persoonsgegevens gebeurt.",
            "whatToCheck": "Welke verwerking beoordeel je precies, en welke handelingen met persoonsgegevens horen daarbij?",
            "strongerReasoning": "Een sterkere redenering beschrijft de concrete handelingen met persoonsgegevens, de context waarin die plaatsvinden en wat buiten scope blijft.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "schets",
      "number": 3,
      "title": "Wat is al concreet?",
      "intro": "Selecteer alleen wat je in gewone taal kunt uitleggen.",
      "type": "multi",
      "minimumForGreen": 4,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "verwerking",
      "lowSelectionFeedback": "Als je minder dan vier onderdelen concreet hebt, bouw je waarschijnlijk op aannames. Welke schakel ontbreekt eerst?",
      "lowSelectionQuestion": "Welke onderdelen van de verwerkingsschets ontbreken nog?",
      "options": [
        {
          "id": "doel",
          "label": "Doel",
          "feedback": "Kun je het doel formuleren zonder woorden als efficiëntie, gemak of innovatie als eindpunt te gebruiken?",
          "cat": "doel",
          "severity": "positive",
          "question": "Kun je het doel formuleren zonder woorden als efficiëntie, gemak of innovatie als eindpunt te gebruiken?",
          "strength": "Doel is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een benoemd doel is pas bruikbaar als het meer zegt dan dat de verwerking handig of efficiënt is. Het doel moet richting geven aan noodzaak en proportionaliteit.",
            "commonMistake": "Efficiëntie, gemak of innovatie wordt als doel beschreven, terwijl het inhoudelijke procesdoel onduidelijk blijft.",
            "whatToCheck": "Kun je het doel formuleren zonder woorden als efficiëntie, gemak of innovatie als eindpunt te gebruiken?",
            "strongerReasoning": "Een sterkere redenering benoemt welk inhoudelijk doel wordt gediend en waarom juist persoonsgegevens daarvoor nodig zijn.",
            "sources": []
          }
        },
        {
          "id": "gegevens",
          "label": "Gegevenssoorten",
          "feedback": "Kun je benoemen welke gegevens nodig zijn, en welke gegevens alleen kunnen meekomen als bijvangst?",
          "cat": "gegevens",
          "severity": "positive",
          "question": "Kun je benoemen welke gegevens nodig zijn, en welke gegevens alleen kunnen meekomen als bijvangst?",
          "strength": "Gegevenssoorten zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Gegevenssoorten dragen de risicobeoordeling. Zonder onderscheid tussen noodzakelijke gegevens en bijvangst blijft de beoordeling te algemeen.",
            "commonMistake": "Er wordt gesproken over persoonsgegevens in algemene zin, zonder te specificeren welke gegevens echt nodig zijn.",
            "whatToCheck": "Kun je benoemen welke gegevens nodig zijn, en welke gegevens alleen kunnen meekomen als bijvangst?",
            "strongerReasoning": "Een sterkere redenering onderscheidt noodzakelijke gegevens, mogelijke bijvangst en gegevens die vooraf uitgesloten moeten worden.",
            "sources": []
          }
        },
        {
          "id": "betrokkenen",
          "label": "Betrokkenen",
          "feedback": "Welke betrokkenen kunnen geraakt worden, ook als zij niet de primaire gebruiker zijn?",
          "cat": "gegevens",
          "severity": "positive",
          "question": "Welke betrokkenen kunnen geraakt worden, ook als zij niet de primaire gebruiker zijn?",
          "strength": "Betrokkenen zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Betrokkenen zijn niet altijd alleen de directe gebruikers van een systeem. Ook personen over wie gegevens worden vastgelegd of afgeleid kunnen geraakt worden.",
            "commonMistake": "De beoordeling beperkt zich tot gebruikers, terwijl andere personen in documenten, communicatie of output buiten beeld blijven.",
            "whatToCheck": "Welke betrokkenen kunnen geraakt worden, ook als zij niet de primaire gebruiker zijn?",
            "strongerReasoning": "Een sterkere redenering benoemt alle groepen betrokkenen die redelijkerwijs geraakt kunnen worden en hoe de impact per groep kan verschillen.",
            "sources": []
          }
        },
        {
          "id": "handelingen",
          "label": "Verwerkingshandelingen",
          "feedback": "Kun je per gegevenssoort zeggen wat ermee gebeurt?",
          "cat": "verwerking",
          "severity": "positive",
          "question": "Kun je per gegevenssoort zeggen wat ermee gebeurt?",
          "strength": "Verwerkingshandelingen zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Verwerkingshandelingen maken zichtbaar wat er feitelijk gebeurt. Zonder die handelingen blijft onduidelijk waar risico, noodzaak en maatregelen op zien.",
            "commonMistake": "De applicatie wordt beschreven, maar verzamelen, raadplegen, delen, analyseren of bewaren blijven impliciet.",
            "whatToCheck": "Kun je per gegevenssoort zeggen wat ermee gebeurt?",
            "strongerReasoning": "Een sterkere redenering koppelt gegevenssoorten aan concrete handelingen en maakt duidelijk waar de verwerking begint en eindigt.",
            "sources": []
          }
        },
        {
          "id": "partijen",
          "label": "Partijen en rollen",
          "feedback": "Wie kan feitelijk iets met de gegevens doen, en klopt dat met de formele rolverdeling?",
          "cat": "keten",
          "severity": "positive",
          "question": "Wie kan feitelijk iets met de gegevens doen, en klopt dat met de formele rolverdeling?",
          "strength": "Partijen en rollen zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Partijen en rollen bepalen wie invloed heeft op gegevens en wie verantwoordelijkheid draagt. Formele rollen zijn pas bruikbaar als ze passen bij feitelijke toegang en invloed.",
            "commonMistake": "De formele verwerkersrol wordt genoemd, maar feitelijke toegang, beheer of zeggenschap blijft onduidelijk.",
            "whatToCheck": "Wie kan feitelijk iets met de gegevens doen, en klopt dat met de formele rolverdeling?",
            "strongerReasoning": "Een sterkere redenering maakt expliciet wie verantwoordelijke, verwerker, beheerder of ontvanger is en welke feitelijke toegang daarbij hoort.",
            "sources": []
          }
        },
        {
          "id": "beheer",
          "label": "Opslag, beheer of lifecycle",
          "feedback": "Wie kan de gegevens later vinden, corrigeren, verwijderen of overdragen?",
          "cat": "keten",
          "severity": "positive",
          "question": "Wie kan de gegevens later vinden, corrigeren, verwijderen of overdragen?",
          "strength": "Beheer of lifecycle is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Opslag, beheer en lifecycle bepalen of gegevens later nog vindbaar, corrigeerbaar of verwijderbaar zijn. Dat raakt zowel risico als uitvoerbaarheid van maatregelen.",
            "commonMistake": "De beoordeling stopt bij ingebruikname, terwijl bewaartermijn, beheer en verwijdering bepalend zijn voor het restrisico.",
            "whatToCheck": "Wie kan de gegevens later vinden, corrigeren, verwijderen of overdragen?",
            "strongerReasoning": "Een sterkere redenering beschrijft opslag, bewaartermijn, beheer en lifecycle op een manier die later controleerbaar blijft.",
            "sources": []
          }
        },
        {
          "id": "geen",
          "label": "Geen van deze onderdelen is scherp.",
          "feedback": "Dan is de DPIA nog geen schrijfopgave maar een verkenningsopgave. Welke ene werkzin kun je al wel formuleren?",
          "cat": "verwerking",
          "severity": "blocker",
          "question": "Dan is de DPIA nog geen schrijfopgave maar een verkenningsopgave. Welke ene werkzin kun je al wel formuleren?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als geen enkel onderdeel scherp is, is de DPIA nog vooral een verkenning. Dan moet eerst de kern van de verwerking in gewone taal worden geformuleerd.",
            "commonMistake": "Er wordt al aan een DPIA-tekst begonnen terwijl nog niet duidelijk is wat precies wordt beoordeeld.",
            "whatToCheck": "Welke ene werkzin beschrijft de verwerking die je onderzoekt?",
            "strongerReasoning": "Een sterkere redenering begint met één toetsbare zin over verwerking, gegevens, betrokkenen en context voordat verdere beoordeling plaatsvindt.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "doel",
      "number": 4,
      "title": "Wat is het doel?",
      "intro": "Kies de beste omschrijving van het doel. Een doel is niet hetzelfde als een voordeel.",
      "type": "single",
      "options": [
        {
          "id": "kernproces",
          "label": "Het doel hangt samen met een concreet proces.",
          "feedback": "Kun je aanwijzen welk proces dit is en waarom persoonsgegevens daarin nodig zijn?",
          "cat": "doel",
          "severity": "info",
          "question": "Kun je aanwijzen welk proces dit is en waarom persoonsgegevens daarin nodig zijn?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een concreet proces helpt om doel en noodzaak te toetsen. De vraag is of het proces echt richting geeft aan waarom persoonsgegevens nodig zijn.",
            "commonMistake": "Een procesnaam wordt genoemd zonder duidelijk te maken welke taak of handeling persoonsgegevens noodzakelijk maakt.",
            "whatToCheck": "Kun je aanwijzen welk proces dit is en waarom persoonsgegevens daarin nodig zijn?",
            "strongerReasoning": "Een sterkere redenering verbindt het doel aan een concreet proces en maakt duidelijk welke persoonsgegevens daarin functioneel nodig zijn.",
            "sources": []
          }
        },
        {
          "id": "efficiency",
          "label": "Het doel is vooral efficiëntie, gemak of betere vindbaarheid.",
          "feedback": "Veel projecten beginnen met een wens als sneller werken, makkelijker zoeken of minder handmatig werk. Dat zijn voordelen van een oplossing, maar nog niet het doel van de verwerking. Welk proces, welke taak of welk probleem moet door deze verwerking mogelijk worden gemaakt?",
          "cat": "doel",
          "severity": "warning",
          "question": "Veel projecten starten vanuit een wens als sneller werken, makkelijker zoeken of minder handmatig werk. Dat zijn begrijpelijke voordelen. Welke taak, welk proces of welk probleem moet door deze verwerking inhoudelijk worden ondersteund?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Efficiëntie, gemak of betere vindbaarheid klinken vaak als logische doelen. In de praktijk zijn het meestal voordelen van een gekozen oplossing. Voor een DPIA is de vraag niet hoe de oplossing werkt, maar welk proces, welke taak of welk probleem ermee wordt ondersteund. Pas als dat duidelijk is, kun je beoordelen of de verwerking noodzakelijk en proportioneel is.",
            "commonMistake": "Projecten starten vaak vanuit een wens om sneller, eenvoudiger of met minder handmatig werk te kunnen werken. Daardoor verschuift de aandacht ongemerkt naar de voordelen van de oplossing. Het eigenlijke doel van de verwerking blijft dan op de achtergrond, terwijl juist dat doel bepaalt of de verwerking noodzakelijk en proportioneel is.",
            "whatToCheck": "Stel dat de gekozen oplossing morgen wordt vervangen door een andere oplossing. Welk proces, welke taak of welk probleem moet dan nog steeds worden ondersteund? Dat antwoord ligt meestal dichter bij het werkelijke doel van de verwerking dan termen als efficiëntie, gemak of betere vindbaarheid.",
            "strongerReasoning": "Een sterkere redenering maakt eerst duidelijk welk proces, welke taak of welk probleem wordt ondersteund. Daarna beschrijft zij welke voordelen de gekozen oplossing oplevert. Zo blijft zichtbaar dat betere vindbaarheid, gebruiksgemak of efficiëntie het gevolg zijn van de oplossing en niet het doel van de verwerking.",
            "sources": []
          }
        },
        {
          "id": "innovatie",
          "label": "Het doel is verkennen, leren of experimenteren.",
          "feedback": "Een experiment kan legitiem zijn, maar dan moet juist klein, tijdelijk en begrensd worden begonnen. Waar ligt de stopknop?",
          "cat": "besluit",
          "severity": "warning",
          "question": "Een experiment kan legitiem zijn, maar dan moet juist klein, tijdelijk en begrensd worden begonnen. Waar ligt de stopknop?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Verkennen of experimenteren vraagt juist om duidelijke begrenzing. Zonder stopknop kan tijdelijk leren uitgroeien tot structurele verwerking.",
            "commonMistake": "Een experiment wordt ruim opgezet zonder vooraf te bepalen wanneer het stopt, wordt aangepast of niet doorgaat.",
            "whatToCheck": "Waar ligt de stopknop als het experiment niet het gewenste effect heeft?",
            "strongerReasoning": "Een sterkere redenering beschrijft doel, duur, scope, evaluatiecriteria en besluitmomenten van de verkenning.",
            "sources": []
          }
        },
        {
          "id": "onduidelijk",
          "label": "Het doel is nog niet scherp.",
          "feedback": "Als het doel niet scherp is, kun je noodzaak, grondslag en proportionaliteit nog niet betrouwbaar beoordelen.",
          "cat": "doel",
          "severity": "blocker",
          "question": "Als het doel niet scherp is, kun je noodzaak, grondslag en proportionaliteit nog niet betrouwbaar beoordelen.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een onscherp doel maakt noodzakelijkheid en proportionaliteit moeilijk toetsbaar. Eerst moet duidelijk zijn wat de verwerking moet bereiken.",
            "commonMistake": "De oplossing of wens is al gekozen, terwijl het onderliggende doel nog niet precies is gemaakt.",
            "whatToCheck": "Welk doel probeer je precies te bereiken en waarom zijn persoonsgegevens daarvoor nodig?",
            "strongerReasoning": "Een sterkere redenering formuleert het doel zo concreet dat alternatieven en dataminimalisatie beoordeeld kunnen worden.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "noodzaak",
      "number": 5,
      "title": "Waarom is juist deze verwerking nodig?",
      "intro": "Toets hier of de verwerking meer is dan handig.",
      "type": "single",
      "options": [
        {
          "id": "onderbouwd",
          "label": "Er is onderbouwd waarom deze gegevens en handelingen nodig zijn.",
          "feedback": "Welke minder ingrijpende alternatieven zijn onderzocht en waarom vallen die af?",
          "cat": "doel",
          "severity": "info",
          "question": "Welke minder ingrijpende alternatieven zijn onderzocht en waarom vallen die af?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Ook wanneer noodzaak is onderbouwd, blijft de vraag of minder ingrijpende alternatieven serieus zijn bekeken. Dat voorkomt dat de gekozen oplossing vanzelfsprekend wordt gemaakt.",
            "commonMistake": "De onderbouwing richt zich op de gekozen verwerking, maar vergelijkt onvoldoende met minder ingrijpende varianten.",
            "whatToCheck": "Welke minder ingrijpende alternatieven zijn onderzocht en waarom vallen die af?",
            "strongerReasoning": "Een sterkere redenering laat zien welke alternatieven zijn gewogen en waarom de gekozen verwerking noodzakelijk blijft.",
            "sources": []
          }
        },
{
  "id": "gewenst",
  "label": "De verwerking is vooral gewenst omdat zij makkelijker of sneller werkt.",
  "feedback": "Sneller werken, minder handmatig werk of meer gebruiksgemak kunnen goede redenen zijn om een oplossing aantrekkelijk te vinden. Daarmee is nog niet duidelijk waarom juist deze persoonsgegevens op deze manier moeten worden verwerkt. Welke inhoudelijke noodzaak maakt deze verwerking volgens jou onmisbaar?",
  "cat": "doel",
  "severity": "warning",
  "question": "Stel dat de verwerking meer tijd en moeite zou kosten dan nu. Welk doel of welke taak moet dan nog steeds worden uitgevoerd? Dat helpt om onderscheid te maken tussen wat wenselijk is en wat werkelijk noodzakelijk is.",
  "strength": "",
  "explanation": {
    "title": "Waarom deze keuze aandacht vraagt",
    "why": "Veel verwerkingen beginnen vanuit een begrijpelijke wens: sneller werken, minder administratieve last of betere dienstverlening. Dat maakt een verwerking aantrekkelijk, maar zegt nog weinig over de vraag waarom juist deze persoonsgegevens nodig zijn. Voor een DPIA is het belangrijk om te kunnen uitleggen waarom het doel niet op een minder ingrijpende manier bereikt kan worden.",
    "commonMistake": "Mensen verwarren wenselijkheid vaak met noodzakelijkheid. Omdat een oplossing duidelijke voordelen oplevert, ontstaat al snel de indruk dat dezelfde oplossing ook noodzakelijk moet zijn. Daardoor wordt onvoldoende onderzocht of hetzelfde doel met minder gegevens, minder toegang of een andere werkwijze kan worden bereikt.",
    "whatToCheck": "Vraag jezelf af wat er gebeurt als deze verwerking niet wordt uitgevoerd. Welk doel kan dan niet meer worden bereikt, welke taak kan niet meer worden uitgevoerd of welk probleem blijft dan bestaan? Als dat lastig te beantwoorden is, is mogelijk vooral de wenselijkheid van de oplossing beschreven en nog niet de noodzaak van de verwerking.",
    "strongerReasoning": "Een sterkere redenering legt eerst uit welk doel moet worden bereikt en waarom dat doel belangrijk is. Daarna wordt onderbouwd waarom juist deze verwerking daarvoor nodig is en welke alternatieven zijn overwogen. Zo wordt zichtbaar dat de verwerking niet alleen handig of efficiënt is, maar daadwerkelijk noodzakelijk om het doel te bereiken.",
    "sources": []
  }
}
        {
          "id": "alles",
          "label": "We willen breed starten en later beperken.",
          "feedback": "Dat draait dataminimalisatie om. Welke gegevens kun je juist vooraf uitsluiten?",
          "cat": "gegevens",
          "severity": "warning",
          "question": "Dat draait dataminimalisatie om. Welke gegevens kun je juist vooraf uitsluiten?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Breed starten en later beperken keert dataminimalisatie om. De DPIA moet juist zichtbaar maken wat vooraf buiten scope kan blijven.",
            "commonMistake": "Er wordt gekozen voor ruime verwerking uit voorzorg of gemak, zonder vooraf te bepalen wat niet nodig is.",
            "whatToCheck": "Welke gegevens kun je vooraf uitsluiten zonder het doel onmogelijk te maken?",
            "strongerReasoning": "Een sterkere redenering begint met de kleinste gegevensset die het doel kan dragen en motiveert elke uitbreiding apart.",
            "sources": []
          }
        },
        {
          "id": "niet_beoordeeld",
          "label": "Alternatieven zijn nog niet beoordeeld.",
          "feedback": "Dan is noodzakelijkheid nog een aanname. Welke variant verwerkt minder gegevens of geeft betrokkenen meer grip?",
          "cat": "doel",
          "severity": "blocker",
          "question": "Dan is noodzakelijkheid nog een aanname. Welke variant verwerkt minder gegevens of geeft betrokkenen meer grip?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als alternatieven nog niet zijn beoordeeld, blijft noodzakelijkheid een aanname. Dan kan de DPIA nog niet laten zien waarom deze verwerking de minst ingrijpende passende route is.",
            "commonMistake": "De gekozen oplossing wordt als noodzakelijk behandeld voordat beperktere alternatieven zijn onderzocht.",
            "whatToCheck": "Welke minder ingrijpende variant verwerkt minder gegevens of geeft betrokkenen meer grip?",
            "strongerReasoning": "Een sterkere redenering vergelijkt varianten op gegevensgebruik, impact en uitvoerbaarheid voordat de gekozen route wordt onderbouwd.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "gegevens",
      "number": 6,
      "title": "Welke gegevens kunnen meekomen?",
      "intro": "Kijk niet alleen naar bedoelde gegevens. Vrije invoer, context en output kunnen meer bevatten dan vooraf voorzien.",
      "type": "multi",
      "minimumForGreen": 3,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "gegevens",
      "lowSelectionFeedback": "Als gegevenscategorieën nog niet concreet zijn, blijft de risicobeoordeling te abstract.",
      "lowSelectionQuestion": "Welke gegevenscategorieën zijn nog onzeker?",
      "options": [
        {
          "id": "identificerend",
          "label": "Identificerende gegevens.",
          "feedback": "Welke identificerende gegevens zijn echt nodig en welke kunnen worden beperkt?",
          "cat": "gegevens",
          "severity": "positive",
          "question": "Welke identificerende gegevens zijn echt nodig en welke kunnen worden beperkt?",
          "strength": "Identificerende gegevens zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Identificerende gegevens zijn vaak logisch in een proces, maar niet altijd in dezelfde omvang nodig. De verdieping richt zich op begrenzing.",
            "commonMistake": "Alle identificerende gegevens worden meegenomen omdat ze beschikbaar zijn, niet omdat ze aantoonbaar nodig zijn.",
            "whatToCheck": "Welke identificerende gegevens zijn echt nodig en welke kunnen worden beperkt?",
            "strongerReasoning": "Een sterkere redenering benoemt per identificerend gegeven waarom het nodig is en welke beperking, pseudonimisering of weglating mogelijk is.",
            "sources": []
          }
        },
        {
          "id": "vrije_tekst",
          "label": "Vrije tekst, documenten of communicatie.",
          "feedback": "Vrije tekst kan gevoelige bijvangst bevatten. Hoe begrens je invoer en gebruik?",
          "cat": "gegevens",
          "severity": "warning",
          "question": "Vrije tekst kan gevoelige bijvangst bevatten. Hoe begrens je invoer en gebruik?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Vrije tekst, documenten en communicatie kunnen meer persoonsgegevens bevatten dan vooraf bedoeld. Daardoor ontstaat bijvangst die de scope en risico’s vergroot.",
            "commonMistake": "De beoogde inhoud wordt beoordeeld, terwijl gevoelige of irrelevante bijvangst in vrije invoer buiten beeld blijft.",
            "whatToCheck": "Hoe begrens je vrije tekst, documenten of communicatie zodat gevoelige bijvangst niet onnodig wordt verwerkt?",
            "strongerReasoning": "Een sterkere redenering beschrijft welke invoer is toegestaan, welke bijvangst reëel is en welke technische of organisatorische begrenzing nodig is.",
            "sources": []
          }
        },
        {
          "id": "output",
          "label": "Output over personen.",
          "feedback": "Wanneer kan output feitelijk invloed krijgen op beoordeling, begeleiding of besluitvorming over personen?",
          "cat": "risico",
          "severity": "warning",
          "question": "Wanneer kan output feitelijk invloed krijgen op beoordeling, begeleiding of besluitvorming over personen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Output over personen kan ook persoonsgegevens zijn, zeker wanneer die output wordt gebruikt in beoordeling of besluitvorming. Het gebruik van output bepaalt de impact.",
            "commonMistake": "Output wordt gezien als systeemresultaat en niet als informatie die gevolgen kan hebben voor betrokkenen.",
            "whatToCheck": "Wanneer kan output feitelijk invloed krijgen op beoordeling, begeleiding of besluitvorming over personen?",
            "strongerReasoning": "Een sterkere redenering maakt duidelijk welke output over personen ontstaat, hoe betrouwbaar die is en welke rol die output in het proces krijgt.",
            "sources": []
          }
        },
        {
          "id": "bijzonder",
          "label": "Bijzondere of strafrechtelijke gegevens kunnen meekomen.",
          "feedback": "Als deze gegevens kunnen meekomen, moet je scherper onderbouwen waarom dat kan worden voorkomen of rechtmatig is.",
          "cat": "recht",
          "severity": "blocker",
          "question": "Als deze gegevens kunnen meekomen, moet je scherper onderbouwen waarom dat kan worden voorkomen of rechtmatig is.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Bijzondere of strafrechtelijke gegevens vragen extra scherpte omdat zij de impact en rechtmatigheidsvraag kunnen veranderen. Ook mogelijke bijvangst moet worden meegenomen.",
            "commonMistake": "Er wordt alleen gekeken naar bedoelde gegevens, terwijl gevoelige gegevens redelijkerwijs kunnen meekomen.",
            "whatToCheck": "Waarom kunnen bijzondere of strafrechtelijke gegevens worden voorkomen of rechtmatig worden verwerkt?",
            "strongerReasoning": "Een sterkere redenering beschrijft of deze gegevens kunnen voorkomen, hoe dat wordt voorkomen en welke route nodig is als voorkomen niet realistisch is.",
            "sources": []
          }
        },
        {
          "id": "onbekend",
          "label": "De gegevenscategorieën zijn nog onbekend.",
          "feedback": "Dan is het risico nog niet toetsbaar. Eerst moet duidelijk zijn welke gegevens redelijkerwijs kunnen worden verwerkt.",
          "cat": "gegevens",
          "severity": "blocker",
          "question": "Dan is het risico nog niet toetsbaar. Eerst moet duidelijk zijn welke gegevens redelijkerwijs kunnen worden verwerkt.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als gegevenscategorieën onbekend zijn, blijft het risico te abstract. Eerst moet zichtbaar worden welke gegevens redelijkerwijs kunnen worden verwerkt.",
            "commonMistake": "De risicobeoordeling wordt gestart zonder concreet beeld van gegevenssoorten, betrokkenen en bijvangst.",
            "whatToCheck": "Welke gegevens kunnen redelijkerwijs worden verwerkt en welke bijvangst kan meekomen?",
            "strongerReasoning": "Een sterkere redenering benoemt gegevenscategorieën, herkomst, betrokkenen en mogelijke bijvangst voordat risico’s worden beoordeeld.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "keten",
      "number": 7,
      "title": "Kan de keten de redenering dragen?",
      "intro": "Een DPIA wordt zwak als opslag, toegang, leverancier, beheer of wijziging buiten beeld blijven.",
      "type": "multi",
      "minimumForGreen": 4,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "keten",
      "lowSelectionFeedback": "Als ketenonderdelen ontbreken, is de uitvoerbaarheid van maatregelen nog onzeker.",
      "lowSelectionQuestion": "Welke ketenschakel ontbreekt nog?",
      "options": [
        {
          "id": "opslag",
          "label": "Opslaglocatie is bekend.",
          "feedback": "Welke gegevens staan waar, hoe lang, en onder welk beheer?",
          "cat": "keten",
          "severity": "positive",
          "question": "Welke gegevens staan waar, hoe lang, en onder welk beheer?",
          "strength": "Opslaglocatie is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Opslaglocatie maakt uit voor beheer, toegang, bewaartermijn en controle. Zonder opslagbeeld is niet duidelijk waar maatregelen op aangrijpen.",
            "commonMistake": "Er wordt aangenomen dat gegevens veilig staan, zonder te beschrijven waar ze staan en onder welk beheer.",
            "whatToCheck": "Welke gegevens staan waar, hoe lang, en onder welk beheer?",
            "strongerReasoning": "Een sterkere redenering koppelt gegevenssoorten aan opslaglocaties, beheerafspraken en bewaartermijnen.",
            "sources": []
          }
        },
        {
          "id": "toegang",
          "label": "Toegang en autorisaties zijn bekend.",
          "feedback": "Wie kan feitelijk bij gegevens, output en logging?",
          "cat": "keten",
          "severity": "positive",
          "question": "Wie kan feitelijk bij gegevens, output en logging?",
          "strength": "Toegang is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Toegang bepaalt wie gegevens feitelijk kan gebruiken of beïnvloeden. Autorisaties moeten daarom ook output, logging en beheer omvatten.",
            "commonMistake": "Toegang wordt alleen formeel beschreven, terwijl feitelijke toegang via beheer, logging of exports buiten beeld blijft.",
            "whatToCheck": "Wie kan feitelijk bij gegevens, output en logging?",
            "strongerReasoning": "Een sterkere redenering beschrijft per rol welke toegang bestaat, waarom die nodig is en hoe afwijkingen worden gecontroleerd.",
            "sources": []
          }
        },
        {
          "id": "leverancier",
          "label": "Leverancier en subverwerkers zijn bekend.",
          "feedback": "Welke partijen kunnen persoonsgegevens verwerken of metadata zien?",
          "cat": "keten",
          "severity": "positive",
          "question": "Welke partijen kunnen persoonsgegevens verwerken of metadata zien?",
          "strength": "Leverancier en subverwerkers zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Leveranciers en subverwerkers kunnen invloed hebben op gegevens, metadata en beheer. Hun feitelijke rol moet passen bij de formele afspraken.",
            "commonMistake": "De leverancier wordt genoemd als contractpartij, maar subverwerking, metadata en beheerhandelingen blijven onbesproken.",
            "whatToCheck": "Welke partijen kunnen persoonsgegevens verwerken of metadata zien?",
            "strongerReasoning": "Een sterkere redenering beschrijft alle relevante partijen, hun rol, toegang, locatie en afhankelijkheden.",
            "sources": []
          }
        },
        {
          "id": "bewaartermijn",
          "label": "Bewaartermijn of verwijdering is bekend.",
          "feedback": "Wie borgt verwijdering en hoe wordt dat aantoonbaar?",
          "cat": "keten",
          "severity": "positive",
          "question": "Wie borgt verwijdering en hoe wordt dat aantoonbaar?",
          "strength": "Bewaartermijn of verwijdering is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Bewaartermijn en verwijdering bepalen hoe lang risico’s blijven bestaan. Een afspraak is pas sterk als de uitvoering aantoonbaar is.",
            "commonMistake": "Er wordt een bewaartermijn genoemd zonder te beschrijven wie verwijdert en hoe dat wordt gecontroleerd.",
            "whatToCheck": "Wie borgt verwijdering en hoe wordt dat aantoonbaar?",
            "strongerReasoning": "Een sterkere redenering maakt zichtbaar wanneer gegevens verdwijnen, wie dat uitvoert en hoe uitzonderingen of back-ups worden behandeld.",
            "sources": []
          }
        },
        {
          "id": "wijziging",
          "label": "Wijzigingen in inrichting of gebruik worden beheerst.",
          "feedback": "Wat gebeurt er als functionaliteit, model, brondata of gebruiksdoel verandert?",
          "cat": "besluit",
          "severity": "warning",
          "question": "Wat gebeurt er als functionaliteit, model, brondata of gebruiksdoel verandert?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Wijzigingen in inrichting, brondata of gebruik kunnen de oorspronkelijke DPIA-redenering ondermijnen. Daarom moet duidelijk zijn wanneer herbeoordeling nodig is.",
            "commonMistake": "De beoordeling gaat uit van de startsituatie en mist triggers voor wijzigingen in functionaliteit, data of gebruik.",
            "whatToCheck": "Wat gebeurt er als functionaliteit, model, brondata of gebruiksdoel verandert?",
            "strongerReasoning": "Een sterkere redenering benoemt wijzigingstriggers, eigenaarschap en het moment waarop de DPIA opnieuw moet worden bekeken.",
            "sources": []
          }
        },
        {
          "id": "onduidelijk",
          "label": "De keten is nog onduidelijk.",
          "feedback": "Dan kun je maatregelen nog niet goed koppelen aan risico’s. Welke partij of gegevensstroom ontbreekt?",
          "cat": "keten",
          "severity": "blocker",
          "question": "Dan kun je maatregelen nog niet goed koppelen aan risico’s. Welke partij of gegevensstroom ontbreekt?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een onduidelijke keten maakt maatregelen moeilijk toetsbaar, omdat niet zichtbaar is waar gegevens lopen en wie invloed heeft. Dan ontbreekt uitvoerbaarheid.",
            "commonMistake": "De verwerking wordt beschreven alsof zij in één systeem plaatsvindt, terwijl partijen, rollen of gegevensstromen ontbreken.",
            "whatToCheck": "Welke partij, rol of gegevensstroom ontbreekt nog in je beschrijving?",
            "strongerReasoning": "Een sterkere redenering tekent de keten uit in opslag, toegang, leveranciers, beheer en overdrachten, zodat risico’s en maatregelen te koppelen zijn.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "rechtmatigheid",
      "number": 8,
      "title": "Waarop rust de rechtmatigheid?",
      "intro": "Kies geen grondslag om de rest passend te maken. De juridische route moet volgen uit doel, noodzaak en context.",
      "type": "single",
      "options": [
        {
          "id": "procesvolgend",
          "label": "De grondslag volgt uit het onderliggende proces.",
          "feedback": "Is beschreven welk proces dat is en waarom deze verwerking daarbinnen noodzakelijk is?",
          "cat": "recht",
          "severity": "info",
          "question": "Is beschreven welk proces dat is en waarom deze verwerking daarbinnen noodzakelijk is?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als de grondslag uit het proces volgt, moet zichtbaar zijn welk proces dat is en waarom deze verwerking daarin past. Anders blijft de grondslag te abstract.",
            "commonMistake": "Er wordt naar het proces verwezen zonder te laten zien welke concrete taak of noodzaak de verwerking draagt.",
            "whatToCheck": "Is beschreven welk proces dat is en waarom deze verwerking daarbinnen noodzakelijk is?",
            "strongerReasoning": "Een sterkere redenering verbindt grondslag, doel en noodzakelijkheid aan een concreet proces en niet alleen aan een organisatietaak in algemene zin.",
            "sources": []
          }
        },
{
  "id": "publieke_taak",
  "label": "Er wordt verwezen naar publieke taak.",
  "feedback": "Bij organisaties met een publieke taak is het logisch om naar die taak te verwijzen. Daarmee is nog niet automatisch duidelijk waarom juist deze verwerking nodig is. Welke concrete taak, verantwoordelijkheid of wettelijke opdracht wordt met deze verwerking ondersteund?",
  "cat": "recht",
  "severity": "warning",
  "question": "Stel dat iemand vraagt waarom juist deze persoonsgegevens worden verwerkt. Kun je dan uitleggen welke concrete taak of verantwoordelijkheid zonder deze verwerking niet goed uitgevoerd kan worden?",
  "strength": "",
  "explanation": {
    "title": "Waarom deze keuze aandacht vraagt",
    "why": "Publieke organisaties voeren veel taken uit in het algemeen belang. Daardoor ontstaat gemakkelijk de indruk dat een verwerking automatisch gerechtvaardigd is zodra deze raakt aan een publieke taak. Voor een DPIA is dat nog niet voldoende. De vraag blijft welke concrete taak wordt ondersteund en waarom juist deze verwerking daarvoor nodig is.",
    "commonMistake": "De verwijzing naar een publieke taak wordt soms gebruikt als eindpunt van de redenering. Daardoor blijft onduidelijk welke specifieke taak wordt uitgevoerd, waarom persoonsgegevens daarbij nodig zijn en of dezelfde taak ook op een minder ingrijpende manier kan worden ondersteund.",
    "whatToCheck": "Kun je de publieke taak zo concreet mogelijk benoemen? Beschrijf vervolgens welke rol deze verwerking daarin speelt. Als de verwerking wordt weggedacht, welk onderdeel van de taak kan dan niet meer of niet meer op dezelfde manier worden uitgevoerd?",
    "strongerReasoning": "Een sterkere redenering begint niet bij de grondslag, maar bij de taak die moet worden uitgevoerd. Daarna wordt uitgelegd waarom persoonsgegevens nodig zijn om die taak uit te voeren en waarom een minder ingrijpende verwerking onvoldoende is. Zo volgt de rechtmatigheid uit de redenering, in plaats van andersom.",
    "sources": []
  }
}
        {
          "id": "toestemming",
          "label": "Er wordt aan toestemming gedacht.",
          "feedback": "Toestemming is kwetsbaar als weigeren niet reëel is. Is toestemming hier echt vrij?",
          "cat": "recht",
          "severity": "warning",
          "question": "Toestemming is kwetsbaar als weigeren niet reëel is. Is toestemming hier echt vrij?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Toestemming vraagt om vrijwilligheid, specificiteit en een reële mogelijkheid om te weigeren. In afhankelijkheidsrelaties is dat vaak kwetsbaar.",
            "commonMistake": "Toestemming wordt gekozen omdat het eenvoudig lijkt, zonder te toetsen of weigeren of intrekken werkelijk mogelijk is.",
            "whatToCheck": "Waarom is toestemming hier vrij, specifiek en werkelijk te weigeren?",
            "strongerReasoning": "Een sterkere redenering laat zien waarom toestemming passend is of waarom een andere juridische route beter aansluit bij de context.",
            "sources": []
          }
        },
        {
          "id": "nog_niet",
          "label": "De juridische route is nog niet bepaald.",
          "feedback": "Dan mag je nog geen rechtmatigheidsconclusie trekken.",
          "cat": "recht",
          "severity": "blocker",
          "question": "Dan mag je nog geen rechtmatigheidsconclusie trekken.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als de juridische route nog niet is bepaald, kan de DPIA nog geen rechtmatigheidsconclusie dragen. Eerst moeten doel, noodzaak en context voldoende scherp zijn.",
            "commonMistake": "Er wordt al richting een conclusie geschreven terwijl de grondslag nog niet uit de redenering volgt.",
            "whatToCheck": "Welke juridische route verwacht je te onderbouwen, en waarop baseer je die?",
            "strongerReasoning": "Een sterkere redenering kiest de juridische route pas nadat verwerking, doel, noodzaak en betrokken context expliciet zijn gemaakt.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "risico",
      "number": 9,
      "title": "Wat kan misgaan voor betrokkenen?",
      "intro": "Vink alle risico’s aan die op dit moment redelijkerwijs kunnen spelen. Meer dan één risico mag.",
      "type": "multi",
      "minimumForGreen": 1,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "risico",
      "lowSelectionFeedback": "Als geen risico is geselecteerd, kijk je mogelijk nog naar techniek of organisatie in plaats van naar gevolgen voor betrokkenen.",
      "lowSelectionQuestion": "Welk concreet gevolg voor betrokkenen kan ontstaan?",
      "options": [
        {
          "id": "gripverlies",
          "label": "Betrokkenen verliezen grip op hun gegevens.",
          "feedback": "Waardoor verliest iemand grip: onbekende verwerking, onduidelijke toegang, hergebruik of lastig verwijderbare gegevens?",
          "cat": "risico",
          "severity": "warning",
          "question": "Waardoor verliest iemand grip: onbekende verwerking, onduidelijke toegang, hergebruik of lastig verwijderbare gegevens?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Gripverlies ontstaat wanneer betrokkenen niet meer kunnen overzien waar gegevens terechtkomen of hoe zij worden gebruikt. Dat vraagt om oorzaken en gevolgen.",
            "commonMistake": "Gripverlies wordt genoemd als algemeen risico, zonder te benoemen waardoor betrokkenen controle verliezen.",
            "whatToCheck": "Waardoor verliest iemand grip: onbekende verwerking, onduidelijke toegang, hergebruik of lastig verwijderbare gegevens?",
            "strongerReasoning": "Een sterkere redenering beschrijft welke situatie gripverlies veroorzaakt en welk concreet nadeel of belemmering voor betrokkenen ontstaat.",
            "sources": []
          }
        },
        {
          "id": "onjuiste_informatie",
          "label": "Onjuiste of misleidende informatie over personen wordt gebruikt.",
          "feedback": "Waar kan foutieve informatie terechtkomen en wie kan daarop handelen?",
          "cat": "risico",
          "severity": "warning",
          "question": "Waar kan foutieve informatie terechtkomen en wie kan daarop handelen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Onjuiste informatie wordt pas een privacyrisico als zij ergens wordt gebruikt. De route van fout naar gevolg moet zichtbaar zijn.",
            "commonMistake": "Er wordt gesteld dat informatie fout kan zijn, maar niet wie erop handelt of welk gevolg dat heeft.",
            "whatToCheck": "Waar kan foutieve informatie terechtkomen en wie kan daarop handelen?",
            "strongerReasoning": "Een sterkere redenering laat zien hoe foutieve informatie ontstaat, waar zij terechtkomt en welk effect dit voor betrokkenen kan hebben.",
            "sources": []
          }
        },
        {
          "id": "contextverschuiving",
          "label": "Gegevens worden gebruikt buiten de oorspronkelijke context.",
          "feedback": "Welke contextverschuiving is reëel en welk nadeel kan dat opleveren?",
          "cat": "risico",
          "severity": "warning",
          "question": "Welke contextverschuiving is reëel en welk nadeel kan dat opleveren?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Gegevens die in een andere context worden gebruikt kunnen een andere betekenis of impact krijgen. De oorspronkelijke verwachting van betrokkenen kan daardoor worden doorbroken.",
            "commonMistake": "Hergebruik wordt als efficiënt of logisch gezien, zonder te toetsen of de nieuwe context nog past bij de oorspronkelijke verzameling.",
            "whatToCheck": "Welke contextverschuiving is reëel en welk nadeel kan dat opleveren?",
            "strongerReasoning": "Een sterkere redenering benoemt de oorspronkelijke context, de nieuwe context en het concrete gevolg van die verschuiving voor betrokkenen.",
            "sources": []
          }
        },
        {
          "id": "openbaarmaking",
          "label": "Informatie wordt breder toegankelijk dan bedoeld.",
          "feedback": "Wie krijgt dan toegang, en waarom is dat voor betrokkenen nadelig?",
          "cat": "risico",
          "severity": "warning",
          "question": "Wie krijgt dan toegang, en waarom is dat voor betrokkenen nadelig?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Breder toegankelijke informatie kan leiden tot verlies van vertrouwelijkheid, controle of context. De vraag is wie toegang krijgt en waarom dat ertoe doet.",
            "commonMistake": "Er wordt vooral gekeken naar autorisatie in het systeem, niet naar de gevolgen van bredere vindbaarheid of verspreiding.",
            "whatToCheck": "Wie krijgt dan toegang, en waarom is dat voor betrokkenen nadelig?",
            "strongerReasoning": "Een sterkere redenering beschrijft welke kring toegang krijgt, welke informatie zichtbaar wordt en welk concreet nadeel kan ontstaan.",
            "sources": []
          }
        },
        {
          "id": "rechten",
          "label": "Inzage, correctie of verwijdering wordt moeilijker.",
          "feedback": "Welke rechten worden praktisch moeilijk uitvoerbaar en door welke inrichting komt dat?",
          "cat": "risico",
          "severity": "warning",
          "question": "Welke rechten worden praktisch moeilijk uitvoerbaar en door welke inrichting komt dat?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Inzage, correctie of verwijdering kan praktisch moeilijk worden door verspreiding, afgeleide output of onduidelijke opslag. Dat raakt de uitvoerbaarheid van rechten.",
            "commonMistake": "Rechten worden formeel genoemd, maar niet getoetst aan de feitelijke inrichting van bronnen, kopieën, output en bewaartermijnen.",
            "whatToCheck": "Welke rechten worden praktisch moeilijk uitvoerbaar en door welke inrichting komt dat?",
            "strongerReasoning": "Een sterkere redenering laat zien hoe rechten in de praktijk kunnen worden uitgevoerd en waar aanvullende afspraken of maatregelen nodig zijn.",
            "sources": []
          }
        },
        {
          "id": "nadeel",
          "label": "Er ontstaat nadeel in beoordeling, begeleiding, selectie of besluitvorming.",
          "feedback": "Welke rol krijgt informatie of output in een proces dat gevolgen heeft voor mensen?",
          "cat": "risico",
          "severity": "warning",
          "question": "Welke rol krijgt informatie of output in een proces dat gevolgen heeft voor mensen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Nadeel ontstaat wanneer informatie of output invloed krijgt op beoordeling, begeleiding, selectie of besluitvorming. De rol in het proces moet daarom concreet zijn.",
            "commonMistake": "Er wordt gekeken naar het systeemresultaat, maar niet naar de beslissing of behandeling die daarop kan volgen.",
            "whatToCheck": "Welke rol krijgt informatie of output in een proces dat gevolgen heeft voor mensen?",
            "strongerReasoning": "Een sterkere redenering beschrijft welke processtap wordt beïnvloed, wie beslist en welk gevolg dit voor betrokkenen kan hebben.",
            "sources": []
          }
        },
        {
          "id": "geen_concreet",
          "label": "Ik kan nog geen concreet gevolg voor betrokkenen formuleren.",
          "feedback": "Dan is het risico nog niet toetsbaar. Formuleer eerst het gevolg voor mensen.",
          "cat": "risico",
          "severity": "blocker",
          "question": "Dan is het risico nog niet toetsbaar. Formuleer eerst het gevolg voor mensen.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als er nog geen concreet gevolg voor betrokkenen is, blijft het risico niet toetsbaar. Maatregelen kunnen dan ook niet goed worden gekoppeld.",
            "commonMistake": "Technische of organisatorische onzekerheden worden risico genoemd zonder te vertalen naar gevolgen voor mensen.",
            "whatToCheck": "Welk concreet gevolg kan deze verwerking hebben voor betrokkenen?",
            "strongerReasoning": "Een sterkere redenering formuleert per risico een herkenbaar gevolg voor betrokkenen, met oorzaak en situatie waarin dat gevolg kan ontstaan.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "toetsbaarheid",
      "number": 10,
      "title": "Zijn de risico’s toetsbaar?",
      "intro": "Heb je meerdere risico’s geselecteerd? Zorg dan dat deze op een gelijk begripsniveau staan.",
      "type": "single",
      "options": [
        {
          "id": "toetsbaar",
          "label": "Ja, per risico is oorzaak, gebeurtenis en gevolg te volgen.",
          "feedback": "Controleer nog of elk risico ook zonder vakkennis begrijpelijk is voor een kritische lezer.",
          "cat": "risico",
          "severity": "info",
          "question": "Controleer nog of elk risico ook zonder vakkennis begrijpelijk is voor een kritische lezer.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Ook toetsbare risico’s moeten leesbaar blijven voor een kritische lezer buiten het project. Begrijpelijkheid is onderdeel van controleerbaarheid.",
            "commonMistake": "Risico’s zijn intern logisch, maar leunen op vaktaal of projectkennis die een externe lezer niet heeft.",
            "whatToCheck": "Welk risico vraagt nog extra uitleg zodat een kritische lezer het zonder vakkennis begrijpt?",
            "strongerReasoning": "Een sterkere redenering beschrijft elk risico in gewone taal: oorzaak, gebeurtenis en gevolg voor betrokkenen.",
            "sources": []
          }
        },
        {
          "id": "te_abstract",
          "label": "De risico’s zijn nog te abstract.",
          "feedback": "Woorden als privacyrisico of leveranciersrisico zijn nog geen gevolg voor betrokkenen.",
          "cat": "risico",
          "severity": "warning",
          "question": "Woorden als privacyrisico of leveranciersrisico zijn nog geen gevolg voor betrokkenen.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Abstracte risicotermen helpen niet om impact te beoordelen. De term moet worden vertaald naar een concreet gevolg voor betrokkenen.",
            "commonMistake": "Een label zoals privacyrisico of leveranciersrisico wordt gebruikt alsof het al een uitgewerkt risico is.",
            "whatToCheck": "Welk concreet gevolg voor betrokkenen zit achter woorden als privacyrisico of leveranciersrisico?",
            "strongerReasoning": "Een sterkere redenering vervangt abstracte labels door concrete situaties waarin betrokkenen nadeel, verlies van controle of beperking van rechten ervaren.",
            "sources": []
          }
        },
        {
          "id": "gemengd",
          "label": "Oorzaken, maatregelen en gevolgen lopen door elkaar.",
          "feedback": "Splits de redenering: eerst gevolg voor betrokkenen, daarna oorzaak, daarna maatregel.",
          "cat": "risico",
          "severity": "warning",
          "question": "Splits de redenering: eerst gevolg voor betrokkenen, daarna oorzaak, daarna maatregel.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als oorzaken, gevolgen en maatregelen door elkaar lopen, is niet meer toetsbaar welk risico wordt beheerst. De redenering moet worden gesplitst.",
            "commonMistake": "Een maatregel of oorzaak wordt als risico beschreven, waardoor het gevolg voor betrokkenen onduidelijk blijft.",
            "whatToCheck": "Welk gevolg voor betrokkenen hoort bij welk risico, los van oorzaak en maatregel?",
            "strongerReasoning": "Een sterkere redenering zet per risico eerst het gevolg voor betrokkenen neer, daarna de oorzaak en pas daarna de passende maatregel.",
            "sources": []
          }
        },
        {
          "id": "niet_toetsbaar",
          "label": "Nee, de risico’s zijn nog niet toetsbaar.",
          "feedback": "Dan is het te vroeg om maatregelen of restrisico betrouwbaar te beoordelen.",
          "cat": "risico",
          "severity": "blocker",
          "question": "Dan is het te vroeg om maatregelen of restrisico betrouwbaar te beoordelen.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Niet-toetsbare risico’s maken maatregelen en restrisico onbetrouwbaar. Eerst moet duidelijk zijn wat precies kan gebeuren en voor wie.",
            "commonMistake": "Er wordt al over maatregelen gesproken terwijl het risico zelf nog niet scherp genoeg is geformuleerd.",
            "whatToCheck": "Welke risico’s zijn nog onvoldoende uitgewerkt om maatregelen of restrisico te beoordelen?",
            "strongerReasoning": "Een sterkere redenering maakt elk risico concreet genoeg om te kunnen beoordelen of een maatregel het risico werkelijk verkleint.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "maatregelen",
      "number": 11,
      "title": "Passen de maatregelen bij het risico?",
      "intro": "Een maatregel is pas sterk als duidelijk is welk risico zij verkleint en wie haar uitvoert.",
      "type": "multi",
      "minimumForGreen": 3,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "maatregel",
      "lowSelectionFeedback": "Als maatregelen nog los staan van risico’s, is beheersing vooral papier.",
      "lowSelectionQuestion": "Welke bewijsvoering voor maatregelen ontbreekt?",
      "options": [
        {
          "id": "gekoppeld",
          "label": "Elke maatregel is gekoppeld aan een concreet risico.",
          "feedback": "Kun je per maatregel zeggen welk risico kleiner wordt?",
          "cat": "maatregel",
          "severity": "positive",
          "question": "Kun je per maatregel zeggen welk risico kleiner wordt?",
          "strength": "Maatregelen zijn gekoppeld aan risico’s.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een gekoppelde maatregel is sterker dan een losse maatregel, maar de koppeling moet controleerbaar blijven. De vraag is welk risico echt kleiner wordt.",
            "commonMistake": "Maatregelen worden opgesomd zonder per maatregel duidelijk te maken welk risico zij beheersen.",
            "whatToCheck": "Kun je per maatregel zeggen welk risico kleiner wordt?",
            "strongerReasoning": "Een sterkere redenering koppelt elke maatregel aan een concreet risico, een eigenaar en een manier om werking te controleren.",
            "sources": []
          }
        },
        {
          "id": "eigenaar",
          "label": "Eigenaar en uitvoering zijn bekend.",
          "feedback": "Wie doet wat, wanneer en met welk mandaat?",
          "cat": "maatregel",
          "severity": "positive",
          "question": "Wie doet wat, wanneer en met welk mandaat?",
          "strength": "Eigenaar en uitvoering zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Eigenaar en uitvoering bepalen of een maatregel meer is dan een voornemen. Zonder mandaat, timing en verantwoordelijkheid blijft beheersing kwetsbaar.",
            "commonMistake": "Er wordt genoemd dat iets geregeld wordt, maar niet wie het uitvoert of mag afdwingen.",
            "whatToCheck": "Wie doet wat, wanneer en met welk mandaat?",
            "strongerReasoning": "Een sterkere redenering benoemt eigenaar, uitvoerder, besluitbevoegdheid en het moment waarop de maatregel actief moet zijn.",
            "sources": []
          }
        },
        {
          "id": "bewijs",
          "label": "Bewijs of controle is geregeld.",
          "feedback": "Hoe toon je aan dat de maatregel werkt en blijft werken?",
          "cat": "maatregel",
          "severity": "positive",
          "question": "Hoe toon je aan dat de maatregel werkt en blijft werken?",
          "strength": "Bewijs of controle is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Bewijs of controle maakt zichtbaar of een maatregel werkt en blijft werken. Zonder bewijs blijft het vooral een papieren maatregel.",
            "commonMistake": "De maatregel wordt als genomen beschouwd zonder toetsing van werking, naleving of onderhoud.",
            "whatToCheck": "Hoe toon je aan dat de maatregel werkt en blijft werken?",
            "strongerReasoning": "Een sterkere redenering beschrijft welk bewijs wordt gebruikt, wie controleert en wanneer de maatregel opnieuw wordt beoordeeld.",
            "sources": []
          }
        },
        {
  "id": "menselijk",
  "label": "Menselijke controle is nodig.",
  "feedback": "Een mens betrekken bij een proces is niet automatisch een effectieve maatregel. Wat beoordeelt deze persoon precies, welke informatie heeft hij daarbij en wanneer moet hij kunnen afwijken van de voorgestelde uitkomst?",
  "cat": "maatregel",
  "severity": "warning",
  "question": "Stel dat de uitkomst onjuist, onvolledig of misleidend is. Hoe ontdekt de controleur dat, en wat kan hij vervolgens doen om in te grijpen?",
  "strength": "",
  "explanation": {
    "title": "Waarom deze keuze aandacht vraagt",
    "why": "Menselijke controle wordt vaak genoemd als maatregel bij risico's rond AI, analyses, scores of geautomatiseerde output. Dat klinkt logisch, omdat een mens fouten kan herkennen die een systeem mist. Toch werkt deze maatregel alleen als die persoon voldoende informatie, tijd, kennis en bevoegdheid heeft om daadwerkelijk een andere beslissing te nemen.",
    "commonMistake": "Menselijke controle wordt soms beschreven alsof de aanwezigheid van een medewerker op zichzelf al een waarborg is. In de praktijk nemen mensen systeemuitkomsten vaak over, zeker als zij weinig tijd hebben, onvoldoende inzicht krijgen in de onderliggende redenering of niet gewend zijn om van de uitkomst af te wijken.",
    "whatToCheck": "Beschrijf wat de controleur concreet controleert. Kan deze persoon de gebruikte gegevens bekijken, fouten herkennen, aanvullende informatie meenemen en gemotiveerd afwijken van de voorgestelde uitkomst? Of beperkt de controle zich vooral tot het bevestigen van wat het systeem al heeft voorgesteld?",
    "strongerReasoning": "Een sterkere redenering beschrijft niet alleen dat menselijke controle plaatsvindt, maar ook hoe deze controle werkt. Daarbij wordt duidelijk welke informatie beschikbaar is, wanneer een controle verplicht is, welke signalen aanleiding geven om af te wijken en welke bevoegdheid de controleur heeft om een andere uitkomst te kiezen.",
    "sources": []
  }
},
        {
          "id": "alleen_beleid",
          "label": "De maatregel is vooral beleid, instructie of bewustwording.",
          "feedback": "Gedragsmaatregelen helpen alleen als gedrag het risico veroorzaakt en naleving controleerbaar is.",
          "cat": "maatregel",
          "severity": "warning",
          "question": "Gedragsmaatregelen helpen alleen als gedrag het risico veroorzaakt en naleving controleerbaar is.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Beleid, instructie of bewustwording kan helpen, maar niet elk risico is met gedrag te beheersen. Naleving moet bovendien controleerbaar zijn.",
            "commonMistake": "Een gedragsmaatregel wordt gekozen omdat die makkelijk te organiseren is, terwijl het risico mogelijk technisch of procesmatig begrensd moet worden.",
            "whatToCheck": "Waarom is beleid, instructie of bewustwording hier voldoende, en hoe controleer je naleving?",
            "strongerReasoning": "Een sterkere redenering laat zien waarom gedrag het risico veroorzaakt en welke aanvullende begrenzing nodig is als gedrag alleen onvoldoende is.",
            "sources": []
          }
        },
        {
          "id": "onvoldoende",
          "label": "Het is nog niet duidelijk of maatregelen voldoende zijn.",
          "feedback": "Dan hoort dat als randvoorwaarde of restrisico zichtbaar te blijven.",
          "cat": "besluit",
          "severity": "blocker",
          "question": "Dan hoort dat als randvoorwaarde of restrisico zichtbaar te blijven.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als onduidelijk is of maatregelen voldoende zijn, moet die onzekerheid zichtbaar blijven. Anders lijkt het restrisico beter beheerst dan het is.",
            "commonMistake": "Onzekerheid over werking van maatregelen verdwijnt uit de conclusie in plaats van als randvoorwaarde of restrisico terug te komen.",
            "whatToCheck": "Welke onzekerheid blijft bestaan als deze maatregelen onvoldoende blijken?",
            "strongerReasoning": "Een sterkere redenering benoemt welke maatregelen nog onzeker zijn, wat daarvan het restrisico is en wie daarover moet besluiten.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "besluit",
      "number": 12,
      "title": "Wat moet nog besloten worden?",
      "intro": "Een DPIA moet zichtbaar maken welke voorwaarden, besluiten en restrisico’s nog expliciet zijn.",
      "type": "multi",
      "minimumForGreen": 3,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "besluit",
      "lowSelectionFeedback": "Als besluitpunten niet zichtbaar zijn, lijkt de DPIA stelliger dan de redenering kan dragen.",
      "lowSelectionQuestion": "Welke besluitinformatie ontbreekt nog?",
      "options": [
        {
          "id": "voorwaarden",
          "label": "Startvoorwaarden zijn benoemd.",
          "feedback": "Welke voorwaarden moeten vóór ingebruikname aantoonbaar ingevuld zijn?",
          "cat": "besluit",
          "severity": "positive",
          "question": "Welke voorwaarden moeten vóór ingebruikname aantoonbaar ingevuld zijn?",
          "strength": "Startvoorwaarden zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Startvoorwaarden maken duidelijk wat eerst geregeld moet zijn voordat verwerking verantwoord kan starten. Zonder voorwaarden wordt de conclusie te stellig.",
            "commonMistake": "Voorwaarden worden gezien als uitvoeringsdetails, terwijl ze bepalend kunnen zijn voor verantwoord starten.",
            "whatToCheck": "Welke voorwaarden moeten vóór ingebruikname aantoonbaar ingevuld zijn?",
            "strongerReasoning": "Een sterkere redenering benoemt concrete startvoorwaarden, bewijs van invulling en wie beoordeelt of daaraan is voldaan.",
            "sources": []
          }
        },
        {
          "id": "restrisico",
          "label": "Restrisico is expliciet belegd.",
          "feedback": "Wie accepteert welk restrisico en op basis van welke informatie?",
          "cat": "besluit",
          "severity": "positive",
          "question": "Wie accepteert welk restrisico en op basis van welke informatie?",
          "strength": "Restrisico is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Restrisico moet expliciet zijn belegd omdat niet elk risico volledig verdwijnt. De besluitvorming moet laten zien wie welk risico accepteert.",
            "commonMistake": "Restrisico wordt impliciet geaccepteerd doordat de DPIA tekstueel afrondt zonder eigenaar of besluit.",
            "whatToCheck": "Wie accepteert welk restrisico en op basis van welke informatie?",
            "strongerReasoning": "Een sterkere redenering benoemt het restrisico, de afweging, de besluitvormer en de informatie waarop acceptatie rust.",
            "sources": []
          }
        },
        {
          "id": "herbeoordeling",
          "label": "Trigger voor herbeoordeling is benoemd.",
          "feedback": "Welke wijziging in doel, data, leverancier, model of gebruik opent de beoordeling opnieuw?",
          "cat": "besluit",
          "severity": "positive",
          "question": "Welke wijziging in doel, data, leverancier, model of gebruik opent de beoordeling opnieuw?",
          "strength": "Herbeoordelingstrigger is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een DPIA blijft alleen bruikbaar als duidelijk is wanneer verandering tot herbeoordeling leidt. Zonder trigger kan de redenering verouderen.",
            "commonMistake": "De DPIA wordt behandeld als een eenmalig document, zonder te benoemen wanneer doel, data, leverancier of gebruik opnieuw moeten worden getoetst.",
            "whatToCheck": "Welke wijziging in doel, data, leverancier, model of gebruik opent de beoordeling opnieuw?",
            "strongerReasoning": "Een sterkere redenering benoemt concrete herbeoordelingstriggers en wie verantwoordelijk is om die te signaleren.",
            "sources": []
          }
        },
        {
          "id": "fg",
          "label": "Benodigde toetsing of advies is benoemd.",
          "feedback": "Welke rol heeft privacy officer, FG, security of eigenaar nog in de besluitvorming?",
          "cat": "besluit",
          "severity": "info",
          "question": "Welke rol heeft privacy officer, FG, security of eigenaar nog in de besluitvorming?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Toetsing of advies is alleen bruikbaar als duidelijk is wie nog welke rol heeft in de besluitvorming. Anders blijft feedback vrijblijvend.",
            "commonMistake": "Er wordt genoemd dat privacy, FG of security meekijkt, maar niet wat hun advies of besluitmoment betekent.",
            "whatToCheck": "Welke rol heeft privacy officer, FG, security of eigenaar nog in de besluitvorming?",
            "strongerReasoning": "Een sterkere redenering beschrijft wie adviseert, wie beslist, welke informatie nodig is en welke voorwaarden uit toetsing kunnen volgen.",
            "sources": []
          }
        },
        {
          "id": "open",
          "label": "Er staan nog wezenlijke punten open.",
          "feedback": "Noem die niet weg als detail. Maak zichtbaar wat nog niet besloten kan worden.",
          "cat": "besluit",
          "severity": "warning",
          "question": "Noem die niet weg als detail. Maak zichtbaar wat nog niet besloten kan worden.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Open punten kunnen wezenlijk zijn voor de besluitvorming. Als ze als details worden gepresenteerd, lijkt de DPIA verder dan zij is.",
            "commonMistake": "Onopgeloste punten worden in nette tekst verzacht in plaats van expliciet als besluitpunt of randvoorwaarde benoemd.",
            "whatToCheck": "Welke wezenlijke punten zijn nog open en wat kan daardoor nog niet besloten worden?",
            "strongerReasoning": "Een sterkere redenering maakt open punten zichtbaar, benoemt hun effect op de conclusie en legt vast wie ze moet oplossen of accepteren.",
            "sources": []
          }
        },
        {
          "id": "geen",
          "label": "Er is nog geen besluitroute.",
          "feedback": "Dan kan de DPIA hooguit een tussenstand zijn. Wie moet uiteindelijk besluiten?",
          "cat": "besluit",
          "severity": "blocker",
          "question": "Dan kan de DPIA hooguit een tussenstand zijn. Wie moet uiteindelijk besluiten?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Zonder besluitroute kan de DPIA hooguit een analyse of tussenstand zijn. Er moet duidelijk zijn wie uiteindelijk beslist over starten, voorwaarden en restrisico.",
            "commonMistake": "De DPIA eindigt met inhoudelijke bevindingen, maar zonder eigenaar voor het uiteindelijke besluit.",
            "whatToCheck": "Wie neemt uiteindelijk het besluit over deze verwerking en het restrisico?",
            "strongerReasoning": "Een sterkere redenering beschrijft de besluitroute, rollen, bevoegdheden en het moment waarop restrisico wordt geaccepteerd of afgewezen.",
            "sources": []
          }
        }
      ]
    }
  ]
};
