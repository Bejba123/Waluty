async function loadKursy() {
  const res = await fetch('kursy.json');
  return await res.json();
}

async function wymien(ilosc, from, to) {
  const kursy = await loadKursy();
  const kurs = kursy[from][to];
  return ilosc * kurs;
}

async function oblicz() {
  const ilosc = parseFloat(document.getElementById('ilosc').value);
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  
  if(isNaN(ilosc) || ilosc <= 0) {
    document.getElementById('wynik').innerText = "Podaj poprawną ilość!";
    return;
  }
  
  const res = await wymien(ilosc, from, to);
  document.getElementById('wynik').innerText = 
    `${ilosc.toFixed(2)} ${from} = ${res.toFixed(2)} ${to}`;
}

// Strona / menu
function showPage(page) {
  const content = document.getElementById('content');
  if(page === 'home') {
    content.innerHTML = `
      <h1>Strona Główna</h1>
      <p>Witaj na oficjalnej stronie Serwera MC.</p>
    `;
  } else if(page === 'waluty') {
    content.innerHTML = `
      <h1>Waluty Serwera</h1>
      <p>Wymień waluty poniżej:</p>
      <input id="ilosc" type="number" placeholder="Ilość">
      <select id="from">
        <option>ZP</option><option>ZW</option><option>MN</option><option>FN</option><option>DN</option><option>FF</option><option>KUK</option>
      </select>
      <span>→</span>
      <select id="to">
        <option>ZP</option><option>ZW</option><option>MN</option><option>FN</option><option>DN</option><option>FF</option><option>KUK</option>
      </select>
      <button onclick="oblicz()">Wymień</button>
      <p id="wynik"></p>
    `;
  } else if(page === 'ogloszenia') {
    content.innerHTML = `
      <h1>Ogłoszenia</h1>
      <p>Tu pojawią się aktualne ogłoszenia serwera.</p>
    `;
  } else if(page === 'kontakt') {
    content.innerHTML = `
      <h1>Kontakt / Informacje</h1>
      <p>Informacje kontaktowe i zasady serwera.</p>
    `;
  }
}
