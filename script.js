const menu = {
  macarrao: [
    { id: 'mac1', n: 'Macarrão Na Chapa Bacon Lombo', d: 'Massa Espaguete, Bacon, Lombo, Milho, Cebola', p: 22.00 },
    { id: 'mac2', n: 'Macarrão Na Chapa Bacon Calabresa', d: 'Massa Espaguete, Bacon, Calabresa, Milho, Cebola', p: 22.00 },
    { id: 'mac3', n: 'Macarrão Na Chapa Bacon Frango', d: 'Massa Espaguete, Bacon, Frango, Milho, Cebola', p: 22.00 },
    { id: 'mac4', n: 'Macarrão Na Chapa Completo Da Casa', d: 'Massa Espaguete, Bacon, Calabresa, Frango, Lombo, Milho, Cebola', p: 25.00 },
  ],
  combos: [
    { id: 'cb1', n: 'Combo Solitário', d: '01 x salada, Batata P, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 42.50 },
    { id: 'cb2', n: 'Combo Solteiro', d: '01 x salada, Batata G, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 48.50 },
    { id: 'cb3', n: 'Combo Solteiro Com Hambúrguer Artesanal', d: '01 Burguer One, Batata G, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 50.50 },
    { id: 'cb4', n: 'Combo Casal', d: '02 x salada, Batata G, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 58.50 },
    { id: 'cb5', n: 'Combo Casal Com Hambúrguer Artesanal', d: '02 Burguer One, 01 Batata G, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 65.50 },
    { id: 'cb6', n: 'Combo Família', d: '03 x salada, Batata G, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 75.50 },
    { id: 'cb7', n: 'Combo Família Com Hambúrguer Artesanal', d: '03 Burguer One, Batata G, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 85.50 },
    { id: 'cb8', n: 'Combo Master Família', d: '05 x salada, Batata G, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 94.50 },
    { id: 'cb9', n: 'Combo Master Família Com Hambúrguer Artesanal', d: '05 Burguer One, Batata G, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 108.50 },
    { id: 'cb10', n: 'Combo Super Família', d: '04 x salada, Batata G, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 82.50 },
    { id: 'cb11', n: 'Combo Super Família Com Hambúrguer Artesanal', d: '04 Burguer One, Batata G, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 92.50 },
    { id: 'cb12', n: 'Combo Super Amigos', d: '06 x salada, Batata GG, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 130.50 },
    { id: 'cb13', n: 'Combo Super Amigos Com Hambúrguer Artesanal', d: '06 Burguer One, Batata GG, Calabresa, Lombo, Bacon. Escolha: Catupiry ou mussarela', p: 142.50 },
  ],
  artesanal: [
    { id: 'art1', n: 'Big Bacon', d: 'Pão, 02 hambúrguer 100g, mussarela, ovo, bacon fatiado, cebola roxa, alface, tomate', p: 30.50 },
    { id: 'art2', n: 'Burguer Cheddar', d: 'Pão, bife artesanal 100gr, mussarela, cheddar, alface, tomate, cebola roxa', p: 22.20 },
    { id: 'art3', n: 'Burguer Doritos', d: 'Pão de brioche com gergelim, 02 hambúrguer artesanal 100gr, mussarela, bacon fatiado, Cheddar, Doritos, maionese Hemmer', p: 37.50 },
    { id: 'art4', n: 'Burguer One', d: 'Pão, hambúrguer 100g, mussarela, cebola roxa, alface, tomate', p: 19.50 },
    { id: 'art5', n: 'Double Cheddar', d: 'Pão, 02 hambúrguer 100g, 2x cheddar, mussarela, alface, tomate, cebola roxa, molho barbecue', p: 32.50 },
    { id: 'art6', n: 'Extreme Bacon', d: 'Pão, hambúrguer 100g, mussarela, bacon fatiado, cebola roxa, alface, tomate', p: 26.50 },
    { id: 'art7', n: 'Faraó', d: 'Pão, 02 bifes artesanal 100g, mussarela, maionese Hemmer, batata frita, tomate, alface', p: 34.50 },
    { id: 'art8', n: 'King', d: 'Pão, 02 bifes artesanal 100g, mussarela, maionese Hemmer, ovo, bacon fatiado, alface, tomate, cebola roxa, batata frita', p: 36.50 },
    { id: 'art9', n: 'Master Burguer', d: 'Pão, 02 bife artesanal 100gr, Cheddar, mussarela, Barbecue, alface, tomate, cebola caramelizada', p: 29.50 },
    { id: 'art10', n: 'Sugestão Da Casa', d: 'Pão, 03 hambúrguer 100g, mussarela, alface, tomate, cebola roxa, molho barbecue', p: 32.50 },
    { id: 'art11', n: 'Supreme', d: 'Pão, 04 hambúrguer 100g, mussarela, alface, tomate, cebola roxa, molho barbecue', p: 34.50 },
    { id: 'art12', n: 'Supreme Bacon', d: 'Pão, 04 hambúrguer 100g, mussarela, bacon fatiado, molho barbecue, cebola roxa, alface, tomate', p: 36.50 },
  ],
  hamburguer: [
    { id: 'hb1', n: 'Americano', d: 'Pão, ovo, mussarela, presunto, alface, tomate, milho, batata palha', p: 14.50 },
    { id: 'hb2', n: 'Big Burguer', d: 'Pão, 3 bifes, mussarela, batata palha, alface, tomate', p: 21.50 },
    { id: 'hb3', n: 'Framburguer', d: 'Pão, presunto, mussarela, alface, tomate, frango, milho, batata palha', p: 22.50 },
    { id: 'hb4', n: 'Hambúrguer', d: 'Pão, bife, presunto, mussarela, alface, tomate, batata palha', p: 14.50 },
    { id: 'hb5', n: 'Mega Burguer', d: 'Pão, 2 bifes, 2 ovos, presunto, mussarela, alface, tomate, milho, batata palha', p: 22.50 },
    { id: 'hb6', n: 'Meio X Tudo', d: 'Pão, bife, ovo, presunto, mussarela, alface, tomate, frango, lombo, bacon, milho, batata palha (tudo em menos quantidade)', p: 28.50 },
    { id: 'hb7', n: 'Misto Quente', d: 'Pão, presunto, mussarela', p: 11.50 },
    { id: 'hb8', n: 'Omelete', d: '3 ovos, mussarela, presunto, lombo, frango, bacon, milho, batata palha, alface, tomate', p: 27.50 },
    { id: 'hb9', n: 'Quaresma', d: 'Pão, ovo, mussarela, catupiry, tomate, alface, milho, batata palha', p: 16.50 },
    { id: 'hb10', n: 'Vegetariano', d: 'Pão, ovo, mussarela, tomate, alface, milho, batata palha', p: 14.50 },
    { id: 'hb11', n: 'X Bacon', d: 'Pão, bife, mussarela, alface, tomate, bacon, milho, batata palha', p: 25.50 },
    { id: 'hb12', n: 'X Bacon Com Bife Artesanal', d: 'Pão, bife artesanal 100gr, mussarela, alface, tomate, bacon, milho, batata palha', p: 32.50 },
    { id: 'hb13', n: 'X Burguer', d: 'Pão, bife, mussarela, tomate, alface, milho, batata palha', p: 15.50 },
    { id: 'hb14', n: 'X Egg Bacon', d: 'Pão, bife, mussarela, alface, tomate, bacon, ovo, milho, batata palha', p: 27.50 },
    { id: 'hb15', n: 'X Egg Bacon Com Bife Artesanal', d: 'Pão, bife artesanal 100gr, mussarela, ovo, bacon, alface, tomate, milho, batata palha', p: 34.50 },
    { id: 'hb16', n: 'X Egg Burguer', d: 'Pão, bife, ovo, mussarela, alface, tomate, milho, batata palha', p: 14.50 },
    { id: 'hb17', n: 'X Egg Frango', d: 'Pão, bife, ovo, alface, tomate, frango, milho, batata palha', p: 25.50 },
    { id: 'hb18', n: 'X Egg Frango Com Bife Artesanal', d: 'Pão, bife artesanal 100gr, mussarela, alface, tomate, frango, milho, batata palha', p: 29.50 },
    { id: 'hb19', n: 'X Egg Salada', d: 'Pão, bife, ovo, mussarela, alface, tomate, milho, batata palha', p: 19.50 },
    { id: 'hb20', n: 'X Frango', d: 'Pão, bife, mussarela, frango, alface, tomate, milho, batata palha', p: 23.50 },
    { id: 'hb21', n: 'X Frango Catupiry', d: 'Pão, bife, mussarela, alface, tomate, frango, catupiry, batata palha', p: 26.50 },
    { id: 'hb22', n: 'X Frango Com Bife Artesanal', d: 'Pão, bife artesanal 100gr, mussarela, alface, tomate, frango, milho, batata palha', p: 27.50 },
    { id: 'hb23', n: 'X Frango Lombo', d: 'Pão, bife, mussarela, lombo, frango, alface, tomate, milho, batata palha', p: 24.50 },
    { id: 'hb24', n: 'X Lombo', d: 'Pão, mussarela, alface, tomate, milho, lombo, batata palha', p: 24.50 },
    { id: 'hb25', n: 'X Lombo Bacon', d: 'Pão, bife, mussarela, lombo, bacon, alface, tomate, milho, batata palha', p: 24.50 },
    { id: 'hb26', n: 'X Lombo Frango Bacon', d: 'Pão, bife, mussarela, alface, tomate, lombo, frango, bacon, milho, batata palha', p: 25.50 },
    { id: 'hb27', n: 'X Salada', d: 'Pão, bife, presunto, mussarela, alface, tomate, milho, batata palha', p: 16.50 },
    { id: 'hb28', n: 'X Salada Com Bife Artesanal', d: 'Pão, bife artesanal 100gr, presunto, mussarela, alface, tomate, milho, batata palha', p: 19.50 },
    { id: 'hb29', n: 'X Tudo', d: 'Pão, bife, mussarela, presunto, lombo, frango, bacon, alface, tomate, milho, batata palha', p: 30.50 },
    { id: 'hb30', n: 'X Tudo Com Bife Artesanal', d: 'Pão, bife artesanal 100gr, ovo, mussarela, presunto, alface, tomate, frango, lombo, bacon, milho, batata palha', p: 35.50 },
    { id: 'hb31', n: 'X Tudão', d: 'Pão, 2 bifes, 2 ovos, 2 mussarela, 2 presunto, alface, tomate, frango, lombo, bacon, milho, batata palha', p: 36.50 },
  ],
  outros: [
    { id: 'ot1', n: 'Batata Frita P', d: 'Pequena', p: 15.50 },
    { id: 'ot2', n: 'Batata Frita M', d: 'Tamanho Médio', p: 23.50 },
    { id: 'ot3', n: 'Batata Frita G', d: 'Grande', p: 25.50 },
    { id: 'ot4', n: 'Batata Frita GG', d: 'Extra Grande', p: 40.50 },
  ],
  bebidas: [
    { id: 'beb1', n: 'Coca Cola Lata', d: '350 ml lata', p: 7.00 },
    { id: 'beb2', n: 'Coca-Cola 2 Litros', d: '2 litros', p: 15.00 },
    { id: 'beb3', n: 'Fanta', d: '2 litros', p: 15.00 },
    { id: 'beb4', n: 'Skol Lata', d: '350 ml', p: 7.00 },
    { id: 'beb5', n: 'Guaraná Antarctica', d: '350 ml lata', p: 7.00 },
    { id: 'beb6', n: 'Guaraná Cristal', d: '2 litros', p: 9.00 },
  ]
};

const cart = {};

function fmt(v) {
  return 'R$ ' + v.toFixed(2).replace('.', ',');
}

function renderSection(key) {
  const el = document.getElementById('items-' + key);
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';
  menu[key].forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <div class="item-info">
        <div class="item-name">${item.n}</div>
        <div class="item-desc">${item.d}</div>
        <div class="item-price">${fmt(item.p)}</div>
      </div>
      <div class="item-right">
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)">−</button>
          <span class="qty-num" id="qty-${item.id}">0</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
        </div>
      </div>`;
    el.appendChild(div);
  });
}

function changeQty(id, delta) {
  const all = [...menu.macarrao, ...menu.combos, ...menu.artesanal, ...menu.hamburguer, ...menu.outros, ...menu.bebidas];
  const item = all.find(i => i.id === id);
  if (!item) return;
  const cur = cart[id] ? cart[id].qty : 0;
  const nq = Math.max(0, cur + delta);
  if (nq === 0) delete cart[id];
  else cart[id] = { qty: nq, n: item.n, p: item.p };
  const el = document.getElementById('qty-' + id);
  if (el) el.textContent = nq;
  updateCart();
}

function updateCart() {
  let total = 0, count = 0;
  const lines = [];
  Object.values(cart).forEach(c => {
    total += c.p * c.qty;
    count += c.qty;
    lines.push(`${c.qty}x ${c.n} — ${fmt(c.p * c.qty)}`);
  });
  const ct = document.getElementById('cart-total');
  const cl = document.getElementById('cart-list');
  if (count === 0) {
    ct.textContent = 'Nenhum item selecionado';
    cl.innerHTML = '<div class="cart-empty">Selecione os itens para ver a somatória</div>';
  } else {
    ct.innerHTML = `Somatória: <span style="color:#fff">${count} ${count === 1 ? 'item' : 'itens'}</span> — <span style="color:#F5C518;font-size:1.1rem">${fmt(total)}</span><button class="clear-btn" onclick="clearCart()">Limpar</button>`;
    cl.innerHTML = lines.join('<br>');
  }
}

function clearCart() {
  Object.keys(cart).forEach(k => {
    const el = document.getElementById('qty-' + k);
    if (el) el.textContent = '0';
    delete cart[k];
  });
  updateCart();
}

function showSection(key, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('visible'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + key).classList.add('visible');
  btn.classList.add('active');
  renderSection(key);
}

['macarrao', 'combos', 'artesanal', 'hamburguer', 'outros', 'bebidas'].forEach(k => renderSection(k));
updateCart();