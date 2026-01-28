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
  document.getElementById('wynik').innerText = `${ilosc} ${from} = ${res.toFixed(2)} ${to}`;
}
