const AppState = {
    data: {
        stepIndex: 0,
        answers: {},
        notes: {},
        subject: ''
    },
    get stepIndex() {
        return this.data.stepIndex
    },
    set stepIndex(v) {
        this.data.stepIndex = v
    },
    get answers() {
        return this.data.answers
    },
    get notes() {
        return this.data.notes
    },
    reset() {
        this.data = {
            stepIndex: 0,
            answers: {},
            notes: {},
            subject: ''
        }
    }
};
const model = window.DPIA_MODEL,
    steps = model.steps,
    categories = model.categories;

function qs(s, r = document) {
    return r.querySelector(s)
}

function qsa(s, r = document) {
    return [...r.querySelectorAll(s)]
}

function escapeHtml(str) {
    return String(str || '').replace(/[&<>'"]/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    } [c]))
}
let firstRouteLoad = true;
function setRoute(route) {
    const targetRoute = document.getElementById(route) ? route : 'start';
    qsa('.page').forEach(p => p.classList.toggle('active', p.id === targetRoute));
    qsa('.topnav a').forEach(a => a.classList.toggle('active', a.dataset.route === targetRoute));
    const page = document.getElementById(targetRoute);
    if (!page) return;
    const focusTarget = page.querySelector('h1') || page;
    if (!focusTarget.hasAttribute('tabindex')) focusTarget.setAttribute('tabindex', '-1');

    // Eerste paginalading: geen focus verplaatsen
if (firstRouteLoad) {
firstRouteLoad = false;
return;
}

// Alleen bij interne navigatie
    focusTarget.focus({
        preventScroll: true
    })
}

function wireRoutes(root = document) {
    qsa('[data-route]', root).forEach(a => a.addEventListener('click', e => {
        e.preventDefault();
        location.hash = a.dataset.route;
        setRoute(a.dataset.route)
    }))
}

function analysisSubject() {
    const field = qs('#analysis-subject');
    const value = (field?.value || AppState.data.subject || '').trim();
    if (value) AppState.data.subject = value;
    return value
}

function requireSubject() {
    const value = analysisSubject();
    if (!value) {
        alert('Vul eerst het onderwerp van deze analyse in.');
        qs('#analysis-subject')?.focus();
        return false
    }
    return true
}

function optionById(cat, optId) {
    for (const st of steps) {
        for (const opt of st.options || []) {
            if (opt.cat === cat && opt.id === optId) return {
                step: st,
                opt
            }
        }
    }
    return null
}

function showUitleg(cat, optId) {
    renderUitleg(cat, optId);
    setRoute('uitleg');
    location.hash = optId ? `uitleg-${cat}-${optId}` : `uitleg-${cat}`
}

function renderUitleg(active, optId) {
    const id = active || Object.keys(categories)[0];
    const c = categories[id] || categories[Object.keys(categories)[0]];
    const found = optId ? optionById(id, optId) : null;
    qs('#uitleg-title').textContent = found?.opt?.explanation?.title || c.title;
    qs('#uitleg-lead').textContent = found ? found.opt.label : c.intro;
    let item = '';
    if (found && found.opt.explanation) {
        const e = found.opt.explanation;
        item = `<section class="result-panel uitleg-current"><p class="kicker">Uitleg bij jouw keuze</p><h2>${escapeHtml(e.title)}</h2><p>${escapeHtml(e.why||found.opt.feedback)}</p><h2>Veelvoorkomende denkfout</h2><p>${escapeHtml(e.commonMistake||c.mistake)}</p><h2>Wat onderzoek je nu?</h2><p>${escapeHtml(e.whatToCheck||found.opt.question)}</p><h2>Sterkere redenering</h2><p>${escapeHtml(e.strongerReasoning||c.strong)}</p></section>`
    }
    const catBlock = `<section class="result-panel"><p class="kicker">Breder kader</p><h2>${escapeHtml(c.title)}</h2><p>${escapeHtml(c.look)}</p><h2>Algemene denkfout</h2><p>${escapeHtml(c.mistake)}</p><div class="example-pair"><p><strong>Zwakke redenering:</strong> ${escapeHtml(c.weak)}</p><p><strong>Sterkere redenering:</strong> ${escapeHtml(c.strong)}</p></div><p><a href="#denkcheck" data-route="denkcheck">Terug naar de denkcheck</a></p></section>`;
    qs('#uitleg-detail').innerHTML = item + catBlock;
    wireRoutes(qs('#uitleg-detail'))
}

function buildStepList() {
    const list = qs('#step-list');
    list.innerHTML = steps.map((s, i) => `<li role="button" tabindex="0" data-index="${i}">${s.number}. ${escapeHtml(s.title)}</li>`).join('');
    if (!qs('#analysis-context')) list.insertAdjacentHTML('beforebegin', '<div id="analysis-context" class="analysis-context" hidden><span class="context-label">Analyse</span><span class="context-value" id="analysis-context-value"></span></div>');
    qsa('#step-list li').forEach(li => {
        li.addEventListener('click', () => goToStep(Number(li.dataset.index)));
        li.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToStep(Number(li.dataset.index))
            }
        })
    })
}

function renderAnalysisContext() {
    const box = qs('#analysis-context'),
        value = qs('#analysis-context-value');
    if (!box || !value) return;
    const subject = (AppState.data.subject || '').trim();
    if (subject && AppState.stepIndex > 0) {
        value.textContent = subject;
        box.hidden = false
    } else {
        value.textContent = '';
        box.hidden = true
    }
}

function getSelection(step) {
    const val = AppState.answers[step.id];
    return step.type === 'multi' ? (Array.isArray(val) ? val : []) : (val ? [val] : [])
}

function goToStep(i) {
    if (i <= AppState.stepIndex) {
        save();
        AppState.stepIndex = i;
        renderStep();
        setRoute('denkcheck')
    }
}

function renderStep() {
    const s = steps[AppState.stepIndex],
        sel = getSelection(s),
        type = s.type === 'multi' ? 'checkbox' : 'radio';
    const subjectBlock = AppState.stepIndex === 0 ? `<div class="step-subject"><label for="analysis-subject">Waar gaat deze analyse over?</label><p>Beschrijf kort de verwerking die je onderzoekt.</p><input id="analysis-subject" type="text" autocomplete="off" value="${escapeHtml(AppState.data.subject||'')}" placeholder="Beschrijf in één zin de verwerking die je onderzoekt"></div>` : '';
    qs('#step-container').innerHTML = `<p class="kicker">Stap ${s.number} van ${steps.length}</p><h2 class="step-title">${escapeHtml(s.title)}</h2><p>${escapeHtml(s.intro)}</p>${subjectBlock}<div class="option-list">${s.options.map(o=>`<div class="option-card"><label><input type="${type}" name="answer" value="${escapeHtml(o.id)}" ${sel.includes(o.id)?'checked':''}><span class="option-text">${escapeHtml(o.label)}</span></label><div class="feedback">${escapeHtml(o.feedback)} <a class="deep-link" href="#uitleg-${o.cat}-${o.id}" data-help-cat="${o.cat}" data-help-option="${o.id}">Waarom?</a></div></div>`).join('')}</div>`;
    qs('#note-field').value = AppState.notes[s.id] || '';
    qs('#back-btn').disabled = AppState.stepIndex === 0;
    qs('#next-btn').textContent = AppState.stepIndex === steps.length - 1 ? 'Bekijk uitkomst' : 'Volgende';
    qsa('[data-help-cat]').forEach(a => a.addEventListener('click', e => {
        e.preventDefault();
        showUitleg(a.dataset.helpCat, a.dataset.helpOption)
    }));
    updateProgress()
}

function save() {
    const s = steps[AppState.stepIndex];
    const checked = qsa('input[name="answer"]:checked', qs('#step-container')).map(i => i.value);
    AppState.answers[s.id] = s.type === 'multi' ? checked : (checked[0] || '');
    AppState.notes[s.id] = qs('#note-field').value.trim();
    analysisSubject()
}

function updateProgress() {
    const pct = Math.round(((AppState.stepIndex + 1) / steps.length) * 100);
    qs('#step-count').textContent = `Stap ${AppState.stepIndex+1} van ${steps.length}`;
    qs('#progress-percent').textContent = `${pct}%`;
    qs('#progress-fill').style.width = `${pct}%`;
    qsa('#step-list li').forEach((li, i) => {
        li.classList.toggle('current', i === AppState.stepIndex);
        li.classList.toggle('done', i < AppState.stepIndex)
    });
    renderAnalysisContext()
}

function collect() {
    const feedback = [],
        strengths = [],
        signals = [],
        byStep = [];
    for (const st of steps) {
        const ids = getSelection(st);
        const opts = st.options.filter(o => ids.includes(o.id));
        byStep.push({
            step: st,
            opts
        });
        for (const o of opts) {
            if (o.strength) strengths.push(o.strength);
            if (o.severity !== 'positive') {
                feedback.push({
                    cat: o.cat,
                    text: o.feedback,
                    severity: o.severity,
                    optionId: o.id
                });
                signals.push(o.question || o.feedback)
            }
        }
        if (st.type === 'multi' && typeof st.minimumForGreen === 'number' && ids.length < st.minimumForGreen) {
            feedback.push({
                cat: st.lowSelectionCat || 'besluit',
                text: st.lowSelectionFeedback || 'Er is nog onvoldoende concreet gekozen.',
                severity: st.lowSelectionSeverity || 'warning'
            });
            signals.push(st.lowSelectionQuestion || st.lowSelectionFeedback)
        }
    }
    return {
        feedback,
        strengths,
        signals,
        byStep
    }
}

function status(c) {
    if (c.feedback.some(f => f.severity === 'blocker')) return 'red';
    if (c.feedback.filter(f => f.severity === 'warning').length >= 4) return 'orange';
    return 'green'
}

function statusText(st) {
    if (st === 'red') return ['Er zitten nog dragende schakels los.', 'Niet gaan schrijven alsof de DPIA al staat.', 'Maak eerst de blokkades concreet: verwerking, gegevens, risico of besluitroute. Anders wordt een nette tekst vooral een verpakking voor onzekerheid.'];
    if (st === 'orange') return ['De redenering is bruikbaar, maar nog niet stevig genoeg.', 'Eerst aanscherpen, dan pas formuleren.', 'Er zijn meerdere punten waarop een kritische lezer terecht kan doorvragen. Gebruik de vragen hieronder als werkvoorraad.'];
    return ['Weinig zichtbare tegenspraak gevonden.', 'Dat betekent niet dat de redenering klopt.', 'Deze denkcheck heeft weinig interne spanning gevonden in je antwoorden. Dat betekent niet dat een privacy officer of Functionaris Gegevensbescherming dezelfde conclusie zal trekken.']
}

function groupedFeedback(items) {
    if (!items.length) return '<p class="empty">Geen grote tegenspraak geactiveerd.</p>';
    const groups = {};
    items.forEach(f => {
        groups[f.cat] = groups[f.cat] || [];
        groups[f.cat].push(f)
    });
    return `<div class="grouped-feedback">` + Object.entries(groups).map(([cat, arr]) => `<details open><summary>${escapeHtml(categories[cat]?.title||cat)}</summary><ul class="clean-list">${arr.map(f=>`<li>${escapeHtml(f.text)} <a class="deep-link" href="#uitleg-${cat}${f.optionId?'-'+f.optionId:''}" data-help-cat="${cat}" ${f.optionId?`data-help-option="${f.optionId}"`:''}>Meer uitleg</a></li>`).join('')}</ul></details>`).join('') + `</div>`
}

function renderResult() {
    const c = collect(),
        st = status(c),
        copy = statusText(st),
        questions = c.signals.slice(0, 5),
        subject = analysisSubject() || 'Niet ingevuld';
    const statusHeadline = st === 'red' ? 'Status: dragende schakels los' : (st === 'orange' ? 'Status: nog niet stevig genoeg' : 'Status: bruikbaar');
    const prioritySummary = st === 'green' ? 'Welke vragen verwacht je dat een kritische FG alsnog gaat stellen?' : (questions.length ? `${questions.length} ${questions.length === 1 ? 'vraag vraagt' : 'vragen vragen'} eerst aandacht.` : 'De vragen hieronder vormen de eerste werkvoorraad.');
    const defaultQuestions = ['Welke aanname kan een kritische lezer betwisten?', 'Welke eerdere stap moet eerst kloppen?', 'Wat moet waar zijn voordat deze keuze draagt?'];
    const baseQuestions = questions.length ? questions : defaultQuestions;
    const worklistQuestions = (st === 'green' && c.feedback.length === 0) ? ['Welke aanname in deze analyse zou een kritische FG waarschijnlijk als eerste willen toetsen?', ...baseQuestions] : baseQuestions;
    const priorityQuestions = worklistQuestions.map((q, i) => `<li class="priority-question"><span class="priority-number">${i + 1}</span><span class="priority-text">${escapeHtml(q)}</span></li>`).join('');
    qs('#result-output').innerHTML = `<section class="result-panel result-header"><span class="result-section-label">Onderwerp analyse</span><h2 class="result-subject">${escapeHtml(subject)}</h2></section><section class="result-panel status-card result-status ${st}"><p class="result-status-line">${escapeHtml(statusHeadline)}</p><span class="status-label">Uitkomst</span><h2>${escapeHtml(copy[0])}</h2><p class="status-support">${escapeHtml(prioritySummary)}</p></section><section class="result-panel result-worklist"><h2>Vragen om eerst te beantwoorden</h2><ol class="priority-questions">${priorityQuestions}</ol></section><section class="result-panel result-advice"><h2>${escapeHtml(copy[1])}</h2><p>${escapeHtml(copy[2])}</p></section><section class="result-panel result-feedback"><h2>Geactiveerde tegenspraak</h2>${groupedFeedback(c.feedback)}</section>${c.strengths.length?`<section class="result-panel strength-list"><h2>Wat lijkt al sterk</h2><ul class="clean-list">${c.strengths.slice(0,8).map(s=>`<li>${escapeHtml(s)}</li>`).join('')}</ul></section>`:''}<details><summary>Toon mijn keuzes en uitgangspunten</summary><ol>${c.byStep.map(x=>`<li><strong>${escapeHtml(x.step.title)}</strong><br>${x.opts.length?x.opts.map(o=>escapeHtml(o.label)).join('<br>'):'Geen keuze'}${AppState.notes[x.step.id]?`<br><em>Notitie: ${escapeHtml(AppState.notes[x.step.id])}</em>`:''}</li>`).join('')}</ol></details><div class="wizard-actions"><button class="button primary" type="button" id="print-report-btn">Print/Opslaan als PDF</button><button class="button reset" type="button" id="restart-btn">Opnieuw starten</button><button class="button secondary" type="button" id="back-check">Terug naar check</button></div>`;
    setRoute('resultaat');
    qs('#print-report-btn').onclick = printDenkverslag;
    qs('#restart-btn').onclick = confirmRestart;
    qs('#back-check').onclick = () => setRoute('denkcheck');
    qsa('[data-help-cat]').forEach(a => a.addEventListener('click', e => {
        e.preventDefault();
        showUitleg(a.dataset.helpCat, a.dataset.helpOption)
    }))
}

function ensurePrintOutput() {
    let el = qs('#print-output');
    if (!el) {
        el = document.createElement('section');
        el.id = 'print-output';
        el.className = 'print-report';
        document.body.appendChild(el)
    }
    return el
}

function optionDetail(cat, optionId) {
    if (!optionId) return null;
    const found = optionById(cat, optionId);
    return found ? found.opt : null
}

function printFeedback(c) {
    if (!c.feedback.length) return '<p>Er is geen grote tegenspraak geactiveerd.</p>';
    const groups = {};
    c.feedback.forEach(f => {
        groups[f.cat] = groups[f.cat] || [];
        groups[f.cat].push(f)
    });
    return Object.entries(groups).map(([cat, items]) => {
        const directions = [];
        const body = items.map(f => {
            const opt = optionDetail(cat, f.optionId);
            const e = opt?.explanation;
            if (e?.strongerReasoning && !directions.includes(e.strongerReasoning)) directions.push(e.strongerReasoning);
            const q = e?.whatToCheck && e.whatToCheck !== f.text ? `<p><strong>Te onderzoeken:</strong> ${escapeHtml(e.whatToCheck)}</p>` : '';
            return `<article class="print-item"><p><strong>Aandachtspunt:</strong> ${escapeHtml(f.text)}</p>${q}</article>`
        }).join('');
        const directionBlock = directions.length ? `<p><strong>Richting voor verdere uitwerking:</strong> ${directions.map(d=>escapeHtml(d)).join(' ')}</p>` : '';
        return `<section class="print-block"><h3>${escapeHtml(categories[cat]?.title||cat)}</h3>${body}${directionBlock}</section>`
    }).join('')
}

function printNotes(c) {
    const notes = c.byStep.filter(x => AppState.notes[x.step.id]);
    if (!notes.length) return '';
    return `<ol>${notes.map(x=>`<li><strong>${escapeHtml(x.step.title)}</strong><br>${escapeHtml(AppState.notes[x.step.id])}</li>`).join('')}</ol>`
}

function printChoices(c) {
    return `<ol>${c.byStep.map(x=>`<li><strong>${escapeHtml(x.step.title)}</strong><br>${x.opts.length?x.opts.map(o=>escapeHtml(o.label)).join('<br>'):'Geen keuze'}</li>`).join('')}</ol>`
}

function renderDenkverslag() {
    const c = collect(),
        st = status(c),
        copy = statusText(st),
        questions = c.signals.slice(0, 5),
        date = new Date().toLocaleDateString('nl-NL'),
        subject = analysisSubject() || 'Niet ingevuld';
    const notesHtml = printNotes(c);
    return `<div class="print-title"><p class="kicker">DenkDPIA.nl</p><h1>Vooranalyse ten behoeve van een DPIA</h1><p><strong>Onderwerp:</strong> ${escapeHtml(subject)}</p><p><strong>Datum:</strong> ${escapeHtml(date)}<br><strong>Gegenereerd met:</strong> DenkDPIA.nl v${escapeHtml(model.version||'')}</p></div><section class="print-block"><h2>Status van dit document</h2><p>Dit document ondersteunt de voorbereiding van een DPIA. Het bevat aandachtspunten, open vragen en mogelijke zwakke plekken in de onderbouwing van een verwerking van persoonsgegevens.</p><p>De inhoud is gebaseerd op antwoorden die tijdens deze analyse zijn gegeven. Het document is bedoeld als hulpmiddel voor verdere uitwerking, discussie en toetsing.</p><p>Dit document is geen DPIA, geen juridisch advies en geen formele beoordeling door een privacy officer, Functionaris Gegevensbescherming of jurist.</p><p>Deze vooranalyse is volledig clientside gegenereerd. Antwoorden en eventuele werknotities zijn niet naar een server verzonden en niet door DenkDPIA opgeslagen.</p></section><section class="print-block"><h2>Hoe lees je dit document?</h2><p>De samenvatting geeft de belangrijkste uitkomst van de analyse. De vervolgvragen tonen welke punten nader onderzoek vragen. De tegenspraak per categorie laat zien waar een kritische lezer waarschijnlijk op doorvraagt. De appendix bevat de gemaakte keuzes als context bij deze vooranalyse.</p></section><section class="print-block"><h2>Samenvatting</h2><p><strong>${escapeHtml(copy[0])}</strong></p><p>${escapeHtml(copy[2])}</p></section><section class="print-block"><h2>Belangrijkste vragen voor vervolgonderzoek</h2>${questions.length?`<ol>${questions.map(q=>`<li>${escapeHtml(q)}</li>`).join('')}</ol>`:'<p>Er zijn geen specifieke hoofdvragen gevonden. Blijf wel toetsen welke aannames een kritische lezer kan betwisten.</p>'}</section><section class="print-block"><h2>Geactiveerde tegenspraak per categorie</h2>${printFeedback(c)}</section>${c.strengths.length?`<section class="print-block"><h2>Wat lijkt al sterk</h2><ul>${c.strengths.slice(0,8).map(s=>`<li>${escapeHtml(s)}</li>`).join('')}</ul></section>`:''}${notesHtml?`<section class="print-block"><h2>Werknotities</h2>${notesHtml}</section>`:''}<section class="print-block appendix"><h2>Appendix: gemaakte keuzes</h2>${printChoices(c)}</section><footer class="print-footer"><p>DenkDPIA.nl geeft geen juridisch advies en vervangt geen beoordeling door privacy officer, Functionaris Gegevensbescherming of jurist.</p></footer>`
}

function printDenkverslag() {
    save();
    const el = ensurePrintOutput();
    el.innerHTML = renderDenkverslag();
    window.print()
}

function restart() {
    AppState.reset();
    renderStep();
    setRoute('denkcheck');
    location.hash = 'denkcheck'
}

function confirmRestart() {
    if (confirm('Weet je zeker dat je opnieuw wilt beginnen? Je huidige keuzes en notities worden gewist.')) restart()
}

function routeFromHash() {
    const hash = location.hash.replace('#', '') || 'start';
    if (hash.startsWith('uitleg-')) {
        const rest = hash.replace('uitleg-', '');
        const firstDash = rest.indexOf('-');
        if (firstDash > 0) showUitleg(rest.slice(0, firstDash), rest.slice(firstDash + 1));
        else showUitleg(rest);
        return
    }
    setRoute(hash)
}

function setupMobileMenu() {
    const btn = qs('.menu-toggle'),
        nav = qs('#primary-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false')
    }));
}

function init() {
    setupMobileMenu();
    buildStepList();
    renderUitleg();
    renderStep();
    wireRoutes();
    qsa('[data-start-check]').forEach(b => b.addEventListener('click', () => {
        location.hash = 'denkcheck';
        setRoute('denkcheck')
    }));
    window.addEventListener('hashchange', routeFromHash);
    qs('#wizard-form').addEventListener('submit', e => {
        e.preventDefault();
        if (AppState.stepIndex === 0 && !requireSubject()) return;
        save();
        if (AppState.stepIndex < steps.length - 1) {
            AppState.stepIndex++;
            renderStep();
            qs('#denkcheck-title').scrollIntoView({
                block: 'start'
            })
        } else {
            renderResult()
        }
    });
    qs('#back-btn').onclick = () => {
        save();
        if (AppState.stepIndex > 0) {
            AppState.stepIndex--;
            renderStep()
        }
    };
    qs('#reset-btn').onclick = confirmRestart;
    routeFromHash()
}
document.addEventListener('DOMContentLoaded', init);