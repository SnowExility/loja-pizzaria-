/* ============================================================
   BELLA NAPOLI — script.js
   Carrinho · PIX BR Code · Registro de Pedidos · Dark Mode
   ============================================================ */

/* ─── CONFIGURAÇÕES PIX ─── */
const PIX_KEY   = 'jpsnow18@gmail.com';
const PIX_NAME  = 'Bella Napoli Pizzaria';
const PIX_CITY  = 'Rio de Janeiro';
const WHATS_NUM = '5521993491269';

/* ─── DADOS DO CARDÁPIO ─── */
const PRODUCTS = [
  /* PIZZAS */
  { id:'pz1', cat:'pizzas', name:'Margherita Clássica',   desc:'Molho San Marzano, mozzarella de búfala, manjericão fresco e azeite extravirgem.',        price:49.90, img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', badge:'⭐ Mais Pedida', bClass:'gold' },
  { id:'pz2', cat:'pizzas', name:'Calabresa Artesanal',   desc:'Molho de tomate, mozzarella, calabresa na brasa, cebola caramelizada e azeitonas.',        price:54.90, img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80', badge:'🔥 Hit',         bClass:'' },
  { id:'pz3', cat:'pizzas', name:'Portuguesa Premium',    desc:'Molho, mozzarella, presunto, ovos, pimentões coloridos, cebola e azeitonas.',              price:59.90, img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80', badge:'',             bClass:'' },
  { id:'pz4', cat:'pizzas', name:'Frango com Catupiry',   desc:'Molho, mozzarella, frango temperado desfiado, catupiry original e milho verde.',           price:57.90, img:'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&q=80', badge:'❤️ Favorita',  bClass:'' },
  { id:'pz5', cat:'pizzas', name:'Quatro Queijos',        desc:'Mozzarella de búfala, gorgonzola, parmesão e provolone sobre molho artesanal.',            price:62.90, img:'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80', badge:'🧀 Premium',   bClass:'gold' },
  { id:'pz6', cat:'pizzas', name:'Pepperoni Picante',     desc:'Molho temperado, mozzarella generosa, pepperoni importado e pimenta calabresa.',           price:61.90, img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80', badge:'🌶️ Picante',   bClass:'' },
  { id:'pz7', cat:'pizzas', name:'Napolitana Especial',   desc:'Molho fresco, mozzarella, tomates cereja, alho fatiado, manjericão e azeite italiano.',    price:52.90, img:'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=500&q=80', badge:'',             bClass:'' },
  { id:'pz8', cat:'pizzas', name:'Chocolate com Morango', desc:'Creme de chocolate belga, morangos frescos, granulado e leite condensado.',                price:55.90, img:'https://images.unsplash.com/photo-1542528180-1c2803fa048c?w=500&q=80', badge:'🍫 Doce',        bClass:'' },
  /* BEBIDAS */
  { id:'bv1', cat:'bebidas', name:'Coca-Cola 2L',          desc:'Refrigerante gelado. O clássico que acompanha qualquer pizza.',                          price:12.90, img:'https://images.unsplash.com/photo-1629203432180-71e9b18d855a?w=500&q=80', badge:'',             bClass:'' },
  { id:'bv2', cat:'bebidas', name:'Guaraná Antarctica 2L', desc:'Sabor suave e refrescante, perfeito para toda a família.',                               price:11.90, img:'https://images.unsplash.com/photo-1624552184280-9e48fe5c8c87?w=500&q=80', badge:'',             bClass:'' },
  { id:'bv3', cat:'bebidas', name:'Suco Natural Laranja',  desc:'Feito na hora com laranjas frescas selecionadas. 500 ml.',                              price:14.90, img:'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&q=80', badge:'🌿 Natural',    bClass:'gold' },
  { id:'bv4', cat:'bebidas', name:'Água Mineral 500 ml',   desc:'Água mineral natural, com ou sem gás. Sempre gelada.',                                  price:5.90,  img:'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&q=80', badge:'',             bClass:'' },
  { id:'bv5', cat:'bebidas', name:'Fanta Laranja Lata',    desc:'Gelada e refrescante. Ideal para acompanhar pizzas doces.',                             price:7.90,  img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80', badge:'',             bClass:'' },
  { id:'bv6', cat:'bebidas', name:'Cerveja Heineken 600ml',desc:'Cerveja premium gelada, perfeita para noites de pizza.',                                price:18.90, img:'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&q=80', badge:'🍺 Especial',   bClass:'' },
  /* ACOMPANHAMENTOS */
  { id:'ac1', cat:'acompanhamentos', name:'Batata Frita Crocante', desc:'Crocante por fora, macia por dentro. Temperada com ervas e azeite.',             price:24.90, img:'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=80', badge:'🍟 Popular',   bClass:'' },
  { id:'ac2', cat:'acompanhamentos', name:'Nuggets de Frango 12un',desc:'Empanados com frango 100% filé, crocantes e suculentos.',                        price:22.90, img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80', badge:'',             bClass:'' },
  { id:'ac3', cat:'acompanhamentos', name:'Onion Rings Especial',  desc:'Anéis de cebola empanados em massa crocante com molho especial.',               price:20.90, img:'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80', badge:'',             bClass:'' },
  { id:'ac4', cat:'acompanhamentos', name:'Molho Extra (3 unid)',   desc:'Barbecue defumado, maionese temperada ou pesto de manjericão — sua escolha!',  price:8.90,  img:'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&q=80', badge:'🥫 Artesanal',  bClass:'gold' },
  { id:'ac5', cat:'acompanhamentos', name:'Palito de Alho 8un',     desc:'Pão artesanal com manteiga de alho e parmesão gratinado.',                     price:18.90, img:'https://images.unsplash.com/photo-1619981082553-e74d32e83a0e?w=500&q=80', badge:'',             bClass:'' },
];

const BEST_IDS = ['pz1','pz2','pz4','pz5'];

/* ─── ESTADO DO APP ─── */
let cart    = JSON.parse(localStorage.getItem('bn_cart')    || '[]');
let theme   = localStorage.getItem('bn_theme') || 'light';
let curCat  = 'all';
let curSearch = '';

/* ─── INICIALIZAÇÃO ─── */
document.addEventListener('DOMContentLoaded', () => {
  // Tema
  applyTheme(theme);

  // Loading
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('gone');
  }, 1700);

  // Render
  renderHomeGrid();
  renderMenuGrid();
  updateCartUI();
  renderCartSection();
  renderPaySummary();
  initScrollBehavior();
});

/* ════════════════════════
   NAVEGAÇÃO
════════════════════════ */
function goSection(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateNavHighlight(id);
  if (id === 'carrinho')  renderCartSection();
  if (id === 'pagamento') renderPaySummary();
}

function updateNavHighlight(id) {
  document.querySelectorAll('.nav-menu a[data-s]').forEach(a => {
    a.classList.toggle('active', a.dataset.s === id);
  });
}

function toggleNav() {
  document.getElementById('nav-menu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeMob() {
  document.getElementById('nav-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

/* ════════════════════════
   TEMA ESCURO / CLARO
════════════════════════ */
function toggleTheme() {
  theme = (theme === 'light') ? 'dark' : 'light';
  applyTheme(theme);
  localStorage.setItem('bn_theme', theme);
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.className = t === 'dark' ? 'fa fa-sun' : 'fa fa-moon';
}

/* ════════════════════════
   UTILITÁRIOS PRODUTOS
════════════════════════ */
function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function allProducts() { return PRODUCTS; }

/* ════════════════════════
   RENDER CARDS
════════════════════════ */
function buildCard(p) {
  const badge = p.badge ? `<div class="pc-badge ${p.bClass}">${p.badge}</div>` : '';
  return `
    <div class="prod-card" id="card-${p.id}" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}" data-desc="${p.desc.toLowerCase()}">
      ${badge}
      <div class="pc-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=70'"/>
        <div class="pc-img-ov"></div>
      </div>
      <div class="pc-body">
        <div class="pc-name">${p.name}</div>
        <div class="pc-desc">${p.desc}</div>
        <div class="pc-foot">
          <div class="pc-price">R$ ${p.price.toFixed(2).replace('.',',')}</div>
          <button class="btn-add" onclick="addToCart('${p.id}')" title="Adicionar ao carrinho">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function renderHomeGrid() {
  const el = document.getElementById('home-grid');
  if (!el) return;
  el.innerHTML = PRODUCTS.filter(p => BEST_IDS.includes(p.id)).map(buildCard).join('');
}

function renderMenuGrid(filtered = null) {
  const el = document.getElementById('menu-grid');
  if (!el) return;
  const list = filtered !== null ? filtered : PRODUCTS;
  el.innerHTML = list.map(buildCard).join('');
}

/* ════════════════════════
   BUSCA E FILTROS
════════════════════════ */
function filterCategory(cat) {
  curCat = cat;
  curSearch = '';
  document.getElementById('search-input').value = '';
  document.getElementById('clear-search').classList.add('hidden');
  document.getElementById('no-results').classList.add('hidden');

  // Botões
  document.querySelectorAll('.cbt').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });

  const filtered = (cat === 'all') ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  renderMenuGrid(filtered);
}

function handleSearch() {
  const term = document.getElementById('search-input').value.trim().toLowerCase();
  curSearch = term;
  const clearBtn = document.getElementById('clear-search');
  const noRes    = document.getElementById('no-results');

  clearBtn.classList.toggle('hidden', !term);

  if (!term) {
    filterCategory(curCat);
    return;
  }

  // Reset cat buttons
  document.querySelectorAll('.cbt').forEach(b => b.classList.remove('active'));

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.desc.toLowerCase().includes(term) ||
    p.cat.toLowerCase().includes(term)
  );

  if (filtered.length === 0) {
    noRes.classList.remove('hidden');
    document.getElementById('nr-term').textContent = term;
    document.getElementById('menu-grid').innerHTML = '';
  } else {
    noRes.classList.add('hidden');
    renderMenuGrid(filtered);
  }
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  curSearch = '';
  filterCategory('all');
  document.querySelectorAll('.cbt').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === 'all');
  });
}

/* ════════════════════════
   CARRINHO
════════════════════════ */
function saveCart() { localStorage.setItem('bn_cart', JSON.stringify(cart)); }

function getCartTotal() {
  return cart.reduce((s, i) => s + (getProduct(i.id)?.price || 0) * i.qty, 0);
}
function getCartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  updateCartUI();
  const p = getProduct(id);
  showToast(`${p.name} adicionado! 🍕`);
  animateBadge();
  flashAddBtn(id);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartSection();
  renderPaySummary();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartUI();
  renderCartSection();
  renderPaySummary();
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = getCartCount();
}

function animateBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  badge.classList.remove('bump');
  void badge.offsetWidth;
  badge.classList.add('bump');
}

function flashAddBtn(id) {
  // In home grid and menu grid
  document.querySelectorAll(`#card-${id} .btn-add`).forEach(btn => {
    btn.classList.add('added');
    btn.innerHTML = '<i class="fa fa-check"></i>';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<i class="fa fa-plus"></i>';
    }, 1200);
  });
}

/* ─── RENDER CART SECTION ─── */
function renderCartSection() {
  const listEl  = document.getElementById('cart-list');
  const asideEl = document.getElementById('cart-aside');
  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty">
        <div class="ce-ico">🛒</div>
        <h3>Carrinho vazio</h3>
        <p>Adicione deliciosas pizzas e bebidas!</p>
        <button class="btn-red" onclick="goSection('cardapio')"><i class="fa fa-pizza-slice"></i> Ver Cardápio</button>
      </div>`;
    if (asideEl) asideEl.innerHTML = '';
    return;
  }

  listEl.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img class="ci-img" src="${p.img}" alt="${p.name}"
          onerror="this.src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&q=70'" />
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-desc">${p.desc.substring(0,60)}…</div>
          <div class="ci-price">R$ ${(p.price * item.qty).toFixed(2).replace('.',',')}</div>
        </div>
        <div class="qty-ctrl">
          <button class="qb" onclick="changeQty('${item.id}',-1)"><i class="fa fa-minus"></i></button>
          <span class="qn">${item.qty}</span>
          <button class="qb" onclick="changeQty('${item.id}',1)"><i class="fa fa-plus"></i></button>
        </div>
        <button class="btn-rm" onclick="removeFromCart('${item.id}')" title="Remover">
          <i class="fa fa-trash-can"></i>
        </button>
      </div>`;
  }).join('');

  const total = getCartTotal();
  const frete = total >= 60 ? 0 : 8.90;
  const grand = total + frete;

  if (asideEl) {
    asideEl.innerHTML = `
      <div class="cart-sum">
        <h3>Resumo</h3>
        <div class="sum-row"><span>Subtotal</span><span>R$ ${total.toFixed(2).replace('.',',')}</span></div>
        <div class="sum-row">
          <span>Entrega</span>
          <span class="${frete===0?'frete-ok':''}">${frete===0?'🎉 GRÁTIS':'R$ '+frete.toFixed(2).replace('.',',')}</span>
        </div>
        <div class="sum-row total"><span>Total</span><span>R$ ${grand.toFixed(2).replace('.',',')}</span></div>
        ${total<60?`<p class="sum-note">Faltam R$ ${(60-total).toFixed(2).replace('.',',')} para frete grátis!</p>`:''}
        <button class="btn-red full mt-12" onclick="goSection('pagamento')"><i class="fa fa-arrow-right"></i> Finalizar</button>
        <button class="btn-outline full mt-8" onclick="goSection('cardapio')"><i class="fa fa-plus"></i> Adicionar mais</button>
      </div>`;
  }
}

/* ─── RENDER PAY SUMMARY ─── */
function renderPaySummary() {
  const itemsEl  = document.getElementById('pay-items');
  const totalsEl = document.getElementById('pay-totals');
  if (!itemsEl || !totalsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p style="color:var(--txt2);font-size:.85rem;text-align:center;padding:16px 0">Carrinho vazio. <a href="#" onclick="goSection(\'cardapio\')" style="color:var(--red)">Adicionar itens</a></p>';
    totalsEl.innerHTML = '';
    return;
  }

  itemsEl.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return '';
    return `
      <div class="oi-row">
        <span>${item.qty}× ${p.name}</span>
        <span>R$ ${(p.price*item.qty).toFixed(2).replace('.',',')}</span>
      </div>`;
  }).join('');

  const total    = getCartTotal();
  const frete    = total >= 60 ? 0 : 8.90;
  const payVal   = document.querySelector('input[name="pay"]:checked')?.value || 'pix';
  const descPix  = payVal === 'pix' ? total * 0.05 : 0;
  const grand    = total + frete - descPix;

  totalsEl.innerHTML = `
    <div class="pt-row"><span>Subtotal</span><span>R$ ${total.toFixed(2).replace('.',',')}</span></div>
    <div class="pt-row"><span>Entrega</span><span style="color:${frete===0?'var(--green)':'inherit'}">${frete===0?'GRÁTIS':'R$ '+frete.toFixed(2).replace('.',',')}</span></div>
    ${descPix>0?`<div class="pt-row" style="color:var(--green)"><span>Desc. PIX 5%</span><span>- R$ ${descPix.toFixed(2).replace('.',',')}</span></div>`:''}
    <div class="pt-row grand"><span>Total</span><span>R$ ${grand.toFixed(2).replace('.',',')}</span></div>`;
}

function onPayChange() {
  renderPaySummary();
  const payVal = document.querySelector('input[name="pay"]:checked')?.value;
  const troco  = document.getElementById('troco-wrap');
  const aviso  = document.getElementById('aviso-pix');
  if (troco) troco.classList.toggle('hidden', payVal !== 'dinheiro');
  if (aviso) aviso.classList.toggle('hidden', payVal !== 'pix');
}

/* ════════════════════════
   PIX PAYLOAD BACEN
════════════════════════ */
function pixNorm(s, max) {
  return s.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x20-\x7E]/g,'')
    .replace(/[^A-Za-z0-9 ]/g,' ')
    .trim().replace(/\s+/g,' ')
    .substring(0, max);
}
function pTlv(id, val) {
  const v = String(val);
  return id + String(v.length).padStart(2,'0') + v;
}
function pCRC16(str) {
  let c = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    c ^= (str.charCodeAt(i) & 0xFF) << 8;
    for (let b = 0; b < 8; b++) c = (c & 0x8000) ? ((c<<1)^0x1021)&0xFFFF : (c<<1)&0xFFFF;
  }
  return c.toString(16).toUpperCase().padStart(4,'0');
}
function buildPixPayload(key, name, city, amount) {
  const mai = pTlv('26', pTlv('00','br.gov.bcb.pix') + pTlv('01', key));
  const txid = ('BN' + Date.now()).replace(/\D/g,'').substring(0,25);
  const add  = pTlv('62', pTlv('05', txid));
  const body = [
    pTlv('00','01'), mai,
    pTlv('52','5812'), pTlv('53','986'),
    pTlv('54', amount.toFixed(2)),
    pTlv('58','BR'),
    pTlv('59', pixNorm(name,25)),
    pTlv('60', pixNorm(city,15)),
    add, '6304'
  ].join('');
  return body + pCRC16(body);
}

/* ════════════════════════
   FINALIZAR PEDIDO
════════════════════════ */
function finalizarPedido() {
  if (cart.length === 0) { showToast('Carrinho vazio! ❌'); return; }

  const name    = document.getElementById('p-name')?.value.trim();
  const phone   = document.getElementById('p-phone')?.value.trim();
  const address = document.getElementById('p-address')?.value.trim();
  const bairro  = document.getElementById('p-bairro')?.value.trim();

  if (!name)    { showToast('Informe seu nome! ⚠️');     return; }
  if (!phone)   { showToast('Informe seu telefone! ⚠️'); return; }
  if (!address) { showToast('Informe seu endereço! ⚠️'); return; }
  if (!bairro)  { showToast('Informe seu bairro! ⚠️');  return; }

  const comp    = document.getElementById('p-comp')?.value.trim()  || '';
  const cep     = document.getElementById('p-cep')?.value.trim()   || '';
  const obs     = document.getElementById('p-obs')?.value.trim()   || '';
  const payVal  = document.querySelector('input[name="pay"]:checked')?.value || 'pix';
  const troco   = document.getElementById('p-troco')?.value.trim() || '';

  const total   = getCartTotal();
  const frete   = total >= 60 ? 0 : 8.90;
  const descPix = payVal === 'pix' ? total * 0.05 : 0;
  const grand   = total + frete - descPix;

  /* Registrar pedido */
  const order = {
    id:        'BN' + Date.now(),
    timestamp: new Date().toISOString(),
    status:    'Aguardando confirmação',
    cliente: { name, phone, address, bairro, comp, cep, obs },
    pagamento: { metodo: payVal, troco },
    items:     cart.map(i => ({ ...i, product: getProduct(i.id) })),
    subtotal:  total,
    frete,
    descPix,
    total:     grand,
  };
  saveOrder(order);

  /* PIX → QR modal; outros → WhatsApp */
  if (payVal === 'pix') {
    openPixModal(grand);
  } else {
    showToast('Pedido registrado! Envie pelo WhatsApp ✅');
    setTimeout(() => sendWhatsApp(), 800);
  }

  /* Limpar carrinho após 2s */
  setTimeout(() => {
    cart = [];
    saveCart();
    updateCartUI();
    renderCartSection();
    renderPaySummary();
  }, 2200);
}

/* ════════════════════════
   SALVAR PEDIDO
════════════════════════ */
function saveOrder(order) {
  const orders = JSON.parse(localStorage.getItem('bn_orders') || '[]');
  orders.unshift(order); // mais recente primeiro
  localStorage.setItem('bn_orders', JSON.stringify(orders));
}

/* ════════════════════════
   PIX MODAL
════════════════════════ */
function openPixModal(total) {
  const modal  = document.getElementById('pix-modal');
  const qrWrap = document.getElementById('qr-wrap');
  const ccEl   = document.getElementById('pix-cc');
  const valEl  = document.getElementById('modal-total-val');

  qrWrap.innerHTML = '';
  const payload = buildPixPayload(PIX_KEY, PIX_NAME, PIX_CITY, total);
  if (ccEl) ccEl.textContent = payload;
  if (valEl) valEl.textContent = `Total: R$ ${total.toFixed(2).replace('.',',')}`;

  /* QR via qrcodejs */
  let ok = false;
  try {
    if (typeof QRCode !== 'undefined') {
      new QRCode(qrWrap, {
        text: payload, width: 210, height: 210,
        colorDark: '#0d0d0d', colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
      ok = true;
    }
  } catch(_) {}

  /* Fallback API */
  if (!ok) {
    const img = Object.assign(document.createElement('img'), {
      src: 'https://api.qrserver.com/v1/create-qr-code/?size=210x210&ecc=M&data=' + encodeURIComponent(payload),
      alt: 'QR Code PIX', width: 210, height: 210
    });
    img.style.borderRadius = '6px';
    qrWrap.appendChild(img);
  }

  modal.classList.add('open');
}

function closePixModal(e) {
  if (!e || e.target.id === 'pix-modal' || e.target.classList.contains('modal-x')) {
    document.getElementById('pix-modal').classList.remove('open');
  }
}

function copyPix() {
  const txt = document.getElementById('pix-cc')?.textContent || '';
  navigator.clipboard.writeText(txt)
    .then(()  => showToast('PIX Copia e Cola copiado! ✅'))
    .catch(()  => {
      const ta = Object.assign(document.createElement('textarea'), { value: txt });
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      showToast('PIX Copia e Cola copiado! ✅');
    });
}

/* ════════════════════════
   WHATSAPP
════════════════════════ */
function sendWhatsApp() {
  if (cart.length === 0) { showToast('Carrinho vazio! ❌'); return; }

  const name    = document.getElementById('p-name')?.value.trim()    || 'Não informado';
  const phone   = document.getElementById('p-phone')?.value.trim()   || 'Não informado';
  const address = document.getElementById('p-address')?.value.trim() || 'Não informado';
  const bairro  = document.getElementById('p-bairro')?.value.trim()  || '';
  const comp    = document.getElementById('p-comp')?.value.trim()    || '';
  const obs     = document.getElementById('p-obs')?.value.trim()     || '';
  const payVal  = document.querySelector('input[name="pay"]:checked')?.value || 'pix';
  const payLbl  = { pix:'PIX (5% desc.)', cartao:'Cartão na entrega', dinheiro:'Dinheiro' }[payVal] || payVal;

  const total   = getCartTotal();
  const frete   = total >= 60 ? 0 : 8.90;
  const descPix = payVal === 'pix' ? total * 0.05 : 0;
  const grand   = total + frete - descPix;

  const items = cart.map(i => {
    const p = getProduct(i.id);
    return p ? `• ${i.qty}x ${p.name} — R$ ${(p.price*i.qty).toFixed(2)}` : '';
  }).filter(Boolean).join('\n');

  const fullAddr = [address, bairro, comp].filter(Boolean).join(', ');

  const msg =
    `🍕 *PEDIDO — Bella Napoli Pizzaria*\n\n` +
    `👤 *Nome:* ${name}\n` +
    `📞 *Telefone:* ${phone}\n` +
    `📍 *Endereço:* ${fullAddr}\n\n` +
    `🛒 *Itens:*\n${items}\n\n` +
    `💰 *Subtotal:* R$ ${total.toFixed(2)}\n` +
    `🚚 *Entrega:* ${frete===0?'GRÁTIS':'R$ '+frete.toFixed(2)}\n` +
    (descPix>0?`✅ *Desc. PIX:* - R$ ${descPix.toFixed(2)}\n`:'') +
    `💳 *Total:* R$ ${grand.toFixed(2)}\n` +
    `💳 *Pagamento:* ${payLbl}\n` +
    (obs ? `\n📝 *Obs:* ${obs}` : '') +
    `\n\n⚠️ *Enviarei o comprovante PIX em seguida.*`;

  window.open(`https://wa.me/${WHATS_NUM}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ════════════════════════
   PROMOÇÕES
════════════════════════ */
function addPromoCombo() {
  addToCart('pz1');
  addToCart('pz2');
  addToCart('bv1');
  addToCart('bv1');
  showToast('Combo Família adicionado! 🎉');
  setTimeout(() => goSection('carrinho'), 900);
}

/* ════════════════════════
   TOAST
════════════════════════ */
function showToast(msg) {
  const t  = document.getElementById('toast');
  const tm = document.getElementById('toast-msg');
  if (!t || !tm) return;
  tm.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ════════════════════════
   SCROLL
════════════════════════ */
function initScrollBehavior() {
  const nav = document.getElementById('navbar');
  const st  = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav?.classList.toggle('scrolled', y > 50);
    st?.classList.toggle('visible', y > 300);
  }, { passive: true });
}
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ════════════════════════
   ESC → fechar modal
════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.getElementById('pix-modal')?.classList.remove('open');
});
