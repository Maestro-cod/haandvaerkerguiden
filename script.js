// ============================================================
// LISTINGS DATA — alle større byer i Danmark
// ============================================================
const DEFAULT_LISTINGS = [

  // ── KØBENHAVN ─────────────────────────────────────────────
  { id:1,  city:'københavn', featured:true,  name:"Hovedstaden El-Service A/S",    trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør med speciale i boligrenovering og erhverv i hele Storkøbenhavn. Hurtigt tilbud og fleksible tider.",   phone:"32 12 34 56", website:"https://example.dk", area:"København & Frederiksberg", rating:4.9, reviewCount:47, lat:55.676, lng:12.568 },
  { id:2,  city:'københavn', featured:true,  name:"KBH VVS Specialister ApS",      trade:"vvs",        tradeLabel:"VVS-installatør", desc:"Autoriseret VVS-firma med 20 år i branchen. Badeværelsesrenovering, varmepumper og gulvvarme til fast og fair pris.",           phone:"33 23 45 67", website:"https://example.dk", area:"Hele København og omegn",   rating:4.8, reviewCount:38, lat:55.680, lng:12.574 },
  { id:3,  city:'københavn', featured:true,  name:"Nordsjællands Tømrer ApS",      trade:"tømrer",     tradeLabel:"Tømrer",          desc:"Erfarne tømrere og snedkere. Facaderenovering, kviste, altaner og carporte. Gratis besigtigelse.",                                phone:"28 99 11 44", website:"https://example.dk", area:"København N, Brønshøj",     rating:4.7, reviewCount:31, lat:55.690, lng:12.543 },
  { id:4,  city:'københavn', featured:false, name:"Nørrebro Malerfirma",            trade:"maler",      tradeLabel:"Maler",           desc:"", phone:"26 11 22 33", website:"", area:"Nørrebro, Østerbro, Indre By", rating:4.5, reviewCount:12, lat:55.692, lng:12.548 },
  { id:5,  city:'københavn', featured:false, name:"KBH Kloakmester Service",        trade:"kloak",      tradeLabel:"Kloakmester",     desc:"", phone:"32 88 77 66", website:"", area:"Hele København",              rating:4.3, reviewCount:9,  lat:55.672, lng:12.558 },
  { id:6,  city:'københavn', featured:false, name:"Capital Glarmester",             trade:"glarmester", tradeLabel:"Glarmester",      desc:"", phone:"33 44 55 66", website:"", area:"København og Frederiksberg",  rating:4.2, reviewCount:7,  lat:55.668, lng:12.571 },

  // ── AARHUS ───────────────────────────────────────────────
  { id:7,  city:'aarhus', featured:true,  name:"Aarhus El-Service ApS",            trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør med over 15 års erfaring. Alt fra fejlfinding til nye installationer i parcelhuse og erhverv.",         phone:"86 12 34 56", website:"https://example.dk", area:"Aarhus C & omegn",          rating:4.8, reviewCount:23, lat:56.157, lng:10.211 },
  { id:8,  city:'aarhus', featured:true,  name:"Hansen VVS & Badeværelse",         trade:"vvs",        tradeLabel:"VVS-installatør", desc:"Autoriseret VVS-firma. Specialister i badeværelsesrenovering, gulvvarme og varmepumper. Hurtig respons på akutte opgaver.",      phone:"87 65 43 21", website:"https://example.dk", area:"Aarhus N, Risskov, Lystrup", rating:4.9, reviewCount:31, lat:56.187, lng:10.201 },
  { id:9,  city:'aarhus', featured:true,  name:"Mikkelsen Tømrer & Snedker",       trade:"tømrer",     tradeLabel:"Tømrer",          desc:"Kvalitetstømreri til private og boligforeninger. Tagrenoveringer, kviste, carporte og terrasser. Gratis tilbud.",                  phone:"23 45 67 89", website:"https://example.dk", area:"Hele Aarhus Kommune",        rating:4.7, reviewCount:18, lat:56.163, lng:10.182 },
  { id:10, city:'aarhus', featured:true,  name:"Brdr. Andersen Malerfirma",        trade:"maler",      tradeLabel:"Maler",           desc:"Professionelt malerfirma med fokus på grundig forbehandling og holdbare resultater. Indendørs, udendørs og tapetsering.",          phone:"40 20 10 30", website:"https://example.dk", area:"Aarhus S, Viby, Brabrand",   rating:4.6, reviewCount:14, lat:56.120, lng:10.169 },
  { id:11, city:'aarhus', featured:false, name:"Larsen El",                        trade:"elektriker", tradeLabel:"Elektriker",      desc:"", phone:"86 99 11 22", website:"", area:"Aarhus V",                   rating:4.2, reviewCount:7,  lat:56.154, lng:10.168 },
  { id:12, city:'aarhus', featured:false, name:"TAG & ISOLERING Aarhus",           trade:"tag",        tradeLabel:"Tag & Isolering", desc:"", phone:"71 44 55 66", website:"", area:"Hele Østjylland",            rating:4.4, reviewCount:11, lat:56.180, lng:10.225 },
  { id:13, city:'aarhus', featured:false, name:"Kloakmester Søren Nielsen",        trade:"kloak",      tradeLabel:"Kloakmester",     desc:"", phone:"86 33 11 22", website:"", area:"Aarhus, Odder, Horsens",    rating:4.0, reviewCount:6,  lat:56.139, lng:10.204 },

  // ── ODENSE ───────────────────────────────────────────────
  { id:14, city:'odense', featured:true,  name:"Odense El & Teknik A/S",           trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør på Fyn med speciale i smart home, solceller og ladestandere til elbil.",                               phone:"66 12 34 56", website:"https://example.dk", area:"Odense C og NV",            rating:4.7, reviewCount:29, lat:55.396, lng:10.388 },
  { id:15, city:'odense', featured:true,  name:"Fyns VVS & Energi ApS",            trade:"vvs",        tradeLabel:"VVS-installatør", desc:"Autoriseret VVS på Fyn. Varmepumper, solvarme og energirenovering til private og boligforeninger.",                              phone:"63 23 45 67", website:"https://example.dk", area:"Odense og hele Fyn",        rating:4.8, reviewCount:22, lat:55.405, lng:10.375 },
  { id:16, city:'odense', featured:false, name:"Andersen Maler Odense",            trade:"maler",      tradeLabel:"Maler",           desc:"", phone:"65 99 11 22", website:"", area:"Odense og omegn",            rating:4.4, reviewCount:8,  lat:55.389, lng:10.395 },
  { id:17, city:'odense', featured:false, name:"Fyn Tømrermester",                 trade:"tømrer",     tradeLabel:"Tømrer",          desc:"", phone:"24 55 66 77", website:"", area:"Odense og Middelfart",      rating:4.2, reviewCount:6,  lat:55.385, lng:10.380 },
  { id:18, city:'odense', featured:false, name:"Odense Murerforretning",           trade:"murer",      tradeLabel:"Murer",           desc:"", phone:"66 14 22 33", website:"", area:"Odense og Kerteminde",      rating:4.3, reviewCount:5,  lat:55.400, lng:10.404 },

  // ── AALBORG ──────────────────────────────────────────────
  { id:19, city:'aalborg', featured:true,  name:"Aalborg El-Installation ApS",     trade:"elektriker", tradeLabel:"Elektriker",      desc:"Nordjyllands førende elinstallatør. Boliger, erhverv og industrianlæg. Tilbud inden 24 timer.",                                  phone:"98 12 34 56", website:"https://example.dk", area:"Aalborg og omegn",          rating:4.8, reviewCount:34, lat:57.048, lng:9.921 },
  { id:20, city:'aalborg', featured:true,  name:"Nord VVS & Varmeteknik",          trade:"vvs",        tradeLabel:"VVS-installatør", desc:"Autoriseret VVS i Nordjylland. Specialister i varmepumper, badeværelse og fjernvarmetilslutning.",                               phone:"98 65 43 21", website:"https://example.dk", area:"Aalborg, Nørresundby",      rating:4.7, reviewCount:19, lat:57.053, lng:9.930 },
  { id:21, city:'aalborg', featured:false, name:"Nordjysk Malerfirma",             trade:"maler",      tradeLabel:"Maler",           desc:"", phone:"30 11 22 33", website:"", area:"Aalborg og Nørresundby",   rating:4.3, reviewCount:7,  lat:57.043, lng:9.910 },
  { id:22, city:'aalborg', featured:false, name:"Aalborg Tømrer & Snedker",        trade:"tømrer",     tradeLabel:"Tømrer",          desc:"", phone:"42 55 66 77", website:"", area:"Aalborg og Jammerbugt",   rating:4.1, reviewCount:5,  lat:57.040, lng:9.935 },

  // ── ESBJERG ──────────────────────────────────────────────
  { id:23, city:'esbjerg', featured:true,  name:"Vestjyllands El-Service ApS",     trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør i Esbjerg. Industriel, marin og privat installation. 24/7 vagtservice.",                               phone:"75 12 34 56", website:"https://example.dk", area:"Esbjerg, Fanø og Varde",    rating:4.6, reviewCount:15, lat:55.476, lng:8.459 },
  { id:24, city:'esbjerg', featured:false, name:"Esbjerg VVS & Kloak",             trade:"vvs",        tradeLabel:"VVS-installatør", desc:"", phone:"75 65 43 21", website:"", area:"Esbjerg og Ribe",          rating:4.2, reviewCount:8,  lat:55.470, lng:8.452 },
  { id:25, city:'esbjerg', featured:false, name:"Sønderjyllands Maler",            trade:"maler",      tradeLabel:"Maler",           desc:"", phone:"74 12 33 44", website:"", area:"Esbjerg og Kolding",       rating:4.1, reviewCount:4,  lat:55.482, lng:8.470 },

  // ── VEJLE ────────────────────────────────────────────────
  { id:26, city:'vejle', featured:true,  name:"Vejle El & Smart Home",             trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elektriker med speciale i smart home, solceller og ladestandere. Betjener hele Trekantområdet.",                     phone:"75 82 34 56", website:"https://example.dk", area:"Vejle og Trekantområdet",  rating:4.7, reviewCount:21, lat:55.709, lng:9.536 },
  { id:27, city:'vejle', featured:true,  name:"Trekant VVS & Badeværelse",         trade:"vvs",        tradeLabel:"VVS-installatør", desc:"Autoriseret VVS til private og erhverv i Trekantområdet. Varmepumper, badeværelser og gulvvarme.",                               phone:"75 82 65 43", website:"https://example.dk", area:"Vejle, Kolding, Fredericia", rating:4.6, reviewCount:17, lat:55.715, lng:9.528 },
  { id:28, city:'vejle', featured:false, name:"Vejle Tømrerfirma",                 trade:"tømrer",     tradeLabel:"Tømrer",          desc:"", phone:"75 82 11 22", website:"", area:"Vejle og Hedensted",       rating:4.3, reviewCount:8,  lat:55.703, lng:9.548 },

  // ── RANDERS ──────────────────────────────────────────────
  { id:29, city:'randers', featured:true,  name:"Randers El-Mester ApS",           trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør i Randers og omegn. Bolig, landbrug og erhverv. Akutservice.",                                        phone:"86 42 34 56", website:"https://example.dk", area:"Randers og Favrskov",      rating:4.6, reviewCount:13, lat:56.461, lng:10.036 },
  { id:30, city:'randers', featured:false, name:"Randers VVS Service",             trade:"vvs",        tradeLabel:"VVS-installatør", desc:"", phone:"86 42 65 43", website:"", area:"Randers og Hobro",         rating:4.2, reviewCount:6,  lat:56.455, lng:10.045 },

  // ── ROSKILDE ─────────────────────────────────────────────
  { id:31, city:'roskilde', featured:true,  name:"Roskilde El & Teknik",           trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør vest for København. Specialister i energirenovering og EV-ladestandere.",                              phone:"46 32 34 56", website:"https://example.dk", area:"Roskilde og Lejre",         rating:4.6, reviewCount:17, lat:55.642, lng:12.087 },
  { id:32, city:'roskilde', featured:false, name:"Sjællandsk Malerfirma",          trade:"maler",      tradeLabel:"Maler",           desc:"", phone:"46 32 65 43", website:"", area:"Roskilde og Holbæk",       rating:4.4, reviewCount:9,  lat:55.648, lng:12.095 },

  // ── HERNING ──────────────────────────────────────────────
  { id:33, city:'herning', featured:true,  name:"Midtjyllands El & Teknik",        trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør i Midt- og Vestjylland. Bolig, landbrug og erhverv. 24/7.",                                            phone:"97 22 34 56", website:"https://example.dk", area:"Herning og Ikast",          rating:4.5, reviewCount:13, lat:56.139, lng:8.973 },
  { id:34, city:'herning', featured:false, name:"Herning VVS Service",             trade:"vvs",        tradeLabel:"VVS-installatør", desc:"", phone:"97 22 65 43", website:"", area:"Herning og Holstebro",     rating:4.2, reviewCount:6,  lat:56.132, lng:8.980 },

  // ── SILKEBORG ─────────────────────────────────────────────
  { id:35, city:'silkeborg', featured:true,  name:"Silkeborg El-Service",          trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør i hjertet af Jylland. Specialister i energioptimering og solceller.",                                 phone:"86 82 34 56", website:"https://example.dk", area:"Silkeborg og Skanderborg",  rating:4.7, reviewCount:16, lat:56.172, lng:9.551 },
  { id:36, city:'silkeborg', featured:false, name:"Silkeborg Tømrerfirma",         trade:"tømrer",     tradeLabel:"Tømrer",          desc:"", phone:"86 82 65 43", website:"", area:"Silkeborg og Viborg",      rating:4.3, reviewCount:7,  lat:56.165, lng:9.558 },

  // ── HORSENS ───────────────────────────────────────────────
  { id:37, city:'horsens', featured:true,  name:"Horsens El-Installatør",          trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør i Horsens. Bolig, erhverv og havneområdet. Hurtigt tilbud.",                                          phone:"75 62 34 56", website:"https://example.dk", area:"Horsens og Hedensted",     rating:4.5, reviewCount:11, lat:55.860, lng:9.844 },
  { id:38, city:'horsens', featured:false, name:"Horsens VVS & Varme",             trade:"vvs",        tradeLabel:"VVS-installatør", desc:"", phone:"75 62 65 43", website:"", area:"Horsens og Skanderborg",   rating:4.2, reviewCount:5,  lat:55.866, lng:9.851 },

  // ── KOLDING ───────────────────────────────────────────────
  { id:39, city:'kolding', featured:true,  name:"Kolding El & Teknik ApS",         trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør med base i Kolding. Servicerer hele Syd- og Sønderjylland.",                                          phone:"75 52 34 56", website:"https://example.dk", area:"Kolding og Haderslev",     rating:4.6, reviewCount:14, lat:55.491, lng:9.472 },
  { id:40, city:'kolding', featured:false, name:"Kolding Murerforretning",         trade:"murer",      tradeLabel:"Murer",           desc:"", phone:"75 52 65 43", website:"", area:"Kolding og omegn",         rating:4.1, reviewCount:6,  lat:55.498, lng:9.480 },

  // ── NÆSTVED ───────────────────────────────────────────────
  { id:41, city:'næstved', featured:true,  name:"Næstved El-Service",              trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør på Sydsjælland. Bolig, erhverv og landbrug.",                                                         phone:"55 72 34 56", website:"https://example.dk", area:"Næstved og Vordingborg",   rating:4.5, reviewCount:10, lat:55.230, lng:11.762 },
  { id:42, city:'næstved', featured:false, name:"Sydsjællands VVS",               trade:"vvs",        tradeLabel:"VVS-installatør", desc:"", phone:"55 72 65 43", website:"", area:"Næstved og Faxe",          rating:4.0, reviewCount:4,  lat:55.236, lng:11.770 },

  // ── VIBORG ────────────────────────────────────────────────
  { id:43, city:'viborg', featured:true,  name:"Viborg El & Kraft ApS",            trade:"elektriker", tradeLabel:"Elektriker",      desc:"Autoriseret elinstallatør centralt i Jylland. Bolig, landbrug og industri.",                                                     phone:"86 62 34 56", website:"https://example.dk", area:"Viborg og Skive",           rating:4.6, reviewCount:12, lat:56.453, lng:9.403 },
  { id:44, city:'viborg', featured:false, name:"Viborg Tømrermester",              trade:"tømrer",     tradeLabel:"Tømrer",          desc:"", phone:"86 62 65 43", website:"", area:"Viborg og Bjerringbro",    rating:4.2, reviewCount:5,  lat:56.459, lng:9.412 },
];

const CITIES = [
  { value:'',           label:'Alle byer' },
  { value:'københavn',  label:'København' },
  { value:'aarhus',     label:'Aarhus' },
  { value:'odense',     label:'Odense' },
  { value:'aalborg',    label:'Aalborg' },
  { value:'esbjerg',    label:'Esbjerg' },
  { value:'vejle',      label:'Vejle' },
  { value:'randers',    label:'Randers' },
  { value:'roskilde',   label:'Roskilde' },
  { value:'herning',    label:'Herning' },
  { value:'silkeborg',  label:'Silkeborg' },
  { value:'horsens',    label:'Horsens' },
  { value:'kolding',    label:'Kolding' },
  { value:'næstved',    label:'Næstved' },
  { value:'viborg',     label:'Viborg' },
];

function getListings() {
  const stored = localStorage.getItem('hg_listings');
  if (stored) { try { return JSON.parse(stored); } catch(e) {} }
  return DEFAULT_LISTINGS;
}

let listings = DEFAULT_LISTINGS;

// ============================================================
// STAR RATINGS
// ============================================================
function buildStars(rating) {
  if (!rating) return '';
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) html += '<span class="star filled">★</span>';
    else if (rating >= i - 0.5) html += '<span class="star half">★</span>';
    else html += '<span class="star empty">☆</span>';
  }
  return `<div class="listing-stars">${html}</div>`;
}

// ============================================================
// CARD BUILDER
// ============================================================
function cityLabel(city) {
  const c = CITIES.find(c => c.value === city);
  return c ? c.label : city;
}

function buildCard(l) {
  return `
    <div class="listing-card ${l.featured ? 'featured' : ''}">
      ${l.featured ? '<span class="featured-badge">⭐ Fremhævet</span>' : ''}
      <div class="listing-name">${l.name}</div>
      <div class="listing-trade-row">
        <span class="listing-trade">${l.tradeLabel}</span>
        <span class="city-tag">📍 ${cityLabel(l.city)}</span>
      </div>
      ${l.rating ? `<div class="listing-stars-row">${buildStars(l.rating)}<span class="listing-review-count">${Number(l.rating).toFixed(1)} (${l.reviewCount} anm.)</span></div>` : ''}
      ${l.desc ? `<div class="listing-desc">${l.desc}</div>` : ''}
      <div class="listing-meta">
        <span>📞 <a href="tel:${l.phone.replace(/\s/g,'')}">${l.phone}</a></span>
        ${l.website ? `<span>🌐 <a href="${l.website}" target="_blank" rel="noopener">Hjemmeside</a></span>` : ''}
      </div>
      <div class="listing-area">🗺️ ${l.area}</div>
    </div>`;
}

// ============================================================
// FILTER / SEARCH
// ============================================================
function renderListings(data) {
  const featured = data.filter(l => l.featured);
  const regular  = data.filter(l => !l.featured);
  document.getElementById('featured-grid').innerHTML = featured.map(buildCard).join('');
  document.getElementById('regular-grid').innerHTML  = regular.map(buildCard).join('');
  document.getElementById('result-count').textContent = `${data.length} firma${data.length !== 1 ? 'er' : ''}`;
  document.getElementById('no-results').style.display = data.length === 0 ? 'block' : 'none';
  document.querySelector('.featured-label').style.display = featured.length ? '' : 'none';
  document.querySelector('.regular-label').style.display  = regular.length  ? '' : 'none';
}

function filterListings() {
  const city   = document.getElementById('city-filter').value.toLowerCase();
  const trade  = document.getElementById('trade-filter').value.toLowerCase();
  const search = document.getElementById('search-input').value.toLowerCase();
  const filtered = listings.filter(l => {
    const mc = !city   || l.city === city;
    const mt = !trade  || l.trade === trade;
    const ms = !search || l.name.toLowerCase().includes(search) || l.area.toLowerCase().includes(search) || l.tradeLabel.toLowerCase().includes(search) || l.city.toLowerCase().includes(search);
    return mc && mt && ms;
  });
  renderListings(filtered);
  document.getElementById('haandvaerkere').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setFilter(trade) {
  document.getElementById('trade-filter').value = trade;
  document.getElementById('search-input').value = '';
  filterListings();
}

function setCity(city) {
  document.getElementById('city-filter').value = city;
  filterListings();
}

function toggleNav() {
  document.querySelector('.main-nav').classList.toggle('open');
}

// ============================================================
// MAP (Leaflet.js + OpenStreetMap — hele Danmark)
// ============================================================
function initMap() {
  if (typeof L === 'undefined') return;

  const goldIcon = L.divIcon({
    html: '<div style="width:20px;height:20px;background:#f59e0b;border:3px solid #92400e;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.45)"></div>',
    className: '', iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, -13]
  });
  const blueIcon = L.divIcon({
    html: '<div style="width:14px;height:14px;background:#1a56db;border:2px solid #1344b0;border-radius:50%;box-shadow:0 1px 5px rgba(0,0,0,.35)"></div>',
    className: '', iconSize: [14, 14], iconAnchor: [7, 7], popupAnchor: [0, -10]
  });

  // Center on Denmark, zoom to show the whole country
  const map = L.map('haandvaerker-map', { scrollWheelZoom: false }).setView([56.0, 10.5], 7);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(map);

  listings.forEach(l => {
    if (!l.lat || !l.lng) return;
    const cLabel = cityLabel(l.city);
    L.marker([l.lat, l.lng], { icon: l.featured ? goldIcon : blueIcon })
     .bindPopup(`<strong>${l.name}</strong><br><span style="color:#1a56db;font-size:.82rem">${l.tradeLabel}</span><br>📞 <a href="tel:${l.phone.replace(/\s/g,'')}">${l.phone}</a><br><small>📍 ${cLabel} — ${l.area}</small>`)
     .addTo(map);
  });
}

// ============================================================
// STATS COUNT-UP
// ============================================================
function animateCountUp(el, target, duration) {
  const start = performance.now();
  (function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(e * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  })(start);
}

function initStatsObserver() {
  const bar = document.getElementById('stats-bar');
  if (!bar || !window.IntersectionObserver) return;
  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.stat-number').forEach(el => {
        animateCountUp(el, parseInt(el.dataset.target, 10), 1800);
      });
      obs.unobserve(bar);
    }
  }, { threshold: 0.3 }).observe(bar);
}

// ============================================================
// CHAT ASSISTANT
// ============================================================
const chatRules = [
  { keys:['hej','hallo','hey','goddag','hejsa'],
    ans:'Hej! 👋 Jeg er HåndværkerGuidens assistent. Spørg mig om at finde håndværkere i din by, priser, tilmelding og mere. Hvad kan jeg hjælpe med?' },
  { keys:['hvilke byer','hvilke by','dækker','område','dækning','byer'],
    ans:'Vi dækker <strong>hele Danmark</strong> 🇩🇰<br><br>København · Aarhus · Odense · Aalborg · Esbjerg · Vejle · Randers · Roskilde · Herning · Silkeborg · Horsens · Kolding · Næstved · Viborg<br><br>Er din by ikke på listen? Skriv til os — vi udvider løbende.' },
  { keys:['pris','kost','beløb','hvad koster','abonnement'],
    ans:'Priser for at liste dit firma:<br><br>⚪ <strong>Basic</strong> — 99 kr/md.<br>⭐ <strong>Gold</strong> — 199 kr/md. (anbefalet)<br>💎 <strong>Premium</strong> — 299 kr/md.<br><br>Betaling via MobilePay: <strong>50 35 83 67</strong>' },
  { keys:['mobilepay','betale','betal'],
    ans:'Betal via MobilePay 📱<br><strong>50 35 83 67</strong><br>Skriv Basic/Gold/Premium i beskeden.' },
  { keys:['tilmeld','opret','annonce','liste','bliv listesat','registr'],
    ans:'Nemt at komme med!<br>1. Gå til <a href="#bliv-listesat">Bliv listesat</a><br>2. Vælg pakke (99/199/299 kr)<br>3. Udfyld dine oplysninger<br>4. Betal via MobilePay 50 35 83 67<br><br>Aktiv inden 24 timer ✅' },
  { keys:['københavn','kbh','frederiksberg','sjælland'],
    ans:'Håndværkere i <strong>København</strong>:<br>⭐ Hovedstaden El-Service — 32 12 34 56<br>⭐ KBH VVS Specialister — 33 23 45 67<br>⭐ Nordsjællands Tømrer — 28 99 11 44<br>• Nørrebro Malerfirma — 26 11 22 33' },
  { keys:['aarhus','århus','østjylland'],
    ans:'Håndværkere i <strong>Aarhus</strong>:<br>⭐ Aarhus El-Service — 86 12 34 56<br>⭐ Hansen VVS — 87 65 43 21<br>⭐ Mikkelsen Tømrer — 23 45 67 89<br>⭐ Brdr. Andersen Maler — 40 20 10 30' },
  { keys:['odense','fyn','fynen'],
    ans:'Håndværkere i <strong>Odense</strong>:<br>⭐ Odense El & Teknik — 66 12 34 56<br>⭐ Fyns VVS & Energi — 63 23 45 67<br>• Andersen Maler — 65 99 11 22' },
  { keys:['aalborg','nordjylland'],
    ans:'Håndværkere i <strong>Aalborg</strong>:<br>⭐ Aalborg El-Installation — 98 12 34 56<br>⭐ Nord VVS & Varme — 98 65 43 21' },
  { keys:['esbjerg','vestjylland'],
    ans:'Håndværkere i <strong>Esbjerg</strong>:<br>⭐ Vestjyllands El-Service — 75 12 34 56<br>• Esbjerg VVS & Kloak — 75 65 43 21' },
  { keys:['vejle','trekantområdet','kolding','fredericia'],
    ans:'Håndværkere i <strong>Vejle / Trekantområdet</strong>:<br>⭐ Vejle El & Smart Home — 75 82 34 56<br>⭐ Trekant VVS — 75 82 65 43' },
  { keys:['elektriker','el-installatør','strøm','sikring','el '],
    ans:'Find elektrikere ved at vælge <strong>Elektriker</strong> i filteret øverst, og vælg din by.<br><br>Eller spørg mig: "Find elektriker i [by]" 🔌' },
  { keys:['vvs','badeværelse','toilet','rør','varme','varmepumpe'],
    ans:'Find VVS-installatører ved at vælge <strong>VVS</strong> i filteret øverst, og vælg din by.<br><br>Eller nævn din by, så finder jeg de nærmeste 🔩' },
  { keys:['tømrer','snedker','carport','terrasse'],
    ans:'Tømrere og snedkere i Danmark — brug filteret øverst til at finde én i din by 🪵' },
  { keys:['maler','maling','tapets'],
    ans:'Malere i Danmark — vælg "Maler" i fagfilteret og din by 🖌️' },
  { keys:['akut','haste','nødsituation','weekend'],
    ans:'Mange firmaer tilbyder akutservice 🚨 Ring direkte og præcisér at det er akut.' },
  { keys:['kontakt','email','mail'],
    ans:'📧 <a href="mailto:stefymaestro@proton.me">stefymaestro@proton.me</a><br>📱 MobilePay: 50 35 83 67' },
  { keys:['tak','super','perfekt','fedt'],
    ans:'Selv tak! 😊 Er der andet jeg kan hjælpe med?' },
];

let chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  const panel = document.getElementById('chat-panel');
  panel.style.display = chatOpen ? 'flex' : 'none';
  document.getElementById('chat-icon').textContent = chatOpen ? '✕' : '💬';
  if (chatOpen && document.getElementById('chat-messages').children.length === 0) {
    addBubble('Hej! 👋 Jeg er HåndværkerGuidens assistent. Spørg mig om håndværkere i din by, priser eller tilmelding.', 'bot');
  }
  if (chatOpen) setTimeout(() => document.getElementById('chat-input').focus(), 50);
}

function addBubble(html, type) {
  const msgs = document.getElementById('chat-messages');
  const d = document.createElement('div');
  d.className = `chat-bubble ${type}`;
  d.innerHTML = html;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
  return d;
}

function chatEnter(e) { if (e.key === 'Enter') sendChat(); }

function sendChat() {
  const inp = document.getElementById('chat-input');
  const text = inp.value.trim();
  if (!text) return;
  addBubble(text, 'user');
  inp.value = '';

  const lower = text.toLowerCase();
  let response = 'Det er jeg ikke helt sikker på 🤔 Prøv: <a href="mailto:stefymaestro@proton.me">stefymaestro@proton.me</a>';
  for (const r of chatRules) {
    if (r.keys.some(k => lower.includes(k))) { response = r.ans; break; }
  }

  const typing = addBubble('<span class="dot"></span><span class="dot"></span><span class="dot"></span>', 'bot typing');
  setTimeout(() => { typing.remove(); addBubble(response, 'bot'); }, 700);
}

// ============================================================
// PAYMENT MODAL
// ============================================================
const MP = '50358367';
const EMAIL = 'stefymaestro@proton.me';
let cPlan = '', cAmount = 0;

function openPayment(plan, amount) {
  cPlan = plan; cAmount = amount;
  ['step-1','step-2','step-3'].forEach((id,i) => document.getElementById(id).style.display = i === 0 ? '' : 'none');
  const badge = document.getElementById('modal-plan-badge');
  badge.textContent = plan;
  badge.className = 'modal-plan-badge badge-' + plan.toLowerCase();
  document.getElementById('modal-title').textContent = `Tilmeld ${plan} — ${amount} kr/md.`;
  document.getElementById('payment-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePayment() {
  document.getElementById('payment-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closePaymentIfOutside(e) { if (e.target === document.getElementById('payment-modal')) closePayment(); }

function goToPayStep() {
  const name  = document.getElementById('f-name').value.trim();
  const trade = document.getElementById('f-trade').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const email = document.getElementById('f-email').value.trim();
  if (!name || !trade || !phone || !email) { alert('Udfyld venligst alle påkrævede felter (*)'); return; }

  const signups = JSON.parse(localStorage.getItem('hg_signups') || '[]');
  const entry = { id: Date.now(), name, trade, phone, email, website: document.getElementById('f-website').value.trim(), plan: cPlan, amount: cAmount, submittedAt: new Date().toISOString(), status: 'pending' };
  if (!signups.find(s => s.email === email && s.plan === cPlan)) signups.push(entry);
  localStorage.setItem('hg_signups', JSON.stringify(signups));

  const comment = `${cPlan} HaandvaerkerGuiden`;
  document.getElementById('mp-amount-display').textContent = `${cAmount} kr`;
  document.getElementById('mp-comment').textContent = comment;
  document.getElementById('mp-deeplink').href = `mobilepay://send?phone=${MP}&amount=${cAmount}&comment=${encodeURIComponent(comment)}`;

  const sub  = encodeURIComponent(`${cPlan} annonce – ${name}`);
  const body = encodeURIComponent(`Hej,\n\nJeg har betalt ${cAmount} kr via MobilePay (${MP}) for ${cPlan}-annonce.\n\nFirma: ${name}\nFag: ${trade}\nTelefon: ${phone}\nE-mail: ${email}${entry.website ? '\nHjemmeside: '+entry.website : ''}\n\nVenlig hilsen,\n${name}`);
  document.getElementById('confirm-email-link').href = `mailto:${EMAIL}?subject=${sub}&body=${body}`;

  document.getElementById('step-1').style.display = 'none';
  document.getElementById('step-2').style.display = '';
  document.querySelector('.modal-box').scrollTop = 0;
}

function goBackToForm() {
  document.getElementById('step-2').style.display = 'none';
  document.getElementById('step-1').style.display = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closePayment(); });

// ============================================================
// JOB REQUEST FORM
// ============================================================
function submitJobRequest() {
  const trade = document.getElementById('jr-trade').value.trim();
  const name  = document.getElementById('jr-name').value.trim();
  const phone = document.getElementById('jr-phone').value.trim();
  const desc  = document.getElementById('jr-desc').value.trim();
  if (!trade || !name || !desc) { alert('Udfyld venligst fag, navn og opgavebeskrivelse.'); return; }
  const sub  = encodeURIComponent(`Opgaveforespørgsel: ${trade} — ${name}`);
  const body = encodeURIComponent(`Hej HåndværkerGuiden,\n\nJeg søger en ${trade} til følgende opgave:\n\n${desc}\n\nMine oplysninger:\n- Navn: ${name}${phone ? '\n- Telefon: '+phone : ''}\n\nVenlig hilsen,\n${name}`);
  window.location.href = `mailto:${EMAIL}?subject=${sub}&body=${body}`;
}

// ============================================================
// CITY QUICK LINKS (builds city chips in hero)
// ============================================================
function buildCityChips() {
  const wrap = document.getElementById('city-chips');
  if (!wrap) return;
  CITIES.filter(c => c.value).forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'city-chip';
    btn.textContent = c.label;
    btn.onclick = () => setCity(c.value);
    wrap.appendChild(btn);
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  listings = getListings();

  const nums = document.querySelectorAll('.stat-number');
  if (nums[0]) nums[0].dataset.target = listings.length;
  if (nums[2]) nums[2].dataset.target = listings.filter(l => l.featured).length;
  if (nums[3]) nums[3].dataset.target = new Set(listings.map(l => l.city)).size;

  renderListings(listings);
  buildCityChips();
  initMap();
  initStatsObserver();
});
