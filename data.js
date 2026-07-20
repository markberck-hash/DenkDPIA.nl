window.DPIA_MODEL = {
  "version": "0.9.8.8",
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
      "intro": "Kies je vertrekpunt. De keuze bepaalt niet of je goed zit, maar waar de eerste tegenspraak nodig is.",
      "type": "single",
      "options": [
        {
          "id": "nieuw",
          "label": "Ik verken een nieuwe verwerking.",
          "feedback": "Dit is een bruikbaar vertrekpunt, maar de redenering mag hier nog niet landen. Welke aannames wil je voorlopig laten staan, en welke zijn nog te onzeker om op voort te bouwen?",
          "cat": "besluit",
          "severity": "info",
          "question": "Denk aan de aannames waarmee je nu werkt: welke mag je voorlopig laten staan omdat ze de redenering niet dragen, en welke moet je eerst hardmaken voordat je erop voortbouwt?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Bij een nieuwe verwerking zijn aannames vaak nog nuttig, maar ook risicovol. Daarmee wordt zichtbaar welke aannames tijdelijk bruikbaar zijn en welke eerst onderzocht moeten worden.",
            "commonMistake": "Een verkenning wordt te vroeg behandeld alsof de besluitrichting al vaststaat.",
            "whatToCheck": "Een handige oefening: schrijf drie aannames op waarop je verkenning nu steunt. Ga bij elke aanname na wat er met je conclusie gebeurt als die niet blijkt te kloppen. Verandert er weinig, dan kun je de aanname laten staan. Verandert alles, dan moet je die eerst onderzoeken voordat je verdergaat.",
            "strongerReasoning": "Je redenering staat pas als duidelijk is welke aannames tijdelijk mogen blijven staan en welke aannames het besluit al dragen. Zoek de spanning op: welke aanname lijkt handig om mee verder te gaan, maar zou de hele beoordeling kantelen als zij niet klopt?",
            "sources": []
          }
        },
        {
          "id": "bestaand",
          "label": "Ik heb al een beschrijving of concept-DPIA.",
          "feedback": "Dit is een bruikbaar vertrekpunt, maar de redenering mag hier nog niet landen. Welke redenering in die tekst zou onder druk komen te staan als iemand kritisch doorvraagt?",
          "cat": "besluit",
          "severity": "info",
          "question": "Loop de bestaande tekst rustig door en markeer elke conclusie. Bij welke conclusie zou jij zelf nog niet kunnen uitleggen waarop ze precies rust?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een bestaande tekst kan compleet lijken terwijl de dragende redenering nog zwak is. Daardoor kan het verschil tussen nette formulering en echte onderbouwing uit beeld raken.",
            "commonMistake": "De bestaande DPIA-tekst gaat gelden als bewijs, terwijl niet duidelijk is welke aannames de tekst dragen.",
            "whatToCheck": "Probeer dit uit: lees een alinea van je concept-DPIA en vraag jezelf bij elke zin af of hij een feit, een aanname of een wens beschrijft. Zinnen die eigenlijk een wens verwoorden, klinken vaak overtuigend maar dragen de redenering nog niet.",
            "strongerReasoning": "Een bestaande tekst draagt pas als duidelijk is welke conclusies echt zijn onderbouwd en welke vooral netjes zijn geformuleerd. De spanning zit tussen wat overtuigend klinkt en wat aantoonbaar klopt.",
            "sources": []
          }
        },
        {
          "id": "template",
          "label": "Ik moet een DPIA-template gaan invullen.",
          "feedback": "Dit is een bruikbaar vertrekpunt, maar de redenering mag hier nog niet landen. Welke schakel moet eerst kloppen voordat het zinvol is om tekst in het template te zetten?",
          "cat": "besluit",
          "severity": "info",
          "question": "Voordat je gaat invullen: welke inhoudelijke vraag, over de verwerking, het doel of het risico, moet eerst beantwoord zijn wil het antwoord in het template kloppen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een template helpt bij vastleggen, maar dwingt niet automatisch goede redenering af. Deze keuze vraagt om eerst te bepalen welke schakel inhoudelijk moet kloppen.",
            "commonMistake": "Het invullen van velden neemt de plaats in van het oplossen van de inhoudelijke DPIA-vragen.",
            "whatToCheck": "Test het zo: pak één veld uit het template en probeer het nu al in te vullen. Lukt dat alleen met vage of algemene taal, dan ontbreekt er nog inhoudelijke duidelijkheid die je niet oplost door alvast te gaan invullen.",
            "strongerReasoning": "Een template helpt pas als de redenering eronder al staat. Zoek de spanning op: vul je een veld in omdat je het antwoord weet, of omdat het template nu eenmaal om een antwoord vraagt?",
            "sources": []
          }
        },
        {
          "id": "twijfel",
          "label": "Ik twijfel of een DPIA nodig is.",
          "feedback": "Dit is een bruikbaar vertrekpunt, maar de redenering mag hier nog niet landen. Deze tool beslist dat niet. Welke signalen maken dat je deze verwerking niet zomaar als laag-impact kunt behandelen?",
          "cat": "besluit",
          "severity": "info",
          "question": "Deze tool neemt die beslissing niet voor je. Welk kenmerk van de verwerking, bijvoorbeeld de gevoeligheid van de gegevens, de omvang van de groep betrokkenen, of het gebruik van nieuwe technologie, maakt dat je hier niet te snel 'geen DPIA nodig' mag concluderen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Twijfel over de DPIA-plicht is vaak een signaal dat de verwerking of impact nog onvoldoende scherp is. De tool beslist dit niet, maar maakt de onderliggende signalen zichtbaar.",
            "commonMistake": "De vraag of een DPIA nodig is wordt behandeld als ja-nee-vraag, zonder eerst de impactsignalen te benoemen.",
            "whatToCheck": "Loop de bekende risico-indicatoren voor een DPIA-plicht langs, denk aan grootschaligheid, profilering, gevoelige gegevens of nieuwe technologie, en ga per indicator na of die hier speelt. Eén duidelijke treffer is al reden genoeg om de verkenning serieus voort te zetten.",
            "strongerReasoning": "Twijfel over de DPIA-plicht is geen administratieve horde, maar een signaal dat impact mogelijk nog niet scherp is. De spanning zit tussen snel concluderen dat een DPIA niet nodig is en eerlijk benoemen welke signalen daartegen pleiten.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "verwerking",
      "number": 2,
      "title": "Welke verwerking staat centraal?",
      "intro": "Kies wat er feitelijk met persoonsgegevens gebeurt. Als je vooral een applicatie of leverancier noemt, is de verwerking waarschijnlijk nog niet scherp.",
      "type": "single",
      "options": [
        {
          "id": "kennis",
          "label": "Kennis- of notitieomgeving.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Wanneer wordt deze omgeving een tweede administratie, en hoe voorkom je dat de formele bron uit beeld raakt?",
          "cat": "verwerking",
          "severity": "warning",
          "question": "Ga eens na hoe deze omgeving in de praktijk wordt gebruikt. Op welk moment zou iemand er informatie in zetten die eigenlijk in het officiële systeem hoort te staan?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een kennis- of notitieomgeving kan ongemerkt een plek worden waar persoonsgegevens opnieuw worden vastgelegd en gedeeld. Daardoor verschuift de beoordeling van hulpmiddel naar verwerking.",
            "commonMistake": "De omgeving wordt gezien als neutrale opslagplaats, terwijl zij in de praktijk een tweede bron of administratie kan worden.",
            "whatToCheck": "Vraag een gebruiker hoe hij deze omgeving nu echt gebruikt, niet hoe hij hem zou moeten gebruiken. Komt daar iets uit dat lijkt op een tweede, informele administratie, dan moet je dat meenemen in de beoordeling.",
            "strongerReasoning": "Je redenering staat pas als duidelijk is wanneer een kennis- of notitieomgeving ophoudt hulpmiddel te zijn en feitelijk een tweede administratie wordt. De spanning zit tussen handig vastleggen en het verliezen van zicht op de formele bron.",
            "sources": []
          }
        },
        {
          "id": "vastlegging",
          "label": "Opname, transcriptie of verslaglegging.",
          "feedback": "Dit antwoord kan logisch klinken, maar het kan ook een zwakke plek in de redenering verbergen. Wat verandert er voor betrokkenen zodra iets dat eerst voorbijging later terugvindbaar en opnieuw te gebruiken wordt?",
          "cat": "gegevens",
          "severity": "warning",
          "question": "Denk aan een gesprek dat vandaag plaatsvindt en over een jaar opnieuw wordt gevonden. Wat kan er dan met die informatie worden gedaan dat op het moment van het gesprek niet mogelijk was?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Opname, transcriptie of verslaglegging verandert vluchtige informatie in blijvende en doorzoekbare gegevens. Daardoor kan informatie later worden teruggevonden, gecombineerd, gedeeld of gebruikt in een andere context dan waarin zij oorspronkelijk ontstond.",
            "commonMistake": "Er wordt vooral gekeken naar het gemak van vastleggen, terwijl de gevolgen van langdurige vindbaarheid buiten beeld blijven. De redenering springt van 'dit helpt ons' naar 'dit is acceptabel', zonder stil te staan bij wat er voor betrokkenen verandert.",
            "whatToCheck": "Leg de oorspronkelijke situatie naast de nieuwe situatie. Wat kon iemand met deze informatie voordat zij werd opgenomen, en wat kan er nadat zij blijvend, doorzoekbaar en deelbaar is geworden?",
            "strongerReasoning": "De vraag is niet of vastleggen nuttig is, maar of de langdurige vindbaarheid van deze gegevens proportioneel blijft ten opzichte van het oorspronkelijke, vluchtige doel. Wat maakt dat die extra impact in deze situatie gerechtvaardigd is?",
            "sources": []
          }
        },
        {
          "id": "ai",
          "label": "AI-assistent of generatieve AI.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Welke persoonsgegevens kunnen in invoer, context of output terechtkomen, en wie controleert wat daarna met die informatie gebeurt?",
          "cat": "gegevens",
          "severity": "warning",
          "question": "Loop de route van een prompt na: wat typt iemand in, welke context wordt daarbij meegestuurd, en wat komt er precies uit? Op elk van die drie plekken kunnen persoonsgegevens meekomen zonder dat je dat had bedoeld.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Bij generatieve AI kunnen persoonsgegevens in invoer, context en output terechtkomen. Zonder afbakening is niet duidelijk welke gegevens feitelijk worden verwerkt.",
            "commonMistake": "De AI-toepassing wordt beoordeeld als losse tool, terwijl de echte verwerking ontstaat door prompts, bronnen, context en output.",
            "whatToCheck": "Verzin een realistisch voorbeeld van een prompt die een gebruiker zou kunnen invoeren, inclusief namen of details die mensen nu eenmaal typen. Ga na waar die informatie daarna terechtkomt: blijft die lokaal, wordt hij opgeslagen, of kan hij worden hergebruikt om een model te trainen?",
            "strongerReasoning": "Bij generatieve AI zit het risico niet alleen in de tool, maar in de route van invoer, context en output. Je redenering staat pas als duidelijk is waar persoonsgegevens kunnen meekomen en wie daarna nog grip heeft op wat ermee gebeurt.",
            "sources": []
          }
        },
        {
          "id": "kennisplatform",
          "label": "Zoekindex of kennisplatform.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Welke bronnen worden doorzoekbaar, en klopt de toegang tot de zoekuitkomst nog met de toegang tot de bron?",
          "cat": "keten",
          "severity": "warning",
          "question": "Vergelijk de twee lagen: wie mocht de oorspronkelijke bron altijd al zien, en wie kan straks via de zoekresultaten of samenvatting bij diezelfde informatie? Als dat niet hetzelfde is, ontstaat er een nieuw toegangsprobleem.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een zoekindex of kennisplatform verandert de vindbaarheid van bestaande bronnen. Daardoor kan toegang tot zoekresultaten afwijken van toegang tot de oorspronkelijke bron.",
            "commonMistake": "Er wordt aangenomen dat bestaande autorisaties vanzelf goed doorwerken in indexering, samenvatting of zoekuitkomst.",
            "whatToCheck": "Kies één gevoelig document of dossier en volg het door de index heen. Kan iemand die geen toegang had tot het origineel, het via een zoekresultaat, samenvatting of aanbeveling toch te zien krijgen?",
            "strongerReasoning": "Een zoekindex verandert niet alleen opslag, maar vooral vindbaarheid. De spanning zit tussen toegang tot de bron en toegang tot het resultaat: kan iemand via zoeken of samenvatten toch informatie bereiken die in de bron begrensd was?",
            "sources": []
          }
        },
        {
          "id": "output",
          "label": "Systeem met automatische analyse, score, advies of output.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Welke status krijgt de output in het proces: hulpmiddel, advies, feit of besluit?",
          "cat": "risico",
          "severity": "warning",
          "question": "Denk aan het moment waarop iemand de output te zien krijgt. Wordt er dan nog gewogen en getwijfeld, of wordt de uitkomst in de praktijk gewoon overgenomen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Automatische analyse, score of advies kan in een proces meer gewicht krijgen dan bedoeld. De rol van output bepaalt mede welk risico voor betrokkenen ontstaat.",
            "commonMistake": "Output wordt formeel hulpmiddel genoemd, maar wordt feitelijk behandeld als feit, advies of besluit.",
            "whatToCheck": "Vraag iemand die met het systeem werkt hoe vaak hij afwijkt van wat het systeem voorstelt. Een laag aantal afwijkingen kan betekenen dat de output feitelijk als besluit functioneert, ook al heet het formeel een advies.",
            "strongerReasoning": "Output die formeel hulpmiddel heet, kan in de praktijk besluitgewicht krijgen. Je redenering staat pas als duidelijk is waar het kantelpunt ligt: wanneer wordt een analyse, score of advies feitelijk richtinggevend voor mensen?",
            "sources": []
          }
        },
        {
          "id": "vrije_invoer",
          "label": "Samenwerkingsomgeving met vrije invoer.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Welke gegevens kunnen gebruikers invoeren die je niet bedoeld had, maar waar je daarna wel verantwoordelijk voor wordt?",
          "cat": "gegevens",
          "severity": "warning",
          "question": "Bedenk wat mensen in de praktijk typen als een veld geen strikte structuur heeft. Loopt daar weleens iets tussendoor dat je liever niet had willen ontvangen, zoals een oordeel over een collega of een gezondheidsdetail?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Vrije invoer maakt de verwerking minder voorspelbaar, omdat gebruikers ook gegevens kunnen invoeren die niet waren bedoeld. Daardoor kan bijvangst onderdeel worden van de beoordeling.",
            "commonMistake": "De beoogde invoer wordt beschreven, maar niet wat gebruikers feitelijk kunnen invullen.",
            "whatToCheck": "Kijk naar een paar echte voorbeelden van vrije invoer, of vraag iemand die de omgeving al gebruikt wat mensen er zoal in kwijt kunnen. Kom je gegevens tegen die niet bij het doel horen, dan is dat de bijvangst waar je een antwoord op moet hebben.",
            "strongerReasoning": "Vrije invoer maakt de verwerking minder voorspelbaar. Je redenering staat pas als je niet alleen de bedoelde invoer beschrijft, maar ook de bijvangst die gebruikers redelijkerwijs kunnen toevoegen en waar je dan verantwoordelijk voor wordt.",
            "sources": []
          }
        },
        {
          "id": "onduidelijk",
          "label": "Nog niet duidelijk.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Als de verwerking nog niet scherp is, kan de rest van je redenering nog niet dragen. Wat beoordeel je precies?",
          "cat": "verwerking",
          "severity": "blocker",
          "question": "Voordat je verder redeneert: kun je in één zin zeggen welke handeling met welke persoonsgegevens hier centraal staat, los van de naam van het systeem?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als de verwerking nog niet duidelijk is, kan de rest van de DPIA-redenering niet betrouwbaar worden opgebouwd. Dan is eerst afbakening nodig.",
            "commonMistake": "De beoordeling start bij een systeemnaam of initiatief, zonder te beschrijven wat er feitelijk met persoonsgegevens gebeurt.",
            "whatToCheck": "Zoek eerst naar dat ene werkzin-antwoord. Lukt het niet om te zeggen wie welke gegevens verzamelt, gebruikt of deelt zonder de productnaam te noemen, dan is de verwerking zelf nog niet scherp genoeg om op door te bouwen.",
            "strongerReasoning": "Als de verwerking zelf nog niet scherp is, bouw je verder op mist. De spanning zit tussen door willen naar risico's of maatregelen en eerst moeten kunnen zeggen welke handeling met welke persoonsgegevens je eigenlijk beoordeelt.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "schets",
      "number": 3,
      "title": "Wat is al concreet?",
      "intro": "Selecteer alleen wat je in gewone taal kunt uitleggen zonder projectkennis te veronderstellen.",
      "type": "multi",
      "minimumForGreen": 4,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "verwerking",
      "lowSelectionFeedback": "Als minder dan vier onderdelen concreet zijn, bouw je waarschijnlijk op aannames. Welke schakel maakt de rest nu nog wankel?",
      "lowSelectionQuestion": "Welke ontbrekende schakel maakt het nu nog te vroeg om verder te schrijven?",
      "options": [
        {
          "id": "doel",
          "label": "Doel",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Kun je het doel formuleren zonder woorden als efficiëntie, gemak of innovatie als eindpunt te gebruiken?",
          "cat": "doel",
          "severity": "positive",
          "question": "Zet het doel op scherp: kun je het formuleren als een taak of resultaat, zonder woorden als efficiëntie, gemak of innovatie te gebruiken?",
          "strength": "Doel is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een benoemd doel is pas bruikbaar als het meer zegt dan dat de verwerking handig of efficiënt is. Het doel moet richting geven aan noodzaak en proportionaliteit.",
            "commonMistake": "Efficiëntie, gemak of innovatie wordt als doel beschreven, terwijl het inhoudelijke procesdoel onduidelijk blijft.",
            "whatToCheck": "Leg je doelformulering voor aan iemand die het project niet kent. Vraagt die persoon 'ja, maar waarom moet dat dan', dan zit je nog bij een middel of voordeel en nog niet bij het echte doel.",
            "strongerReasoning": "Een doel draagt pas als het meer is dan het voordeel van de oplossing. De spanning zit tussen wat de oplossing aantrekkelijk maakt en wat de verwerking inhoudelijk noodzakelijk moet maken.",
            "sources": []
          }
        },
        {
          "id": "gegevens",
          "label": "Gegevenssoorten",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Kun je benoemen welke gegevens nodig zijn, en welke gegevens alleen kunnen meekomen als bijvangst?",
          "cat": "gegevens",
          "severity": "positive",
          "question": "Maak het onderscheid tussen wat je nodig hebt en wat er ongepland bij kan komen. Kun je beide los van elkaar benoemen?",
          "strength": "Gegevenssoorten zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Gegevenssoorten dragen de risicobeoordeling. Zonder onderscheid tussen noodzakelijke gegevens en bijvangst blijft de beoordeling te algemeen.",
            "commonMistake": "Er wordt gesproken over persoonsgegevens in algemene zin, zonder te specificeren welke gegevens echt nodig zijn.",
            "whatToCheck": "Zet twee rijtjes naast elkaar: gegevens die noodzakelijk zijn voor het doel, en gegevens die er realistisch gezien bij kunnen komen zonder dat je dat wilde. Staat er iets in de tweede rij dat eigenlijk in de eerste hoort, dan is je doel nog niet scherp genoeg afgebakend.",
            "strongerReasoning": "Gegevenssoorten zijn pas scherp als je onderscheid maakt tussen wat nodig is en wat kan meekomen. De spanning zit tussen de gegevens die het doel dragen en de bijvangst die het risico vergroot.",
            "sources": []
          }
        },
        {
          "id": "betrokkenen",
          "label": "Betrokkenen",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Welke betrokkenen kunnen geraakt worden, ook als zij niet de primaire gebruiker zijn?",
          "cat": "gegevens",
          "severity": "positive",
          "question": "Kijk verder dan de gebruiker achter het scherm. Wie komt er nog meer in de gegevens voor, bijvoorbeeld als onderwerp van een notitie, een gesprek of een melding?",
          "strength": "Betrokkenen zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Betrokkenen zijn niet altijd alleen de directe gebruikers van een systeem. Ook personen over wie gegevens worden vastgelegd of afgeleid kunnen geraakt worden.",
            "commonMistake": "De beoordeling beperkt zich tot gebruikers, terwijl andere personen in documenten, communicatie of output buiten beeld blijven.",
            "whatToCheck": "Loop de mogelijke groepen langs: de directe gebruiker, de persoon over wie iets wordt vastgelegd, en eventuele derden die toevallig worden genoemd. Ontbreekt er een groep die wel degelijk in de gegevens voorkomt, dan is de lijst nog niet compleet.",
            "strongerReasoning": "Betrokkenen zijn niet alleen de mensen die het systeem gebruiken. Je redenering staat pas als ook zichtbaar is wie onderwerp kan worden van notities, communicatie, output of bijvangst.",
            "sources": []
          }
        },
        {
          "id": "handelingen",
          "label": "Verwerkingshandelingen",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Kun je per gegevenssoort zeggen wat ermee gebeurt?",
          "cat": "verwerking",
          "severity": "positive",
          "question": "Volg één gegevenssoort van binnenkomst tot verwijdering. Weet je van elke stap, verzamelen, gebruiken, delen, bewaren, wat er precies gebeurt?",
          "strength": "Verwerkingshandelingen zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Verwerkingshandelingen maken zichtbaar wat er feitelijk gebeurt. Zonder die handelingen blijft onduidelijk waar risico, noodzaak en maatregelen op zien.",
            "commonMistake": "De applicatie wordt beschreven, maar verzamelen, raadplegen, delen, analyseren of bewaren blijven impliciet.",
            "whatToCheck": "Pak de belangrijkste gegevenssoort en beschrijf zijn hele levensloop in het systeem, van het moment van invoer tot het moment van verwijdering. Blijft er een stap onduidelijk, bijvoorbeeld wie de gegevens ooit weer verwijdert, dan is dat een vraag die nog openstaat.",
            "strongerReasoning": "Een applicatie beschrijven is nog geen verwerking beschrijven. De spanning zit tussen de systeemnaam die iedereen kent en de concrete handelingen met persoonsgegevens die de DPIA moeten dragen.",
            "sources": []
          }
        },
        {
          "id": "partijen",
          "label": "Partijen en rollen",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Wie kan feitelijk iets met de gegevens doen, en klopt dat met de formele rolverdeling?",
          "cat": "keten",
          "severity": "positive",
          "question": "Vergelijk de formele rolverdeling met wat er in de praktijk gebeurt. Kan iemand feitelijk bij gegevens die volgens het rollenschema niet voor hem bedoeld zijn?",
          "strength": "Partijen en rollen zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Partijen en rollen bepalen wie invloed heeft op gegevens en wie verantwoordelijkheid draagt. Formele rollen zijn pas bruikbaar als ze passen bij feitelijke toegang en invloed.",
            "commonMistake": "De formele verwerkersrol wordt genoemd, maar feitelijke toegang, beheer of zeggenschap blijft onduidelijk.",
            "whatToCheck": "Zet de formele rollen, wie is verwerkingsverantwoordelijke, wie is verwerker, naast een lijst van wie er in de praktijk toegang heeft. Wijken die van elkaar af, dan is dat een punt dat je moet uitleggen of moet oplossen.",
            "strongerReasoning": "Formele rollen stellen gerust, maar feitelijke toegang bepaalt het risico. Je redenering staat pas als zichtbaar is waar rolverdeling en daadwerkelijke invloed op gegevens uit elkaar kunnen lopen.",
            "sources": []
          }
        },
        {
          "id": "beheer",
          "label": "Opslag, beheer of lifecycle",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Wie kan de gegevens later vinden, corrigeren, verwijderen of overdragen?",
          "cat": "keten",
          "severity": "positive",
          "question": "Denk aan het verzoek dat ooit binnenkomt: iemand wil zijn gegevens laten corrigeren of verwijderen. Weet je nu al wie dat verzoek zou moeten oppakken en of dat technisch mogelijk is?",
          "strength": "Beheer of lifecycle is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Opslag, beheer en lifecycle bepalen of gegevens later nog vindbaar, corrigeerbaar of verwijderbaar zijn. Dat raakt zowel risico als uitvoerbaarheid van maatregelen.",
            "commonMistake": "De beoordeling stopt bij ingebruikname, terwijl bewaartermijn, beheer en verwijdering bepalend zijn voor het restrisico.",
            "whatToCheck": "Doe de gedachte-oefening van een verwijderverzoek: waar zoek je, in welke systemen zoek je, en hoe weet je zeker dat je alles hebt gevonden en verwijderd? Loopt die oefening ergens vast, dan is beheer nog niet goed genoeg geregeld.",
            "strongerReasoning": "Opslag en beheer worden pas relevant als iemand later iets met de gegevens moet kunnen doen. De spanning zit tussen gegevens bewaren omdat het systeem dat doet en kunnen uitleggen wie ze later vindt, corrigeert of verwijdert.",
            "sources": []
          }
        },
        {
          "id": "geen",
          "label": "Geen van deze onderdelen is scherp.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Dan is de DPIA nog geen schrijfopgave maar een verkenningsopgave. Welke ene werkzin kun je al wel formuleren?",
          "cat": "verwerking",
          "severity": "blocker",
          "question": "Voordat je verdergaat: welke ene zin kun je nu al met zekerheid opschrijven over wat deze verwerking inhoudt, ook al is de rest nog onduidelijk?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als geen enkel onderdeel scherp is, is de DPIA nog vooral een verkenning. Dan moet eerst de kern van de verwerking in gewone taal worden geformuleerd.",
            "commonMistake": "Er wordt al aan een DPIA-tekst begonnen terwijl nog niet duidelijk is wat precies wordt beoordeeld.",
            "whatToCheck": "Begin klein: probeer één zin te schrijven die begint met 'we verzamelen of gebruiken [gegevens] om [doel]'. Lukt zelfs dat nog niet, dan bevind je je nog in de verkennende fase en is het te vroeg om aan een DPIA-tekst te beginnen.",
            "strongerReasoning": "Als geen onderdeel scherp is, is de DPIA nog geen schrijfopgave. De spanning zit tussen de behoefte om alvast tekst te produceren en het ontbreken van één werkzin die de verwerking werkelijk draagt.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "doel",
      "number": 4,
      "title": "Wat is het doel?",
      "intro": "Kies de beste omschrijving van het doel. Test of je een doel beschrijft of vooral een voordeel van de oplossing.",
      "type": "single",
      "options": [
        {
          "id": "kernproces",
          "label": "Het doel hangt samen met een concreet proces.",
          "feedback": "Dit is een bruikbaar vertrekpunt, maar de redenering mag hier nog niet landen. Kun je aanwijzen welk proces dit is en waarom persoonsgegevens daarin nodig zijn?",
          "cat": "doel",
          "severity": "info",
          "question": "Ga na of je het proces kunt benoemen zonder de naam van het systeem te gebruiken. Welk werk, welke taak of welke beslissing hangt hiervan af?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een concreet proces helpt om doel en noodzaak te toetsen. De vraag is of het proces echt richting geeft aan waarom persoonsgegevens nodig zijn.",
            "commonMistake": "Een procesnaam wordt genoemd zonder duidelijk te maken welke taak of handeling persoonsgegevens noodzakelijk maakt.",
            "whatToCheck": "Beschrijf het proces zoals het eruitzag vóórdat deze oplossing er was. Bestond het proces al, dan helpt dat om te bepalen waarom persoonsgegevens daarin nodig zijn. Bestond het proces nog niet, dan moet je dat eerst kunnen onderbouwen.",
            "strongerReasoning": "Een procesnaam draagt de redenering niet vanzelf. De spanning zit tussen verwijzen naar een bekend proces en uitleggen welke taak binnen dat proces persoonsgegevens werkelijk nodig maakt.",
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
            "strongerReasoning": "Efficiëntie en gemak kunnen de oplossing aantrekkelijk maken, maar zij maken de verwerking nog niet noodzakelijk. Je redenering staat pas als duidelijk is welk probleem of welke taak blijft bestaan als deze oplossing wordt weggedacht.",
            "sources": []
          }
        },
        {
          "id": "innovatie",
          "label": "Het doel is verkennen, leren of experimenteren.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Een experiment kan legitiem zijn, maar dan moet juist klein, tijdelijk en begrensd worden begonnen. Waar ligt de stopknop?",
          "cat": "besluit",
          "severity": "warning",
          "question": "Een experiment kan een goede reden zijn om te starten, mits het klein en tijdelijk blijft. Wat is het concrete afbreekcriterium: bij welk signaal stop je, verklein je de groep, of pas je het experiment aan?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Verkennen of experimenteren vraagt juist om duidelijke begrenzing. Zonder stopknop kan tijdelijk leren uitgroeien tot structurele verwerking.",
            "commonMistake": "Een experiment wordt ruim opgezet zonder vooraf te bepalen wanneer het stopt, wordt aangepast of niet doorgaat.",
            "whatToCheck": "Beschrijf vooraf wat 'te ver gegaan' betekent voor dit experiment: een aantal deelnemers, een tijdsduur, of een concreet incident. Kun je dat niet benoemen, dan is er nog geen stopknop en dus ook geen echt experiment, maar een verkapte volledige uitrol.",
            "strongerReasoning": "Experimenteren is pas verdedigbaar als het begrensd blijft. De spanning zit tussen leren door te proberen en ongemerkt een structurele verwerking starten zonder helder stopmoment.",
            "sources": []
          }
        },
        {
          "id": "onduidelijk",
          "label": "Het doel is nog niet scherp.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Als het doel niet scherp is, kun je noodzaak, grondslag en proportionaliteit nog niet betrouwbaar beoordelen.",
          "cat": "doel",
          "severity": "blocker",
          "question": "Voordat je verdergaat: welk concreet resultaat moet er bereikt worden, en waarom lukt dat niet zonder deze persoonsgegevens?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een onscherp doel maakt noodzakelijkheid en proportionaliteit moeilijk toetsbaar. Eerst moet duidelijk zijn wat de verwerking moet bereiken.",
            "commonMistake": "De oplossing of wens is al gekozen, terwijl het onderliggende doel nog niet precies is gemaakt.",
            "whatToCheck": "Probeer het doel te vangen in een zin die met 'we willen dat...' begint en die geen middel of technologie noemt. Lukt dat niet, dan beschrijf je waarschijnlijk nog de oplossing in plaats van het doel.",
            "strongerReasoning": "Een vaag doel maakt noodzaak, proportionaliteit en grondslag meebewegend. Je redenering staat pas als het doel scherp genoeg is om ook een minder ingrijpend alternatief serieus te kunnen toetsen.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "noodzaak",
      "number": 5,
      "title": "Waarom is juist deze verwerking nodig?",
      "intro": "Toets of deze verwerking nodig is, niet alleen handig of aantrekkelijk.",
      "type": "single",
      "options": [
        {
          "id": "onderbouwd",
          "label": "Er is onderbouwd waarom deze gegevens en handelingen nodig zijn.",
          "feedback": "Dit is een bruikbaar vertrekpunt, maar de redenering mag hier nog niet landen. Welke minder ingrijpende alternatieven zijn onderzocht en waarom vallen die af?",
          "cat": "doel",
          "severity": "info",
          "question": "Ga na of er ook echt is gekeken naar andere manieren om hetzelfde doel te bereiken. Welke minder ingrijpende variant is overwogen, en om welke reden is die niet gekozen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Ook wanneer noodzaak is onderbouwd, blijft de vraag of minder ingrijpende alternatieven serieus zijn bekeken. Dat voorkomt dat de gekozen oplossing vanzelfsprekend wordt gemaakt.",
            "commonMistake": "De onderbouwing richt zich op de gekozen verwerking, maar vergelijkt onvoldoende met minder ingrijpende varianten.",
            "whatToCheck": "Zoek naar het bewijs van een echte afweging: staat er ergens een alternatief genoemd dat serieus is overwogen en afgewezen, met een reden? Staat er alleen dat de gekozen oplossing 'het beste past', dan is dat nog geen onderbouwde noodzaak.",
            "strongerReasoning": "Noodzaak staat pas als de gekozen verwerking weerstand heeft overleefd. De spanning zit tussen onderbouwen waarom deze route handig is en uitleggen waarom een minder ingrijpende route niet volstaat.",
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
            "strongerReasoning": "Wenselijkheid kan overtuigend voelen omdat de voordelen zichtbaar zijn. Je redenering staat pas als je kunt uitleggen welk doel niet haalbaar is zonder juist deze persoonsgegevens op juist deze manier te verwerken.",
            "sources": []
          }
        },
        {
          "id": "alles",
          "label": "We willen breed starten en later beperken.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Dat draait dataminimalisatie om. Welke gegevens kun je juist vooraf uitsluiten?",
          "cat": "gegevens",
          "severity": "warning",
          "question": "Draai de redenering om: welke gegevens kun je nu al met zekerheid uitsluiten omdat het doel ze niet nodig heeft, in plaats van breed te beginnen en later te schrappen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Breed starten en later beperken keert dataminimalisatie om. De DPIA moet juist zichtbaar maken wat vooraf buiten scope kan blijven.",
            "commonMistake": "Er wordt gekozen voor ruime verwerking uit voorzorg of gemak, zonder vooraf te bepalen wat niet nodig is.",
            "whatToCheck": "Maak een lijst van alle gegevens die technisch beschikbaar zouden zijn, en streep vervolgens degene door die niets bijdragen aan het doel. Wat overblijft is een betere basis om mee te starten dan 'alles, en later beperken'.",
            "strongerReasoning": "Breed starten lijkt veilig, maar draait dataminimalisatie om. De spanning zit tussen alles meenemen om niets te missen en vooraf durven uitsluiten wat het doel niet nodig heeft.",
            "sources": []
          }
        },
        {
          "id": "niet_beoordeeld",
          "label": "Alternatieven zijn nog niet beoordeeld.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Dan is noodzakelijkheid nog een aanname. Welke variant verwerkt minder gegevens of geeft betrokkenen meer grip?",
          "cat": "doel",
          "severity": "blocker",
          "question": "Zonder deze stap blijft noodzakelijkheid een aanname. Welke variant zou minder gegevens verwerken, of betrokkenen meer controle geven, en waarom is die niet gekozen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als alternatieven nog niet zijn beoordeeld, blijft noodzakelijkheid een aanname. Dan kan de DPIA nog niet laten zien waarom deze verwerking de minst ingrijpende passende route is.",
            "commonMistake": "De gekozen oplossing wordt als noodzakelijk behandeld voordat beperktere alternatieven zijn onderzocht.",
            "whatToCheck": "Bedenk minimaal één alternatief dat minder ingrijpend zou zijn, ook als het minder handig of minder mooi is. Kun je uitleggen waarom je toch voor de huidige, ingrijpender variant kiest, dan heb je een onderbouwing. Kun je dat niet, dan is de keuze nog niet gemaakt op noodzaak maar op voorkeur.",
            "strongerReasoning": "Zonder alternatieven blijft noodzakelijkheid een aanname. Je redenering staat pas als een minder gegevensrijke of minder ingrijpende variant echt is geconfronteerd met de gekozen route.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "gegevens",
      "number": 6,
      "title": "Welke gegevens kunnen meekomen?",
      "intro": "Kijk niet alleen naar bedoelde gegevens. Vrije invoer, context en output kunnen de scope groter maken dan gepland.",
      "type": "multi",
      "minimumForGreen": 3,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "gegevens",
      "lowSelectionFeedback": "Als gegevenscategorieën nog vaag zijn, blijft het risico giswerk. Welke soort gegevens kan de beoordeling nog kantelen?",
      "lowSelectionQuestion": "Welke gegevenscategorie zou, als zij toch voorkomt, de beoordeling zwaarder maken?",
      "options": [
        {
          "id": "identificerend",
          "label": "Identificerende gegevens.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Welke identificerende gegevens zijn echt nodig en welke kunnen worden beperkt?",
          "cat": "gegevens",
          "severity": "positive",
          "question": "Ga na of elk identificerend gegeven echt nodig is voor het doel, of dat een minder herleidbare variant ook zou volstaan.",
          "strength": "Identificerende gegevens zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Identificerende gegevens zijn vaak logisch in een proces, maar niet altijd in dezelfde omvang nodig. De verdieping richt zich op begrenzing.",
            "commonMistake": "Alle identificerende gegevens worden meegenomen omdat ze beschikbaar zijn, niet omdat ze aantoonbaar nodig zijn.",
            "whatToCheck": "Loop de identificerende gegevens één voor één langs en vraag je af: kan het doel ook bereikt worden met een pseudoniem, een rol, of een groepsaanduiding in plaats van een naam? Zo ja, dan kun je hier nog beperken.",
            "strongerReasoning": "Identificerende gegevens voelen vaak vanzelfsprekend omdat processen nu eenmaal over mensen gaan. De spanning zit tussen herkenbaarheid die het proces helpt en herleidbaarheid die de impact vergroot.",
            "sources": []
          }
        },
        {
          "id": "vrije_tekst",
          "label": "Vrije tekst, documenten of communicatie.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Vrije tekst kan gevoelige bijvangst bevatten. Hoe begrens je invoer en gebruik?",
          "cat": "gegevens",
          "severity": "warning",
          "question": "Vrije tekst laat zich niet goed sturen. Welke begrenzing, in wat mensen mogen invoeren of in wat er met die tekst gebeurt, voorkomt dat gevoelige bijvangst zomaar wordt verwerkt?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Vrije tekst, documenten en communicatie kunnen meer persoonsgegevens bevatten dan vooraf bedoeld. Daardoor ontstaat bijvangst die de scope en risico’s vergroot.",
            "commonMistake": "De beoogde inhoud wordt beoordeeld, terwijl gevoelige of irrelevante bijvangst in vrije invoer buiten beeld blijft.",
            "whatToCheck": "Bekijk een paar voorbeelden van tekst die mensen daadwerkelijk zouden kunnen invoeren, inclusief de rommelige, informele momenten. Kom je gevoelige informatie tegen die niet bedoeld was, dan weet je meteen hoe reëel de bijvangst is en waar de begrenzing moet zitten.",
            "strongerReasoning": "Vrije tekst is makkelijk voor gebruikers en lastig voor privacy. Je redenering staat pas als duidelijk is hoe je omgaat met gevoelige of irrelevante informatie die niet bedoeld was, maar wel realistisch kan meekomen.",
            "sources": []
          }
        },
        {
          "id": "output",
          "label": "Output over personen.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Wanneer kan output feitelijk invloed krijgen op beoordeling, begeleiding of besluitvorming over personen?",
          "cat": "risico",
          "severity": "warning",
          "question": "Bedenk het moment waarop deze output wordt gelezen door iemand die een beslissing over die persoon moet nemen. Weegt de output dan mee, of blijft hij echt op de achtergrond?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Output over personen kan ook persoonsgegevens zijn, zeker wanneer die output wordt gebruikt in beoordeling of besluitvorming. Het gebruik van output bepaalt de impact.",
            "commonMistake": "Output wordt gezien als systeemresultaat en niet als informatie die gevolgen kan hebben voor betrokkenen.",
            "whatToCheck": "Vraag na hoe de output in de praktijk wordt gebruikt door degene die ermee werkt. Wordt hij gebruikt om een gesprek voor te bereiden, of om een besluit te onderbouwen? In het laatste geval heeft de output meer invloed dan een neutrale term als 'informatie' doet vermoeden.",
            "strongerReasoning": "Output over personen kan meer worden dan een systeemresultaat. De spanning zit tussen informatie die helpt begrijpen en informatie die feitelijk gaat meewegen in beoordeling, begeleiding of besluitvorming.",
            "sources": []
          }
        },
        {
          "id": "bijzonder",
          "label": "Bijzondere of strafrechtelijke gegevens kunnen meekomen.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Als deze gegevens kunnen meekomen, moet je scherper onderbouwen waarom dat kan worden voorkomen of rechtmatig is.",
          "cat": "recht",
          "severity": "blocker",
          "question": "Als deze gegevens kunnen meekomen, moet je scherp kunnen maken waarom dat wordt voorkomen, of op welke grondslag het wél rechtmatig is. Welke van de twee is hier het geval?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Bijzondere of strafrechtelijke gegevens vragen extra scherpte omdat zij de impact en rechtmatigheidsvraag kunnen veranderen. Ook mogelijke bijvangst moet worden meegenomen.",
            "commonMistake": "Er wordt alleen gekeken naar bedoelde gegevens, terwijl gevoelige gegevens redelijkerwijs kunnen meekomen.",
            "whatToCheck": "Ga concreet na hoe bijzondere gegevens hier zouden kunnen binnenkomen, bijvoorbeeld via vrije tekst of een gespreksverslag. Kun je technisch of organisatorisch onderbouwen dat dit wordt tegengehouden? Zo niet, dan moet je de rechtmatige grondslag daarvoor apart kunnen aanwijzen.",
            "strongerReasoning": "Bijzondere of strafrechtelijke gegevens veranderen de zwaarte van de beoordeling, ook als zij alleen als bijvangst meekomen. Je redenering staat pas als duidelijk is of je die gegevens werkelijk voorkomt, of rechtmatig kunt dragen als voorkomen niet lukt.",
            "sources": []
          }
        },
        {
          "id": "onbekend",
          "label": "De gegevenscategorieën zijn nog onbekend.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Dan is het risico nog niet toetsbaar. Eerst moet duidelijk zijn welke gegevens redelijkerwijs kunnen worden verwerkt.",
          "cat": "gegevens",
          "severity": "blocker",
          "question": "Zonder zicht op de gegevenscategorieën blijft elk risico gissen. Welke stap, een testperiode, een gesprek met gebruikers, een technische analyse, helpt je dit boven tafel te krijgen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als gegevenscategorieën onbekend zijn, blijft het risico te abstract. Eerst moet zichtbaar worden welke gegevens redelijkerwijs kunnen worden verwerkt.",
            "commonMistake": "De risicobeoordeling wordt gestart zonder concreet beeld van gegevenssoorten, betrokkenen en bijvangst.",
            "whatToCheck": "Bedenk een manier om dit te achterhalen, bijvoorbeeld door een periode input te bekijken of gebruikers te vragen wat ze zouden invoeren. Zonder die stap kun je nog niet zeggen welke gegevens redelijkerwijs worden verwerkt, en dus ook niet welk risico daarbij hoort.",
            "strongerReasoning": "Onbekende gegevenscategorieën maken risico's tot gokwerk. De spanning zit tussen alvast beoordelen op hoofdlijnen en eerst moeten weten welke gegevens redelijkerwijs kunnen worden verwerkt.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "keten",
      "number": 7,
      "title": "Kan de keten de redenering dragen?",
      "intro": "Test of de keten de redenering kan dragen: opslag, toegang, leverancier, beheer en wijziging moeten zichtbaar zijn.",
      "type": "multi",
      "minimumForGreen": 4,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "keten",
      "lowSelectionFeedback": "Als ketenonderdelen ontbreken, blijven maatregelen snel symbolisch. Op welke schakel weet je nog niet wie erbij kan of wie handelt?",
      "lowSelectionQuestion": "Welke partij, toegang of gegevensstroom ontbreekt nog in je beeld?",
      "options": [
        {
          "id": "opslag",
          "label": "Opslaglocatie is bekend.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Welke gegevens staan waar, hoe lang, en onder welk beheer?",
          "cat": "keten",
          "severity": "positive",
          "question": "Ga na of je ook de details paraat hebt: niet alleen waar de gegevens staan, maar ook hoe lang, en wie er verantwoordelijk voor is dat ze daar niet langer blijven dan nodig.",
          "strength": "Opslaglocatie is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Opslaglocatie maakt uit voor beheer, toegang, bewaartermijn en controle. Zonder opslagbeeld is niet duidelijk waar maatregelen op aangrijpen.",
            "commonMistake": "Er wordt aangenomen dat gegevens veilig staan, zonder te beschrijven waar ze staan en onder welk beheer.",
            "whatToCheck": "Beschrijf de opslag in één zin met daarin de locatie, de bewaartermijn en de beheerder. Mis je een van die drie onderdelen, dan is de opslaglocatie nog niet volledig in beeld.",
            "strongerReasoning": "Opslaglocatie is pas betekenisvol als duidelijk is wat daar staat, hoe lang het daar blijft en wie het beheert. De spanning zit tussen weten waar gegevens staan en kunnen uitleggen waar het risico daardoor aangrijpt.",
            "sources": []
          }
        },
        {
          "id": "toegang",
          "label": "Toegang en autorisaties zijn bekend.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Wie kan feitelijk bij gegevens, output en logging?",
          "cat": "keten",
          "severity": "positive",
          "question": "Denk niet alleen aan wie officieel toegang heeft, maar ook aan wie er via logging, back-ups of beheerdersrechten feitelijk bij kan.",
          "strength": "Toegang is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Toegang bepaalt wie gegevens feitelijk kan gebruiken of beïnvloeden. Autorisaties moeten daarom ook output, logging en beheer omvatten.",
            "commonMistake": "Toegang wordt alleen formeel beschreven, terwijl feitelijke toegang via beheer, logging of exports buiten beeld blijft.",
            "whatToCheck": "Maak een lijst van iedereen die technisch bij de gegevens, de output of de logbestanden kan, ook beheerders en leveranciers die er normaal niet naar kijken. Is die lijst langer dan je in eerste instantie dacht, dan is dat de moeite waard om apart te benoemen.",
            "strongerReasoning": "Autorisaties op papier zeggen weinig als feitelijke toegang breder is. Je redenering staat pas als ook beheer, logging, exports en uitzonderingen zichtbaar zijn.",
            "sources": []
          }
        },
        {
          "id": "leverancier",
          "label": "Leverancier en subverwerkers zijn bekend.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Welke partijen kunnen persoonsgegevens verwerken of metadata zien?",
          "cat": "keten",
          "severity": "positive",
          "question": "Kijk verder dan de hoofdleverancier. Welke subverwerkers of onderliggende clouddiensten kunnen ook bij de gegevens of bij metadata daarover?",
          "strength": "Leverancier en subverwerkers zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Leveranciers en subverwerkers kunnen invloed hebben op gegevens, metadata en beheer. Hun feitelijke rol moet passen bij de formele afspraken.",
            "commonMistake": "De leverancier wordt genoemd als contractpartij, maar subverwerking, metadata en beheerhandelingen blijven onbesproken.",
            "whatToCheck": "Zoek uit of de leverancier subverwerkers gebruikt, en zo ja, wie dat zijn en waar ze zijn gevestigd. Staat dat niet duidelijk in de verwerkersovereenkomst, dan is dat een vraag die je nog moet uitzetten.",
            "strongerReasoning": "De hoofdleverancier is zelden de hele keten. De spanning zit tussen de partij waarmee je contracteert en de partijen die in praktijk gegevens, metadata of beheerhandelingen kunnen raken.",
            "sources": []
          }
        },
        {
          "id": "bewaartermijn",
          "label": "Bewaartermijn of verwijdering is bekend.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Wie borgt verwijdering en hoe wordt dat aantoonbaar?",
          "cat": "keten",
          "severity": "positive",
          "question": "Een bewaartermijn op papier is niet hetzelfde als een bewaartermijn die ook echt wordt uitgevoerd. Wie zorgt ervoor dat gegevens na afloop van de termijn daadwerkelijk verdwijnen, en hoe wordt dat zichtbaar?",
          "strength": "Bewaartermijn of verwijdering is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Bewaartermijn en verwijdering bepalen hoe lang risico’s blijven bestaan. Een afspraak is pas sterk als de uitvoering aantoonbaar is.",
            "commonMistake": "Er wordt een bewaartermijn genoemd zonder te beschrijven wie verwijdert en hoe dat wordt gecontroleerd.",
            "whatToCheck": "Ga na of er een technisch of organisatorisch mechanisme is dat verwijdering afdwingt, of dat het afhangt van iemand die er op tijd aan denkt. Het eerste is aantoonbaar, het tweede is dat in de praktijk vaak niet.",
            "strongerReasoning": "Een bewaartermijn op papier verkleint nog geen risico. Je redenering staat pas als duidelijk is wie verwijdering uitvoert, hoe dat aantoonbaar wordt en wat er gebeurt met kopieën of back-ups.",
            "sources": []
          }
        },
        {
          "id": "wijziging",
          "label": "Wijzigingen in inrichting of gebruik worden beheerst.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Wat gebeurt er als functionaliteit, model, brondata of gebruiksdoel verandert?",
          "cat": "besluit",
          "severity": "warning",
          "question": "Systemen en modellen veranderen vaak zonder aankondiging. Wie merkt het als de functionaliteit, het onderliggende model, de brondata of het gebruiksdoel verschuift, en wat gebeurt er dan met deze beoordeling?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Wijzigingen in inrichting, brondata of gebruik kunnen de oorspronkelijke DPIA-redenering ondermijnen. Daarom moet duidelijk zijn wanneer herbeoordeling nodig is.",
            "commonMistake": "De beoordeling gaat uit van de startsituatie en mist triggers voor wijzigingen in functionaliteit, data of gebruik.",
            "whatToCheck": "Ga na of er een concreet signaal of proces is dat een wijziging aan de bel laat trekken, bijvoorbeeld een leveranciersupdate, een nieuwe functie, of een ander gebruiksdoel. Ontbreekt dat, dan kan de inrichting veranderen zonder dat de DPIA daar iets van meekrijgt.",
            "strongerReasoning": "Een DPIA kan kloppen op dag één en verouderen op dag twee. De spanning zit tussen beoordelen van de startsituatie en borgen dat wijzigingen in doel, data, model of gebruik opnieuw tegenspraak oproepen.",
            "sources": []
          }
        },
        {
          "id": "onduidelijk",
          "label": "De keten is nog onduidelijk.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Dan kun je maatregelen nog niet goed koppelen aan risico’s. Welke partij of gegevensstroom ontbreekt?",
          "cat": "keten",
          "severity": "blocker",
          "question": "Zonder een compleet beeld van de keten kun je maatregelen nog niet goed aan risico's koppelen. Welke partij, welk systeem of welke gegevensstroom mis je nog in je beschrijving?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een onduidelijke keten maakt maatregelen moeilijk toetsbaar, omdat niet zichtbaar is waar gegevens lopen en wie invloed heeft. Dan ontbreekt uitvoerbaarheid.",
            "commonMistake": "De verwerking wordt beschreven alsof zij in één systeem plaatsvindt, terwijl partijen, rollen of gegevensstromen ontbreken.",
            "whatToCheck": "Teken de gegevensstroom van begin tot eind, van invoer tot verwijdering, en markeer elke plek waar je niet zeker weet welke partij daar precies bij betrokken is. Elke onbekende plek in die tekening is een vraag die eerst beantwoord moet worden.",
            "strongerReasoning": "Een onduidelijke keten maakt maatregelen snel symbolisch. Je redenering staat pas als zichtbaar is waar gegevens lopen, wie invloed heeft en op welke schakel een maatregel daadwerkelijk aangrijpt.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "rechtmatigheid",
      "number": 8,
      "title": "Waarop rust de rechtmatigheid?",
      "intro": "Kies geen grondslag om de rest passend te maken. De juridische route moet uit doel, noodzaak en context volgen.",
      "type": "single",
      "options": [
        {
          "id": "procesvolgend",
          "label": "De grondslag volgt uit het onderliggende proces.",
          "feedback": "Dit is een bruikbaar vertrekpunt, maar de redenering mag hier nog niet landen. Is beschreven welk proces dat is en waarom deze verwerking daarbinnen noodzakelijk is?",
          "cat": "recht",
          "severity": "info",
          "question": "Ga na of het onderliggende proces echt is beschreven, en of duidelijk is waarom deze specifieke verwerking daarbinnen nodig is, en niet alleen handig.",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als de grondslag uit het proces volgt, moet zichtbaar zijn welk proces dat is en waarom deze verwerking daarin past. Anders blijft de grondslag te abstract.",
            "commonMistake": "Er wordt naar het proces verwezen zonder te laten zien welke concrete taak of noodzaak de verwerking draagt.",
            "whatToCheck": "Zoek de tekst op waarin het onderliggende proces wordt beschreven. Staat daar ook expliciet in waarom persoonsgegevens binnen dat proces nodig zijn, of wordt dat als vanzelfsprekend verondersteld?",
            "strongerReasoning": "Een grondslag volgt niet uit een procesnaam, maar uit doel, taak en noodzaak binnen dat proces. De spanning zit tussen juridisch labelen en inhoudelijk laten zien waarom deze verwerking daarbinnen nodig is.",
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
            "strongerReasoning": "Publieke taak kan een sterke route zijn, maar ook een te ruim vangnet. Je redenering staat pas als duidelijk is welke concrete taak deze verwerking ondersteunt en waarom minder ingrijpend verwerken onvoldoende is.",
            "sources": []
          }
        },
        {
          "id": "toestemming",
          "label": "Er wordt aan toestemming gedacht.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Toestemming is kwetsbaar als weigeren niet reëel is. Is toestemming hier echt vrij?",
          "cat": "recht",
          "severity": "warning",
          "question": "Toestemming is kwetsbaar zodra weigeren in de praktijk lastig is, bijvoorbeeld door een afhankelijkheidsrelatie. Kan iemand hier echt nee zeggen, zonder nadeel te ondervinden?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Toestemming vraagt om vrijwilligheid, specificiteit en een reële mogelijkheid om te weigeren. In afhankelijkheidsrelaties is dat vaak kwetsbaar.",
            "commonMistake": "Toestemming wordt gekozen omdat het eenvoudig lijkt, zonder te toetsen of weigeren of intrekken werkelijk mogelijk is.",
            "whatToCheck": "Stel je een betrokkene voor die weigert. Verandert er dan iets in zijn positie, beoordeling of toegang tot een dienst? Verandert er iets, dan is de toestemming waarschijnlijk niet vrij genoeg om als grondslag te dienen.",
            "strongerReasoning": "Toestemming klinkt veilig omdat iemand ja zegt. De spanning zit tussen formeel vragen om toestemming en de praktische vraag of iemand zonder nadeel nee kan zeggen of later kan terugkomen op die keuze.",
            "sources": []
          }
        },
        {
          "id": "nog_niet",
          "label": "De juridische route is nog niet bepaald.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Dan mag je nog geen rechtmatigheidsconclusie trekken.",
          "cat": "recht",
          "severity": "blocker",
          "question": "Zonder een bepaalde grondslag kun je nog geen conclusie trekken over rechtmatigheid. Welke route lijkt op dit moment het meest voor de hand te liggen, en wat mis je nog om dat te onderbouwen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als de juridische route nog niet is bepaald, kan de DPIA nog geen rechtmatigheidsconclusie dragen. Eerst moeten doel, noodzaak en context voldoende scherp zijn.",
            "commonMistake": "Er wordt al richting een conclusie geschreven terwijl de grondslag nog niet uit de redenering volgt.",
            "whatToCheck": "Noem de grondslag die je voorlopig het meest waarschijnlijk vindt, en schrijf op wat je nog moet uitzoeken om die hard te maken. Kun je die vraag niet beantwoorden, dan is het te vroeg om al een rechtmatigheidsconclusie te trekken.",
            "strongerReasoning": "Zonder juridische route mag de conclusie nog niet landen. Je redenering staat pas als doel, noodzaak en context voldoende scherp zijn om de grondslag te laten volgen in plaats van vooraf te kiezen.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "risico",
      "number": 9,
      "title": "Wat kan misgaan voor betrokkenen?",
      "intro": "Vink risico’s aan die voor betrokkenen kunnen ontstaan. Een technisch probleem is pas risico als duidelijk is wat het voor mensen betekent.",
      "type": "multi",
      "minimumForGreen": 1,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "risico",
      "lowSelectionFeedback": "Als geen risico is geselecteerd, kijk je mogelijk nog naar techniek of organisatie. Wat verandert er concreet voor betrokkenen als het misgaat?",
      "lowSelectionQuestion": "Welk concreet gevolg voor betrokkenen kun je nog niet goed formuleren?",
      "options": [
        {
          "id": "gripverlies",
          "label": "Betrokkenen verliezen grip op hun gegevens.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Waardoor verliest iemand grip: onbekende verwerking, onduidelijke toegang, hergebruik of lastig verwijderbare gegevens?",
          "cat": "risico",
          "severity": "warning",
          "question": "Grip verliezen kan verschillende oorzaken hebben. Weet de betrokkene dat de verwerking plaatsvindt, is duidelijk wie er toegang heeft, en kan hij zijn gegevens later nog laten aanpassen of verwijderen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Gripverlies ontstaat wanneer betrokkenen niet meer kunnen overzien waar gegevens terechtkomen of hoe zij worden gebruikt. Dat vraagt om oorzaken en gevolgen.",
            "commonMistake": "Gripverlies wordt genoemd als algemeen risico, zonder te benoemen waardoor betrokkenen controle verliezen.",
            "whatToCheck": "Loop de mogelijke oorzaken van gripverlies één voor één na: onbekendheid met de verwerking, onduidelijke toegang, hergebruik voor een ander doel, of gegevens die moeilijk te verwijderen zijn. Welke daarvan speelt hier het sterkst?",
            "strongerReasoning": "Gripverlies is pas meer dan een label als duidelijk is waardoor iemand controle kwijtraakt. De spanning zit tussen gegevens die organisatorisch handig doorstromen en betrokkenen die niet meer kunnen overzien waar hun gegevens zijn of blijven.",
            "sources": []
          }
        },
        {
          "id": "onjuiste_informatie",
          "label": "Onjuiste of misleidende informatie over personen wordt gebruikt.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Waar kan foutieve informatie terechtkomen en wie kan daarop handelen?",
          "cat": "risico",
          "severity": "warning",
          "question": "Foutieve informatie leidt pas tot risico als iemand er iets mee doet. Waar kan een fout terechtkomen, en wie zou daar vervolgens op kunnen handelen zonder de fout te herkennen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Onjuiste informatie wordt pas een privacyrisico als zij ergens wordt gebruikt. De route van fout naar gevolg moet zichtbaar zijn.",
            "commonMistake": "Er wordt gesteld dat informatie fout kan zijn, maar niet wie erop handelt of welk gevolg dat heeft.",
            "whatToCheck": "Volg een fictieve fout door het systeem: waar ontstaat hij, waar wordt hij opgeslagen of doorgestuurd, en wie ziet hem uiteindelijk? Is er iemand aan het eind van die keten die op basis daarvan een beslissing neemt, dan is het risico reëel.",
            "strongerReasoning": "Een fout is pas een privacyrisico als die fout gevolgen kan krijgen. Je redenering staat pas als zichtbaar is waar onjuiste informatie terechtkomt, wie erop handelt en wat dat voor de betrokkene verandert.",
            "sources": []
          }
        },
        {
          "id": "contextverschuiving",
          "label": "Gegevens worden gebruikt buiten de oorspronkelijke context.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Welke contextverschuiving is reëel en welk nadeel kan dat opleveren?",
          "cat": "risico",
          "severity": "warning",
          "question": "Gegevens die in de ene context onschuldig zijn, kunnen in een andere context een heel andere lading krijgen. Welke verschuiving is hier realistisch, en wat verandert er voor de betrokkene als dat gebeurt?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Gegevens die in een andere context worden gebruikt kunnen een andere betekenis of impact krijgen. De oorspronkelijke verwachting van betrokkenen kan daardoor worden doorbroken.",
            "commonMistake": "Hergebruik wordt als efficiënt of logisch gezien, zonder te toetsen of de nieuwe context nog past bij de oorspronkelijke verzameling.",
            "whatToCheck": "Bedenk een concrete situatie waarin de gegevens buiten hun oorspronkelijke doel worden gebruikt of bekeken, bijvoorbeeld door een andere afdeling. Beschrijf wat dat voor de betrokkene zou betekenen, en niet alleen dat het 'ongewenst' is.",
            "strongerReasoning": "Gegevens veranderen van betekenis als de context verschuift. De spanning zit tussen hergebruik dat logisch voelt voor de organisatie en de verwachting waarmee de gegevens oorspronkelijk zijn gedeeld.",
            "sources": []
          }
        },
        {
          "id": "openbaarmaking",
          "label": "Informatie wordt breder toegankelijk dan bedoeld.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Wie krijgt dan toegang, en waarom is dat voor betrokkenen nadelig?",
          "cat": "risico",
          "severity": "warning",
          "question": "Informatie kan breder toegankelijk worden zonder dat iemand dat zo bedoelde. Wie krijgt er in dat geval toegang die er eerst niet was, en wat kan die persoon daarmee doen dat nadelig is voor de betrokkene?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Breder toegankelijke informatie kan leiden tot verlies van vertrouwelijkheid, controle of context. De vraag is wie toegang krijgt en waarom dat ertoe doet.",
            "commonMistake": "Er wordt vooral gekeken naar autorisatie in het systeem, niet naar de gevolgen van bredere vindbaarheid of verspreiding.",
            "whatToCheck": "Beschrijf het scenario waarin de informatie breder zichtbaar wordt dan bedoeld, bijvoorbeeld door een gedeelde omgeving of een zoekfunctie. Benoem concreet wie er dan bij kan, en wat dat voor de betrokkene verandert.",
            "strongerReasoning": "Breder toegankelijk betekent niet alleen dat meer mensen iets kunnen zien. Je redenering staat pas als duidelijk is wie er dan bij kan, wat zichtbaar wordt en welk nadeel dat concreet kan opleveren.",
            "sources": []
          }
        },
        {
          "id": "rechten",
          "label": "Inzage, correctie of verwijdering wordt moeilijker.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Welke rechten worden praktisch moeilijk uitvoerbaar en door welke inrichting komt dat?",
          "cat": "risico",
          "severity": "warning",
          "question": "Sommige inrichtingen maken het praktisch lastig om inzage, correctie of verwijdering echt uit te voeren. Welk onderdeel van deze inrichting zou dat hier kunnen doen, en waardoor?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Inzage, correctie of verwijdering kan praktisch moeilijk worden door verspreiding, afgeleide output of onduidelijke opslag. Dat raakt de uitvoerbaarheid van rechten.",
            "commonMistake": "Rechten worden formeel genoemd, maar niet getoetst aan de feitelijke inrichting van bronnen, kopieën, output en bewaartermijnen.",
            "whatToCheck": "Doe de gedachte-oefening van een inzage- of verwijderverzoek en volg het pad dat iemand zou moeten afleggen om het uit te voeren. Loop je vast bij een systeem, een leverancier of een kopie die je niet meer kunt vinden, dan is dat het knelpunt.",
            "strongerReasoning": "Rechten bestaan op papier, maar kunnen praktisch vastlopen in kopieën, output, opslag of leveranciers. De spanning zit tussen formeel kunnen voldoen en feitelijk kunnen vinden, corrigeren of verwijderen.",
            "sources": []
          }
        },
        {
          "id": "nadeel",
          "label": "Er ontstaat nadeel in beoordeling, begeleiding, selectie of besluitvorming.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Welke rol krijgt informatie of output in een proces dat gevolgen heeft voor mensen?",
          "cat": "risico",
          "severity": "warning",
          "question": "De rol die informatie krijgt in een proces bepaalt hoeveel gewicht ze heeft. Wordt deze informatie of output gebruikt om iemand te begrijpen, of om over iemand te beslissen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Nadeel ontstaat wanneer informatie of output invloed krijgt op beoordeling, begeleiding, selectie of besluitvorming. De rol in het proces moet daarom concreet zijn.",
            "commonMistake": "Er wordt gekeken naar het systeemresultaat, maar niet naar de beslissing of behandeling die daarop kan volgen.",
            "whatToCheck": "Ga na wie de informatie of output gebruikt, en waarvoor. Wordt ze gebruikt bij een beoordeling, selectie of begeleidingstraject, dan is er een reëel risico op nadeel, ook als dat niet de bedoeling was.",
            "strongerReasoning": "Nadeel ontstaat waar informatie invloed krijgt op behandeling of besluitvorming. Je redenering staat pas als duidelijk is welke processtap verschuift en wie daardoor anders naar de betrokkene kan kijken of handelen.",
            "sources": []
          }
        },
        {
          "id": "geen_concreet",
          "label": "Ik kan nog geen concreet gevolg voor betrokkenen formuleren.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Dan is het risico nog niet toetsbaar. Formuleer eerst het gevolg voor mensen.",
          "cat": "risico",
          "severity": "blocker",
          "question": "Zonder een concreet gevolg is een risico nog niet toetsbaar. Wat zou er voor een betrokkene daadwerkelijk veranderen als het misgaat, in gewone taal en niet in vaktermen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als er nog geen concreet gevolg voor betrokkenen is, blijft het risico niet toetsbaar. Maatregelen kunnen dan ook niet goed worden gekoppeld.",
            "commonMistake": "Technische of organisatorische onzekerheden worden risico genoemd zonder te vertalen naar gevolgen voor mensen.",
            "whatToCheck": "Probeer het gevolg te formuleren als een zin die begint met 'iemand zou dan...', bijvoorbeeld 'iemand zou dan ten onrechte extra begeleiding krijgen'. Lukt dat niet, dan beschrijf je nog een onzekerheid en nog geen risico.",
            "strongerReasoning": "Zonder gevolg voor mensen is het risico nog een onzekerheid. De spanning zit tussen technische of organisatorische zorgen benoemen en kunnen zeggen wat er voor een betrokkene daadwerkelijk verandert.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "toetsbaarheid",
      "number": 10,
      "title": "Zijn de risico’s toetsbaar?",
      "intro": "Test of risico’s concreet genoeg zijn om maatregelen en restrisico betrouwbaar te beoordelen.",
      "type": "single",
      "options": [
        {
          "id": "toetsbaar",
          "label": "Ja, per risico is oorzaak, gebeurtenis en gevolg te volgen.",
          "feedback": "Dit is een bruikbaar vertrekpunt, maar de redenering mag hier nog niet landen. Controleer nog of elk risico ook zonder vakkennis begrijpelijk is voor een kritische lezer.",
          "cat": "risico",
          "severity": "info",
          "question": "Loop de risico's nog eens langs met een kritische blik. Is voor elk risico ook zonder achtergrondkennis te volgen wat de oorzaak, de gebeurtenis en het gevolg zijn?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Ook toetsbare risico’s moeten leesbaar blijven voor een kritische lezer buiten het project. Begrijpelijkheid is onderdeel van controleerbaarheid.",
            "commonMistake": "Risico’s zijn intern logisch, maar leunen op vaktaal of projectkennis die een externe lezer niet heeft.",
            "whatToCheck": "Lees elk risico voor aan iemand die niet bij het project betrokken is en vraag of hij het kan navertellen in zijn eigen woorden. Lukt dat niet, dan is het risico nog te veel in vaktaal of te abstract geformuleerd.",
            "strongerReasoning": "Een risico is pas toetsbaar als oorzaak, gebeurtenis en gevolg ook buiten het project te volgen zijn. De spanning zit tussen intern begrijpen wat je bedoelt en extern kunnen laten zien waarom de redenering klopt.",
            "sources": []
          }
        },
        {
          "id": "te_abstract",
          "label": "De risico’s zijn nog te abstract.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Woorden als privacyrisico of leveranciersrisico zijn nog geen gevolg voor betrokkenen.",
          "cat": "risico",
          "severity": "warning",
          "question": "Termen als privacyrisico of leveranciersrisico beschrijven een categorie, geen gevolg. Wat gebeurt er concreet met een betrokkene als dit risico zich voordoet?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Abstracte risicotermen helpen niet om impact te beoordelen. De term moet worden vertaald naar een concreet gevolg voor betrokkenen.",
            "commonMistake": "Een label zoals privacyrisico of leveranciersrisico wordt gebruikt alsof het al een uitgewerkt risico is.",
            "whatToCheck": "Vervang de abstracte term één keer volledig door een zin over een persoon: niet 'er is een leveranciersrisico', maar bijvoorbeeld 'als de leverancier de gegevens onvoldoende beveiligt, kan iemand anders bij de gegevens van een student komen'. Lukt die vertaalslag niet, dan is het risico nog niet scherp genoeg.",
            "strongerReasoning": "Abstracte risicotermen geven schijn van scherpte. Je redenering staat pas als woorden als privacyrisico of leveranciersrisico zijn vertaald naar een gebeurtenis en een gevolg voor mensen.",
            "sources": []
          }
        },
        {
          "id": "gemengd",
          "label": "Oorzaken, maatregelen en gevolgen lopen door elkaar.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Splits de redenering: eerst gevolg voor betrokkenen, daarna oorzaak, daarna maatregel.",
          "cat": "risico",
          "severity": "warning",
          "question": "Oorzaak, maatregel en gevolg door elkaar laten lopen, maakt een risico moeilijk te beoordelen. Kun je voor dit risico apart benoemen wat de oorzaak is, wat er gebeurt, en wat het gevolg voor de betrokkene is?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als oorzaken, gevolgen en maatregelen door elkaar lopen, is niet meer toetsbaar welk risico wordt beheerst. De redenering moet worden gesplitst.",
            "commonMistake": "Een maatregel of oorzaak wordt als risico beschreven, waardoor het gevolg voor betrokkenen onduidelijk blijft.",
            "whatToCheck": "Splits de tekst in drie losse zinnen: eerst het gevolg voor de betrokkene, dan de gebeurtenis die daartoe leidt, en dan pas de oorzaak. Lukt het niet om deze drie uit elkaar te trekken, dan zit er nog een maatregel of oplossing verstopt in wat een risicobeschrijving hoort te zijn.",
            "strongerReasoning": "Als oorzaak, maatregel en gevolg door elkaar lopen, kun je niet meer beoordelen wat wordt beheerst. De spanning zit tussen een nette risicotekst en de vraag of daarin eigenlijk al een oplossing verstopt zit.",
            "sources": []
          }
        },
        {
          "id": "niet_toetsbaar",
          "label": "Nee, de risico’s zijn nog niet toetsbaar.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Dan is het te vroeg om maatregelen of restrisico betrouwbaar te beoordelen.",
          "cat": "risico",
          "severity": "blocker",
          "question": "Zonder toetsbare risico's is het te vroeg om maatregelen of restrisico te beoordelen. Welk risico mist nog een duidelijke oorzaak, gebeurtenis of gevolg?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Niet-toetsbare risico’s maken maatregelen en restrisico onbetrouwbaar. Eerst moet duidelijk zijn wat precies kan gebeuren en voor wie.",
            "commonMistake": "Er wordt al over maatregelen gesproken terwijl het risico zelf nog niet scherp genoeg is geformuleerd.",
            "whatToCheck": "Pak het risico dat het minst scherp aanvoelt en probeer het in drie stappen te beschrijven: oorzaak, gebeurtenis, gevolg. Blijft een van die drie leeg, dan weet je precies waar de uitwerking nog moet beginnen.",
            "strongerReasoning": "Niet-toetsbare risico's maken elke maatregel onzeker. Je redenering staat pas als het risico concreet genoeg is om te kunnen zien of een maatregel het werkelijk kleiner maakt.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "maatregelen",
      "number": 11,
      "title": "Passen de maatregelen bij het risico?",
      "intro": "Een maatregel is pas sterk als duidelijk is welk risico kleiner wordt, wie handelt en hoe werking zichtbaar blijft.",
      "type": "multi",
      "minimumForGreen": 3,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "maatregel",
      "lowSelectionFeedback": "Als maatregelen los staan van risico’s, ontstaat vooral papieren beheersing. Welke maatregel grijpt nog nergens aantoonbaar op aan?",
      "lowSelectionQuestion": "Welke maatregel kun je nog niet koppelen aan een concreet risico of bewijs van werking?",
      "options": [
        {
          "id": "gekoppeld",
          "label": "Elke maatregel is gekoppeld aan een concreet risico.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Kun je per maatregel zeggen welk risico kleiner wordt?",
          "cat": "maatregel",
          "severity": "positive",
          "question": "Ga per maatregel na of je ook echt kunt aanwijzen welk risico daardoor kleiner wordt, en niet alleen dat de maatregel 'goed' of 'gebruikelijk' is.",
          "strength": "Maatregelen zijn gekoppeld aan risico’s.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een gekoppelde maatregel is sterker dan een losse maatregel, maar de koppeling moet controleerbaar blijven. De vraag is welk risico echt kleiner wordt.",
            "commonMistake": "Maatregelen worden opgesomd zonder per maatregel duidelijk te maken welk risico zij beheersen.",
            "whatToCheck": "Maak twee kolommen, risico's en maatregelen, en trek een lijn tussen elk risico en de maatregel die het beperkt. Blijft er een risico zonder lijn over, dan mist daar nog een maatregel. Blijft er een maatregel zonder lijn over, dan is niet duidelijk wat hij oplost.",
            "strongerReasoning": "Een maatregel die nergens precies op aangrijpt, geeft vooral geruststelling. De spanning zit tussen maatregelen opsommen en laten zien welk concreet risico door welke maatregel kleiner wordt.",
            "sources": []
          }
        },
        {
          "id": "eigenaar",
          "label": "Eigenaar en uitvoering zijn bekend.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Wie doet wat, wanneer en met welk mandaat?",
          "cat": "maatregel",
          "severity": "positive",
          "question": "Namen en rollen zijn mooi, maar mandaat is waar het op aankomt. Heeft degene die dit uitvoert ook echt de bevoegdheid en de tijd om het te doen?",
          "strength": "Eigenaar en uitvoering zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Eigenaar en uitvoering bepalen of een maatregel meer is dan een voornemen. Zonder mandaat, timing en verantwoordelijkheid blijft beheersing kwetsbaar.",
            "commonMistake": "Er wordt genoemd dat iets geregeld wordt, maar niet wie het uitvoert of mag afdwingen.",
            "whatToCheck": "Vraag de aangewezen eigenaar zelf of hij weet dat hij deze rol heeft, en of hij de bevoegdheid en middelen heeft om die waar te maken. Blijkt dat niet zo te zijn, dan staat er wel een naam, maar nog geen werkend eigenaarschap.",
            "strongerReasoning": "Eigenaarschap is pas echt als iemand bevoegd is om te handelen. Je redenering staat pas als duidelijk is wie wat doet, wanneer dat moet gebeuren en welk mandaat daarbij hoort.",
            "sources": []
          }
        },
        {
          "id": "bewijs",
          "label": "Bewijs of controle is geregeld.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Hoe toon je aan dat de maatregel werkt en blijft werken?",
          "cat": "maatregel",
          "severity": "positive",
          "question": "Een maatregel die op papier bestaat, werkt niet vanzelf ook in de praktijk. Hoe zou je over een half jaar kunnen aantonen dat deze maatregel nog steeds functioneert zoals bedoeld?",
          "strength": "Bewijs of controle is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Bewijs of controle maakt zichtbaar of een maatregel werkt en blijft werken. Zonder bewijs blijft het vooral een papieren maatregel.",
            "commonMistake": "De maatregel wordt als genomen beschouwd zonder toetsing van werking, naleving of onderhoud.",
            "whatToCheck": "Bedenk welk bewijs je zou kunnen laten zien aan een controleur: een log, een steekproef, een rapportage. Kun je niets bedenken, dan is er wel een maatregel bedacht, maar nog geen manier om te weten of hij werkt.",
            "strongerReasoning": "Een maatregel werkt niet omdat hij is bedacht. De spanning zit tussen vertrouwen op papier en kunnen aantonen dat de maatregel in de praktijk werkt en blijft werken.",
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
            "strongerReasoning": "Menselijke controle is geen waarborg als de mens vooral bevestigt wat het systeem al suggereert. Je redenering staat pas als duidelijk is hoe de controleur fouten ziet, mag afwijken en werkelijk kan ingrijpen.",
            "sources": []
          }
        },
        {
          "id": "alleen_beleid",
          "label": "De maatregel is vooral beleid, instructie of bewustwording.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Gedragsmaatregelen helpen alleen als gedrag het risico veroorzaakt en naleving controleerbaar is.",
          "cat": "maatregel",
          "severity": "warning",
          "question": "Beleid en instructies werken alleen als het probleem echt in gedrag zit, en als je ook kunt zien of mensen zich eraan houden. Speelt dat hier allebei, of is er ook een technische kant aan het risico?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Beleid, instructie of bewustwording kan helpen, maar niet elk risico is met gedrag te beheersen. Naleving moet bovendien controleerbaar zijn.",
            "commonMistake": "Een gedragsmaatregel wordt gekozen omdat die makkelijk te organiseren is, terwijl het risico mogelijk technisch of procesmatig begrensd moet worden.",
            "whatToCheck": "Onderzoek of het risico ontstaat door menselijk handelen dat je met een instructie kunt bijsturen, of door de inrichting van het systeem zelf. Zit het risico in de inrichting, dan lost beleid het alleen niet op, hoe goed het beleid ook is.",
            "strongerReasoning": "Beleid helpt alleen waar gedrag het risico veroorzaakt. De spanning zit tussen mensen instrueren en het risico technisch of procesmatig zo begrenzen dat naleving niet alleen op goede bedoelingen rust.",
            "sources": []
          }
        },
        {
          "id": "onvoldoende",
          "label": "Het is nog niet duidelijk of maatregelen voldoende zijn.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Dan hoort dat als randvoorwaarde of restrisico zichtbaar te blijven.",
          "cat": "besluit",
          "severity": "blocker",
          "question": "Zolang dit niet vaststaat, hoort deze onzekerheid als randvoorwaarde of restrisico zichtbaar te blijven in plaats van stilzwijgend te verdwijnen. Wie moet die knoop uiteindelijk doorhakken?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Als onduidelijk is of maatregelen voldoende zijn, moet die onzekerheid zichtbaar blijven. Anders lijkt het restrisico beter beheerst dan het is.",
            "commonMistake": "Onzekerheid over werking van maatregelen verdwijnt uit de conclusie in plaats van als randvoorwaarde of restrisico terug te komen.",
            "whatToCheck": "Beschrijf wat er nog moet gebeuren voordat je met zekerheid kunt zeggen dat de maatregelen voldoende zijn, en wie dat gaat beoordelen. Kun je dat niet, benoem de onzekerheid dan expliciet als openstaand punt in plaats van hem te laten verdwijnen in de tekst.",
            "strongerReasoning": "Onzekerheid over maatregelen verdwijnt niet doordat de tekst afrondt. Je redenering staat pas als duidelijk is welk restrisico overblijft, wie dat beoordeelt en wie het verantwoord accepteert.",
            "sources": []
          }
        }
      ]
    },
    {
      "id": "besluit",
      "number": 12,
      "title": "Wat moet nog besloten worden?",
      "intro": "Maak zichtbaar welke voorwaarden, besluiten en restrisico’s nog niet mogen verdwijnen in een nette conclusie.",
      "type": "multi",
      "minimumForGreen": 3,
      "lowSelectionSeverity": "warning",
      "lowSelectionCat": "besluit",
      "lowSelectionFeedback": "Als besluitpunten niet zichtbaar zijn, lijkt de DPIA stelliger dan de redenering kan dragen. Welk open punt kan de conclusie nog veranderen?",
      "lowSelectionQuestion": "Welk besluit, welke voorwaarde of welk restrisico is nog niet belegd?",
      "options": [
        {
          "id": "voorwaarden",
          "label": "Startvoorwaarden zijn benoemd.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Welke voorwaarden moeten vóór ingebruikname aantoonbaar ingevuld zijn?",
          "cat": "besluit",
          "severity": "positive",
          "question": "Startvoorwaarden zijn pas bruikbaar als ze aantoonbaar zijn. Kun je van elke voorwaarde zeggen hoe je straks kunt controleren dat eraan is voldaan?",
          "strength": "Startvoorwaarden zijn benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Startvoorwaarden maken duidelijk wat eerst geregeld moet zijn voordat verwerking verantwoord kan starten. Zonder voorwaarden wordt de conclusie te stellig.",
            "commonMistake": "Voorwaarden worden gezien als uitvoeringsdetails, terwijl ze bepalend kunnen zijn voor verantwoord starten.",
            "whatToCheck": "Maak van elke voorwaarde een controleerbare zin: niet 'toegang is geregeld', maar bijvoorbeeld 'toegang is beperkt tot rol X, gecontroleerd op datum Y'. Lukt die omzetting niet, dan is de voorwaarde nog te vaag om vóór ingebruikname echt te kunnen toetsen.",
            "strongerReasoning": "Startvoorwaarden zijn pas sterk als zij vooraf toetsbaar zijn. De spanning zit tussen zeggen dat iets geregeld moet zijn en kunnen aantonen dat het vóór ingebruikname echt geregeld is.",
            "sources": []
          }
        },
        {
          "id": "restrisico",
          "label": "Restrisico is expliciet belegd.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Wie accepteert welk restrisico en op basis van welke informatie?",
          "cat": "besluit",
          "severity": "positive",
          "question": "Een restrisico dat er 'gewoon nog is' zonder eigenaar, is eigenlijk stilzwijgend geaccepteerd. Wie neemt hier bewust de beslissing om dit risico te accepteren, en op basis van welke informatie doet hij dat?",
          "strength": "Restrisico is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Restrisico moet expliciet zijn belegd omdat niet elk risico volledig verdwijnt. De besluitvorming moet laten zien wie welk risico accepteert.",
            "commonMistake": "Restrisico wordt impliciet geaccepteerd doordat de DPIA tekstueel afrondt zonder eigenaar of besluit.",
            "whatToCheck": "Zoek de naam of functie op van degene die dit restrisico formeel accepteert. Kun je die niet vinden, dan is het risico misschien wel benoemd, maar nog niet belegd.",
            "strongerReasoning": "Restrisico bestaat niet neutraal. Het wordt gedragen door iemand die het accepteert. Je redenering staat pas als duidelijk is welk risico overblijft, wie dat weet en op basis waarvan die acceptatie plaatsvindt.",
            "sources": []
          }
        },
        {
          "id": "herbeoordeling",
          "label": "Trigger voor herbeoordeling is benoemd.",
          "feedback": "Dit onderdeel helpt pas als het de redenering echt draagt. Welke wijziging in doel, data, leverancier, model of gebruik opent de beoordeling opnieuw?",
          "cat": "besluit",
          "severity": "positive",
          "question": "Een DPIA veroudert zodra de situatie verandert. Welke concrete wijziging, in doel, data, leverancier, model of gebruik, zou voor jou reden zijn om deze beoordeling opnieuw tegen het licht te houden?",
          "strength": "Herbeoordelingstrigger is benoemd.",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Een DPIA blijft alleen bruikbaar als duidelijk is wanneer verandering tot herbeoordeling leidt. Zonder trigger kan de redenering verouderen.",
            "commonMistake": "De DPIA wordt behandeld als een eenmalig document, zonder te benoemen wanneer doel, data, leverancier of gebruik opnieuw moeten worden getoetst.",
            "whatToCheck": "Bedenk minimaal twee concrete gebeurtenissen die een herbeoordeling zouden moeten triggeren, bijvoorbeeld een modelwissel of een nieuw gebruiksdoel. Staat nergens vastgelegd wie die triggers in de gaten houdt, dan is de trigger wel bedacht, maar nog niet geborgd.",
            "strongerReasoning": "Een DPIA zonder herbeoordelingstrigger kan stil verouderen. De spanning zit tussen een besluit nemen voor nu en weten welke verandering dat besluit opnieuw ter discussie moet stellen.",
            "sources": []
          }
        },
        {
          "id": "fg",
          "label": "Benodigde toetsing of advies is benoemd.",
          "feedback": "Dit is een bruikbaar vertrekpunt, maar de redenering mag hier nog niet landen. Welke rol heeft privacy officer, FG, security of eigenaar nog in de besluitvorming?",
          "cat": "besluit",
          "severity": "info",
          "question": "Het noemen van privacy officer, FG of security is een goed begin, maar zegt nog niets over hun rol. Adviseren zij, of beslissen zij mee, en op welk moment in het proces gebeurt dat?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Toetsing of advies is alleen bruikbaar als duidelijk is wie nog welke rol heeft in de besluitvorming. Anders blijft feedback vrijblijvend.",
            "commonMistake": "Er wordt genoemd dat privacy, FG of security meekijkt, maar niet wat hun advies of besluitmoment betekent.",
            "whatToCheck": "Ga na wat er concreet gebeurt met het advies van de FG of privacy officer: is het bindend, is het een zwaarwegend advies, of is het vrijblijvend? Weet je dat niet, dan is de rol nog niet helder genoeg belegd.",
            "strongerReasoning": "Toetsing of advies is pas betekenisvol als duidelijk is wat ermee gebeurt. Je redenering staat pas als zichtbaar is wie adviseert, wie beslist en welke gevolgen het advies kan hebben voor starten of bijsturen.",
            "sources": []
          }
        },
        {
          "id": "open",
          "label": "Er staan nog wezenlijke punten open.",
          "feedback": "Dit antwoord kan logisch klinken, maar test of de redenering hier te snel gaat. Noem die niet weg als detail. Maak zichtbaar wat nog niet besloten kan worden.",
          "cat": "besluit",
          "severity": "warning",
          "question": "Open punten die als bijzaak worden weggeschreven, kunnen de conclusie alsnog onderuithalen. Welk van de openstaande punten zou, als het verkeerd uitpakt, de uitkomst van deze DPIA echt veranderen?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Open punten kunnen wezenlijk zijn voor de besluitvorming. Als ze als details worden gepresenteerd, lijkt de DPIA verder dan zij is.",
            "commonMistake": "Onopgeloste punten worden in nette tekst verzacht in plaats van expliciet als besluitpunt of randvoorwaarde benoemd.",
            "whatToCheck": "Maak een lijst van de openstaande punten en markeer per punt of het de conclusie kan raken. Staat er een punt bij dat de conclusie kan omdraaien, dan hoort dat niet als voetnoot maar als expliciet besluitpunt in de DPIA te staan.",
            "strongerReasoning": "Open punten zijn niet automatisch details. De spanning zit tussen afronden omdat het document af moet en eerlijk benoemen welk open punt de conclusie nog kan veranderen.",
            "sources": []
          }
        },
        {
          "id": "geen",
          "label": "Er is nog geen besluitroute.",
          "feedback": "Dit is een dragende schakel. Als dit openblijft, bouwt de rest op aannames. Dan kan de DPIA hooguit een tussenstand zijn. Wie moet uiteindelijk besluiten?",
          "cat": "besluit",
          "severity": "blocker",
          "question": "Zonder besluitroute blijft de DPIA hooguit een tussenstand. Wie heeft binnen de organisatie de bevoegdheid om deze verwerking uiteindelijk goed of af te keuren?",
          "strength": "",
          "explanation": {
            "title": "Waarom deze keuze aandacht vraagt",
            "why": "Zonder besluitroute kan de DPIA hooguit een analyse of tussenstand zijn. Er moet duidelijk zijn wie uiteindelijk beslist over starten, voorwaarden en restrisico.",
            "commonMistake": "De DPIA eindigt met inhoudelijke bevindingen, maar zonder eigenaar voor het uiteindelijke besluit.",
            "whatToCheck": "Zoek uit wie formeel bevoegd is om dit type verwerking goed te keuren, en of die persoon of dat gremium al op de hoogte is. Is dat nog niet duidelijk, dan is dat de eerste vraag die je moet beleggen voordat er een besluit kan vallen.",
            "strongerReasoning": "Zonder besluitroute blijft de DPIA een analyse zonder landing. Je redenering staat pas als duidelijk is wie mag besluiten over starten, voorwaarden en acceptatie of afwijzing van restrisico.",
            "sources": []
          }
        }
      ]
    }
  ]
};
